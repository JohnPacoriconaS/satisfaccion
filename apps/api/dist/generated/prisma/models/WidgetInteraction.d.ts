import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WidgetInteractionModel = runtime.Types.Result.DefaultSelection<Prisma.$WidgetInteractionPayload>;
export type AggregateWidgetInteraction = {
    _count: WidgetInteractionCountAggregateOutputType | null;
    _min: WidgetInteractionMinAggregateOutputType | null;
    _max: WidgetInteractionMaxAggregateOutputType | null;
};
export type WidgetInteractionMinAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    systemId: string | null;
    sessionId: string | null;
    action: $Enums.EvaluationAction | null;
    occurredAt: Date | null;
};
export type WidgetInteractionMaxAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    systemId: string | null;
    sessionId: string | null;
    action: $Enums.EvaluationAction | null;
    occurredAt: Date | null;
};
export type WidgetInteractionCountAggregateOutputType = {
    id: number;
    studentId: number;
    systemId: number;
    sessionId: number;
    action: number;
    occurredAt: number;
    _all: number;
};
export type WidgetInteractionMinAggregateInputType = {
    id?: true;
    studentId?: true;
    systemId?: true;
    sessionId?: true;
    action?: true;
    occurredAt?: true;
};
export type WidgetInteractionMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    systemId?: true;
    sessionId?: true;
    action?: true;
    occurredAt?: true;
};
export type WidgetInteractionCountAggregateInputType = {
    id?: true;
    studentId?: true;
    systemId?: true;
    sessionId?: true;
    action?: true;
    occurredAt?: true;
    _all?: true;
};
export type WidgetInteractionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WidgetInteractionWhereInput;
    orderBy?: Prisma.WidgetInteractionOrderByWithRelationInput | Prisma.WidgetInteractionOrderByWithRelationInput[];
    cursor?: Prisma.WidgetInteractionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WidgetInteractionCountAggregateInputType;
    _min?: WidgetInteractionMinAggregateInputType;
    _max?: WidgetInteractionMaxAggregateInputType;
};
export type GetWidgetInteractionAggregateType<T extends WidgetInteractionAggregateArgs> = {
    [P in keyof T & keyof AggregateWidgetInteraction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWidgetInteraction[P]> : Prisma.GetScalarType<T[P], AggregateWidgetInteraction[P]>;
};
export type WidgetInteractionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WidgetInteractionWhereInput;
    orderBy?: Prisma.WidgetInteractionOrderByWithAggregationInput | Prisma.WidgetInteractionOrderByWithAggregationInput[];
    by: Prisma.WidgetInteractionScalarFieldEnum[] | Prisma.WidgetInteractionScalarFieldEnum;
    having?: Prisma.WidgetInteractionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WidgetInteractionCountAggregateInputType | true;
    _min?: WidgetInteractionMinAggregateInputType;
    _max?: WidgetInteractionMaxAggregateInputType;
};
export type WidgetInteractionGroupByOutputType = {
    id: string;
    studentId: string;
    systemId: string;
    sessionId: string | null;
    action: $Enums.EvaluationAction;
    occurredAt: Date;
    _count: WidgetInteractionCountAggregateOutputType | null;
    _min: WidgetInteractionMinAggregateOutputType | null;
    _max: WidgetInteractionMaxAggregateOutputType | null;
};
export type GetWidgetInteractionGroupByPayload<T extends WidgetInteractionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WidgetInteractionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WidgetInteractionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WidgetInteractionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WidgetInteractionGroupByOutputType[P]>;
}>>;
export type WidgetInteractionWhereInput = {
    AND?: Prisma.WidgetInteractionWhereInput | Prisma.WidgetInteractionWhereInput[];
    OR?: Prisma.WidgetInteractionWhereInput[];
    NOT?: Prisma.WidgetInteractionWhereInput | Prisma.WidgetInteractionWhereInput[];
    id?: Prisma.UuidFilter<"WidgetInteraction"> | string;
    studentId?: Prisma.UuidFilter<"WidgetInteraction"> | string;
    systemId?: Prisma.UuidFilter<"WidgetInteraction"> | string;
    sessionId?: Prisma.StringNullableFilter<"WidgetInteraction"> | string | null;
    action?: Prisma.EnumEvaluationActionFilter<"WidgetInteraction"> | $Enums.EvaluationAction;
    occurredAt?: Prisma.DateTimeFilter<"WidgetInteraction"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    system?: Prisma.XOR<Prisma.SystemScalarRelationFilter, Prisma.SystemWhereInput>;
};
export type WidgetInteractionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    student?: Prisma.StudentOrderByWithRelationInput;
    system?: Prisma.SystemOrderByWithRelationInput;
};
export type WidgetInteractionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WidgetInteractionWhereInput | Prisma.WidgetInteractionWhereInput[];
    OR?: Prisma.WidgetInteractionWhereInput[];
    NOT?: Prisma.WidgetInteractionWhereInput | Prisma.WidgetInteractionWhereInput[];
    studentId?: Prisma.UuidFilter<"WidgetInteraction"> | string;
    systemId?: Prisma.UuidFilter<"WidgetInteraction"> | string;
    sessionId?: Prisma.StringNullableFilter<"WidgetInteraction"> | string | null;
    action?: Prisma.EnumEvaluationActionFilter<"WidgetInteraction"> | $Enums.EvaluationAction;
    occurredAt?: Prisma.DateTimeFilter<"WidgetInteraction"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    system?: Prisma.XOR<Prisma.SystemScalarRelationFilter, Prisma.SystemWhereInput>;
}, "id">;
export type WidgetInteractionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    _count?: Prisma.WidgetInteractionCountOrderByAggregateInput;
    _max?: Prisma.WidgetInteractionMaxOrderByAggregateInput;
    _min?: Prisma.WidgetInteractionMinOrderByAggregateInput;
};
export type WidgetInteractionScalarWhereWithAggregatesInput = {
    AND?: Prisma.WidgetInteractionScalarWhereWithAggregatesInput | Prisma.WidgetInteractionScalarWhereWithAggregatesInput[];
    OR?: Prisma.WidgetInteractionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WidgetInteractionScalarWhereWithAggregatesInput | Prisma.WidgetInteractionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"WidgetInteraction"> | string;
    studentId?: Prisma.UuidWithAggregatesFilter<"WidgetInteraction"> | string;
    systemId?: Prisma.UuidWithAggregatesFilter<"WidgetInteraction"> | string;
    sessionId?: Prisma.StringNullableWithAggregatesFilter<"WidgetInteraction"> | string | null;
    action?: Prisma.EnumEvaluationActionWithAggregatesFilter<"WidgetInteraction"> | $Enums.EvaluationAction;
    occurredAt?: Prisma.DateTimeWithAggregatesFilter<"WidgetInteraction"> | Date | string;
};
export type WidgetInteractionCreateInput = {
    id?: string;
    sessionId?: string | null;
    action: $Enums.EvaluationAction;
    occurredAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutInteractionsInput;
    system: Prisma.SystemCreateNestedOneWithoutInteractionsInput;
};
export type WidgetInteractionUncheckedCreateInput = {
    id?: string;
    studentId: string;
    systemId: string;
    sessionId?: string | null;
    action: $Enums.EvaluationAction;
    occurredAt?: Date | string;
};
export type WidgetInteractionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumEvaluationActionFieldUpdateOperationsInput | $Enums.EvaluationAction;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutInteractionsNestedInput;
    system?: Prisma.SystemUpdateOneRequiredWithoutInteractionsNestedInput;
};
export type WidgetInteractionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    systemId?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumEvaluationActionFieldUpdateOperationsInput | $Enums.EvaluationAction;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WidgetInteractionCreateManyInput = {
    id?: string;
    studentId: string;
    systemId: string;
    sessionId?: string | null;
    action: $Enums.EvaluationAction;
    occurredAt?: Date | string;
};
export type WidgetInteractionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumEvaluationActionFieldUpdateOperationsInput | $Enums.EvaluationAction;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WidgetInteractionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    systemId?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumEvaluationActionFieldUpdateOperationsInput | $Enums.EvaluationAction;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WidgetInteractionListRelationFilter = {
    every?: Prisma.WidgetInteractionWhereInput;
    some?: Prisma.WidgetInteractionWhereInput;
    none?: Prisma.WidgetInteractionWhereInput;
};
export type WidgetInteractionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WidgetInteractionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
};
export type WidgetInteractionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
};
export type WidgetInteractionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
};
export type WidgetInteractionCreateNestedManyWithoutSystemInput = {
    create?: Prisma.XOR<Prisma.WidgetInteractionCreateWithoutSystemInput, Prisma.WidgetInteractionUncheckedCreateWithoutSystemInput> | Prisma.WidgetInteractionCreateWithoutSystemInput[] | Prisma.WidgetInteractionUncheckedCreateWithoutSystemInput[];
    connectOrCreate?: Prisma.WidgetInteractionCreateOrConnectWithoutSystemInput | Prisma.WidgetInteractionCreateOrConnectWithoutSystemInput[];
    createMany?: Prisma.WidgetInteractionCreateManySystemInputEnvelope;
    connect?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
};
export type WidgetInteractionUncheckedCreateNestedManyWithoutSystemInput = {
    create?: Prisma.XOR<Prisma.WidgetInteractionCreateWithoutSystemInput, Prisma.WidgetInteractionUncheckedCreateWithoutSystemInput> | Prisma.WidgetInteractionCreateWithoutSystemInput[] | Prisma.WidgetInteractionUncheckedCreateWithoutSystemInput[];
    connectOrCreate?: Prisma.WidgetInteractionCreateOrConnectWithoutSystemInput | Prisma.WidgetInteractionCreateOrConnectWithoutSystemInput[];
    createMany?: Prisma.WidgetInteractionCreateManySystemInputEnvelope;
    connect?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
};
export type WidgetInteractionUpdateManyWithoutSystemNestedInput = {
    create?: Prisma.XOR<Prisma.WidgetInteractionCreateWithoutSystemInput, Prisma.WidgetInteractionUncheckedCreateWithoutSystemInput> | Prisma.WidgetInteractionCreateWithoutSystemInput[] | Prisma.WidgetInteractionUncheckedCreateWithoutSystemInput[];
    connectOrCreate?: Prisma.WidgetInteractionCreateOrConnectWithoutSystemInput | Prisma.WidgetInteractionCreateOrConnectWithoutSystemInput[];
    upsert?: Prisma.WidgetInteractionUpsertWithWhereUniqueWithoutSystemInput | Prisma.WidgetInteractionUpsertWithWhereUniqueWithoutSystemInput[];
    createMany?: Prisma.WidgetInteractionCreateManySystemInputEnvelope;
    set?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
    disconnect?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
    delete?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
    connect?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
    update?: Prisma.WidgetInteractionUpdateWithWhereUniqueWithoutSystemInput | Prisma.WidgetInteractionUpdateWithWhereUniqueWithoutSystemInput[];
    updateMany?: Prisma.WidgetInteractionUpdateManyWithWhereWithoutSystemInput | Prisma.WidgetInteractionUpdateManyWithWhereWithoutSystemInput[];
    deleteMany?: Prisma.WidgetInteractionScalarWhereInput | Prisma.WidgetInteractionScalarWhereInput[];
};
export type WidgetInteractionUncheckedUpdateManyWithoutSystemNestedInput = {
    create?: Prisma.XOR<Prisma.WidgetInteractionCreateWithoutSystemInput, Prisma.WidgetInteractionUncheckedCreateWithoutSystemInput> | Prisma.WidgetInteractionCreateWithoutSystemInput[] | Prisma.WidgetInteractionUncheckedCreateWithoutSystemInput[];
    connectOrCreate?: Prisma.WidgetInteractionCreateOrConnectWithoutSystemInput | Prisma.WidgetInteractionCreateOrConnectWithoutSystemInput[];
    upsert?: Prisma.WidgetInteractionUpsertWithWhereUniqueWithoutSystemInput | Prisma.WidgetInteractionUpsertWithWhereUniqueWithoutSystemInput[];
    createMany?: Prisma.WidgetInteractionCreateManySystemInputEnvelope;
    set?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
    disconnect?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
    delete?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
    connect?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
    update?: Prisma.WidgetInteractionUpdateWithWhereUniqueWithoutSystemInput | Prisma.WidgetInteractionUpdateWithWhereUniqueWithoutSystemInput[];
    updateMany?: Prisma.WidgetInteractionUpdateManyWithWhereWithoutSystemInput | Prisma.WidgetInteractionUpdateManyWithWhereWithoutSystemInput[];
    deleteMany?: Prisma.WidgetInteractionScalarWhereInput | Prisma.WidgetInteractionScalarWhereInput[];
};
export type WidgetInteractionCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.WidgetInteractionCreateWithoutStudentInput, Prisma.WidgetInteractionUncheckedCreateWithoutStudentInput> | Prisma.WidgetInteractionCreateWithoutStudentInput[] | Prisma.WidgetInteractionUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.WidgetInteractionCreateOrConnectWithoutStudentInput | Prisma.WidgetInteractionCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.WidgetInteractionCreateManyStudentInputEnvelope;
    connect?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
};
export type WidgetInteractionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.WidgetInteractionCreateWithoutStudentInput, Prisma.WidgetInteractionUncheckedCreateWithoutStudentInput> | Prisma.WidgetInteractionCreateWithoutStudentInput[] | Prisma.WidgetInteractionUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.WidgetInteractionCreateOrConnectWithoutStudentInput | Prisma.WidgetInteractionCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.WidgetInteractionCreateManyStudentInputEnvelope;
    connect?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
};
export type WidgetInteractionUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.WidgetInteractionCreateWithoutStudentInput, Prisma.WidgetInteractionUncheckedCreateWithoutStudentInput> | Prisma.WidgetInteractionCreateWithoutStudentInput[] | Prisma.WidgetInteractionUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.WidgetInteractionCreateOrConnectWithoutStudentInput | Prisma.WidgetInteractionCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.WidgetInteractionUpsertWithWhereUniqueWithoutStudentInput | Prisma.WidgetInteractionUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.WidgetInteractionCreateManyStudentInputEnvelope;
    set?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
    disconnect?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
    delete?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
    connect?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
    update?: Prisma.WidgetInteractionUpdateWithWhereUniqueWithoutStudentInput | Prisma.WidgetInteractionUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.WidgetInteractionUpdateManyWithWhereWithoutStudentInput | Prisma.WidgetInteractionUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.WidgetInteractionScalarWhereInput | Prisma.WidgetInteractionScalarWhereInput[];
};
export type WidgetInteractionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.WidgetInteractionCreateWithoutStudentInput, Prisma.WidgetInteractionUncheckedCreateWithoutStudentInput> | Prisma.WidgetInteractionCreateWithoutStudentInput[] | Prisma.WidgetInteractionUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.WidgetInteractionCreateOrConnectWithoutStudentInput | Prisma.WidgetInteractionCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.WidgetInteractionUpsertWithWhereUniqueWithoutStudentInput | Prisma.WidgetInteractionUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.WidgetInteractionCreateManyStudentInputEnvelope;
    set?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
    disconnect?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
    delete?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
    connect?: Prisma.WidgetInteractionWhereUniqueInput | Prisma.WidgetInteractionWhereUniqueInput[];
    update?: Prisma.WidgetInteractionUpdateWithWhereUniqueWithoutStudentInput | Prisma.WidgetInteractionUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.WidgetInteractionUpdateManyWithWhereWithoutStudentInput | Prisma.WidgetInteractionUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.WidgetInteractionScalarWhereInput | Prisma.WidgetInteractionScalarWhereInput[];
};
export type EnumEvaluationActionFieldUpdateOperationsInput = {
    set?: $Enums.EvaluationAction;
};
export type WidgetInteractionCreateWithoutSystemInput = {
    id?: string;
    sessionId?: string | null;
    action: $Enums.EvaluationAction;
    occurredAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutInteractionsInput;
};
export type WidgetInteractionUncheckedCreateWithoutSystemInput = {
    id?: string;
    studentId: string;
    sessionId?: string | null;
    action: $Enums.EvaluationAction;
    occurredAt?: Date | string;
};
export type WidgetInteractionCreateOrConnectWithoutSystemInput = {
    where: Prisma.WidgetInteractionWhereUniqueInput;
    create: Prisma.XOR<Prisma.WidgetInteractionCreateWithoutSystemInput, Prisma.WidgetInteractionUncheckedCreateWithoutSystemInput>;
};
export type WidgetInteractionCreateManySystemInputEnvelope = {
    data: Prisma.WidgetInteractionCreateManySystemInput | Prisma.WidgetInteractionCreateManySystemInput[];
    skipDuplicates?: boolean;
};
export type WidgetInteractionUpsertWithWhereUniqueWithoutSystemInput = {
    where: Prisma.WidgetInteractionWhereUniqueInput;
    update: Prisma.XOR<Prisma.WidgetInteractionUpdateWithoutSystemInput, Prisma.WidgetInteractionUncheckedUpdateWithoutSystemInput>;
    create: Prisma.XOR<Prisma.WidgetInteractionCreateWithoutSystemInput, Prisma.WidgetInteractionUncheckedCreateWithoutSystemInput>;
};
export type WidgetInteractionUpdateWithWhereUniqueWithoutSystemInput = {
    where: Prisma.WidgetInteractionWhereUniqueInput;
    data: Prisma.XOR<Prisma.WidgetInteractionUpdateWithoutSystemInput, Prisma.WidgetInteractionUncheckedUpdateWithoutSystemInput>;
};
export type WidgetInteractionUpdateManyWithWhereWithoutSystemInput = {
    where: Prisma.WidgetInteractionScalarWhereInput;
    data: Prisma.XOR<Prisma.WidgetInteractionUpdateManyMutationInput, Prisma.WidgetInteractionUncheckedUpdateManyWithoutSystemInput>;
};
export type WidgetInteractionScalarWhereInput = {
    AND?: Prisma.WidgetInteractionScalarWhereInput | Prisma.WidgetInteractionScalarWhereInput[];
    OR?: Prisma.WidgetInteractionScalarWhereInput[];
    NOT?: Prisma.WidgetInteractionScalarWhereInput | Prisma.WidgetInteractionScalarWhereInput[];
    id?: Prisma.UuidFilter<"WidgetInteraction"> | string;
    studentId?: Prisma.UuidFilter<"WidgetInteraction"> | string;
    systemId?: Prisma.UuidFilter<"WidgetInteraction"> | string;
    sessionId?: Prisma.StringNullableFilter<"WidgetInteraction"> | string | null;
    action?: Prisma.EnumEvaluationActionFilter<"WidgetInteraction"> | $Enums.EvaluationAction;
    occurredAt?: Prisma.DateTimeFilter<"WidgetInteraction"> | Date | string;
};
export type WidgetInteractionCreateWithoutStudentInput = {
    id?: string;
    sessionId?: string | null;
    action: $Enums.EvaluationAction;
    occurredAt?: Date | string;
    system: Prisma.SystemCreateNestedOneWithoutInteractionsInput;
};
export type WidgetInteractionUncheckedCreateWithoutStudentInput = {
    id?: string;
    systemId: string;
    sessionId?: string | null;
    action: $Enums.EvaluationAction;
    occurredAt?: Date | string;
};
export type WidgetInteractionCreateOrConnectWithoutStudentInput = {
    where: Prisma.WidgetInteractionWhereUniqueInput;
    create: Prisma.XOR<Prisma.WidgetInteractionCreateWithoutStudentInput, Prisma.WidgetInteractionUncheckedCreateWithoutStudentInput>;
};
export type WidgetInteractionCreateManyStudentInputEnvelope = {
    data: Prisma.WidgetInteractionCreateManyStudentInput | Prisma.WidgetInteractionCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type WidgetInteractionUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.WidgetInteractionWhereUniqueInput;
    update: Prisma.XOR<Prisma.WidgetInteractionUpdateWithoutStudentInput, Prisma.WidgetInteractionUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.WidgetInteractionCreateWithoutStudentInput, Prisma.WidgetInteractionUncheckedCreateWithoutStudentInput>;
};
export type WidgetInteractionUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.WidgetInteractionWhereUniqueInput;
    data: Prisma.XOR<Prisma.WidgetInteractionUpdateWithoutStudentInput, Prisma.WidgetInteractionUncheckedUpdateWithoutStudentInput>;
};
export type WidgetInteractionUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.WidgetInteractionScalarWhereInput;
    data: Prisma.XOR<Prisma.WidgetInteractionUpdateManyMutationInput, Prisma.WidgetInteractionUncheckedUpdateManyWithoutStudentInput>;
};
export type WidgetInteractionCreateManySystemInput = {
    id?: string;
    studentId: string;
    sessionId?: string | null;
    action: $Enums.EvaluationAction;
    occurredAt?: Date | string;
};
export type WidgetInteractionUpdateWithoutSystemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumEvaluationActionFieldUpdateOperationsInput | $Enums.EvaluationAction;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutInteractionsNestedInput;
};
export type WidgetInteractionUncheckedUpdateWithoutSystemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumEvaluationActionFieldUpdateOperationsInput | $Enums.EvaluationAction;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WidgetInteractionUncheckedUpdateManyWithoutSystemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumEvaluationActionFieldUpdateOperationsInput | $Enums.EvaluationAction;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WidgetInteractionCreateManyStudentInput = {
    id?: string;
    systemId: string;
    sessionId?: string | null;
    action: $Enums.EvaluationAction;
    occurredAt?: Date | string;
};
export type WidgetInteractionUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumEvaluationActionFieldUpdateOperationsInput | $Enums.EvaluationAction;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    system?: Prisma.SystemUpdateOneRequiredWithoutInteractionsNestedInput;
};
export type WidgetInteractionUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    systemId?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumEvaluationActionFieldUpdateOperationsInput | $Enums.EvaluationAction;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WidgetInteractionUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    systemId?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumEvaluationActionFieldUpdateOperationsInput | $Enums.EvaluationAction;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WidgetInteractionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    systemId?: boolean;
    sessionId?: boolean;
    action?: boolean;
    occurredAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["widgetInteraction"]>;
export type WidgetInteractionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    systemId?: boolean;
    sessionId?: boolean;
    action?: boolean;
    occurredAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["widgetInteraction"]>;
export type WidgetInteractionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    systemId?: boolean;
    sessionId?: boolean;
    action?: boolean;
    occurredAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["widgetInteraction"]>;
export type WidgetInteractionSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    systemId?: boolean;
    sessionId?: boolean;
    action?: boolean;
    occurredAt?: boolean;
};
export type WidgetInteractionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentId" | "systemId" | "sessionId" | "action" | "occurredAt", ExtArgs["result"]["widgetInteraction"]>;
export type WidgetInteractionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
};
export type WidgetInteractionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
};
export type WidgetInteractionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
};
export type $WidgetInteractionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WidgetInteraction";
    objects: {
        student: Prisma.$StudentPayload<ExtArgs>;
        system: Prisma.$SystemPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        studentId: string;
        systemId: string;
        sessionId: string | null;
        action: $Enums.EvaluationAction;
        occurredAt: Date;
    }, ExtArgs["result"]["widgetInteraction"]>;
    composites: {};
};
export type WidgetInteractionGetPayload<S extends boolean | null | undefined | WidgetInteractionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WidgetInteractionPayload, S>;
export type WidgetInteractionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WidgetInteractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WidgetInteractionCountAggregateInputType | true;
};
export interface WidgetInteractionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WidgetInteraction'];
        meta: {
            name: 'WidgetInteraction';
        };
    };
    findUnique<T extends WidgetInteractionFindUniqueArgs>(args: Prisma.SelectSubset<T, WidgetInteractionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WidgetInteractionClient<runtime.Types.Result.GetResult<Prisma.$WidgetInteractionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WidgetInteractionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WidgetInteractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WidgetInteractionClient<runtime.Types.Result.GetResult<Prisma.$WidgetInteractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WidgetInteractionFindFirstArgs>(args?: Prisma.SelectSubset<T, WidgetInteractionFindFirstArgs<ExtArgs>>): Prisma.Prisma__WidgetInteractionClient<runtime.Types.Result.GetResult<Prisma.$WidgetInteractionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WidgetInteractionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WidgetInteractionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WidgetInteractionClient<runtime.Types.Result.GetResult<Prisma.$WidgetInteractionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WidgetInteractionFindManyArgs>(args?: Prisma.SelectSubset<T, WidgetInteractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WidgetInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WidgetInteractionCreateArgs>(args: Prisma.SelectSubset<T, WidgetInteractionCreateArgs<ExtArgs>>): Prisma.Prisma__WidgetInteractionClient<runtime.Types.Result.GetResult<Prisma.$WidgetInteractionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WidgetInteractionCreateManyArgs>(args?: Prisma.SelectSubset<T, WidgetInteractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WidgetInteractionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WidgetInteractionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WidgetInteractionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WidgetInteractionDeleteArgs>(args: Prisma.SelectSubset<T, WidgetInteractionDeleteArgs<ExtArgs>>): Prisma.Prisma__WidgetInteractionClient<runtime.Types.Result.GetResult<Prisma.$WidgetInteractionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WidgetInteractionUpdateArgs>(args: Prisma.SelectSubset<T, WidgetInteractionUpdateArgs<ExtArgs>>): Prisma.Prisma__WidgetInteractionClient<runtime.Types.Result.GetResult<Prisma.$WidgetInteractionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WidgetInteractionDeleteManyArgs>(args?: Prisma.SelectSubset<T, WidgetInteractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WidgetInteractionUpdateManyArgs>(args: Prisma.SelectSubset<T, WidgetInteractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WidgetInteractionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WidgetInteractionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WidgetInteractionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WidgetInteractionUpsertArgs>(args: Prisma.SelectSubset<T, WidgetInteractionUpsertArgs<ExtArgs>>): Prisma.Prisma__WidgetInteractionClient<runtime.Types.Result.GetResult<Prisma.$WidgetInteractionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WidgetInteractionCountArgs>(args?: Prisma.Subset<T, WidgetInteractionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WidgetInteractionCountAggregateOutputType> : number>;
    aggregate<T extends WidgetInteractionAggregateArgs>(args: Prisma.Subset<T, WidgetInteractionAggregateArgs>): Prisma.PrismaPromise<GetWidgetInteractionAggregateType<T>>;
    groupBy<T extends WidgetInteractionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WidgetInteractionGroupByArgs['orderBy'];
    } : {
        orderBy?: WidgetInteractionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WidgetInteractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWidgetInteractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WidgetInteractionFieldRefs;
}
export interface Prisma__WidgetInteractionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    system<T extends Prisma.SystemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SystemDefaultArgs<ExtArgs>>): Prisma.Prisma__SystemClient<runtime.Types.Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WidgetInteractionFieldRefs {
    readonly id: Prisma.FieldRef<"WidgetInteraction", 'String'>;
    readonly studentId: Prisma.FieldRef<"WidgetInteraction", 'String'>;
    readonly systemId: Prisma.FieldRef<"WidgetInteraction", 'String'>;
    readonly sessionId: Prisma.FieldRef<"WidgetInteraction", 'String'>;
    readonly action: Prisma.FieldRef<"WidgetInteraction", 'EvaluationAction'>;
    readonly occurredAt: Prisma.FieldRef<"WidgetInteraction", 'DateTime'>;
}
export type WidgetInteractionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetInteractionSelect<ExtArgs> | null;
    omit?: Prisma.WidgetInteractionOmit<ExtArgs> | null;
    include?: Prisma.WidgetInteractionInclude<ExtArgs> | null;
    where: Prisma.WidgetInteractionWhereUniqueInput;
};
export type WidgetInteractionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetInteractionSelect<ExtArgs> | null;
    omit?: Prisma.WidgetInteractionOmit<ExtArgs> | null;
    include?: Prisma.WidgetInteractionInclude<ExtArgs> | null;
    where: Prisma.WidgetInteractionWhereUniqueInput;
};
export type WidgetInteractionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WidgetInteractionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WidgetInteractionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WidgetInteractionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetInteractionSelect<ExtArgs> | null;
    omit?: Prisma.WidgetInteractionOmit<ExtArgs> | null;
    include?: Prisma.WidgetInteractionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WidgetInteractionCreateInput, Prisma.WidgetInteractionUncheckedCreateInput>;
};
export type WidgetInteractionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WidgetInteractionCreateManyInput | Prisma.WidgetInteractionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WidgetInteractionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetInteractionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WidgetInteractionOmit<ExtArgs> | null;
    data: Prisma.WidgetInteractionCreateManyInput | Prisma.WidgetInteractionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WidgetInteractionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WidgetInteractionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetInteractionSelect<ExtArgs> | null;
    omit?: Prisma.WidgetInteractionOmit<ExtArgs> | null;
    include?: Prisma.WidgetInteractionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WidgetInteractionUpdateInput, Prisma.WidgetInteractionUncheckedUpdateInput>;
    where: Prisma.WidgetInteractionWhereUniqueInput;
};
export type WidgetInteractionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WidgetInteractionUpdateManyMutationInput, Prisma.WidgetInteractionUncheckedUpdateManyInput>;
    where?: Prisma.WidgetInteractionWhereInput;
    limit?: number;
};
export type WidgetInteractionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetInteractionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WidgetInteractionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WidgetInteractionUpdateManyMutationInput, Prisma.WidgetInteractionUncheckedUpdateManyInput>;
    where?: Prisma.WidgetInteractionWhereInput;
    limit?: number;
    include?: Prisma.WidgetInteractionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WidgetInteractionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetInteractionSelect<ExtArgs> | null;
    omit?: Prisma.WidgetInteractionOmit<ExtArgs> | null;
    include?: Prisma.WidgetInteractionInclude<ExtArgs> | null;
    where: Prisma.WidgetInteractionWhereUniqueInput;
    create: Prisma.XOR<Prisma.WidgetInteractionCreateInput, Prisma.WidgetInteractionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WidgetInteractionUpdateInput, Prisma.WidgetInteractionUncheckedUpdateInput>;
};
export type WidgetInteractionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetInteractionSelect<ExtArgs> | null;
    omit?: Prisma.WidgetInteractionOmit<ExtArgs> | null;
    include?: Prisma.WidgetInteractionInclude<ExtArgs> | null;
    where: Prisma.WidgetInteractionWhereUniqueInput;
};
export type WidgetInteractionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WidgetInteractionWhereInput;
    limit?: number;
};
export type WidgetInteractionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetInteractionSelect<ExtArgs> | null;
    omit?: Prisma.WidgetInteractionOmit<ExtArgs> | null;
    include?: Prisma.WidgetInteractionInclude<ExtArgs> | null;
};
