interface WidgetOptions {
  apiUrl: string;
  token: string;
  allowSkip?: boolean;
  trigger: "LOGIN" | "LOGOUT" | "DURING" | "MANUAL";
  sessionId?: string;
}

// ==========================================
// 1. CREAR INTERFAZ DEL WIDGET
// ==========================================

function createWidget(options: WidgetOptions) {
  // Evitar mostrar dos widgets simultáneamente
  if (document.getElementById("satisfaccion-widget")) return;

  const container = document.createElement("div");
  container.id = "satisfaccion-widget";

  container.innerHTML = `
    <style>
      #satisfaccion-widget {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 999999;
        font-family: Arial, sans-serif;
      }

      .sat-card {
        width: 320px;
        background: white;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 8px 35px rgba(0,0,0,.18);
        color: #222;
      }

      .sat-title {
        font-size: 19px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .sat-description {
        font-size: 14px;
        color: #666;
        margin-bottom: 20px;
      }

      .sat-stars {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin: 20px 0;
      }

      .sat-star {
        border: none;
        background: none;
        font-size: 32px;
        cursor: pointer;
        color: #ccc;
      }

      .sat-star.active {
        color: #f5b400;
      }

      .sat-comment {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 8px;
        resize: vertical;
      }

      .sat-button {
        width: 100%;
        padding: 12px;
        border: none;
        border-radius: 8px;
        background: #2563eb;
        color: white;
        cursor: pointer;
        margin-top: 12px;
      }

      .sat-button:disabled {
        opacity: .6;
        cursor: not-allowed;
      }

      .sat-skip {
        background: none;
        border: none;
        color: #666;
        cursor: pointer;
        width: 100%;
        margin-top: 10px;
      }
    </style>

    <div class="sat-card">
      <div class="sat-title">
        ¿Qué te parece nuestro sistema?
      </div>

      <div class="sat-description">
        Tu opinión nos ayuda a mejorar los servicios universitarios.
      </div>

      <div class="sat-stars">
        ${[1, 2, 3, 4, 5]
          .map(
            (number) => `
              <button class="sat-star" data-rating="${number}">
                ★
              </button>
            `,
          )
          .join("")}
      </div>

      <textarea
        class="sat-comment"
        placeholder="Cuéntanos tu experiencia (opcional)"
        rows="3"
      ></textarea>

      <button class="sat-button">Enviar evaluación</button>

      <button class="sat-skip">Omitir</button>
    </div>
  `;

  document.body.appendChild(container);

  if (options.allowSkip === false) {
    container.querySelector(".sat-skip")?.remove();
  }

  let rating = 0;

  // Seleccionar estrellas
  const stars = container.querySelectorAll<HTMLButtonElement>(".sat-star");

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      rating = Number(star.dataset.rating);

      stars.forEach((item) => {
        item.classList.toggle("active", Number(item.dataset.rating) <= rating);
      });
    });
  });

  // Enviar evaluación
  const submitButton =
    container.querySelector<HTMLButtonElement>(".sat-button");

  submitButton?.addEventListener("click", async () => {
    if (rating === 0) {
      alert("Selecciona una calificación");
      return;
    }

    const comment =
      container.querySelector<HTMLTextAreaElement>(".sat-comment");

    submitButton.disabled = true;

    try {
      const response = await fetch(`${options.apiUrl}/evaluations/submit`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${options.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating,
          comment: comment?.value || undefined,
          trigger: options.trigger,
          sessionId: options.sessionId,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error("Error al registrar:", error);
        alert("No se pudo registrar la evaluación");
        submitButton.disabled = false;
        return;
      }

      container.remove();
      alert("¡Gracias por compartir tu opinión!");
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("No se pudo conectar con el servidor");
      submitButton.disabled = false;
    }
  });

  // Omitir evaluación
  container.querySelector(".sat-skip")?.addEventListener("click", async () => {
    if (options.allowSkip === false) return;

    try {
      const response = await fetch(
        `${options.apiUrl}/evaluations/interaction`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${options.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "SKIPPED",
            trigger: options.trigger,
            sessionId: options.sessionId,
          }),
        },
      );

      if (!response.ok) {
        alert("No se pudo registrar la omisión");
        return;
      }

      container.remove();
    } catch (error) {
      console.error("Error al omitir evaluación:", error);
    }
  });
}

// ==========================================
// 2. INICIALIZAR WIDGET
// ==========================================

async function initializeWidget(options: WidgetOptions) {
  options = { ...options, sessionId: options.sessionId ?? crypto.randomUUID() };
  const headers = {
    Authorization: `Bearer ${options.token}`,
    "Content-Type": "application/json",
  };

  try {
    // Obtener configuración
    const configResponse = await fetch(
      `${options.apiUrl}/evaluations/configuration`,
      {
        headers: {
          ...headers,
          "Cache-Control": "no-cache",
        },
        cache: "no-store",
      },
    );

    if (!configResponse.ok) {
      console.error("No se pudo obtener la configuración");
      return;
    }

    const configData = await configResponse.json();

    // Aplicar retraso configurado
    const delay = configData.configuration.promptDelayMinutes;

    if (delay > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay * 60 * 1000));
    }

    // Comprobar elegibilidad
    const eligibilityResponse = await fetch(
      `${options.apiUrl}/evaluations/eligibility?trigger=${options.trigger}`,
      {
        headers: {
          ...headers,
          "Cache-Control": "no-cache",
        },
        cache: "no-store",
      },
    );

    if (!eligibilityResponse.ok) {
      console.error("No se pudo comprobar la elegibilidad");
      return;
    }

    const eligibility = await eligibilityResponse.json();

    if (!eligibility.eligible) {
      console.log("El estudiante todavía no puede evaluar");
      return;
    }

    // Registrar que se mostró el widget
    const interactionResponse = await fetch(
      `${options.apiUrl}/evaluations/interaction`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          action: "SHOWN",
          trigger: options.trigger,
          sessionId: options.sessionId,
        }),
      },
    );

    if (!interactionResponse.ok) {
      console.error("No se pudo registrar la interacción SHOWN");
      return;
    }

    // Mostrar formulario
    createWidget({
      ...options,
      allowSkip: configData.configuration.allowSkip,
    });
  } catch (error) {
    console.error("Error al inicializar widget:", error);
  }
}

// ==========================================
// 3. EXPONER API GLOBAL
// ==========================================

(window as any).SatisfaccionWidget = {
  init: initializeWidget,
};
