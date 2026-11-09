
export interface ApiClientOptions {
  baseUrl: string;
  token?: string;
}

export function createApiClient(options: ApiClientOptions) {
  const { baseUrl, token } = options;

  async function request<T>(
    endpoint: string,
    init?: RequestInit,
  ): Promise<T> {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...init?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    return response.json() as Promise<T>;
  }

  return {
    get: <T>(endpoint: string) =>
      request<T>(endpoint),

    post: <T>(endpoint: string, data: unknown) =>
      request<T>(endpoint, {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  };
}
