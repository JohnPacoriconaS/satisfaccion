import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    System: 'System',
    Integration: 'Integration',
    Student: 'Student',
    WidgetConfiguration: 'WidgetConfiguration',
    SatisfactionEvaluation: 'SatisfactionEvaluation',
    EvaluationHistory: 'EvaluationHistory',
    WidgetInteraction: 'WidgetInteraction',
    Role: 'Role',
    AdminUser: 'AdminUser',
    AuditLog: 'AuditLog'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const SystemScalarFieldEnum = {
    id: 'id',
    name: 'name',
    code: 'code',
    description: 'description',
    baseUrl: 'baseUrl',
    active: 'active',
    createdAt: 'createdAt'
};
export const IntegrationScalarFieldEnum = {
    id: 'id',
    systemId: 'systemId',
    apiKeyHash: 'apiKeyHash',
    allowedOrigins: 'allowedOrigins',
    active: 'active',
    createdAt: 'createdAt'
};
export const StudentScalarFieldEnum = {
    id: 'id',
    institutionalCode: 'institutionalCode',
    fullName: 'fullName',
    email: 'email',
    active: 'active',
    createdAt: 'createdAt'
};
export const WidgetConfigurationScalarFieldEnum = {
    id: 'id',
    systemId: 'systemId',
    triggerMoments: 'triggerMoments',
    frequencyValue: 'frequencyValue',
    frequencyUnit: 'frequencyUnit',
    promptDelayMinutes: 'promptDelayMinutes',
    allowSkip: 'allowSkip',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SatisfactionEvaluationScalarFieldEnum = {
    id: 'id',
    studentId: 'studentId',
    systemId: 'systemId',
    rating: 'rating',
    comment: 'comment',
    lastEvaluatedAt: 'lastEvaluatedAt',
    nextEligibleAt: 'nextEligibleAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const EvaluationHistoryScalarFieldEnum = {
    id: 'id',
    evaluationId: 'evaluationId',
    rating: 'rating',
    comment: 'comment',
    answeredAt: 'answeredAt'
};
export const WidgetInteractionScalarFieldEnum = {
    id: 'id',
    studentId: 'studentId',
    systemId: 'systemId',
    sessionId: 'sessionId',
    action: 'action',
    occurredAt: 'occurredAt'
};
export const RoleScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
};
export const AdminUserScalarFieldEnum = {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    passwordHash: 'passwordHash',
    active: 'active',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const AuditLogScalarFieldEnum = {
    id: 'id',
    adminId: 'adminId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    description: 'description',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullableJsonNullValueInput = {
    DbNull: DbNull,
    JsonNull: JsonNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map