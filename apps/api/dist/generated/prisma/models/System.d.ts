import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SystemModel = runtime.Types.Result.DefaultSelection<Prisma.$SystemPayload>;
export type AggregateSystem = {
    _count: SystemCountAggregateOutputType | null;
    _min: SystemMinAggregateOutputType | null;
    _max: SystemMaxAggregateOutputType | null;
};
export type SystemMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    code: string | null;
    description: string | null;
    baseUrl: string | null;
    active: boolean | null;
    createdAt: Date | null;
};
export type SystemMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    code: string | null;
    description: string | null;
    baseUrl: string | null;
    active: boolean | null;
    createdAt: Date | null;
};
export type SystemCountAggregateOutputType = {
    id: number;
    name: number;
    code: number;
    description: number;
    baseUrl: number;
    active: number;
    createdAt: number;
    _all: number;
};
export type SystemMinAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
    baseUrl?: true;
    active?: true;
    createdAt?: true;
};
export type SystemMaxAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
    baseUrl?: true;
    active?: true;
    createdAt?: true;
};
export type SystemCountAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
    baseUrl?: true;
    active?: true;
    createdAt?: true;
    _all?: true;
};
export type SystemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SystemWhereInput;
    orderBy?: Prisma.SystemOrderByWithRelationInput | Prisma.SystemOrderByWithRelationInput[];
    cursor?: Prisma.SystemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SystemCountAggregateInputType;
    _min?: SystemMinAggregateInputType;
    _max?: SystemMaxAggregateInputType;
};
export type GetSystemAggregateType<T extends SystemAggregateArgs> = {
    [P in keyof T & keyof AggregateSystem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSystem[P]> : Prisma.GetScalarType<T[P], AggregateSystem[P]>;
};
export type SystemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SystemWhereInput;
    orderBy?: Prisma.SystemOrderByWithAggregationInput | Prisma.SystemOrderByWithAggregationInput[];
    by: Prisma.SystemScalarFieldEnum[] | Prisma.SystemScalarFieldEnum;
    having?: Prisma.SystemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SystemCountAggregateInputType | true;
    _min?: SystemMinAggregateInputType;
    _max?: SystemMaxAggregateInputType;
};
export type SystemGroupByOutputType = {
    id: string;
    name: string;
    code: string;
    description: string | null;
    baseUrl: string | null;
    active: boolean;
    createdAt: Date;
    _count: SystemCountAggregateOutputType | null;
    _min: SystemMinAggregateOutputType | null;
    _max: SystemMaxAggregateOutputType | null;
};
export type GetSystemGroupByPayload<T extends SystemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SystemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SystemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SystemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SystemGroupByOutputType[P]>;
}>>;
export type SystemWhereInput = {
    AND?: Prisma.SystemWhereInput | Prisma.SystemWhereInput[];
    OR?: Prisma.SystemWhereInput[];
    NOT?: Prisma.SystemWhereInput | Prisma.SystemWhereInput[];
    id?: Prisma.UuidFilter<"System"> | string;
    name?: Prisma.StringFilter<"System"> | string;
    code?: Prisma.StringFilter<"System"> | string;
    description?: Prisma.StringNullableFilter<"System"> | string | null;
    baseUrl?: Prisma.StringNullableFilter<"System"> | string | null;
    active?: Prisma.BoolFilter<"System"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"System"> | Date | string;
    integration?: Prisma.XOR<Prisma.IntegrationNullableScalarRelationFilter, Prisma.IntegrationWhereInput> | null;
    configuration?: Prisma.XOR<Prisma.WidgetConfigurationNullableScalarRelationFilter, Prisma.WidgetConfigurationWhereInput> | null;
    evaluations?: Prisma.SatisfactionEvaluationListRelationFilter;
    interactions?: Prisma.WidgetInteractionListRelationFilter;
};
export type SystemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    baseUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    integration?: Prisma.IntegrationOrderByWithRelationInput;
    configuration?: Prisma.WidgetConfigurationOrderByWithRelationInput;
    evaluations?: Prisma.SatisfactionEvaluationOrderByRelationAggregateInput;
    interactions?: Prisma.WidgetInteractionOrderByRelationAggregateInput;
};
export type SystemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.SystemWhereInput | Prisma.SystemWhereInput[];
    OR?: Prisma.SystemWhereInput[];
    NOT?: Prisma.SystemWhereInput | Prisma.SystemWhereInput[];
    name?: Prisma.StringFilter<"System"> | string;
    description?: Prisma.StringNullableFilter<"System"> | string | null;
    baseUrl?: Prisma.StringNullableFilter<"System"> | string | null;
    active?: Prisma.BoolFilter<"System"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"System"> | Date | string;
    integration?: Prisma.XOR<Prisma.IntegrationNullableScalarRelationFilter, Prisma.IntegrationWhereInput> | null;
    configuration?: Prisma.XOR<Prisma.WidgetConfigurationNullableScalarRelationFilter, Prisma.WidgetConfigurationWhereInput> | null;
    evaluations?: Prisma.SatisfactionEvaluationListRelationFilter;
    interactions?: Prisma.WidgetInteractionListRelationFilter;
}, "id" | "code">;
export type SystemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    baseUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SystemCountOrderByAggregateInput;
    _max?: Prisma.SystemMaxOrderByAggregateInput;
    _min?: Prisma.SystemMinOrderByAggregateInput;
};
export type SystemScalarWhereWithAggregatesInput = {
    AND?: Prisma.SystemScalarWhereWithAggregatesInput | Prisma.SystemScalarWhereWithAggregatesInput[];
    OR?: Prisma.SystemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SystemScalarWhereWithAggregatesInput | Prisma.SystemScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"System"> | string;
    name?: Prisma.StringWithAggregatesFilter<"System"> | string;
    code?: Prisma.StringWithAggregatesFilter<"System"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"System"> | string | null;
    baseUrl?: Prisma.StringNullableWithAggregatesFilter<"System"> | string | null;
    active?: Prisma.BoolWithAggregatesFilter<"System"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"System"> | Date | string;
};
export type SystemCreateInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    baseUrl?: string | null;
    active?: boolean;
    createdAt?: Date | string;
    integration?: Prisma.IntegrationCreateNestedOneWithoutSystemInput;
    configuration?: Prisma.WidgetConfigurationCreateNestedOneWithoutSystemInput;
    evaluations?: Prisma.SatisfactionEvaluationCreateNestedManyWithoutSystemInput;
    interactions?: Prisma.WidgetInteractionCreateNestedManyWithoutSystemInput;
};
export type SystemUncheckedCreateInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    baseUrl?: string | null;
    active?: boolean;
    createdAt?: Date | string;
    integration?: Prisma.IntegrationUncheckedCreateNestedOneWithoutSystemInput;
    configuration?: Prisma.WidgetConfigurationUncheckedCreateNestedOneWithoutSystemInput;
    evaluations?: Prisma.SatisfactionEvaluationUncheckedCreateNestedManyWithoutSystemInput;
    interactions?: Prisma.WidgetInteractionUncheckedCreateNestedManyWithoutSystemInput;
};
export type SystemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    integration?: Prisma.IntegrationUpdateOneWithoutSystemNestedInput;
    configuration?: Prisma.WidgetConfigurationUpdateOneWithoutSystemNestedInput;
    evaluations?: Prisma.SatisfactionEvaluationUpdateManyWithoutSystemNestedInput;
    interactions?: Prisma.WidgetInteractionUpdateManyWithoutSystemNestedInput;
};
export type SystemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    integration?: Prisma.IntegrationUncheckedUpdateOneWithoutSystemNestedInput;
    configuration?: Prisma.WidgetConfigurationUncheckedUpdateOneWithoutSystemNestedInput;
    evaluations?: Prisma.SatisfactionEvaluationUncheckedUpdateManyWithoutSystemNestedInput;
    interactions?: Prisma.WidgetInteractionUncheckedUpdateManyWithoutSystemNestedInput;
};
export type SystemCreateManyInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    baseUrl?: string | null;
    active?: boolean;
    createdAt?: Date | string;
};
export type SystemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SystemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SystemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    baseUrl?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SystemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    baseUrl?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SystemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    baseUrl?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SystemScalarRelationFilter = {
    is?: Prisma.SystemWhereInput;
    isNot?: Prisma.SystemWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type SystemCreateNestedOneWithoutIntegrationInput = {
    create?: Prisma.XOR<Prisma.SystemCreateWithoutIntegrationInput, Prisma.SystemUncheckedCreateWithoutIntegrationInput>;
    connectOrCreate?: Prisma.SystemCreateOrConnectWithoutIntegrationInput;
    connect?: Prisma.SystemWhereUniqueInput;
};
export type SystemUpdateOneRequiredWithoutIntegrationNestedInput = {
    create?: Prisma.XOR<Prisma.SystemCreateWithoutIntegrationInput, Prisma.SystemUncheckedCreateWithoutIntegrationInput>;
    connectOrCreate?: Prisma.SystemCreateOrConnectWithoutIntegrationInput;
    upsert?: Prisma.SystemUpsertWithoutIntegrationInput;
    connect?: Prisma.SystemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SystemUpdateToOneWithWhereWithoutIntegrationInput, Prisma.SystemUpdateWithoutIntegrationInput>, Prisma.SystemUncheckedUpdateWithoutIntegrationInput>;
};
export type SystemCreateNestedOneWithoutConfigurationInput = {
    create?: Prisma.XOR<Prisma.SystemCreateWithoutConfigurationInput, Prisma.SystemUncheckedCreateWithoutConfigurationInput>;
    connectOrCreate?: Prisma.SystemCreateOrConnectWithoutConfigurationInput;
    connect?: Prisma.SystemWhereUniqueInput;
};
export type SystemUpdateOneRequiredWithoutConfigurationNestedInput = {
    create?: Prisma.XOR<Prisma.SystemCreateWithoutConfigurationInput, Prisma.SystemUncheckedCreateWithoutConfigurationInput>;
    connectOrCreate?: Prisma.SystemCreateOrConnectWithoutConfigurationInput;
    upsert?: Prisma.SystemUpsertWithoutConfigurationInput;
    connect?: Prisma.SystemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SystemUpdateToOneWithWhereWithoutConfigurationInput, Prisma.SystemUpdateWithoutConfigurationInput>, Prisma.SystemUncheckedUpdateWithoutConfigurationInput>;
};
export type SystemCreateNestedOneWithoutEvaluationsInput = {
    create?: Prisma.XOR<Prisma.SystemCreateWithoutEvaluationsInput, Prisma.SystemUncheckedCreateWithoutEvaluationsInput>;
    connectOrCreate?: Prisma.SystemCreateOrConnectWithoutEvaluationsInput;
    connect?: Prisma.SystemWhereUniqueInput;
};
export type SystemUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: Prisma.XOR<Prisma.SystemCreateWithoutEvaluationsInput, Prisma.SystemUncheckedCreateWithoutEvaluationsInput>;
    connectOrCreate?: Prisma.SystemCreateOrConnectWithoutEvaluationsInput;
    upsert?: Prisma.SystemUpsertWithoutEvaluationsInput;
    connect?: Prisma.SystemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SystemUpdateToOneWithWhereWithoutEvaluationsInput, Prisma.SystemUpdateWithoutEvaluationsInput>, Prisma.SystemUncheckedUpdateWithoutEvaluationsInput>;
};
export type SystemCreateNestedOneWithoutInteractionsInput = {
    create?: Prisma.XOR<Prisma.SystemCreateWithoutInteractionsInput, Prisma.SystemUncheckedCreateWithoutInteractionsInput>;
    connectOrCreate?: Prisma.SystemCreateOrConnectWithoutInteractionsInput;
    connect?: Prisma.SystemWhereUniqueInput;
};
export type SystemUpdateOneRequiredWithoutInteractionsNestedInput = {
    create?: Prisma.XOR<Prisma.SystemCreateWithoutInteractionsInput, Prisma.SystemUncheckedCreateWithoutInteractionsInput>;
    connectOrCreate?: Prisma.SystemCreateOrConnectWithoutInteractionsInput;
    upsert?: Prisma.SystemUpsertWithoutInteractionsInput;
    connect?: Prisma.SystemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SystemUpdateToOneWithWhereWithoutInteractionsInput, Prisma.SystemUpdateWithoutInteractionsInput>, Prisma.SystemUncheckedUpdateWithoutInteractionsInput>;
};
export type SystemCreateWithoutIntegrationInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    baseUrl?: string | null;
    active?: boolean;
    createdAt?: Date | string;
    configuration?: Prisma.WidgetConfigurationCreateNestedOneWithoutSystemInput;
    evaluations?: Prisma.SatisfactionEvaluationCreateNestedManyWithoutSystemInput;
    interactions?: Prisma.WidgetInteractionCreateNestedManyWithoutSystemInput;
};
export type SystemUncheckedCreateWithoutIntegrationInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    baseUrl?: string | null;
    active?: boolean;
    createdAt?: Date | string;
    configuration?: Prisma.WidgetConfigurationUncheckedCreateNestedOneWithoutSystemInput;
    evaluations?: Prisma.SatisfactionEvaluationUncheckedCreateNestedManyWithoutSystemInput;
    interactions?: Prisma.WidgetInteractionUncheckedCreateNestedManyWithoutSystemInput;
};
export type SystemCreateOrConnectWithoutIntegrationInput = {
    where: Prisma.SystemWhereUniqueInput;
    create: Prisma.XOR<Prisma.SystemCreateWithoutIntegrationInput, Prisma.SystemUncheckedCreateWithoutIntegrationInput>;
};
export type SystemUpsertWithoutIntegrationInput = {
    update: Prisma.XOR<Prisma.SystemUpdateWithoutIntegrationInput, Prisma.SystemUncheckedUpdateWithoutIntegrationInput>;
    create: Prisma.XOR<Prisma.SystemCreateWithoutIntegrationInput, Prisma.SystemUncheckedCreateWithoutIntegrationInput>;
    where?: Prisma.SystemWhereInput;
};
export type SystemUpdateToOneWithWhereWithoutIntegrationInput = {
    where?: Prisma.SystemWhereInput;
    data: Prisma.XOR<Prisma.SystemUpdateWithoutIntegrationInput, Prisma.SystemUncheckedUpdateWithoutIntegrationInput>;
};
export type SystemUpdateWithoutIntegrationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    configuration?: Prisma.WidgetConfigurationUpdateOneWithoutSystemNestedInput;
    evaluations?: Prisma.SatisfactionEvaluationUpdateManyWithoutSystemNestedInput;
    interactions?: Prisma.WidgetInteractionUpdateManyWithoutSystemNestedInput;
};
export type SystemUncheckedUpdateWithoutIntegrationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    configuration?: Prisma.WidgetConfigurationUncheckedUpdateOneWithoutSystemNestedInput;
    evaluations?: Prisma.SatisfactionEvaluationUncheckedUpdateManyWithoutSystemNestedInput;
    interactions?: Prisma.WidgetInteractionUncheckedUpdateManyWithoutSystemNestedInput;
};
export type SystemCreateWithoutConfigurationInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    baseUrl?: string | null;
    active?: boolean;
    createdAt?: Date | string;
    integration?: Prisma.IntegrationCreateNestedOneWithoutSystemInput;
    evaluations?: Prisma.SatisfactionEvaluationCreateNestedManyWithoutSystemInput;
    interactions?: Prisma.WidgetInteractionCreateNestedManyWithoutSystemInput;
};
export type SystemUncheckedCreateWithoutConfigurationInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    baseUrl?: string | null;
    active?: boolean;
    createdAt?: Date | string;
    integration?: Prisma.IntegrationUncheckedCreateNestedOneWithoutSystemInput;
    evaluations?: Prisma.SatisfactionEvaluationUncheckedCreateNestedManyWithoutSystemInput;
    interactions?: Prisma.WidgetInteractionUncheckedCreateNestedManyWithoutSystemInput;
};
export type SystemCreateOrConnectWithoutConfigurationInput = {
    where: Prisma.SystemWhereUniqueInput;
    create: Prisma.XOR<Prisma.SystemCreateWithoutConfigurationInput, Prisma.SystemUncheckedCreateWithoutConfigurationInput>;
};
export type SystemUpsertWithoutConfigurationInput = {
    update: Prisma.XOR<Prisma.SystemUpdateWithoutConfigurationInput, Prisma.SystemUncheckedUpdateWithoutConfigurationInput>;
    create: Prisma.XOR<Prisma.SystemCreateWithoutConfigurationInput, Prisma.SystemUncheckedCreateWithoutConfigurationInput>;
    where?: Prisma.SystemWhereInput;
};
export type SystemUpdateToOneWithWhereWithoutConfigurationInput = {
    where?: Prisma.SystemWhereInput;
    data: Prisma.XOR<Prisma.SystemUpdateWithoutConfigurationInput, Prisma.SystemUncheckedUpdateWithoutConfigurationInput>;
};
export type SystemUpdateWithoutConfigurationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    integration?: Prisma.IntegrationUpdateOneWithoutSystemNestedInput;
    evaluations?: Prisma.SatisfactionEvaluationUpdateManyWithoutSystemNestedInput;
    interactions?: Prisma.WidgetInteractionUpdateManyWithoutSystemNestedInput;
};
export type SystemUncheckedUpdateWithoutConfigurationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    integration?: Prisma.IntegrationUncheckedUpdateOneWithoutSystemNestedInput;
    evaluations?: Prisma.SatisfactionEvaluationUncheckedUpdateManyWithoutSystemNestedInput;
    interactions?: Prisma.WidgetInteractionUncheckedUpdateManyWithoutSystemNestedInput;
};
export type SystemCreateWithoutEvaluationsInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    baseUrl?: string | null;
    active?: boolean;
    createdAt?: Date | string;
    integration?: Prisma.IntegrationCreateNestedOneWithoutSystemInput;
    configuration?: Prisma.WidgetConfigurationCreateNestedOneWithoutSystemInput;
    interactions?: Prisma.WidgetInteractionCreateNestedManyWithoutSystemInput;
};
export type SystemUncheckedCreateWithoutEvaluationsInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    baseUrl?: string | null;
    active?: boolean;
    createdAt?: Date | string;
    integration?: Prisma.IntegrationUncheckedCreateNestedOneWithoutSystemInput;
    configuration?: Prisma.WidgetConfigurationUncheckedCreateNestedOneWithoutSystemInput;
    interactions?: Prisma.WidgetInteractionUncheckedCreateNestedManyWithoutSystemInput;
};
export type SystemCreateOrConnectWithoutEvaluationsInput = {
    where: Prisma.SystemWhereUniqueInput;
    create: Prisma.XOR<Prisma.SystemCreateWithoutEvaluationsInput, Prisma.SystemUncheckedCreateWithoutEvaluationsInput>;
};
export type SystemUpsertWithoutEvaluationsInput = {
    update: Prisma.XOR<Prisma.SystemUpdateWithoutEvaluationsInput, Prisma.SystemUncheckedUpdateWithoutEvaluationsInput>;
    create: Prisma.XOR<Prisma.SystemCreateWithoutEvaluationsInput, Prisma.SystemUncheckedCreateWithoutEvaluationsInput>;
    where?: Prisma.SystemWhereInput;
};
export type SystemUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: Prisma.SystemWhereInput;
    data: Prisma.XOR<Prisma.SystemUpdateWithoutEvaluationsInput, Prisma.SystemUncheckedUpdateWithoutEvaluationsInput>;
};
export type SystemUpdateWithoutEvaluationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    integration?: Prisma.IntegrationUpdateOneWithoutSystemNestedInput;
    configuration?: Prisma.WidgetConfigurationUpdateOneWithoutSystemNestedInput;
    interactions?: Prisma.WidgetInteractionUpdateManyWithoutSystemNestedInput;
};
export type SystemUncheckedUpdateWithoutEvaluationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    integration?: Prisma.IntegrationUncheckedUpdateOneWithoutSystemNestedInput;
    configuration?: Prisma.WidgetConfigurationUncheckedUpdateOneWithoutSystemNestedInput;
    interactions?: Prisma.WidgetInteractionUncheckedUpdateManyWithoutSystemNestedInput;
};
export type SystemCreateWithoutInteractionsInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    baseUrl?: string | null;
    active?: boolean;
    createdAt?: Date | string;
    integration?: Prisma.IntegrationCreateNestedOneWithoutSystemInput;
    configuration?: Prisma.WidgetConfigurationCreateNestedOneWithoutSystemInput;
    evaluations?: Prisma.SatisfactionEvaluationCreateNestedManyWithoutSystemInput;
};
export type SystemUncheckedCreateWithoutInteractionsInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    baseUrl?: string | null;
    active?: boolean;
    createdAt?: Date | string;
    integration?: Prisma.IntegrationUncheckedCreateNestedOneWithoutSystemInput;
    configuration?: Prisma.WidgetConfigurationUncheckedCreateNestedOneWithoutSystemInput;
    evaluations?: Prisma.SatisfactionEvaluationUncheckedCreateNestedManyWithoutSystemInput;
};
export type SystemCreateOrConnectWithoutInteractionsInput = {
    where: Prisma.SystemWhereUniqueInput;
    create: Prisma.XOR<Prisma.SystemCreateWithoutInteractionsInput, Prisma.SystemUncheckedCreateWithoutInteractionsInput>;
};
export type SystemUpsertWithoutInteractionsInput = {
    update: Prisma.XOR<Prisma.SystemUpdateWithoutInteractionsInput, Prisma.SystemUncheckedUpdateWithoutInteractionsInput>;
    create: Prisma.XOR<Prisma.SystemCreateWithoutInteractionsInput, Prisma.SystemUncheckedCreateWithoutInteractionsInput>;
    where?: Prisma.SystemWhereInput;
};
export type SystemUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: Prisma.SystemWhereInput;
    data: Prisma.XOR<Prisma.SystemUpdateWithoutInteractionsInput, Prisma.SystemUncheckedUpdateWithoutInteractionsInput>;
};
export type SystemUpdateWithoutInteractionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    integration?: Prisma.IntegrationUpdateOneWithoutSystemNestedInput;
    configuration?: Prisma.WidgetConfigurationUpdateOneWithoutSystemNestedInput;
    evaluations?: Prisma.SatisfactionEvaluationUpdateManyWithoutSystemNestedInput;
};
export type SystemUncheckedUpdateWithoutInteractionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    integration?: Prisma.IntegrationUncheckedUpdateOneWithoutSystemNestedInput;
    configuration?: Prisma.WidgetConfigurationUncheckedUpdateOneWithoutSystemNestedInput;
    evaluations?: Prisma.SatisfactionEvaluationUncheckedUpdateManyWithoutSystemNestedInput;
};
export type SystemCountOutputType = {
    evaluations: number;
    interactions: number;
};
export type SystemCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evaluations?: boolean | SystemCountOutputTypeCountEvaluationsArgs;
    interactions?: boolean | SystemCountOutputTypeCountInteractionsArgs;
};
export type SystemCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemCountOutputTypeSelect<ExtArgs> | null;
};
export type SystemCountOutputTypeCountEvaluationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SatisfactionEvaluationWhereInput;
};
export type SystemCountOutputTypeCountInteractionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WidgetInteractionWhereInput;
};
export type SystemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    baseUrl?: boolean;
    active?: boolean;
    createdAt?: boolean;
    integration?: boolean | Prisma.System$integrationArgs<ExtArgs>;
    configuration?: boolean | Prisma.System$configurationArgs<ExtArgs>;
    evaluations?: boolean | Prisma.System$evaluationsArgs<ExtArgs>;
    interactions?: boolean | Prisma.System$interactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.SystemCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["system"]>;
export type SystemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    baseUrl?: boolean;
    active?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["system"]>;
export type SystemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    baseUrl?: boolean;
    active?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["system"]>;
export type SystemSelectScalar = {
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    baseUrl?: boolean;
    active?: boolean;
    createdAt?: boolean;
};
export type SystemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "code" | "description" | "baseUrl" | "active" | "createdAt", ExtArgs["result"]["system"]>;
export type SystemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    integration?: boolean | Prisma.System$integrationArgs<ExtArgs>;
    configuration?: boolean | Prisma.System$configurationArgs<ExtArgs>;
    evaluations?: boolean | Prisma.System$evaluationsArgs<ExtArgs>;
    interactions?: boolean | Prisma.System$interactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.SystemCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SystemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SystemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SystemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "System";
    objects: {
        integration: Prisma.$IntegrationPayload<ExtArgs> | null;
        configuration: Prisma.$WidgetConfigurationPayload<ExtArgs> | null;
        evaluations: Prisma.$SatisfactionEvaluationPayload<ExtArgs>[];
        interactions: Prisma.$WidgetInteractionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        code: string;
        description: string | null;
        baseUrl: string | null;
        active: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["system"]>;
    composites: {};
};
export type SystemGetPayload<S extends boolean | null | undefined | SystemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SystemPayload, S>;
export type SystemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SystemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SystemCountAggregateInputType | true;
};
export interface SystemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['System'];
        meta: {
            name: 'System';
        };
    };
    findUnique<T extends SystemFindUniqueArgs>(args: Prisma.SelectSubset<T, SystemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SystemClient<runtime.Types.Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SystemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SystemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SystemClient<runtime.Types.Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SystemFindFirstArgs>(args?: Prisma.SelectSubset<T, SystemFindFirstArgs<ExtArgs>>): Prisma.Prisma__SystemClient<runtime.Types.Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SystemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SystemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SystemClient<runtime.Types.Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SystemFindManyArgs>(args?: Prisma.SelectSubset<T, SystemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SystemCreateArgs>(args: Prisma.SelectSubset<T, SystemCreateArgs<ExtArgs>>): Prisma.Prisma__SystemClient<runtime.Types.Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SystemCreateManyArgs>(args?: Prisma.SelectSubset<T, SystemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SystemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SystemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SystemDeleteArgs>(args: Prisma.SelectSubset<T, SystemDeleteArgs<ExtArgs>>): Prisma.Prisma__SystemClient<runtime.Types.Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SystemUpdateArgs>(args: Prisma.SelectSubset<T, SystemUpdateArgs<ExtArgs>>): Prisma.Prisma__SystemClient<runtime.Types.Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SystemDeleteManyArgs>(args?: Prisma.SelectSubset<T, SystemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SystemUpdateManyArgs>(args: Prisma.SelectSubset<T, SystemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SystemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SystemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SystemUpsertArgs>(args: Prisma.SelectSubset<T, SystemUpsertArgs<ExtArgs>>): Prisma.Prisma__SystemClient<runtime.Types.Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SystemCountArgs>(args?: Prisma.Subset<T, SystemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SystemCountAggregateOutputType> : number>;
    aggregate<T extends SystemAggregateArgs>(args: Prisma.Subset<T, SystemAggregateArgs>): Prisma.PrismaPromise<GetSystemAggregateType<T>>;
    groupBy<T extends SystemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SystemGroupByArgs['orderBy'];
    } : {
        orderBy?: SystemGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SystemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SystemFieldRefs;
}
export interface Prisma__SystemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    integration<T extends Prisma.System$integrationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.System$integrationArgs<ExtArgs>>): Prisma.Prisma__IntegrationClient<runtime.Types.Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    configuration<T extends Prisma.System$configurationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.System$configurationArgs<ExtArgs>>): Prisma.Prisma__WidgetConfigurationClient<runtime.Types.Result.GetResult<Prisma.$WidgetConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    evaluations<T extends Prisma.System$evaluationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.System$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SatisfactionEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    interactions<T extends Prisma.System$interactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.System$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WidgetInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SystemFieldRefs {
    readonly id: Prisma.FieldRef<"System", 'String'>;
    readonly name: Prisma.FieldRef<"System", 'String'>;
    readonly code: Prisma.FieldRef<"System", 'String'>;
    readonly description: Prisma.FieldRef<"System", 'String'>;
    readonly baseUrl: Prisma.FieldRef<"System", 'String'>;
    readonly active: Prisma.FieldRef<"System", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"System", 'DateTime'>;
}
export type SystemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemSelect<ExtArgs> | null;
    omit?: Prisma.SystemOmit<ExtArgs> | null;
    include?: Prisma.SystemInclude<ExtArgs> | null;
    where: Prisma.SystemWhereUniqueInput;
};
export type SystemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemSelect<ExtArgs> | null;
    omit?: Prisma.SystemOmit<ExtArgs> | null;
    include?: Prisma.SystemInclude<ExtArgs> | null;
    where: Prisma.SystemWhereUniqueInput;
};
export type SystemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemSelect<ExtArgs> | null;
    omit?: Prisma.SystemOmit<ExtArgs> | null;
    include?: Prisma.SystemInclude<ExtArgs> | null;
    where?: Prisma.SystemWhereInput;
    orderBy?: Prisma.SystemOrderByWithRelationInput | Prisma.SystemOrderByWithRelationInput[];
    cursor?: Prisma.SystemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SystemScalarFieldEnum | Prisma.SystemScalarFieldEnum[];
};
export type SystemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemSelect<ExtArgs> | null;
    omit?: Prisma.SystemOmit<ExtArgs> | null;
    include?: Prisma.SystemInclude<ExtArgs> | null;
    where?: Prisma.SystemWhereInput;
    orderBy?: Prisma.SystemOrderByWithRelationInput | Prisma.SystemOrderByWithRelationInput[];
    cursor?: Prisma.SystemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SystemScalarFieldEnum | Prisma.SystemScalarFieldEnum[];
};
export type SystemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemSelect<ExtArgs> | null;
    omit?: Prisma.SystemOmit<ExtArgs> | null;
    include?: Prisma.SystemInclude<ExtArgs> | null;
    where?: Prisma.SystemWhereInput;
    orderBy?: Prisma.SystemOrderByWithRelationInput | Prisma.SystemOrderByWithRelationInput[];
    cursor?: Prisma.SystemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SystemScalarFieldEnum | Prisma.SystemScalarFieldEnum[];
};
export type SystemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemSelect<ExtArgs> | null;
    omit?: Prisma.SystemOmit<ExtArgs> | null;
    include?: Prisma.SystemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SystemCreateInput, Prisma.SystemUncheckedCreateInput>;
};
export type SystemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SystemCreateManyInput | Prisma.SystemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SystemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SystemOmit<ExtArgs> | null;
    data: Prisma.SystemCreateManyInput | Prisma.SystemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SystemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemSelect<ExtArgs> | null;
    omit?: Prisma.SystemOmit<ExtArgs> | null;
    include?: Prisma.SystemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SystemUpdateInput, Prisma.SystemUncheckedUpdateInput>;
    where: Prisma.SystemWhereUniqueInput;
};
export type SystemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SystemUpdateManyMutationInput, Prisma.SystemUncheckedUpdateManyInput>;
    where?: Prisma.SystemWhereInput;
    limit?: number;
};
export type SystemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SystemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SystemUpdateManyMutationInput, Prisma.SystemUncheckedUpdateManyInput>;
    where?: Prisma.SystemWhereInput;
    limit?: number;
};
export type SystemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemSelect<ExtArgs> | null;
    omit?: Prisma.SystemOmit<ExtArgs> | null;
    include?: Prisma.SystemInclude<ExtArgs> | null;
    where: Prisma.SystemWhereUniqueInput;
    create: Prisma.XOR<Prisma.SystemCreateInput, Prisma.SystemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SystemUpdateInput, Prisma.SystemUncheckedUpdateInput>;
};
export type SystemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemSelect<ExtArgs> | null;
    omit?: Prisma.SystemOmit<ExtArgs> | null;
    include?: Prisma.SystemInclude<ExtArgs> | null;
    where: Prisma.SystemWhereUniqueInput;
};
export type SystemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SystemWhereInput;
    limit?: number;
};
export type System$integrationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationOmit<ExtArgs> | null;
    include?: Prisma.IntegrationInclude<ExtArgs> | null;
    where?: Prisma.IntegrationWhereInput;
};
export type System$configurationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetConfigurationSelect<ExtArgs> | null;
    omit?: Prisma.WidgetConfigurationOmit<ExtArgs> | null;
    include?: Prisma.WidgetConfigurationInclude<ExtArgs> | null;
    where?: Prisma.WidgetConfigurationWhereInput;
};
export type System$evaluationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SatisfactionEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.SatisfactionEvaluationOmit<ExtArgs> | null;
    include?: Prisma.SatisfactionEvaluationInclude<ExtArgs> | null;
    where?: Prisma.SatisfactionEvaluationWhereInput;
    orderBy?: Prisma.SatisfactionEvaluationOrderByWithRelationInput | Prisma.SatisfactionEvaluationOrderByWithRelationInput[];
    cursor?: Prisma.SatisfactionEvaluationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SatisfactionEvaluationScalarFieldEnum | Prisma.SatisfactionEvaluationScalarFieldEnum[];
};
export type System$interactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetInteractionSelect<ExtArgs> | null;
    omit?: Prisma.WidgetInteractionOmit<ExtArgs> | null;
    include?: Prisma.WidgetInteractionInclude<ExtArgs> | null;
    where?: Prisma.WidgetInteractionWhereInput;
    orderBy?: Prisma.WidgetInteractionOrderByWithRelationInput | Prisma.WidgetInteractionOrderByWithRelationInput[];
    cursor?: Prisma.WidgetInteractionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WidgetInteractionScalarFieldEnum | Prisma.WidgetInteractionScalarFieldEnum[];
};
export type SystemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemSelect<ExtArgs> | null;
    omit?: Prisma.SystemOmit<ExtArgs> | null;
    include?: Prisma.SystemInclude<ExtArgs> | null;
};
