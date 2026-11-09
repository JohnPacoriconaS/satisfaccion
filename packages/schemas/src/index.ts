import { z } from 'zod';
export { z };
const AllowedOriginSchema = z.string().url()
  .refine((value) => ['http:', 'https:'].includes(new URL(value).protocol), {
    message: 'El origen debe usar HTTP o HTTPS',
  })
  .transform((value) => new URL(value).origin);
export const CreateSystemSchema = z.object({
  name: z.string().trim().min(3).max(100),
  code: z.string().trim().min(2).max(30).toUpperCase(),
  description: z.string().trim().optional(),
  baseUrl: z.string().url().optional(),
});

export const UpdateSystemSchema = CreateSystemSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  { message: 'Debes proporcionar al menos un campo para actualizar' },
);

export type CreateSystemInput = z.infer<typeof CreateSystemSchema>;
export type UpdateSystemInput = z.infer<typeof UpdateSystemSchema>;
export const CreateIntegrationSchema = z.object({
  allowedOrigins: z.array(AllowedOriginSchema).default([]),
});

export type CreateIntegrationInput = z.infer<
  typeof CreateIntegrationSchema
>;
export const RegisterStudentSchema = z.object({
  institutionalCode: z.string().trim().min(1).max(50),
  fullName: z.string().trim().min(2).max(150).optional(),
  email: z.string().trim().email().transform((value) => value.toLowerCase()).optional(),
});

export type RegisterStudentInput = z.infer<
  typeof RegisterStudentSchema
>;
export const EvaluationTriggerSchema = z.enum([
  'LOGIN',
  'LOGOUT',
  'DURING',
  'MANUAL',
]);

export const SubmitEvaluationSchema = z.object({
  rating: z.number().int().min(1).max(5),
  comment: z.string().trim().max(1000).optional(),
  trigger: EvaluationTriggerSchema,
  sessionId: z.string().trim().min(1).max(200).optional(),
});

export type SubmitEvaluationInput = z.infer<
  typeof SubmitEvaluationSchema
>;
export const WidgetInteractionSchema = z.object({
  action: z.enum(['SHOWN', 'SKIPPED']),
  trigger: EvaluationTriggerSchema,
  sessionId: z.string().trim().min(1).max(200).optional(),
});

export type WidgetInteractionInput = z.infer<
  typeof WidgetInteractionSchema
>;
export const UpdateIntegrationSchema = z.object({
  allowedOrigins: z.array(AllowedOriginSchema).optional(),
}).refine(
  (data) => Object.keys(data).length > 0,
  { message: 'Debes proporcionar al menos un campo para actualizar' },
);

export type UpdateIntegrationInput = z.infer<
  typeof UpdateIntegrationSchema
>;
export const UpdateWidgetConfigurationSchema = z.object({
  triggerMoments: z
    .array(z.enum(['LOGIN', 'LOGOUT', 'DURING', 'MANUAL']))
    .min(1)
    .optional(),

  frequencyValue: z.number().int().min(1).max(365).optional(),

  frequencyUnit: z.enum(['DAY', 'WEEK', 'MONTH']).optional(),

  promptDelayMinutes: z.number().int().min(0).max(1440).optional(),

  allowSkip: z.boolean().optional(),

  active: z.boolean().optional(),
}).refine(
  (data) => Object.keys(data).length > 0,
  { message: 'Debes proporcionar al menos un campo para actualizar' },
);

export type UpdateWidgetConfigurationInput = z.infer<
  typeof UpdateWidgetConfigurationSchema
>;

export const AuditQuerySchema = z.object({
  action: z.string().trim().min(1).max(50).optional(),
  entity: z.string().trim().min(1).max(100).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export const PaginationQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});
