import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SatisfactionEvaluationModel = runtime.Types.Result.DefaultSelection<Prisma.$SatisfactionEvaluationPayload>;
export type AggregateSatisfactionEvaluation = {
    _count: SatisfactionEvaluationCountAggregateOutputType | null;
    _avg: SatisfactionEvaluationAvgAggregateOutputType | null;
    _sum: SatisfactionEvaluationSumAggregateOutputType | null;
    _min: SatisfactionEvaluationMinAggregateOutputType | null;
    _max: SatisfactionEvaluationMaxAggregateOutputType | null;
};
export type SatisfactionEvaluationAvgAggregateOutputType = {
    rating: number | null;
};
export type SatisfactionEvaluationSumAggregateOutputType = {
    rating: number | null;
};
export type SatisfactionEvaluationMinAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    systemId: string | null;
    rating: number | null;
    comment: string | null;
    lastEvaluatedAt: Date | null;
    nextEligibleAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SatisfactionEvaluationMaxAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    systemId: string | null;
    rating: number | null;
    comment: string | null;
    lastEvaluatedAt: Date | null;
    nextEligibleAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SatisfactionEvaluationCountAggregateOutputType = {
    id: number;
    studentId: number;
    systemId: number;
    rating: number;
    comment: number;
    lastEvaluatedAt: number;
    nextEligibleAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SatisfactionEvaluationAvgAggregateInputType = {
    rating?: true;
};
export type SatisfactionEvaluationSumAggregateInputType = {
    rating?: true;
};
export type SatisfactionEvaluationMinAggregateInputType = {
    id?: true;
    studentId?: true;
    systemId?: true;
    rating?: true;
    comment?: true;
    lastEvaluatedAt?: true;
    nextEligibleAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SatisfactionEvaluationMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    systemId?: true;
    rating?: true;
    comment?: true;
    lastEvaluatedAt?: true;
    nextEligibleAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SatisfactionEvaluationCountAggregateInputType = {
    id?: true;
    studentId?: true;
    systemId?: true;
    rating?: true;
    comment?: true;
    lastEvaluatedAt?: true;
    nextEligibleAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SatisfactionEvaluationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SatisfactionEvaluationWhereInput;
    orderBy?: Prisma.SatisfactionEvaluationOrderByWithRelationInput | Prisma.SatisfactionEvaluationOrderByWithRelationInput[];
    cursor?: Prisma.SatisfactionEvaluationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SatisfactionEvaluationCountAggregateInputType;
    _avg?: SatisfactionEvaluationAvgAggregateInputType;
    _sum?: SatisfactionEvaluationSumAggregateInputType;
    _min?: SatisfactionEvaluationMinAggregateInputType;
    _max?: SatisfactionEvaluationMaxAggregateInputType;
};
export type GetSatisfactionEvaluationAggregateType<T extends SatisfactionEvaluationAggregateArgs> = {
    [P in keyof T & keyof AggregateSatisfactionEvaluation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSatisfactionEvaluation[P]> : Prisma.GetScalarType<T[P], AggregateSatisfactionEvaluation[P]>;
};
export type SatisfactionEvaluationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SatisfactionEvaluationWhereInput;
    orderBy?: Prisma.SatisfactionEvaluationOrderByWithAggregationInput | Prisma.SatisfactionEvaluationOrderByWithAggregationInput[];
    by: Prisma.SatisfactionEvaluationScalarFieldEnum[] | Prisma.SatisfactionEvaluationScalarFieldEnum;
    having?: Prisma.SatisfactionEvaluationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SatisfactionEvaluationCountAggregateInputType | true;
    _avg?: SatisfactionEvaluationAvgAggregateInputType;
    _sum?: SatisfactionEvaluationSumAggregateInputType;
    _min?: SatisfactionEvaluationMinAggregateInputType;
    _max?: SatisfactionEvaluationMaxAggregateInputType;
};
export type SatisfactionEvaluationGroupByOutputType = {
    id: string;
    studentId: string;
    systemId: string;
    rating: number | null;
    comment: string | null;
    lastEvaluatedAt: Date | null;
    nextEligibleAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SatisfactionEvaluationCountAggregateOutputType | null;
    _avg: SatisfactionEvaluationAvgAggregateOutputType | null;
    _sum: SatisfactionEvaluationSumAggregateOutputType | null;
    _min: SatisfactionEvaluationMinAggregateOutputType | null;
    _max: SatisfactionEvaluationMaxAggregateOutputType | null;
};
export type GetSatisfactionEvaluationGroupByPayload<T extends SatisfactionEvaluationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SatisfactionEvaluationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SatisfactionEvaluationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SatisfactionEvaluationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SatisfactionEvaluationGroupByOutputType[P]>;
}>>;
export type SatisfactionEvaluationWhereInput = {
    AND?: Prisma.SatisfactionEvaluationWhereInput | Prisma.SatisfactionEvaluationWhereInput[];
    OR?: Prisma.SatisfactionEvaluationWhereInput[];
    NOT?: Prisma.SatisfactionEvaluationWhereInput | Prisma.SatisfactionEvaluationWhereInput[];
    id?: Prisma.UuidFilter<"SatisfactionEvaluation"> | string;
    studentId?: Prisma.UuidFilter<"SatisfactionEvaluation"> | string;
    systemId?: Prisma.UuidFilter<"SatisfactionEvaluation"> | string;
    rating?: Prisma.IntNullableFilter<"SatisfactionEvaluation"> | number | null;
    comment?: Prisma.StringNullableFilter<"SatisfactionEvaluation"> | string | null;
    lastEvaluatedAt?: Prisma.DateTimeNullableFilter<"SatisfactionEvaluation"> | Date | string | null;
    nextEligibleAt?: Prisma.DateTimeNullableFilter<"SatisfactionEvaluation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SatisfactionEvaluation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SatisfactionEvaluation"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    system?: Prisma.XOR<Prisma.SystemScalarRelationFilter, Prisma.SystemWhereInput>;
    history?: Prisma.EvaluationHistoryListRelationFilter;
};
export type SatisfactionEvaluationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastEvaluatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    nextEligibleAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    student?: Prisma.StudentOrderByWithRelationInput;
    system?: Prisma.SystemOrderByWithRelationInput;
    history?: Prisma.EvaluationHistoryOrderByRelationAggregateInput;
};
export type SatisfactionEvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    studentId_systemId?: Prisma.SatisfactionEvaluationStudentIdSystemIdCompoundUniqueInput;
    AND?: Prisma.SatisfactionEvaluationWhereInput | Prisma.SatisfactionEvaluationWhereInput[];
    OR?: Prisma.SatisfactionEvaluationWhereInput[];
    NOT?: Prisma.SatisfactionEvaluationWhereInput | Prisma.SatisfactionEvaluationWhereInput[];
    studentId?: Prisma.UuidFilter<"SatisfactionEvaluation"> | string;
    systemId?: Prisma.UuidFilter<"SatisfactionEvaluation"> | string;
    rating?: Prisma.IntNullableFilter<"SatisfactionEvaluation"> | number | null;
    comment?: Prisma.StringNullableFilter<"SatisfactionEvaluation"> | string | null;
    lastEvaluatedAt?: Prisma.DateTimeNullableFilter<"SatisfactionEvaluation"> | Date | string | null;
    nextEligibleAt?: Prisma.DateTimeNullableFilter<"SatisfactionEvaluation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SatisfactionEvaluation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SatisfactionEvaluation"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    system?: Prisma.XOR<Prisma.SystemScalarRelationFilter, Prisma.SystemWhereInput>;
    history?: Prisma.EvaluationHistoryListRelationFilter;
}, "id" | "studentId_systemId">;
export type SatisfactionEvaluationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastEvaluatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    nextEligibleAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SatisfactionEvaluationCountOrderByAggregateInput;
    _avg?: Prisma.SatisfactionEvaluationAvgOrderByAggregateInput;
    _max?: Prisma.SatisfactionEvaluationMaxOrderByAggregateInput;
    _min?: Prisma.SatisfactionEvaluationMinOrderByAggregateInput;
    _sum?: Prisma.SatisfactionEvaluationSumOrderByAggregateInput;
};
export type SatisfactionEvaluationScalarWhereWithAggregatesInput = {
    AND?: Prisma.SatisfactionEvaluationScalarWhereWithAggregatesInput | Prisma.SatisfactionEvaluationScalarWhereWithAggregatesInput[];
    OR?: Prisma.SatisfactionEvaluationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SatisfactionEvaluationScalarWhereWithAggregatesInput | Prisma.SatisfactionEvaluationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"SatisfactionEvaluation"> | string;
    studentId?: Prisma.UuidWithAggregatesFilter<"SatisfactionEvaluation"> | string;
    systemId?: Prisma.UuidWithAggregatesFilter<"SatisfactionEvaluation"> | string;
    rating?: Prisma.IntNullableWithAggregatesFilter<"SatisfactionEvaluation"> | number | null;
    comment?: Prisma.StringNullableWithAggregatesFilter<"SatisfactionEvaluation"> | string | null;
    lastEvaluatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"SatisfactionEvaluation"> | Date | string | null;
    nextEligibleAt?: Prisma.DateTimeNullableWithAggregatesFilter<"SatisfactionEvaluation"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SatisfactionEvaluation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SatisfactionEvaluation"> | Date | string;
};
export type SatisfactionEvaluationCreateInput = {
    id?: string;
    rating?: number | null;
    comment?: string | null;
    lastEvaluatedAt?: Date | string | null;
    nextEligibleAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutEvaluationsInput;
    system: Prisma.SystemCreateNestedOneWithoutEvaluationsInput;
    history?: Prisma.EvaluationHistoryCreateNestedManyWithoutEvaluationInput;
};
export type SatisfactionEvaluationUncheckedCreateInput = {
    id?: string;
    studentId: string;
    systemId: string;
    rating?: number | null;
    comment?: string | null;
    lastEvaluatedAt?: Date | string | null;
    nextEligibleAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    history?: Prisma.EvaluationHistoryUncheckedCreateNestedManyWithoutEvaluationInput;
};
export type SatisfactionEvaluationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextEligibleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutEvaluationsNestedInput;
    system?: Prisma.SystemUpdateOneRequiredWithoutEvaluationsNestedInput;
    history?: Prisma.EvaluationHistoryUpdateManyWithoutEvaluationNestedInput;
};
export type SatisfactionEvaluationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    systemId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextEligibleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    history?: Prisma.EvaluationHistoryUncheckedUpdateManyWithoutEvaluationNestedInput;
};
export type SatisfactionEvaluationCreateManyInput = {
    id?: string;
    studentId: string;
    systemId: string;
    rating?: number | null;
    comment?: string | null;
    lastEvaluatedAt?: Date | string | null;
    nextEligibleAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SatisfactionEvaluationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextEligibleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SatisfactionEvaluationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    systemId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextEligibleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SatisfactionEvaluationListRelationFilter = {
    every?: Prisma.SatisfactionEvaluationWhereInput;
    some?: Prisma.SatisfactionEvaluationWhereInput;
    none?: Prisma.SatisfactionEvaluationWhereInput;
};
export type SatisfactionEvaluationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SatisfactionEvaluationStudentIdSystemIdCompoundUniqueInput = {
    studentId: string;
    systemId: string;
};
export type SatisfactionEvaluationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    lastEvaluatedAt?: Prisma.SortOrder;
    nextEligibleAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SatisfactionEvaluationAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type SatisfactionEvaluationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    lastEvaluatedAt?: Prisma.SortOrder;
    nextEligibleAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SatisfactionEvaluationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    lastEvaluatedAt?: Prisma.SortOrder;
    nextEligibleAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SatisfactionEvaluationSumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type SatisfactionEvaluationScalarRelationFilter = {
    is?: Prisma.SatisfactionEvaluationWhereInput;
    isNot?: Prisma.SatisfactionEvaluationWhereInput;
};
export type SatisfactionEvaluationCreateNestedManyWithoutSystemInput = {
    create?: Prisma.XOR<Prisma.SatisfactionEvaluationCreateWithoutSystemInput, Prisma.SatisfactionEvaluationUncheckedCreateWithoutSystemInput> | Prisma.SatisfactionEvaluationCreateWithoutSystemInput[] | Prisma.SatisfactionEvaluationUncheckedCreateWithoutSystemInput[];
    connectOrCreate?: Prisma.SatisfactionEvaluationCreateOrConnectWithoutSystemInput | Prisma.SatisfactionEvaluationCreateOrConnectWithoutSystemInput[];
    createMany?: Prisma.SatisfactionEvaluationCreateManySystemInputEnvelope;
    connect?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
};
export type SatisfactionEvaluationUncheckedCreateNestedManyWithoutSystemInput = {
    create?: Prisma.XOR<Prisma.SatisfactionEvaluationCreateWithoutSystemInput, Prisma.SatisfactionEvaluationUncheckedCreateWithoutSystemInput> | Prisma.SatisfactionEvaluationCreateWithoutSystemInput[] | Prisma.SatisfactionEvaluationUncheckedCreateWithoutSystemInput[];
    connectOrCreate?: Prisma.SatisfactionEvaluationCreateOrConnectWithoutSystemInput | Prisma.SatisfactionEvaluationCreateOrConnectWithoutSystemInput[];
    createMany?: Prisma.SatisfactionEvaluationCreateManySystemInputEnvelope;
    connect?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
};
export type SatisfactionEvaluationUpdateManyWithoutSystemNestedInput = {
    create?: Prisma.XOR<Prisma.SatisfactionEvaluationCreateWithoutSystemInput, Prisma.SatisfactionEvaluationUncheckedCreateWithoutSystemInput> | Prisma.SatisfactionEvaluationCreateWithoutSystemInput[] | Prisma.SatisfactionEvaluationUncheckedCreateWithoutSystemInput[];
    connectOrCreate?: Prisma.SatisfactionEvaluationCreateOrConnectWithoutSystemInput | Prisma.SatisfactionEvaluationCreateOrConnectWithoutSystemInput[];
    upsert?: Prisma.SatisfactionEvaluationUpsertWithWhereUniqueWithoutSystemInput | Prisma.SatisfactionEvaluationUpsertWithWhereUniqueWithoutSystemInput[];
    createMany?: Prisma.SatisfactionEvaluationCreateManySystemInputEnvelope;
    set?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
    disconnect?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
    delete?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
    connect?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
    update?: Prisma.SatisfactionEvaluationUpdateWithWhereUniqueWithoutSystemInput | Prisma.SatisfactionEvaluationUpdateWithWhereUniqueWithoutSystemInput[];
    updateMany?: Prisma.SatisfactionEvaluationUpdateManyWithWhereWithoutSystemInput | Prisma.SatisfactionEvaluationUpdateManyWithWhereWithoutSystemInput[];
    deleteMany?: Prisma.SatisfactionEvaluationScalarWhereInput | Prisma.SatisfactionEvaluationScalarWhereInput[];
};
export type SatisfactionEvaluationUncheckedUpdateManyWithoutSystemNestedInput = {
    create?: Prisma.XOR<Prisma.SatisfactionEvaluationCreateWithoutSystemInput, Prisma.SatisfactionEvaluationUncheckedCreateWithoutSystemInput> | Prisma.SatisfactionEvaluationCreateWithoutSystemInput[] | Prisma.SatisfactionEvaluationUncheckedCreateWithoutSystemInput[];
    connectOrCreate?: Prisma.SatisfactionEvaluationCreateOrConnectWithoutSystemInput | Prisma.SatisfactionEvaluationCreateOrConnectWithoutSystemInput[];
    upsert?: Prisma.SatisfactionEvaluationUpsertWithWhereUniqueWithoutSystemInput | Prisma.SatisfactionEvaluationUpsertWithWhereUniqueWithoutSystemInput[];
    createMany?: Prisma.SatisfactionEvaluationCreateManySystemInputEnvelope;
    set?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
    disconnect?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
    delete?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
    connect?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
    update?: Prisma.SatisfactionEvaluationUpdateWithWhereUniqueWithoutSystemInput | Prisma.SatisfactionEvaluationUpdateWithWhereUniqueWithoutSystemInput[];
    updateMany?: Prisma.SatisfactionEvaluationUpdateManyWithWhereWithoutSystemInput | Prisma.SatisfactionEvaluationUpdateManyWithWhereWithoutSystemInput[];
    deleteMany?: Prisma.SatisfactionEvaluationScalarWhereInput | Prisma.SatisfactionEvaluationScalarWhereInput[];
};
export type SatisfactionEvaluationCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.SatisfactionEvaluationCreateWithoutStudentInput, Prisma.SatisfactionEvaluationUncheckedCreateWithoutStudentInput> | Prisma.SatisfactionEvaluationCreateWithoutStudentInput[] | Prisma.SatisfactionEvaluationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.SatisfactionEvaluationCreateOrConnectWithoutStudentInput | Prisma.SatisfactionEvaluationCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.SatisfactionEvaluationCreateManyStudentInputEnvelope;
    connect?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
};
export type SatisfactionEvaluationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.SatisfactionEvaluationCreateWithoutStudentInput, Prisma.SatisfactionEvaluationUncheckedCreateWithoutStudentInput> | Prisma.SatisfactionEvaluationCreateWithoutStudentInput[] | Prisma.SatisfactionEvaluationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.SatisfactionEvaluationCreateOrConnectWithoutStudentInput | Prisma.SatisfactionEvaluationCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.SatisfactionEvaluationCreateManyStudentInputEnvelope;
    connect?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
};
export type SatisfactionEvaluationUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.SatisfactionEvaluationCreateWithoutStudentInput, Prisma.SatisfactionEvaluationUncheckedCreateWithoutStudentInput> | Prisma.SatisfactionEvaluationCreateWithoutStudentInput[] | Prisma.SatisfactionEvaluationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.SatisfactionEvaluationCreateOrConnectWithoutStudentInput | Prisma.SatisfactionEvaluationCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.SatisfactionEvaluationUpsertWithWhereUniqueWithoutStudentInput | Prisma.SatisfactionEvaluationUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.SatisfactionEvaluationCreateManyStudentInputEnvelope;
    set?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
    disconnect?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
    delete?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
    connect?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
    update?: Prisma.SatisfactionEvaluationUpdateWithWhereUniqueWithoutStudentInput | Prisma.SatisfactionEvaluationUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.SatisfactionEvaluationUpdateManyWithWhereWithoutStudentInput | Prisma.SatisfactionEvaluationUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.SatisfactionEvaluationScalarWhereInput | Prisma.SatisfactionEvaluationScalarWhereInput[];
};
export type SatisfactionEvaluationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.SatisfactionEvaluationCreateWithoutStudentInput, Prisma.SatisfactionEvaluationUncheckedCreateWithoutStudentInput> | Prisma.SatisfactionEvaluationCreateWithoutStudentInput[] | Prisma.SatisfactionEvaluationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.SatisfactionEvaluationCreateOrConnectWithoutStudentInput | Prisma.SatisfactionEvaluationCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.SatisfactionEvaluationUpsertWithWhereUniqueWithoutStudentInput | Prisma.SatisfactionEvaluationUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.SatisfactionEvaluationCreateManyStudentInputEnvelope;
    set?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
    disconnect?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
    delete?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
    connect?: Prisma.SatisfactionEvaluationWhereUniqueInput | Prisma.SatisfactionEvaluationWhereUniqueInput[];
    update?: Prisma.SatisfactionEvaluationUpdateWithWhereUniqueWithoutStudentInput | Prisma.SatisfactionEvaluationUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.SatisfactionEvaluationUpdateManyWithWhereWithoutStudentInput | Prisma.SatisfactionEvaluationUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.SatisfactionEvaluationScalarWhereInput | Prisma.SatisfactionEvaluationScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type SatisfactionEvaluationCreateNestedOneWithoutHistoryInput = {
    create?: Prisma.XOR<Prisma.SatisfactionEvaluationCreateWithoutHistoryInput, Prisma.SatisfactionEvaluationUncheckedCreateWithoutHistoryInput>;
    connectOrCreate?: Prisma.SatisfactionEvaluationCreateOrConnectWithoutHistoryInput;
    connect?: Prisma.SatisfactionEvaluationWhereUniqueInput;
};
export type SatisfactionEvaluationUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: Prisma.XOR<Prisma.SatisfactionEvaluationCreateWithoutHistoryInput, Prisma.SatisfactionEvaluationUncheckedCreateWithoutHistoryInput>;
    connectOrCreate?: Prisma.SatisfactionEvaluationCreateOrConnectWithoutHistoryInput;
    upsert?: Prisma.SatisfactionEvaluationUpsertWithoutHistoryInput;
    connect?: Prisma.SatisfactionEvaluationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SatisfactionEvaluationUpdateToOneWithWhereWithoutHistoryInput, Prisma.SatisfactionEvaluationUpdateWithoutHistoryInput>, Prisma.SatisfactionEvaluationUncheckedUpdateWithoutHistoryInput>;
};
export type SatisfactionEvaluationCreateWithoutSystemInput = {
    id?: string;
    rating?: number | null;
    comment?: string | null;
    lastEvaluatedAt?: Date | string | null;
    nextEligibleAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutEvaluationsInput;
    history?: Prisma.EvaluationHistoryCreateNestedManyWithoutEvaluationInput;
};
export type SatisfactionEvaluationUncheckedCreateWithoutSystemInput = {
    id?: string;
    studentId: string;
    rating?: number | null;
    comment?: string | null;
    lastEvaluatedAt?: Date | string | null;
    nextEligibleAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    history?: Prisma.EvaluationHistoryUncheckedCreateNestedManyWithoutEvaluationInput;
};
export type SatisfactionEvaluationCreateOrConnectWithoutSystemInput = {
    where: Prisma.SatisfactionEvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SatisfactionEvaluationCreateWithoutSystemInput, Prisma.SatisfactionEvaluationUncheckedCreateWithoutSystemInput>;
};
export type SatisfactionEvaluationCreateManySystemInputEnvelope = {
    data: Prisma.SatisfactionEvaluationCreateManySystemInput | Prisma.SatisfactionEvaluationCreateManySystemInput[];
    skipDuplicates?: boolean;
};
export type SatisfactionEvaluationUpsertWithWhereUniqueWithoutSystemInput = {
    where: Prisma.SatisfactionEvaluationWhereUniqueInput;
    update: Prisma.XOR<Prisma.SatisfactionEvaluationUpdateWithoutSystemInput, Prisma.SatisfactionEvaluationUncheckedUpdateWithoutSystemInput>;
    create: Prisma.XOR<Prisma.SatisfactionEvaluationCreateWithoutSystemInput, Prisma.SatisfactionEvaluationUncheckedCreateWithoutSystemInput>;
};
export type SatisfactionEvaluationUpdateWithWhereUniqueWithoutSystemInput = {
    where: Prisma.SatisfactionEvaluationWhereUniqueInput;
    data: Prisma.XOR<Prisma.SatisfactionEvaluationUpdateWithoutSystemInput, Prisma.SatisfactionEvaluationUncheckedUpdateWithoutSystemInput>;
};
export type SatisfactionEvaluationUpdateManyWithWhereWithoutSystemInput = {
    where: Prisma.SatisfactionEvaluationScalarWhereInput;
    data: Prisma.XOR<Prisma.SatisfactionEvaluationUpdateManyMutationInput, Prisma.SatisfactionEvaluationUncheckedUpdateManyWithoutSystemInput>;
};
export type SatisfactionEvaluationScalarWhereInput = {
    AND?: Prisma.SatisfactionEvaluationScalarWhereInput | Prisma.SatisfactionEvaluationScalarWhereInput[];
    OR?: Prisma.SatisfactionEvaluationScalarWhereInput[];
    NOT?: Prisma.SatisfactionEvaluationScalarWhereInput | Prisma.SatisfactionEvaluationScalarWhereInput[];
    id?: Prisma.UuidFilter<"SatisfactionEvaluation"> | string;
    studentId?: Prisma.UuidFilter<"SatisfactionEvaluation"> | string;
    systemId?: Prisma.UuidFilter<"SatisfactionEvaluation"> | string;
    rating?: Prisma.IntNullableFilter<"SatisfactionEvaluation"> | number | null;
    comment?: Prisma.StringNullableFilter<"SatisfactionEvaluation"> | string | null;
    lastEvaluatedAt?: Prisma.DateTimeNullableFilter<"SatisfactionEvaluation"> | Date | string | null;
    nextEligibleAt?: Prisma.DateTimeNullableFilter<"SatisfactionEvaluation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SatisfactionEvaluation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SatisfactionEvaluation"> | Date | string;
};
export type SatisfactionEvaluationCreateWithoutStudentInput = {
    id?: string;
    rating?: number | null;
    comment?: string | null;
    lastEvaluatedAt?: Date | string | null;
    nextEligibleAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    system: Prisma.SystemCreateNestedOneWithoutEvaluationsInput;
    history?: Prisma.EvaluationHistoryCreateNestedManyWithoutEvaluationInput;
};
export type SatisfactionEvaluationUncheckedCreateWithoutStudentInput = {
    id?: string;
    systemId: string;
    rating?: number | null;
    comment?: string | null;
    lastEvaluatedAt?: Date | string | null;
    nextEligibleAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    history?: Prisma.EvaluationHistoryUncheckedCreateNestedManyWithoutEvaluationInput;
};
export type SatisfactionEvaluationCreateOrConnectWithoutStudentInput = {
    where: Prisma.SatisfactionEvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SatisfactionEvaluationCreateWithoutStudentInput, Prisma.SatisfactionEvaluationUncheckedCreateWithoutStudentInput>;
};
export type SatisfactionEvaluationCreateManyStudentInputEnvelope = {
    data: Prisma.SatisfactionEvaluationCreateManyStudentInput | Prisma.SatisfactionEvaluationCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type SatisfactionEvaluationUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.SatisfactionEvaluationWhereUniqueInput;
    update: Prisma.XOR<Prisma.SatisfactionEvaluationUpdateWithoutStudentInput, Prisma.SatisfactionEvaluationUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.SatisfactionEvaluationCreateWithoutStudentInput, Prisma.SatisfactionEvaluationUncheckedCreateWithoutStudentInput>;
};
export type SatisfactionEvaluationUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.SatisfactionEvaluationWhereUniqueInput;
    data: Prisma.XOR<Prisma.SatisfactionEvaluationUpdateWithoutStudentInput, Prisma.SatisfactionEvaluationUncheckedUpdateWithoutStudentInput>;
};
export type SatisfactionEvaluationUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.SatisfactionEvaluationScalarWhereInput;
    data: Prisma.XOR<Prisma.SatisfactionEvaluationUpdateManyMutationInput, Prisma.SatisfactionEvaluationUncheckedUpdateManyWithoutStudentInput>;
};
export type SatisfactionEvaluationCreateWithoutHistoryInput = {
    id?: string;
    rating?: number | null;
    comment?: string | null;
    lastEvaluatedAt?: Date | string | null;
    nextEligibleAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutEvaluationsInput;
    system: Prisma.SystemCreateNestedOneWithoutEvaluationsInput;
};
export type SatisfactionEvaluationUncheckedCreateWithoutHistoryInput = {
    id?: string;
    studentId: string;
    systemId: string;
    rating?: number | null;
    comment?: string | null;
    lastEvaluatedAt?: Date | string | null;
    nextEligibleAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SatisfactionEvaluationCreateOrConnectWithoutHistoryInput = {
    where: Prisma.SatisfactionEvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SatisfactionEvaluationCreateWithoutHistoryInput, Prisma.SatisfactionEvaluationUncheckedCreateWithoutHistoryInput>;
};
export type SatisfactionEvaluationUpsertWithoutHistoryInput = {
    update: Prisma.XOR<Prisma.SatisfactionEvaluationUpdateWithoutHistoryInput, Prisma.SatisfactionEvaluationUncheckedUpdateWithoutHistoryInput>;
    create: Prisma.XOR<Prisma.SatisfactionEvaluationCreateWithoutHistoryInput, Prisma.SatisfactionEvaluationUncheckedCreateWithoutHistoryInput>;
    where?: Prisma.SatisfactionEvaluationWhereInput;
};
export type SatisfactionEvaluationUpdateToOneWithWhereWithoutHistoryInput = {
    where?: Prisma.SatisfactionEvaluationWhereInput;
    data: Prisma.XOR<Prisma.SatisfactionEvaluationUpdateWithoutHistoryInput, Prisma.SatisfactionEvaluationUncheckedUpdateWithoutHistoryInput>;
};
export type SatisfactionEvaluationUpdateWithoutHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextEligibleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutEvaluationsNestedInput;
    system?: Prisma.SystemUpdateOneRequiredWithoutEvaluationsNestedInput;
};
export type SatisfactionEvaluationUncheckedUpdateWithoutHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    systemId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextEligibleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SatisfactionEvaluationCreateManySystemInput = {
    id?: string;
    studentId: string;
    rating?: number | null;
    comment?: string | null;
    lastEvaluatedAt?: Date | string | null;
    nextEligibleAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SatisfactionEvaluationUpdateWithoutSystemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextEligibleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutEvaluationsNestedInput;
    history?: Prisma.EvaluationHistoryUpdateManyWithoutEvaluationNestedInput;
};
export type SatisfactionEvaluationUncheckedUpdateWithoutSystemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextEligibleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    history?: Prisma.EvaluationHistoryUncheckedUpdateManyWithoutEvaluationNestedInput;
};
export type SatisfactionEvaluationUncheckedUpdateManyWithoutSystemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextEligibleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SatisfactionEvaluationCreateManyStudentInput = {
    id?: string;
    systemId: string;
    rating?: number | null;
    comment?: string | null;
    lastEvaluatedAt?: Date | string | null;
    nextEligibleAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SatisfactionEvaluationUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextEligibleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    system?: Prisma.SystemUpdateOneRequiredWithoutEvaluationsNestedInput;
    history?: Prisma.EvaluationHistoryUpdateManyWithoutEvaluationNestedInput;
};
export type SatisfactionEvaluationUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    systemId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextEligibleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    history?: Prisma.EvaluationHistoryUncheckedUpdateManyWithoutEvaluationNestedInput;
};
export type SatisfactionEvaluationUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    systemId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextEligibleAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SatisfactionEvaluationCountOutputType = {
    history: number;
};
export type SatisfactionEvaluationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    history?: boolean | SatisfactionEvaluationCountOutputTypeCountHistoryArgs;
};
export type SatisfactionEvaluationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SatisfactionEvaluationCountOutputTypeSelect<ExtArgs> | null;
};
export type SatisfactionEvaluationCountOutputTypeCountHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationHistoryWhereInput;
};
export type SatisfactionEvaluationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    systemId?: boolean;
    rating?: boolean;
    comment?: boolean;
    lastEvaluatedAt?: boolean;
    nextEligibleAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
    history?: boolean | Prisma.SatisfactionEvaluation$historyArgs<ExtArgs>;
    _count?: boolean | Prisma.SatisfactionEvaluationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["satisfactionEvaluation"]>;
export type SatisfactionEvaluationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    systemId?: boolean;
    rating?: boolean;
    comment?: boolean;
    lastEvaluatedAt?: boolean;
    nextEligibleAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["satisfactionEvaluation"]>;
export type SatisfactionEvaluationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    systemId?: boolean;
    rating?: boolean;
    comment?: boolean;
    lastEvaluatedAt?: boolean;
    nextEligibleAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["satisfactionEvaluation"]>;
export type SatisfactionEvaluationSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    systemId?: boolean;
    rating?: boolean;
    comment?: boolean;
    lastEvaluatedAt?: boolean;
    nextEligibleAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SatisfactionEvaluationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentId" | "systemId" | "rating" | "comment" | "lastEvaluatedAt" | "nextEligibleAt" | "createdAt" | "updatedAt", ExtArgs["result"]["satisfactionEvaluation"]>;
export type SatisfactionEvaluationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
    history?: boolean | Prisma.SatisfactionEvaluation$historyArgs<ExtArgs>;
    _count?: boolean | Prisma.SatisfactionEvaluationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SatisfactionEvaluationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
};
export type SatisfactionEvaluationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
};
export type $SatisfactionEvaluationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SatisfactionEvaluation";
    objects: {
        student: Prisma.$StudentPayload<ExtArgs>;
        system: Prisma.$SystemPayload<ExtArgs>;
        history: Prisma.$EvaluationHistoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        studentId: string;
        systemId: string;
        rating: number | null;
        comment: string | null;
        lastEvaluatedAt: Date | null;
        nextEligibleAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["satisfactionEvaluation"]>;
    composites: {};
};
export type SatisfactionEvaluationGetPayload<S extends boolean | null | undefined | SatisfactionEvaluationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SatisfactionEvaluationPayload, S>;
export type SatisfactionEvaluationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SatisfactionEvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SatisfactionEvaluationCountAggregateInputType | true;
};
export interface SatisfactionEvaluationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SatisfactionEvaluation'];
        meta: {
            name: 'SatisfactionEvaluation';
        };
    };
    findUnique<T extends SatisfactionEvaluationFindUniqueArgs>(args: Prisma.SelectSubset<T, SatisfactionEvaluationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SatisfactionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SatisfactionEvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SatisfactionEvaluationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SatisfactionEvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SatisfactionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SatisfactionEvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SatisfactionEvaluationFindFirstArgs>(args?: Prisma.SelectSubset<T, SatisfactionEvaluationFindFirstArgs<ExtArgs>>): Prisma.Prisma__SatisfactionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SatisfactionEvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SatisfactionEvaluationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SatisfactionEvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SatisfactionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SatisfactionEvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SatisfactionEvaluationFindManyArgs>(args?: Prisma.SelectSubset<T, SatisfactionEvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SatisfactionEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SatisfactionEvaluationCreateArgs>(args: Prisma.SelectSubset<T, SatisfactionEvaluationCreateArgs<ExtArgs>>): Prisma.Prisma__SatisfactionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SatisfactionEvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SatisfactionEvaluationCreateManyArgs>(args?: Prisma.SelectSubset<T, SatisfactionEvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SatisfactionEvaluationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SatisfactionEvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SatisfactionEvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SatisfactionEvaluationDeleteArgs>(args: Prisma.SelectSubset<T, SatisfactionEvaluationDeleteArgs<ExtArgs>>): Prisma.Prisma__SatisfactionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SatisfactionEvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SatisfactionEvaluationUpdateArgs>(args: Prisma.SelectSubset<T, SatisfactionEvaluationUpdateArgs<ExtArgs>>): Prisma.Prisma__SatisfactionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SatisfactionEvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SatisfactionEvaluationDeleteManyArgs>(args?: Prisma.SelectSubset<T, SatisfactionEvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SatisfactionEvaluationUpdateManyArgs>(args: Prisma.SelectSubset<T, SatisfactionEvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SatisfactionEvaluationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SatisfactionEvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SatisfactionEvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SatisfactionEvaluationUpsertArgs>(args: Prisma.SelectSubset<T, SatisfactionEvaluationUpsertArgs<ExtArgs>>): Prisma.Prisma__SatisfactionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SatisfactionEvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SatisfactionEvaluationCountArgs>(args?: Prisma.Subset<T, SatisfactionEvaluationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SatisfactionEvaluationCountAggregateOutputType> : number>;
    aggregate<T extends SatisfactionEvaluationAggregateArgs>(args: Prisma.Subset<T, SatisfactionEvaluationAggregateArgs>): Prisma.PrismaPromise<GetSatisfactionEvaluationAggregateType<T>>;
    groupBy<T extends SatisfactionEvaluationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SatisfactionEvaluationGroupByArgs['orderBy'];
    } : {
        orderBy?: SatisfactionEvaluationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SatisfactionEvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSatisfactionEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SatisfactionEvaluationFieldRefs;
}
export interface Prisma__SatisfactionEvaluationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    system<T extends Prisma.SystemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SystemDefaultArgs<ExtArgs>>): Prisma.Prisma__SystemClient<runtime.Types.Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    history<T extends Prisma.SatisfactionEvaluation$historyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SatisfactionEvaluation$historyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SatisfactionEvaluationFieldRefs {
    readonly id: Prisma.FieldRef<"SatisfactionEvaluation", 'String'>;
    readonly studentId: Prisma.FieldRef<"SatisfactionEvaluation", 'String'>;
    readonly systemId: Prisma.FieldRef<"SatisfactionEvaluation", 'String'>;
    readonly rating: Prisma.FieldRef<"SatisfactionEvaluation", 'Int'>;
    readonly comment: Prisma.FieldRef<"SatisfactionEvaluation", 'String'>;
    readonly lastEvaluatedAt: Prisma.FieldRef<"SatisfactionEvaluation", 'DateTime'>;
    readonly nextEligibleAt: Prisma.FieldRef<"SatisfactionEvaluation", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"SatisfactionEvaluation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SatisfactionEvaluation", 'DateTime'>;
}
export type SatisfactionEvaluationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SatisfactionEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.SatisfactionEvaluationOmit<ExtArgs> | null;
    include?: Prisma.SatisfactionEvaluationInclude<ExtArgs> | null;
    where: Prisma.SatisfactionEvaluationWhereUniqueInput;
};
export type SatisfactionEvaluationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SatisfactionEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.SatisfactionEvaluationOmit<ExtArgs> | null;
    include?: Prisma.SatisfactionEvaluationInclude<ExtArgs> | null;
    where: Prisma.SatisfactionEvaluationWhereUniqueInput;
};
export type SatisfactionEvaluationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SatisfactionEvaluationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SatisfactionEvaluationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SatisfactionEvaluationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SatisfactionEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.SatisfactionEvaluationOmit<ExtArgs> | null;
    include?: Prisma.SatisfactionEvaluationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SatisfactionEvaluationCreateInput, Prisma.SatisfactionEvaluationUncheckedCreateInput>;
};
export type SatisfactionEvaluationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SatisfactionEvaluationCreateManyInput | Prisma.SatisfactionEvaluationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SatisfactionEvaluationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SatisfactionEvaluationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SatisfactionEvaluationOmit<ExtArgs> | null;
    data: Prisma.SatisfactionEvaluationCreateManyInput | Prisma.SatisfactionEvaluationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SatisfactionEvaluationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SatisfactionEvaluationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SatisfactionEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.SatisfactionEvaluationOmit<ExtArgs> | null;
    include?: Prisma.SatisfactionEvaluationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SatisfactionEvaluationUpdateInput, Prisma.SatisfactionEvaluationUncheckedUpdateInput>;
    where: Prisma.SatisfactionEvaluationWhereUniqueInput;
};
export type SatisfactionEvaluationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SatisfactionEvaluationUpdateManyMutationInput, Prisma.SatisfactionEvaluationUncheckedUpdateManyInput>;
    where?: Prisma.SatisfactionEvaluationWhereInput;
    limit?: number;
};
export type SatisfactionEvaluationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SatisfactionEvaluationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SatisfactionEvaluationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SatisfactionEvaluationUpdateManyMutationInput, Prisma.SatisfactionEvaluationUncheckedUpdateManyInput>;
    where?: Prisma.SatisfactionEvaluationWhereInput;
    limit?: number;
    include?: Prisma.SatisfactionEvaluationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SatisfactionEvaluationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SatisfactionEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.SatisfactionEvaluationOmit<ExtArgs> | null;
    include?: Prisma.SatisfactionEvaluationInclude<ExtArgs> | null;
    where: Prisma.SatisfactionEvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SatisfactionEvaluationCreateInput, Prisma.SatisfactionEvaluationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SatisfactionEvaluationUpdateInput, Prisma.SatisfactionEvaluationUncheckedUpdateInput>;
};
export type SatisfactionEvaluationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SatisfactionEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.SatisfactionEvaluationOmit<ExtArgs> | null;
    include?: Prisma.SatisfactionEvaluationInclude<ExtArgs> | null;
    where: Prisma.SatisfactionEvaluationWhereUniqueInput;
};
export type SatisfactionEvaluationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SatisfactionEvaluationWhereInput;
    limit?: number;
};
export type SatisfactionEvaluation$historyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationHistorySelect<ExtArgs> | null;
    omit?: Prisma.EvaluationHistoryOmit<ExtArgs> | null;
    include?: Prisma.EvaluationHistoryInclude<ExtArgs> | null;
    where?: Prisma.EvaluationHistoryWhereInput;
    orderBy?: Prisma.EvaluationHistoryOrderByWithRelationInput | Prisma.EvaluationHistoryOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationHistoryScalarFieldEnum | Prisma.EvaluationHistoryScalarFieldEnum[];
};
export type SatisfactionEvaluationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SatisfactionEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.SatisfactionEvaluationOmit<ExtArgs> | null;
    include?: Prisma.SatisfactionEvaluationInclude<ExtArgs> | null;
};
