import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly System: "System";
    readonly Integration: "Integration";
    readonly Student: "Student";
    readonly WidgetConfiguration: "WidgetConfiguration";
    readonly SatisfactionEvaluation: "SatisfactionEvaluation";
    readonly EvaluationHistory: "EvaluationHistory";
    readonly WidgetInteraction: "WidgetInteraction";
    readonly Role: "Role";
    readonly AdminUser: "AdminUser";
    readonly AuditLog: "AuditLog";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const SystemScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly description: "description";
    readonly baseUrl: "baseUrl";
    readonly active: "active";
    readonly createdAt: "createdAt";
};
export type SystemScalarFieldEnum = (typeof SystemScalarFieldEnum)[keyof typeof SystemScalarFieldEnum];
export declare const IntegrationScalarFieldEnum: {
    readonly id: "id";
    readonly systemId: "systemId";
    readonly apiKeyHash: "apiKeyHash";
    readonly allowedOrigins: "allowedOrigins";
    readonly active: "active";
    readonly createdAt: "createdAt";
};
export type IntegrationScalarFieldEnum = (typeof IntegrationScalarFieldEnum)[keyof typeof IntegrationScalarFieldEnum];
export declare const StudentScalarFieldEnum: {
    readonly id: "id";
    readonly institutionalCode: "institutionalCode";
    readonly fullName: "fullName";
    readonly email: "email";
    readonly active: "active";
    readonly createdAt: "createdAt";
};
export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];
export declare const WidgetConfigurationScalarFieldEnum: {
    readonly id: "id";
    readonly systemId: "systemId";
    readonly triggerMoments: "triggerMoments";
    readonly frequencyValue: "frequencyValue";
    readonly frequencyUnit: "frequencyUnit";
    readonly promptDelayMinutes: "promptDelayMinutes";
    readonly allowSkip: "allowSkip";
    readonly active: "active";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type WidgetConfigurationScalarFieldEnum = (typeof WidgetConfigurationScalarFieldEnum)[keyof typeof WidgetConfigurationScalarFieldEnum];
export declare const SatisfactionEvaluationScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly systemId: "systemId";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly lastEvaluatedAt: "lastEvaluatedAt";
    readonly nextEligibleAt: "nextEligibleAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SatisfactionEvaluationScalarFieldEnum = (typeof SatisfactionEvaluationScalarFieldEnum)[keyof typeof SatisfactionEvaluationScalarFieldEnum];
export declare const EvaluationHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly evaluationId: "evaluationId";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly answeredAt: "answeredAt";
};
export type EvaluationHistoryScalarFieldEnum = (typeof EvaluationHistoryScalarFieldEnum)[keyof typeof EvaluationHistoryScalarFieldEnum];
export declare const WidgetInteractionScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly systemId: "systemId";
    readonly sessionId: "sessionId";
    readonly action: "action";
    readonly occurredAt: "occurredAt";
};
export type WidgetInteractionScalarFieldEnum = (typeof WidgetInteractionScalarFieldEnum)[keyof typeof WidgetInteractionScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const AdminUserScalarFieldEnum: {
    readonly id: "id";
    readonly fullName: "fullName";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly active: "active";
    readonly roleId: "roleId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly adminId: "adminId";
    readonly action: "action";
    readonly entity: "entity";
    readonly entityId: "entityId";
    readonly description: "description";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client/runtime/client").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client/runtime/client").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
    readonly AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
