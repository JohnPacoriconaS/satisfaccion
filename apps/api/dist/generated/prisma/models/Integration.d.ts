import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type IntegrationModel = runtime.Types.Result.DefaultSelection<Prisma.$IntegrationPayload>;
export type AggregateIntegration = {
    _count: IntegrationCountAggregateOutputType | null;
    _min: IntegrationMinAggregateOutputType | null;
    _max: IntegrationMaxAggregateOutputType | null;
};
export type IntegrationMinAggregateOutputType = {
    id: string | null;
    systemId: string | null;
    apiKeyHash: string | null;
    active: boolean | null;
    createdAt: Date | null;
};
export type IntegrationMaxAggregateOutputType = {
    id: string | null;
    systemId: string | null;
    apiKeyHash: string | null;
    active: boolean | null;
    createdAt: Date | null;
};
export type IntegrationCountAggregateOutputType = {
    id: number;
    systemId: number;
    apiKeyHash: number;
    allowedOrigins: number;
    active: number;
    createdAt: number;
    _all: number;
};
export type IntegrationMinAggregateInputType = {
    id?: true;
    systemId?: true;
    apiKeyHash?: true;
    active?: true;
    createdAt?: true;
};
export type IntegrationMaxAggregateInputType = {
    id?: true;
    systemId?: true;
    apiKeyHash?: true;
    active?: true;
    createdAt?: true;
};
export type IntegrationCountAggregateInputType = {
    id?: true;
    systemId?: true;
    apiKeyHash?: true;
    allowedOrigins?: true;
    active?: true;
    createdAt?: true;
    _all?: true;
};
export type IntegrationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IntegrationWhereInput;
    orderBy?: Prisma.IntegrationOrderByWithRelationInput | Prisma.IntegrationOrderByWithRelationInput[];
    cursor?: Prisma.IntegrationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IntegrationCountAggregateInputType;
    _min?: IntegrationMinAggregateInputType;
    _max?: IntegrationMaxAggregateInputType;
};
export type GetIntegrationAggregateType<T extends IntegrationAggregateArgs> = {
    [P in keyof T & keyof AggregateIntegration]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIntegration[P]> : Prisma.GetScalarType<T[P], AggregateIntegration[P]>;
};
export type IntegrationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IntegrationWhereInput;
    orderBy?: Prisma.IntegrationOrderByWithAggregationInput | Prisma.IntegrationOrderByWithAggregationInput[];
    by: Prisma.IntegrationScalarFieldEnum[] | Prisma.IntegrationScalarFieldEnum;
    having?: Prisma.IntegrationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IntegrationCountAggregateInputType | true;
    _min?: IntegrationMinAggregateInputType;
    _max?: IntegrationMaxAggregateInputType;
};
export type IntegrationGroupByOutputType = {
    id: string;
    systemId: string;
    apiKeyHash: string;
    allowedOrigins: string[];
    active: boolean;
    createdAt: Date;
    _count: IntegrationCountAggregateOutputType | null;
    _min: IntegrationMinAggregateOutputType | null;
    _max: IntegrationMaxAggregateOutputType | null;
};
export type GetIntegrationGroupByPayload<T extends IntegrationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IntegrationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IntegrationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IntegrationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IntegrationGroupByOutputType[P]>;
}>>;
export type IntegrationWhereInput = {
    AND?: Prisma.IntegrationWhereInput | Prisma.IntegrationWhereInput[];
    OR?: Prisma.IntegrationWhereInput[];
    NOT?: Prisma.IntegrationWhereInput | Prisma.IntegrationWhereInput[];
    id?: Prisma.UuidFilter<"Integration"> | string;
    systemId?: Prisma.UuidFilter<"Integration"> | string;
    apiKeyHash?: Prisma.StringFilter<"Integration"> | string;
    allowedOrigins?: Prisma.StringNullableListFilter<"Integration">;
    active?: Prisma.BoolFilter<"Integration"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Integration"> | Date | string;
    system?: Prisma.XOR<Prisma.SystemScalarRelationFilter, Prisma.SystemWhereInput>;
};
export type IntegrationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    apiKeyHash?: Prisma.SortOrder;
    allowedOrigins?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    system?: Prisma.SystemOrderByWithRelationInput;
};
export type IntegrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    systemId?: string;
    apiKeyHash?: string;
    AND?: Prisma.IntegrationWhereInput | Prisma.IntegrationWhereInput[];
    OR?: Prisma.IntegrationWhereInput[];
    NOT?: Prisma.IntegrationWhereInput | Prisma.IntegrationWhereInput[];
    allowedOrigins?: Prisma.StringNullableListFilter<"Integration">;
    active?: Prisma.BoolFilter<"Integration"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Integration"> | Date | string;
    system?: Prisma.XOR<Prisma.SystemScalarRelationFilter, Prisma.SystemWhereInput>;
}, "id" | "systemId" | "apiKeyHash">;
export type IntegrationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    apiKeyHash?: Prisma.SortOrder;
    allowedOrigins?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.IntegrationCountOrderByAggregateInput;
    _max?: Prisma.IntegrationMaxOrderByAggregateInput;
    _min?: Prisma.IntegrationMinOrderByAggregateInput;
};
export type IntegrationScalarWhereWithAggregatesInput = {
    AND?: Prisma.IntegrationScalarWhereWithAggregatesInput | Prisma.IntegrationScalarWhereWithAggregatesInput[];
    OR?: Prisma.IntegrationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IntegrationScalarWhereWithAggregatesInput | Prisma.IntegrationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Integration"> | string;
    systemId?: Prisma.UuidWithAggregatesFilter<"Integration"> | string;
    apiKeyHash?: Prisma.StringWithAggregatesFilter<"Integration"> | string;
    allowedOrigins?: Prisma.StringNullableListFilter<"Integration">;
    active?: Prisma.BoolWithAggregatesFilter<"Integration"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Integration"> | Date | string;
};
export type IntegrationCreateInput = {
    id?: string;
    apiKeyHash: string;
    allowedOrigins?: Prisma.IntegrationCreateallowedOriginsInput | string[];
    active?: boolean;
    createdAt?: Date | string;
    system: Prisma.SystemCreateNestedOneWithoutIntegrationInput;
};
export type IntegrationUncheckedCreateInput = {
    id?: string;
    systemId: string;
    apiKeyHash: string;
    allowedOrigins?: Prisma.IntegrationCreateallowedOriginsInput | string[];
    active?: boolean;
    createdAt?: Date | string;
};
export type IntegrationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKeyHash?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedOrigins?: Prisma.IntegrationUpdateallowedOriginsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    system?: Prisma.SystemUpdateOneRequiredWithoutIntegrationNestedInput;
};
export type IntegrationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    systemId?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKeyHash?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedOrigins?: Prisma.IntegrationUpdateallowedOriginsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IntegrationCreateManyInput = {
    id?: string;
    systemId: string;
    apiKeyHash: string;
    allowedOrigins?: Prisma.IntegrationCreateallowedOriginsInput | string[];
    active?: boolean;
    createdAt?: Date | string;
};
export type IntegrationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKeyHash?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedOrigins?: Prisma.IntegrationUpdateallowedOriginsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IntegrationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    systemId?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKeyHash?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedOrigins?: Prisma.IntegrationUpdateallowedOriginsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IntegrationNullableScalarRelationFilter = {
    is?: Prisma.IntegrationWhereInput | null;
    isNot?: Prisma.IntegrationWhereInput | null;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type IntegrationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    apiKeyHash?: Prisma.SortOrder;
    allowedOrigins?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IntegrationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    apiKeyHash?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IntegrationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    apiKeyHash?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IntegrationCreateNestedOneWithoutSystemInput = {
    create?: Prisma.XOR<Prisma.IntegrationCreateWithoutSystemInput, Prisma.IntegrationUncheckedCreateWithoutSystemInput>;
    connectOrCreate?: Prisma.IntegrationCreateOrConnectWithoutSystemInput;
    connect?: Prisma.IntegrationWhereUniqueInput;
};
export type IntegrationUncheckedCreateNestedOneWithoutSystemInput = {
    create?: Prisma.XOR<Prisma.IntegrationCreateWithoutSystemInput, Prisma.IntegrationUncheckedCreateWithoutSystemInput>;
    connectOrCreate?: Prisma.IntegrationCreateOrConnectWithoutSystemInput;
    connect?: Prisma.IntegrationWhereUniqueInput;
};
export type IntegrationUpdateOneWithoutSystemNestedInput = {
    create?: Prisma.XOR<Prisma.IntegrationCreateWithoutSystemInput, Prisma.IntegrationUncheckedCreateWithoutSystemInput>;
    connectOrCreate?: Prisma.IntegrationCreateOrConnectWithoutSystemInput;
    upsert?: Prisma.IntegrationUpsertWithoutSystemInput;
    disconnect?: Prisma.IntegrationWhereInput | boolean;
    delete?: Prisma.IntegrationWhereInput | boolean;
    connect?: Prisma.IntegrationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.IntegrationUpdateToOneWithWhereWithoutSystemInput, Prisma.IntegrationUpdateWithoutSystemInput>, Prisma.IntegrationUncheckedUpdateWithoutSystemInput>;
};
export type IntegrationUncheckedUpdateOneWithoutSystemNestedInput = {
    create?: Prisma.XOR<Prisma.IntegrationCreateWithoutSystemInput, Prisma.IntegrationUncheckedCreateWithoutSystemInput>;
    connectOrCreate?: Prisma.IntegrationCreateOrConnectWithoutSystemInput;
    upsert?: Prisma.IntegrationUpsertWithoutSystemInput;
    disconnect?: Prisma.IntegrationWhereInput | boolean;
    delete?: Prisma.IntegrationWhereInput | boolean;
    connect?: Prisma.IntegrationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.IntegrationUpdateToOneWithWhereWithoutSystemInput, Prisma.IntegrationUpdateWithoutSystemInput>, Prisma.IntegrationUncheckedUpdateWithoutSystemInput>;
};
export type IntegrationCreateallowedOriginsInput = {
    set: string[];
};
export type IntegrationUpdateallowedOriginsInput = {
    set?: string[];
    push?: string | string[];
};
export type IntegrationCreateWithoutSystemInput = {
    id?: string;
    apiKeyHash: string;
    allowedOrigins?: Prisma.IntegrationCreateallowedOriginsInput | string[];
    active?: boolean;
    createdAt?: Date | string;
};
export type IntegrationUncheckedCreateWithoutSystemInput = {
    id?: string;
    apiKeyHash: string;
    allowedOrigins?: Prisma.IntegrationCreateallowedOriginsInput | string[];
    active?: boolean;
    createdAt?: Date | string;
};
export type IntegrationCreateOrConnectWithoutSystemInput = {
    where: Prisma.IntegrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.IntegrationCreateWithoutSystemInput, Prisma.IntegrationUncheckedCreateWithoutSystemInput>;
};
export type IntegrationUpsertWithoutSystemInput = {
    update: Prisma.XOR<Prisma.IntegrationUpdateWithoutSystemInput, Prisma.IntegrationUncheckedUpdateWithoutSystemInput>;
    create: Prisma.XOR<Prisma.IntegrationCreateWithoutSystemInput, Prisma.IntegrationUncheckedCreateWithoutSystemInput>;
    where?: Prisma.IntegrationWhereInput;
};
export type IntegrationUpdateToOneWithWhereWithoutSystemInput = {
    where?: Prisma.IntegrationWhereInput;
    data: Prisma.XOR<Prisma.IntegrationUpdateWithoutSystemInput, Prisma.IntegrationUncheckedUpdateWithoutSystemInput>;
};
export type IntegrationUpdateWithoutSystemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKeyHash?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedOrigins?: Prisma.IntegrationUpdateallowedOriginsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IntegrationUncheckedUpdateWithoutSystemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKeyHash?: Prisma.StringFieldUpdateOperationsInput | string;
    allowedOrigins?: Prisma.IntegrationUpdateallowedOriginsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IntegrationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    systemId?: boolean;
    apiKeyHash?: boolean;
    allowedOrigins?: boolean;
    active?: boolean;
    createdAt?: boolean;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["integration"]>;
export type IntegrationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    systemId?: boolean;
    apiKeyHash?: boolean;
    allowedOrigins?: boolean;
    active?: boolean;
    createdAt?: boolean;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["integration"]>;
export type IntegrationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    systemId?: boolean;
    apiKeyHash?: boolean;
    allowedOrigins?: boolean;
    active?: boolean;
    createdAt?: boolean;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["integration"]>;
export type IntegrationSelectScalar = {
    id?: boolean;
    systemId?: boolean;
    apiKeyHash?: boolean;
    allowedOrigins?: boolean;
    active?: boolean;
    createdAt?: boolean;
};
export type IntegrationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "systemId" | "apiKeyHash" | "allowedOrigins" | "active" | "createdAt", ExtArgs["result"]["integration"]>;
export type IntegrationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
};
export type IntegrationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
};
export type IntegrationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
};
export type $IntegrationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Integration";
    objects: {
        system: Prisma.$SystemPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        systemId: string;
        apiKeyHash: string;
        allowedOrigins: string[];
        active: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["integration"]>;
    composites: {};
};
export type IntegrationGetPayload<S extends boolean | null | undefined | IntegrationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IntegrationPayload, S>;
export type IntegrationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IntegrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IntegrationCountAggregateInputType | true;
};
export interface IntegrationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Integration'];
        meta: {
            name: 'Integration';
        };
    };
    findUnique<T extends IntegrationFindUniqueArgs>(args: Prisma.SelectSubset<T, IntegrationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IntegrationClient<runtime.Types.Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IntegrationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IntegrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IntegrationClient<runtime.Types.Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IntegrationFindFirstArgs>(args?: Prisma.SelectSubset<T, IntegrationFindFirstArgs<ExtArgs>>): Prisma.Prisma__IntegrationClient<runtime.Types.Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IntegrationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IntegrationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IntegrationClient<runtime.Types.Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IntegrationFindManyArgs>(args?: Prisma.SelectSubset<T, IntegrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IntegrationCreateArgs>(args: Prisma.SelectSubset<T, IntegrationCreateArgs<ExtArgs>>): Prisma.Prisma__IntegrationClient<runtime.Types.Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IntegrationCreateManyArgs>(args?: Prisma.SelectSubset<T, IntegrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IntegrationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IntegrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IntegrationDeleteArgs>(args: Prisma.SelectSubset<T, IntegrationDeleteArgs<ExtArgs>>): Prisma.Prisma__IntegrationClient<runtime.Types.Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IntegrationUpdateArgs>(args: Prisma.SelectSubset<T, IntegrationUpdateArgs<ExtArgs>>): Prisma.Prisma__IntegrationClient<runtime.Types.Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IntegrationDeleteManyArgs>(args?: Prisma.SelectSubset<T, IntegrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IntegrationUpdateManyArgs>(args: Prisma.SelectSubset<T, IntegrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IntegrationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IntegrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IntegrationUpsertArgs>(args: Prisma.SelectSubset<T, IntegrationUpsertArgs<ExtArgs>>): Prisma.Prisma__IntegrationClient<runtime.Types.Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IntegrationCountArgs>(args?: Prisma.Subset<T, IntegrationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IntegrationCountAggregateOutputType> : number>;
    aggregate<T extends IntegrationAggregateArgs>(args: Prisma.Subset<T, IntegrationAggregateArgs>): Prisma.PrismaPromise<GetIntegrationAggregateType<T>>;
    groupBy<T extends IntegrationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IntegrationGroupByArgs['orderBy'];
    } : {
        orderBy?: IntegrationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IntegrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IntegrationFieldRefs;
}
export interface Prisma__IntegrationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    system<T extends Prisma.SystemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SystemDefaultArgs<ExtArgs>>): Prisma.Prisma__SystemClient<runtime.Types.Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IntegrationFieldRefs {
    readonly id: Prisma.FieldRef<"Integration", 'String'>;
    readonly systemId: Prisma.FieldRef<"Integration", 'String'>;
    readonly apiKeyHash: Prisma.FieldRef<"Integration", 'String'>;
    readonly allowedOrigins: Prisma.FieldRef<"Integration", 'String[]'>;
    readonly active: Prisma.FieldRef<"Integration", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Integration", 'DateTime'>;
}
export type IntegrationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationOmit<ExtArgs> | null;
    include?: Prisma.IntegrationInclude<ExtArgs> | null;
    where: Prisma.IntegrationWhereUniqueInput;
};
export type IntegrationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationOmit<ExtArgs> | null;
    include?: Prisma.IntegrationInclude<ExtArgs> | null;
    where: Prisma.IntegrationWhereUniqueInput;
};
export type IntegrationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationOmit<ExtArgs> | null;
    include?: Prisma.IntegrationInclude<ExtArgs> | null;
    where?: Prisma.IntegrationWhereInput;
    orderBy?: Prisma.IntegrationOrderByWithRelationInput | Prisma.IntegrationOrderByWithRelationInput[];
    cursor?: Prisma.IntegrationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IntegrationScalarFieldEnum | Prisma.IntegrationScalarFieldEnum[];
};
export type IntegrationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationOmit<ExtArgs> | null;
    include?: Prisma.IntegrationInclude<ExtArgs> | null;
    where?: Prisma.IntegrationWhereInput;
    orderBy?: Prisma.IntegrationOrderByWithRelationInput | Prisma.IntegrationOrderByWithRelationInput[];
    cursor?: Prisma.IntegrationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IntegrationScalarFieldEnum | Prisma.IntegrationScalarFieldEnum[];
};
export type IntegrationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationOmit<ExtArgs> | null;
    include?: Prisma.IntegrationInclude<ExtArgs> | null;
    where?: Prisma.IntegrationWhereInput;
    orderBy?: Prisma.IntegrationOrderByWithRelationInput | Prisma.IntegrationOrderByWithRelationInput[];
    cursor?: Prisma.IntegrationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IntegrationScalarFieldEnum | Prisma.IntegrationScalarFieldEnum[];
};
export type IntegrationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationOmit<ExtArgs> | null;
    include?: Prisma.IntegrationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IntegrationCreateInput, Prisma.IntegrationUncheckedCreateInput>;
};
export type IntegrationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IntegrationCreateManyInput | Prisma.IntegrationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IntegrationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IntegrationOmit<ExtArgs> | null;
    data: Prisma.IntegrationCreateManyInput | Prisma.IntegrationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.IntegrationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type IntegrationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationOmit<ExtArgs> | null;
    include?: Prisma.IntegrationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IntegrationUpdateInput, Prisma.IntegrationUncheckedUpdateInput>;
    where: Prisma.IntegrationWhereUniqueInput;
};
export type IntegrationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IntegrationUpdateManyMutationInput, Prisma.IntegrationUncheckedUpdateManyInput>;
    where?: Prisma.IntegrationWhereInput;
    limit?: number;
};
export type IntegrationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IntegrationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IntegrationUpdateManyMutationInput, Prisma.IntegrationUncheckedUpdateManyInput>;
    where?: Prisma.IntegrationWhereInput;
    limit?: number;
    include?: Prisma.IntegrationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type IntegrationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationOmit<ExtArgs> | null;
    include?: Prisma.IntegrationInclude<ExtArgs> | null;
    where: Prisma.IntegrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.IntegrationCreateInput, Prisma.IntegrationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IntegrationUpdateInput, Prisma.IntegrationUncheckedUpdateInput>;
};
export type IntegrationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationOmit<ExtArgs> | null;
    include?: Prisma.IntegrationInclude<ExtArgs> | null;
    where: Prisma.IntegrationWhereUniqueInput;
};
export type IntegrationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IntegrationWhereInput;
    limit?: number;
};
export type IntegrationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationOmit<ExtArgs> | null;
    include?: Prisma.IntegrationInclude<ExtArgs> | null;
};
