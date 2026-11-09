import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EvaluationHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$EvaluationHistoryPayload>;
export type AggregateEvaluationHistory = {
    _count: EvaluationHistoryCountAggregateOutputType | null;
    _avg: EvaluationHistoryAvgAggregateOutputType | null;
    _sum: EvaluationHistorySumAggregateOutputType | null;
    _min: EvaluationHistoryMinAggregateOutputType | null;
    _max: EvaluationHistoryMaxAggregateOutputType | null;
};
export type EvaluationHistoryAvgAggregateOutputType = {
    rating: number | null;
};
export type EvaluationHistorySumAggregateOutputType = {
    rating: number | null;
};
export type EvaluationHistoryMinAggregateOutputType = {
    id: string | null;
    evaluationId: string | null;
    rating: number | null;
    comment: string | null;
    answeredAt: Date | null;
};
export type EvaluationHistoryMaxAggregateOutputType = {
    id: string | null;
    evaluationId: string | null;
    rating: number | null;
    comment: string | null;
    answeredAt: Date | null;
};
export type EvaluationHistoryCountAggregateOutputType = {
    id: number;
    evaluationId: number;
    rating: number;
    comment: number;
    answeredAt: number;
    _all: number;
};
export type EvaluationHistoryAvgAggregateInputType = {
    rating?: true;
};
export type EvaluationHistorySumAggregateInputType = {
    rating?: true;
};
export type EvaluationHistoryMinAggregateInputType = {
    id?: true;
    evaluationId?: true;
    rating?: true;
    comment?: true;
    answeredAt?: true;
};
export type EvaluationHistoryMaxAggregateInputType = {
    id?: true;
    evaluationId?: true;
    rating?: true;
    comment?: true;
    answeredAt?: true;
};
export type EvaluationHistoryCountAggregateInputType = {
    id?: true;
    evaluationId?: true;
    rating?: true;
    comment?: true;
    answeredAt?: true;
    _all?: true;
};
export type EvaluationHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationHistoryWhereInput;
    orderBy?: Prisma.EvaluationHistoryOrderByWithRelationInput | Prisma.EvaluationHistoryOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EvaluationHistoryCountAggregateInputType;
    _avg?: EvaluationHistoryAvgAggregateInputType;
    _sum?: EvaluationHistorySumAggregateInputType;
    _min?: EvaluationHistoryMinAggregateInputType;
    _max?: EvaluationHistoryMaxAggregateInputType;
};
export type GetEvaluationHistoryAggregateType<T extends EvaluationHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateEvaluationHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvaluationHistory[P]> : Prisma.GetScalarType<T[P], AggregateEvaluationHistory[P]>;
};
export type EvaluationHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationHistoryWhereInput;
    orderBy?: Prisma.EvaluationHistoryOrderByWithAggregationInput | Prisma.EvaluationHistoryOrderByWithAggregationInput[];
    by: Prisma.EvaluationHistoryScalarFieldEnum[] | Prisma.EvaluationHistoryScalarFieldEnum;
    having?: Prisma.EvaluationHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EvaluationHistoryCountAggregateInputType | true;
    _avg?: EvaluationHistoryAvgAggregateInputType;
    _sum?: EvaluationHistorySumAggregateInputType;
    _min?: EvaluationHistoryMinAggregateInputType;
    _max?: EvaluationHistoryMaxAggregateInputType;
};
export type EvaluationHistoryGroupByOutputType = {
    id: string;
    evaluationId: string;
    rating: number;
    comment: string | null;
    answeredAt: Date;
    _count: EvaluationHistoryCountAggregateOutputType | null;
    _avg: EvaluationHistoryAvgAggregateOutputType | null;
    _sum: EvaluationHistorySumAggregateOutputType | null;
    _min: EvaluationHistoryMinAggregateOutputType | null;
    _max: EvaluationHistoryMaxAggregateOutputType | null;
};
export type GetEvaluationHistoryGroupByPayload<T extends EvaluationHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EvaluationHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EvaluationHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EvaluationHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EvaluationHistoryGroupByOutputType[P]>;
}>>;
export type EvaluationHistoryWhereInput = {
    AND?: Prisma.EvaluationHistoryWhereInput | Prisma.EvaluationHistoryWhereInput[];
    OR?: Prisma.EvaluationHistoryWhereInput[];
    NOT?: Prisma.EvaluationHistoryWhereInput | Prisma.EvaluationHistoryWhereInput[];
    id?: Prisma.UuidFilter<"EvaluationHistory"> | string;
    evaluationId?: Prisma.UuidFilter<"EvaluationHistory"> | string;
    rating?: Prisma.IntFilter<"EvaluationHistory"> | number;
    comment?: Prisma.StringNullableFilter<"EvaluationHistory"> | string | null;
    answeredAt?: Prisma.DateTimeFilter<"EvaluationHistory"> | Date | string;
    evaluation?: Prisma.XOR<Prisma.SatisfactionEvaluationScalarRelationFilter, Prisma.SatisfactionEvaluationWhereInput>;
};
export type EvaluationHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    evaluationId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
    evaluation?: Prisma.SatisfactionEvaluationOrderByWithRelationInput;
};
export type EvaluationHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EvaluationHistoryWhereInput | Prisma.EvaluationHistoryWhereInput[];
    OR?: Prisma.EvaluationHistoryWhereInput[];
    NOT?: Prisma.EvaluationHistoryWhereInput | Prisma.EvaluationHistoryWhereInput[];
    evaluationId?: Prisma.UuidFilter<"EvaluationHistory"> | string;
    rating?: Prisma.IntFilter<"EvaluationHistory"> | number;
    comment?: Prisma.StringNullableFilter<"EvaluationHistory"> | string | null;
    answeredAt?: Prisma.DateTimeFilter<"EvaluationHistory"> | Date | string;
    evaluation?: Prisma.XOR<Prisma.SatisfactionEvaluationScalarRelationFilter, Prisma.SatisfactionEvaluationWhereInput>;
}, "id">;
export type EvaluationHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    evaluationId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
    _count?: Prisma.EvaluationHistoryCountOrderByAggregateInput;
    _avg?: Prisma.EvaluationHistoryAvgOrderByAggregateInput;
    _max?: Prisma.EvaluationHistoryMaxOrderByAggregateInput;
    _min?: Prisma.EvaluationHistoryMinOrderByAggregateInput;
    _sum?: Prisma.EvaluationHistorySumOrderByAggregateInput;
};
export type EvaluationHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.EvaluationHistoryScalarWhereWithAggregatesInput | Prisma.EvaluationHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.EvaluationHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EvaluationHistoryScalarWhereWithAggregatesInput | Prisma.EvaluationHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EvaluationHistory"> | string;
    evaluationId?: Prisma.UuidWithAggregatesFilter<"EvaluationHistory"> | string;
    rating?: Prisma.IntWithAggregatesFilter<"EvaluationHistory"> | number;
    comment?: Prisma.StringNullableWithAggregatesFilter<"EvaluationHistory"> | string | null;
    answeredAt?: Prisma.DateTimeWithAggregatesFilter<"EvaluationHistory"> | Date | string;
};
export type EvaluationHistoryCreateInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    answeredAt?: Date | string;
    evaluation: Prisma.SatisfactionEvaluationCreateNestedOneWithoutHistoryInput;
};
export type EvaluationHistoryUncheckedCreateInput = {
    id?: string;
    evaluationId: string;
    rating: number;
    comment?: string | null;
    answeredAt?: Date | string;
};
export type EvaluationHistoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluation?: Prisma.SatisfactionEvaluationUpdateOneRequiredWithoutHistoryNestedInput;
};
export type EvaluationHistoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evaluationId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationHistoryCreateManyInput = {
    id?: string;
    evaluationId: string;
    rating: number;
    comment?: string | null;
    answeredAt?: Date | string;
};
export type EvaluationHistoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationHistoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evaluationId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationHistoryListRelationFilter = {
    every?: Prisma.EvaluationHistoryWhereInput;
    some?: Prisma.EvaluationHistoryWhereInput;
    none?: Prisma.EvaluationHistoryWhereInput;
};
export type EvaluationHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EvaluationHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evaluationId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
};
export type EvaluationHistoryAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type EvaluationHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evaluationId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
};
export type EvaluationHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evaluationId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
};
export type EvaluationHistorySumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type EvaluationHistoryCreateNestedManyWithoutEvaluationInput = {
    create?: Prisma.XOR<Prisma.EvaluationHistoryCreateWithoutEvaluationInput, Prisma.EvaluationHistoryUncheckedCreateWithoutEvaluationInput> | Prisma.EvaluationHistoryCreateWithoutEvaluationInput[] | Prisma.EvaluationHistoryUncheckedCreateWithoutEvaluationInput[];
    connectOrCreate?: Prisma.EvaluationHistoryCreateOrConnectWithoutEvaluationInput | Prisma.EvaluationHistoryCreateOrConnectWithoutEvaluationInput[];
    createMany?: Prisma.EvaluationHistoryCreateManyEvaluationInputEnvelope;
    connect?: Prisma.EvaluationHistoryWhereUniqueInput | Prisma.EvaluationHistoryWhereUniqueInput[];
};
export type EvaluationHistoryUncheckedCreateNestedManyWithoutEvaluationInput = {
    create?: Prisma.XOR<Prisma.EvaluationHistoryCreateWithoutEvaluationInput, Prisma.EvaluationHistoryUncheckedCreateWithoutEvaluationInput> | Prisma.EvaluationHistoryCreateWithoutEvaluationInput[] | Prisma.EvaluationHistoryUncheckedCreateWithoutEvaluationInput[];
    connectOrCreate?: Prisma.EvaluationHistoryCreateOrConnectWithoutEvaluationInput | Prisma.EvaluationHistoryCreateOrConnectWithoutEvaluationInput[];
    createMany?: Prisma.EvaluationHistoryCreateManyEvaluationInputEnvelope;
    connect?: Prisma.EvaluationHistoryWhereUniqueInput | Prisma.EvaluationHistoryWhereUniqueInput[];
};
export type EvaluationHistoryUpdateManyWithoutEvaluationNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationHistoryCreateWithoutEvaluationInput, Prisma.EvaluationHistoryUncheckedCreateWithoutEvaluationInput> | Prisma.EvaluationHistoryCreateWithoutEvaluationInput[] | Prisma.EvaluationHistoryUncheckedCreateWithoutEvaluationInput[];
    connectOrCreate?: Prisma.EvaluationHistoryCreateOrConnectWithoutEvaluationInput | Prisma.EvaluationHistoryCreateOrConnectWithoutEvaluationInput[];
    upsert?: Prisma.EvaluationHistoryUpsertWithWhereUniqueWithoutEvaluationInput | Prisma.EvaluationHistoryUpsertWithWhereUniqueWithoutEvaluationInput[];
    createMany?: Prisma.EvaluationHistoryCreateManyEvaluationInputEnvelope;
    set?: Prisma.EvaluationHistoryWhereUniqueInput | Prisma.EvaluationHistoryWhereUniqueInput[];
    disconnect?: Prisma.EvaluationHistoryWhereUniqueInput | Prisma.EvaluationHistoryWhereUniqueInput[];
    delete?: Prisma.EvaluationHistoryWhereUniqueInput | Prisma.EvaluationHistoryWhereUniqueInput[];
    connect?: Prisma.EvaluationHistoryWhereUniqueInput | Prisma.EvaluationHistoryWhereUniqueInput[];
    update?: Prisma.EvaluationHistoryUpdateWithWhereUniqueWithoutEvaluationInput | Prisma.EvaluationHistoryUpdateWithWhereUniqueWithoutEvaluationInput[];
    updateMany?: Prisma.EvaluationHistoryUpdateManyWithWhereWithoutEvaluationInput | Prisma.EvaluationHistoryUpdateManyWithWhereWithoutEvaluationInput[];
    deleteMany?: Prisma.EvaluationHistoryScalarWhereInput | Prisma.EvaluationHistoryScalarWhereInput[];
};
export type EvaluationHistoryUncheckedUpdateManyWithoutEvaluationNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationHistoryCreateWithoutEvaluationInput, Prisma.EvaluationHistoryUncheckedCreateWithoutEvaluationInput> | Prisma.EvaluationHistoryCreateWithoutEvaluationInput[] | Prisma.EvaluationHistoryUncheckedCreateWithoutEvaluationInput[];
    connectOrCreate?: Prisma.EvaluationHistoryCreateOrConnectWithoutEvaluationInput | Prisma.EvaluationHistoryCreateOrConnectWithoutEvaluationInput[];
    upsert?: Prisma.EvaluationHistoryUpsertWithWhereUniqueWithoutEvaluationInput | Prisma.EvaluationHistoryUpsertWithWhereUniqueWithoutEvaluationInput[];
    createMany?: Prisma.EvaluationHistoryCreateManyEvaluationInputEnvelope;
    set?: Prisma.EvaluationHistoryWhereUniqueInput | Prisma.EvaluationHistoryWhereUniqueInput[];
    disconnect?: Prisma.EvaluationHistoryWhereUniqueInput | Prisma.EvaluationHistoryWhereUniqueInput[];
    delete?: Prisma.EvaluationHistoryWhereUniqueInput | Prisma.EvaluationHistoryWhereUniqueInput[];
    connect?: Prisma.EvaluationHistoryWhereUniqueInput | Prisma.EvaluationHistoryWhereUniqueInput[];
    update?: Prisma.EvaluationHistoryUpdateWithWhereUniqueWithoutEvaluationInput | Prisma.EvaluationHistoryUpdateWithWhereUniqueWithoutEvaluationInput[];
    updateMany?: Prisma.EvaluationHistoryUpdateManyWithWhereWithoutEvaluationInput | Prisma.EvaluationHistoryUpdateManyWithWhereWithoutEvaluationInput[];
    deleteMany?: Prisma.EvaluationHistoryScalarWhereInput | Prisma.EvaluationHistoryScalarWhereInput[];
};
export type EvaluationHistoryCreateWithoutEvaluationInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    answeredAt?: Date | string;
};
export type EvaluationHistoryUncheckedCreateWithoutEvaluationInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    answeredAt?: Date | string;
};
export type EvaluationHistoryCreateOrConnectWithoutEvaluationInput = {
    where: Prisma.EvaluationHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationHistoryCreateWithoutEvaluationInput, Prisma.EvaluationHistoryUncheckedCreateWithoutEvaluationInput>;
};
export type EvaluationHistoryCreateManyEvaluationInputEnvelope = {
    data: Prisma.EvaluationHistoryCreateManyEvaluationInput | Prisma.EvaluationHistoryCreateManyEvaluationInput[];
    skipDuplicates?: boolean;
};
export type EvaluationHistoryUpsertWithWhereUniqueWithoutEvaluationInput = {
    where: Prisma.EvaluationHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationHistoryUpdateWithoutEvaluationInput, Prisma.EvaluationHistoryUncheckedUpdateWithoutEvaluationInput>;
    create: Prisma.XOR<Prisma.EvaluationHistoryCreateWithoutEvaluationInput, Prisma.EvaluationHistoryUncheckedCreateWithoutEvaluationInput>;
};
export type EvaluationHistoryUpdateWithWhereUniqueWithoutEvaluationInput = {
    where: Prisma.EvaluationHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationHistoryUpdateWithoutEvaluationInput, Prisma.EvaluationHistoryUncheckedUpdateWithoutEvaluationInput>;
};
export type EvaluationHistoryUpdateManyWithWhereWithoutEvaluationInput = {
    where: Prisma.EvaluationHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationHistoryUpdateManyMutationInput, Prisma.EvaluationHistoryUncheckedUpdateManyWithoutEvaluationInput>;
};
export type EvaluationHistoryScalarWhereInput = {
    AND?: Prisma.EvaluationHistoryScalarWhereInput | Prisma.EvaluationHistoryScalarWhereInput[];
    OR?: Prisma.EvaluationHistoryScalarWhereInput[];
    NOT?: Prisma.EvaluationHistoryScalarWhereInput | Prisma.EvaluationHistoryScalarWhereInput[];
    id?: Prisma.UuidFilter<"EvaluationHistory"> | string;
    evaluationId?: Prisma.UuidFilter<"EvaluationHistory"> | string;
    rating?: Prisma.IntFilter<"EvaluationHistory"> | number;
    comment?: Prisma.StringNullableFilter<"EvaluationHistory"> | string | null;
    answeredAt?: Prisma.DateTimeFilter<"EvaluationHistory"> | Date | string;
};
export type EvaluationHistoryCreateManyEvaluationInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    answeredAt?: Date | string;
};
export type EvaluationHistoryUpdateWithoutEvaluationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationHistoryUncheckedUpdateWithoutEvaluationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationHistoryUncheckedUpdateManyWithoutEvaluationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    evaluationId?: boolean;
    rating?: boolean;
    comment?: boolean;
    answeredAt?: boolean;
    evaluation?: boolean | Prisma.SatisfactionEvaluationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationHistory"]>;
export type EvaluationHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    evaluationId?: boolean;
    rating?: boolean;
    comment?: boolean;
    answeredAt?: boolean;
    evaluation?: boolean | Prisma.SatisfactionEvaluationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationHistory"]>;
export type EvaluationHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    evaluationId?: boolean;
    rating?: boolean;
    comment?: boolean;
    answeredAt?: boolean;
    evaluation?: boolean | Prisma.SatisfactionEvaluationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationHistory"]>;
export type EvaluationHistorySelectScalar = {
    id?: boolean;
    evaluationId?: boolean;
    rating?: boolean;
    comment?: boolean;
    answeredAt?: boolean;
};
export type EvaluationHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "evaluationId" | "rating" | "comment" | "answeredAt", ExtArgs["result"]["evaluationHistory"]>;
export type EvaluationHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evaluation?: boolean | Prisma.SatisfactionEvaluationDefaultArgs<ExtArgs>;
};
export type EvaluationHistoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evaluation?: boolean | Prisma.SatisfactionEvaluationDefaultArgs<ExtArgs>;
};
export type EvaluationHistoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evaluation?: boolean | Prisma.SatisfactionEvaluationDefaultArgs<ExtArgs>;
};
export type $EvaluationHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EvaluationHistory";
    objects: {
        evaluation: Prisma.$SatisfactionEvaluationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        evaluationId: string;
        rating: number;
        comment: string | null;
        answeredAt: Date;
    }, ExtArgs["result"]["evaluationHistory"]>;
    composites: {};
};
export type EvaluationHistoryGetPayload<S extends boolean | null | undefined | EvaluationHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EvaluationHistoryPayload, S>;
export type EvaluationHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EvaluationHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EvaluationHistoryCountAggregateInputType | true;
};
export interface EvaluationHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EvaluationHistory'];
        meta: {
            name: 'EvaluationHistory';
        };
    };
    findUnique<T extends EvaluationHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, EvaluationHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EvaluationHistoryClient<runtime.Types.Result.GetResult<Prisma.$EvaluationHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EvaluationHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EvaluationHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationHistoryClient<runtime.Types.Result.GetResult<Prisma.$EvaluationHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EvaluationHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, EvaluationHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__EvaluationHistoryClient<runtime.Types.Result.GetResult<Prisma.$EvaluationHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EvaluationHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EvaluationHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationHistoryClient<runtime.Types.Result.GetResult<Prisma.$EvaluationHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EvaluationHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, EvaluationHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EvaluationHistoryCreateArgs>(args: Prisma.SelectSubset<T, EvaluationHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__EvaluationHistoryClient<runtime.Types.Result.GetResult<Prisma.$EvaluationHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EvaluationHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, EvaluationHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EvaluationHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EvaluationHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EvaluationHistoryDeleteArgs>(args: Prisma.SelectSubset<T, EvaluationHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__EvaluationHistoryClient<runtime.Types.Result.GetResult<Prisma.$EvaluationHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EvaluationHistoryUpdateArgs>(args: Prisma.SelectSubset<T, EvaluationHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__EvaluationHistoryClient<runtime.Types.Result.GetResult<Prisma.$EvaluationHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EvaluationHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, EvaluationHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EvaluationHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, EvaluationHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EvaluationHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EvaluationHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EvaluationHistoryUpsertArgs>(args: Prisma.SelectSubset<T, EvaluationHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__EvaluationHistoryClient<runtime.Types.Result.GetResult<Prisma.$EvaluationHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EvaluationHistoryCountArgs>(args?: Prisma.Subset<T, EvaluationHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EvaluationHistoryCountAggregateOutputType> : number>;
    aggregate<T extends EvaluationHistoryAggregateArgs>(args: Prisma.Subset<T, EvaluationHistoryAggregateArgs>): Prisma.PrismaPromise<GetEvaluationHistoryAggregateType<T>>;
    groupBy<T extends EvaluationHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EvaluationHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: EvaluationHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EvaluationHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EvaluationHistoryFieldRefs;
}
export interface Prisma__EvaluationHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    evaluation<T extends Prisma.SatisfactionEvaluationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SatisfactionEvaluationDefaultArgs<ExtArgs>>): Prisma.Prisma__SatisfactionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SatisfactionEvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EvaluationHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"EvaluationHistory", 'String'>;
    readonly evaluationId: Prisma.FieldRef<"EvaluationHistory", 'String'>;
    readonly rating: Prisma.FieldRef<"EvaluationHistory", 'Int'>;
    readonly comment: Prisma.FieldRef<"EvaluationHistory", 'String'>;
    readonly answeredAt: Prisma.FieldRef<"EvaluationHistory", 'DateTime'>;
}
export type EvaluationHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationHistorySelect<ExtArgs> | null;
    omit?: Prisma.EvaluationHistoryOmit<ExtArgs> | null;
    include?: Prisma.EvaluationHistoryInclude<ExtArgs> | null;
    where: Prisma.EvaluationHistoryWhereUniqueInput;
};
export type EvaluationHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationHistorySelect<ExtArgs> | null;
    omit?: Prisma.EvaluationHistoryOmit<ExtArgs> | null;
    include?: Prisma.EvaluationHistoryInclude<ExtArgs> | null;
    where: Prisma.EvaluationHistoryWhereUniqueInput;
};
export type EvaluationHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvaluationHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvaluationHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvaluationHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationHistorySelect<ExtArgs> | null;
    omit?: Prisma.EvaluationHistoryOmit<ExtArgs> | null;
    include?: Prisma.EvaluationHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationHistoryCreateInput, Prisma.EvaluationHistoryUncheckedCreateInput>;
};
export type EvaluationHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EvaluationHistoryCreateManyInput | Prisma.EvaluationHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EvaluationHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationHistorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationHistoryOmit<ExtArgs> | null;
    data: Prisma.EvaluationHistoryCreateManyInput | Prisma.EvaluationHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EvaluationHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EvaluationHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationHistorySelect<ExtArgs> | null;
    omit?: Prisma.EvaluationHistoryOmit<ExtArgs> | null;
    include?: Prisma.EvaluationHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationHistoryUpdateInput, Prisma.EvaluationHistoryUncheckedUpdateInput>;
    where: Prisma.EvaluationHistoryWhereUniqueInput;
};
export type EvaluationHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EvaluationHistoryUpdateManyMutationInput, Prisma.EvaluationHistoryUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationHistoryWhereInput;
    limit?: number;
};
export type EvaluationHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationHistoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationHistoryUpdateManyMutationInput, Prisma.EvaluationHistoryUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationHistoryWhereInput;
    limit?: number;
    include?: Prisma.EvaluationHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EvaluationHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationHistorySelect<ExtArgs> | null;
    omit?: Prisma.EvaluationHistoryOmit<ExtArgs> | null;
    include?: Prisma.EvaluationHistoryInclude<ExtArgs> | null;
    where: Prisma.EvaluationHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationHistoryCreateInput, Prisma.EvaluationHistoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EvaluationHistoryUpdateInput, Prisma.EvaluationHistoryUncheckedUpdateInput>;
};
export type EvaluationHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationHistorySelect<ExtArgs> | null;
    omit?: Prisma.EvaluationHistoryOmit<ExtArgs> | null;
    include?: Prisma.EvaluationHistoryInclude<ExtArgs> | null;
    where: Prisma.EvaluationHistoryWhereUniqueInput;
};
export type EvaluationHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationHistoryWhereInput;
    limit?: number;
};
export type EvaluationHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationHistorySelect<ExtArgs> | null;
    omit?: Prisma.EvaluationHistoryOmit<ExtArgs> | null;
    include?: Prisma.EvaluationHistoryInclude<ExtArgs> | null;
};
