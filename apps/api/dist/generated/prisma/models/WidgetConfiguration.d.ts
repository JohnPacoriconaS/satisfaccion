import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WidgetConfigurationModel = runtime.Types.Result.DefaultSelection<Prisma.$WidgetConfigurationPayload>;
export type AggregateWidgetConfiguration = {
    _count: WidgetConfigurationCountAggregateOutputType | null;
    _avg: WidgetConfigurationAvgAggregateOutputType | null;
    _sum: WidgetConfigurationSumAggregateOutputType | null;
    _min: WidgetConfigurationMinAggregateOutputType | null;
    _max: WidgetConfigurationMaxAggregateOutputType | null;
};
export type WidgetConfigurationAvgAggregateOutputType = {
    frequencyValue: number | null;
    promptDelayMinutes: number | null;
};
export type WidgetConfigurationSumAggregateOutputType = {
    frequencyValue: number | null;
    promptDelayMinutes: number | null;
};
export type WidgetConfigurationMinAggregateOutputType = {
    id: string | null;
    systemId: string | null;
    frequencyValue: number | null;
    frequencyUnit: $Enums.FrequencyUnit | null;
    promptDelayMinutes: number | null;
    allowSkip: boolean | null;
    active: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WidgetConfigurationMaxAggregateOutputType = {
    id: string | null;
    systemId: string | null;
    frequencyValue: number | null;
    frequencyUnit: $Enums.FrequencyUnit | null;
    promptDelayMinutes: number | null;
    allowSkip: boolean | null;
    active: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WidgetConfigurationCountAggregateOutputType = {
    id: number;
    systemId: number;
    triggerMoments: number;
    frequencyValue: number;
    frequencyUnit: number;
    promptDelayMinutes: number;
    allowSkip: number;
    active: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type WidgetConfigurationAvgAggregateInputType = {
    frequencyValue?: true;
    promptDelayMinutes?: true;
};
export type WidgetConfigurationSumAggregateInputType = {
    frequencyValue?: true;
    promptDelayMinutes?: true;
};
export type WidgetConfigurationMinAggregateInputType = {
    id?: true;
    systemId?: true;
    frequencyValue?: true;
    frequencyUnit?: true;
    promptDelayMinutes?: true;
    allowSkip?: true;
    active?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WidgetConfigurationMaxAggregateInputType = {
    id?: true;
    systemId?: true;
    frequencyValue?: true;
    frequencyUnit?: true;
    promptDelayMinutes?: true;
    allowSkip?: true;
    active?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WidgetConfigurationCountAggregateInputType = {
    id?: true;
    systemId?: true;
    triggerMoments?: true;
    frequencyValue?: true;
    frequencyUnit?: true;
    promptDelayMinutes?: true;
    allowSkip?: true;
    active?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type WidgetConfigurationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WidgetConfigurationWhereInput;
    orderBy?: Prisma.WidgetConfigurationOrderByWithRelationInput | Prisma.WidgetConfigurationOrderByWithRelationInput[];
    cursor?: Prisma.WidgetConfigurationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WidgetConfigurationCountAggregateInputType;
    _avg?: WidgetConfigurationAvgAggregateInputType;
    _sum?: WidgetConfigurationSumAggregateInputType;
    _min?: WidgetConfigurationMinAggregateInputType;
    _max?: WidgetConfigurationMaxAggregateInputType;
};
export type GetWidgetConfigurationAggregateType<T extends WidgetConfigurationAggregateArgs> = {
    [P in keyof T & keyof AggregateWidgetConfiguration]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWidgetConfiguration[P]> : Prisma.GetScalarType<T[P], AggregateWidgetConfiguration[P]>;
};
export type WidgetConfigurationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WidgetConfigurationWhereInput;
    orderBy?: Prisma.WidgetConfigurationOrderByWithAggregationInput | Prisma.WidgetConfigurationOrderByWithAggregationInput[];
    by: Prisma.WidgetConfigurationScalarFieldEnum[] | Prisma.WidgetConfigurationScalarFieldEnum;
    having?: Prisma.WidgetConfigurationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WidgetConfigurationCountAggregateInputType | true;
    _avg?: WidgetConfigurationAvgAggregateInputType;
    _sum?: WidgetConfigurationSumAggregateInputType;
    _min?: WidgetConfigurationMinAggregateInputType;
    _max?: WidgetConfigurationMaxAggregateInputType;
};
export type WidgetConfigurationGroupByOutputType = {
    id: string;
    systemId: string;
    triggerMoments: $Enums.TriggerMoment[];
    frequencyValue: number;
    frequencyUnit: $Enums.FrequencyUnit;
    promptDelayMinutes: number;
    allowSkip: boolean;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: WidgetConfigurationCountAggregateOutputType | null;
    _avg: WidgetConfigurationAvgAggregateOutputType | null;
    _sum: WidgetConfigurationSumAggregateOutputType | null;
    _min: WidgetConfigurationMinAggregateOutputType | null;
    _max: WidgetConfigurationMaxAggregateOutputType | null;
};
export type GetWidgetConfigurationGroupByPayload<T extends WidgetConfigurationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WidgetConfigurationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WidgetConfigurationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WidgetConfigurationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WidgetConfigurationGroupByOutputType[P]>;
}>>;
export type WidgetConfigurationWhereInput = {
    AND?: Prisma.WidgetConfigurationWhereInput | Prisma.WidgetConfigurationWhereInput[];
    OR?: Prisma.WidgetConfigurationWhereInput[];
    NOT?: Prisma.WidgetConfigurationWhereInput | Prisma.WidgetConfigurationWhereInput[];
    id?: Prisma.UuidFilter<"WidgetConfiguration"> | string;
    systemId?: Prisma.UuidFilter<"WidgetConfiguration"> | string;
    triggerMoments?: Prisma.EnumTriggerMomentNullableListFilter<"WidgetConfiguration">;
    frequencyValue?: Prisma.IntFilter<"WidgetConfiguration"> | number;
    frequencyUnit?: Prisma.EnumFrequencyUnitFilter<"WidgetConfiguration"> | $Enums.FrequencyUnit;
    promptDelayMinutes?: Prisma.IntFilter<"WidgetConfiguration"> | number;
    allowSkip?: Prisma.BoolFilter<"WidgetConfiguration"> | boolean;
    active?: Prisma.BoolFilter<"WidgetConfiguration"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"WidgetConfiguration"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WidgetConfiguration"> | Date | string;
    system?: Prisma.XOR<Prisma.SystemScalarRelationFilter, Prisma.SystemWhereInput>;
};
export type WidgetConfigurationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    triggerMoments?: Prisma.SortOrder;
    frequencyValue?: Prisma.SortOrder;
    frequencyUnit?: Prisma.SortOrder;
    promptDelayMinutes?: Prisma.SortOrder;
    allowSkip?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    system?: Prisma.SystemOrderByWithRelationInput;
};
export type WidgetConfigurationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    systemId?: string;
    AND?: Prisma.WidgetConfigurationWhereInput | Prisma.WidgetConfigurationWhereInput[];
    OR?: Prisma.WidgetConfigurationWhereInput[];
    NOT?: Prisma.WidgetConfigurationWhereInput | Prisma.WidgetConfigurationWhereInput[];
    triggerMoments?: Prisma.EnumTriggerMomentNullableListFilter<"WidgetConfiguration">;
    frequencyValue?: Prisma.IntFilter<"WidgetConfiguration"> | number;
    frequencyUnit?: Prisma.EnumFrequencyUnitFilter<"WidgetConfiguration"> | $Enums.FrequencyUnit;
    promptDelayMinutes?: Prisma.IntFilter<"WidgetConfiguration"> | number;
    allowSkip?: Prisma.BoolFilter<"WidgetConfiguration"> | boolean;
    active?: Prisma.BoolFilter<"WidgetConfiguration"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"WidgetConfiguration"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WidgetConfiguration"> | Date | string;
    system?: Prisma.XOR<Prisma.SystemScalarRelationFilter, Prisma.SystemWhereInput>;
}, "id" | "systemId">;
export type WidgetConfigurationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    triggerMoments?: Prisma.SortOrder;
    frequencyValue?: Prisma.SortOrder;
    frequencyUnit?: Prisma.SortOrder;
    promptDelayMinutes?: Prisma.SortOrder;
    allowSkip?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.WidgetConfigurationCountOrderByAggregateInput;
    _avg?: Prisma.WidgetConfigurationAvgOrderByAggregateInput;
    _max?: Prisma.WidgetConfigurationMaxOrderByAggregateInput;
    _min?: Prisma.WidgetConfigurationMinOrderByAggregateInput;
    _sum?: Prisma.WidgetConfigurationSumOrderByAggregateInput;
};
export type WidgetConfigurationScalarWhereWithAggregatesInput = {
    AND?: Prisma.WidgetConfigurationScalarWhereWithAggregatesInput | Prisma.WidgetConfigurationScalarWhereWithAggregatesInput[];
    OR?: Prisma.WidgetConfigurationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WidgetConfigurationScalarWhereWithAggregatesInput | Prisma.WidgetConfigurationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"WidgetConfiguration"> | string;
    systemId?: Prisma.UuidWithAggregatesFilter<"WidgetConfiguration"> | string;
    triggerMoments?: Prisma.EnumTriggerMomentNullableListFilter<"WidgetConfiguration">;
    frequencyValue?: Prisma.IntWithAggregatesFilter<"WidgetConfiguration"> | number;
    frequencyUnit?: Prisma.EnumFrequencyUnitWithAggregatesFilter<"WidgetConfiguration"> | $Enums.FrequencyUnit;
    promptDelayMinutes?: Prisma.IntWithAggregatesFilter<"WidgetConfiguration"> | number;
    allowSkip?: Prisma.BoolWithAggregatesFilter<"WidgetConfiguration"> | boolean;
    active?: Prisma.BoolWithAggregatesFilter<"WidgetConfiguration"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WidgetConfiguration"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"WidgetConfiguration"> | Date | string;
};
export type WidgetConfigurationCreateInput = {
    id?: string;
    triggerMoments?: Prisma.WidgetConfigurationCreatetriggerMomentsInput | $Enums.TriggerMoment[];
    frequencyValue?: number;
    frequencyUnit?: $Enums.FrequencyUnit;
    promptDelayMinutes?: number;
    allowSkip?: boolean;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    system: Prisma.SystemCreateNestedOneWithoutConfigurationInput;
};
export type WidgetConfigurationUncheckedCreateInput = {
    id?: string;
    systemId: string;
    triggerMoments?: Prisma.WidgetConfigurationCreatetriggerMomentsInput | $Enums.TriggerMoment[];
    frequencyValue?: number;
    frequencyUnit?: $Enums.FrequencyUnit;
    promptDelayMinutes?: number;
    allowSkip?: boolean;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WidgetConfigurationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerMoments?: Prisma.WidgetConfigurationUpdatetriggerMomentsInput | $Enums.TriggerMoment[];
    frequencyValue?: Prisma.IntFieldUpdateOperationsInput | number;
    frequencyUnit?: Prisma.EnumFrequencyUnitFieldUpdateOperationsInput | $Enums.FrequencyUnit;
    promptDelayMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    allowSkip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    system?: Prisma.SystemUpdateOneRequiredWithoutConfigurationNestedInput;
};
export type WidgetConfigurationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    systemId?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerMoments?: Prisma.WidgetConfigurationUpdatetriggerMomentsInput | $Enums.TriggerMoment[];
    frequencyValue?: Prisma.IntFieldUpdateOperationsInput | number;
    frequencyUnit?: Prisma.EnumFrequencyUnitFieldUpdateOperationsInput | $Enums.FrequencyUnit;
    promptDelayMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    allowSkip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WidgetConfigurationCreateManyInput = {
    id?: string;
    systemId: string;
    triggerMoments?: Prisma.WidgetConfigurationCreatetriggerMomentsInput | $Enums.TriggerMoment[];
    frequencyValue?: number;
    frequencyUnit?: $Enums.FrequencyUnit;
    promptDelayMinutes?: number;
    allowSkip?: boolean;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WidgetConfigurationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerMoments?: Prisma.WidgetConfigurationUpdatetriggerMomentsInput | $Enums.TriggerMoment[];
    frequencyValue?: Prisma.IntFieldUpdateOperationsInput | number;
    frequencyUnit?: Prisma.EnumFrequencyUnitFieldUpdateOperationsInput | $Enums.FrequencyUnit;
    promptDelayMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    allowSkip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WidgetConfigurationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    systemId?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerMoments?: Prisma.WidgetConfigurationUpdatetriggerMomentsInput | $Enums.TriggerMoment[];
    frequencyValue?: Prisma.IntFieldUpdateOperationsInput | number;
    frequencyUnit?: Prisma.EnumFrequencyUnitFieldUpdateOperationsInput | $Enums.FrequencyUnit;
    promptDelayMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    allowSkip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WidgetConfigurationNullableScalarRelationFilter = {
    is?: Prisma.WidgetConfigurationWhereInput | null;
    isNot?: Prisma.WidgetConfigurationWhereInput | null;
};
export type EnumTriggerMomentNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.TriggerMoment[] | Prisma.ListEnumTriggerMomentFieldRefInput<$PrismaModel> | null;
    has?: $Enums.TriggerMoment | Prisma.EnumTriggerMomentFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.TriggerMoment[] | Prisma.ListEnumTriggerMomentFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.TriggerMoment[] | Prisma.ListEnumTriggerMomentFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type WidgetConfigurationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    triggerMoments?: Prisma.SortOrder;
    frequencyValue?: Prisma.SortOrder;
    frequencyUnit?: Prisma.SortOrder;
    promptDelayMinutes?: Prisma.SortOrder;
    allowSkip?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WidgetConfigurationAvgOrderByAggregateInput = {
    frequencyValue?: Prisma.SortOrder;
    promptDelayMinutes?: Prisma.SortOrder;
};
export type WidgetConfigurationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    frequencyValue?: Prisma.SortOrder;
    frequencyUnit?: Prisma.SortOrder;
    promptDelayMinutes?: Prisma.SortOrder;
    allowSkip?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WidgetConfigurationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    systemId?: Prisma.SortOrder;
    frequencyValue?: Prisma.SortOrder;
    frequencyUnit?: Prisma.SortOrder;
    promptDelayMinutes?: Prisma.SortOrder;
    allowSkip?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WidgetConfigurationSumOrderByAggregateInput = {
    frequencyValue?: Prisma.SortOrder;
    promptDelayMinutes?: Prisma.SortOrder;
};
export type WidgetConfigurationCreateNestedOneWithoutSystemInput = {
    create?: Prisma.XOR<Prisma.WidgetConfigurationCreateWithoutSystemInput, Prisma.WidgetConfigurationUncheckedCreateWithoutSystemInput>;
    connectOrCreate?: Prisma.WidgetConfigurationCreateOrConnectWithoutSystemInput;
    connect?: Prisma.WidgetConfigurationWhereUniqueInput;
};
export type WidgetConfigurationUncheckedCreateNestedOneWithoutSystemInput = {
    create?: Prisma.XOR<Prisma.WidgetConfigurationCreateWithoutSystemInput, Prisma.WidgetConfigurationUncheckedCreateWithoutSystemInput>;
    connectOrCreate?: Prisma.WidgetConfigurationCreateOrConnectWithoutSystemInput;
    connect?: Prisma.WidgetConfigurationWhereUniqueInput;
};
export type WidgetConfigurationUpdateOneWithoutSystemNestedInput = {
    create?: Prisma.XOR<Prisma.WidgetConfigurationCreateWithoutSystemInput, Prisma.WidgetConfigurationUncheckedCreateWithoutSystemInput>;
    connectOrCreate?: Prisma.WidgetConfigurationCreateOrConnectWithoutSystemInput;
    upsert?: Prisma.WidgetConfigurationUpsertWithoutSystemInput;
    disconnect?: Prisma.WidgetConfigurationWhereInput | boolean;
    delete?: Prisma.WidgetConfigurationWhereInput | boolean;
    connect?: Prisma.WidgetConfigurationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WidgetConfigurationUpdateToOneWithWhereWithoutSystemInput, Prisma.WidgetConfigurationUpdateWithoutSystemInput>, Prisma.WidgetConfigurationUncheckedUpdateWithoutSystemInput>;
};
export type WidgetConfigurationUncheckedUpdateOneWithoutSystemNestedInput = {
    create?: Prisma.XOR<Prisma.WidgetConfigurationCreateWithoutSystemInput, Prisma.WidgetConfigurationUncheckedCreateWithoutSystemInput>;
    connectOrCreate?: Prisma.WidgetConfigurationCreateOrConnectWithoutSystemInput;
    upsert?: Prisma.WidgetConfigurationUpsertWithoutSystemInput;
    disconnect?: Prisma.WidgetConfigurationWhereInput | boolean;
    delete?: Prisma.WidgetConfigurationWhereInput | boolean;
    connect?: Prisma.WidgetConfigurationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WidgetConfigurationUpdateToOneWithWhereWithoutSystemInput, Prisma.WidgetConfigurationUpdateWithoutSystemInput>, Prisma.WidgetConfigurationUncheckedUpdateWithoutSystemInput>;
};
export type WidgetConfigurationCreatetriggerMomentsInput = {
    set: $Enums.TriggerMoment[];
};
export type WidgetConfigurationUpdatetriggerMomentsInput = {
    set?: $Enums.TriggerMoment[];
    push?: $Enums.TriggerMoment | $Enums.TriggerMoment[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumFrequencyUnitFieldUpdateOperationsInput = {
    set?: $Enums.FrequencyUnit;
};
export type WidgetConfigurationCreateWithoutSystemInput = {
    id?: string;
    triggerMoments?: Prisma.WidgetConfigurationCreatetriggerMomentsInput | $Enums.TriggerMoment[];
    frequencyValue?: number;
    frequencyUnit?: $Enums.FrequencyUnit;
    promptDelayMinutes?: number;
    allowSkip?: boolean;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WidgetConfigurationUncheckedCreateWithoutSystemInput = {
    id?: string;
    triggerMoments?: Prisma.WidgetConfigurationCreatetriggerMomentsInput | $Enums.TriggerMoment[];
    frequencyValue?: number;
    frequencyUnit?: $Enums.FrequencyUnit;
    promptDelayMinutes?: number;
    allowSkip?: boolean;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WidgetConfigurationCreateOrConnectWithoutSystemInput = {
    where: Prisma.WidgetConfigurationWhereUniqueInput;
    create: Prisma.XOR<Prisma.WidgetConfigurationCreateWithoutSystemInput, Prisma.WidgetConfigurationUncheckedCreateWithoutSystemInput>;
};
export type WidgetConfigurationUpsertWithoutSystemInput = {
    update: Prisma.XOR<Prisma.WidgetConfigurationUpdateWithoutSystemInput, Prisma.WidgetConfigurationUncheckedUpdateWithoutSystemInput>;
    create: Prisma.XOR<Prisma.WidgetConfigurationCreateWithoutSystemInput, Prisma.WidgetConfigurationUncheckedCreateWithoutSystemInput>;
    where?: Prisma.WidgetConfigurationWhereInput;
};
export type WidgetConfigurationUpdateToOneWithWhereWithoutSystemInput = {
    where?: Prisma.WidgetConfigurationWhereInput;
    data: Prisma.XOR<Prisma.WidgetConfigurationUpdateWithoutSystemInput, Prisma.WidgetConfigurationUncheckedUpdateWithoutSystemInput>;
};
export type WidgetConfigurationUpdateWithoutSystemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerMoments?: Prisma.WidgetConfigurationUpdatetriggerMomentsInput | $Enums.TriggerMoment[];
    frequencyValue?: Prisma.IntFieldUpdateOperationsInput | number;
    frequencyUnit?: Prisma.EnumFrequencyUnitFieldUpdateOperationsInput | $Enums.FrequencyUnit;
    promptDelayMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    allowSkip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WidgetConfigurationUncheckedUpdateWithoutSystemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerMoments?: Prisma.WidgetConfigurationUpdatetriggerMomentsInput | $Enums.TriggerMoment[];
    frequencyValue?: Prisma.IntFieldUpdateOperationsInput | number;
    frequencyUnit?: Prisma.EnumFrequencyUnitFieldUpdateOperationsInput | $Enums.FrequencyUnit;
    promptDelayMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    allowSkip?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WidgetConfigurationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    systemId?: boolean;
    triggerMoments?: boolean;
    frequencyValue?: boolean;
    frequencyUnit?: boolean;
    promptDelayMinutes?: boolean;
    allowSkip?: boolean;
    active?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["widgetConfiguration"]>;
export type WidgetConfigurationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    systemId?: boolean;
    triggerMoments?: boolean;
    frequencyValue?: boolean;
    frequencyUnit?: boolean;
    promptDelayMinutes?: boolean;
    allowSkip?: boolean;
    active?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["widgetConfiguration"]>;
export type WidgetConfigurationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    systemId?: boolean;
    triggerMoments?: boolean;
    frequencyValue?: boolean;
    frequencyUnit?: boolean;
    promptDelayMinutes?: boolean;
    allowSkip?: boolean;
    active?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["widgetConfiguration"]>;
export type WidgetConfigurationSelectScalar = {
    id?: boolean;
    systemId?: boolean;
    triggerMoments?: boolean;
    frequencyValue?: boolean;
    frequencyUnit?: boolean;
    promptDelayMinutes?: boolean;
    allowSkip?: boolean;
    active?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type WidgetConfigurationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "systemId" | "triggerMoments" | "frequencyValue" | "frequencyUnit" | "promptDelayMinutes" | "allowSkip" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["widgetConfiguration"]>;
export type WidgetConfigurationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
};
export type WidgetConfigurationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
};
export type WidgetConfigurationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    system?: boolean | Prisma.SystemDefaultArgs<ExtArgs>;
};
export type $WidgetConfigurationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WidgetConfiguration";
    objects: {
        system: Prisma.$SystemPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        systemId: string;
        triggerMoments: $Enums.TriggerMoment[];
        frequencyValue: number;
        frequencyUnit: $Enums.FrequencyUnit;
        promptDelayMinutes: number;
        allowSkip: boolean;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["widgetConfiguration"]>;
    composites: {};
};
export type WidgetConfigurationGetPayload<S extends boolean | null | undefined | WidgetConfigurationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WidgetConfigurationPayload, S>;
export type WidgetConfigurationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WidgetConfigurationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WidgetConfigurationCountAggregateInputType | true;
};
export interface WidgetConfigurationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WidgetConfiguration'];
        meta: {
            name: 'WidgetConfiguration';
        };
    };
    findUnique<T extends WidgetConfigurationFindUniqueArgs>(args: Prisma.SelectSubset<T, WidgetConfigurationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WidgetConfigurationClient<runtime.Types.Result.GetResult<Prisma.$WidgetConfigurationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WidgetConfigurationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WidgetConfigurationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WidgetConfigurationClient<runtime.Types.Result.GetResult<Prisma.$WidgetConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WidgetConfigurationFindFirstArgs>(args?: Prisma.SelectSubset<T, WidgetConfigurationFindFirstArgs<ExtArgs>>): Prisma.Prisma__WidgetConfigurationClient<runtime.Types.Result.GetResult<Prisma.$WidgetConfigurationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WidgetConfigurationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WidgetConfigurationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WidgetConfigurationClient<runtime.Types.Result.GetResult<Prisma.$WidgetConfigurationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WidgetConfigurationFindManyArgs>(args?: Prisma.SelectSubset<T, WidgetConfigurationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WidgetConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WidgetConfigurationCreateArgs>(args: Prisma.SelectSubset<T, WidgetConfigurationCreateArgs<ExtArgs>>): Prisma.Prisma__WidgetConfigurationClient<runtime.Types.Result.GetResult<Prisma.$WidgetConfigurationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WidgetConfigurationCreateManyArgs>(args?: Prisma.SelectSubset<T, WidgetConfigurationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WidgetConfigurationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WidgetConfigurationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WidgetConfigurationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WidgetConfigurationDeleteArgs>(args: Prisma.SelectSubset<T, WidgetConfigurationDeleteArgs<ExtArgs>>): Prisma.Prisma__WidgetConfigurationClient<runtime.Types.Result.GetResult<Prisma.$WidgetConfigurationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WidgetConfigurationUpdateArgs>(args: Prisma.SelectSubset<T, WidgetConfigurationUpdateArgs<ExtArgs>>): Prisma.Prisma__WidgetConfigurationClient<runtime.Types.Result.GetResult<Prisma.$WidgetConfigurationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WidgetConfigurationDeleteManyArgs>(args?: Prisma.SelectSubset<T, WidgetConfigurationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WidgetConfigurationUpdateManyArgs>(args: Prisma.SelectSubset<T, WidgetConfigurationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WidgetConfigurationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WidgetConfigurationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WidgetConfigurationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WidgetConfigurationUpsertArgs>(args: Prisma.SelectSubset<T, WidgetConfigurationUpsertArgs<ExtArgs>>): Prisma.Prisma__WidgetConfigurationClient<runtime.Types.Result.GetResult<Prisma.$WidgetConfigurationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WidgetConfigurationCountArgs>(args?: Prisma.Subset<T, WidgetConfigurationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WidgetConfigurationCountAggregateOutputType> : number>;
    aggregate<T extends WidgetConfigurationAggregateArgs>(args: Prisma.Subset<T, WidgetConfigurationAggregateArgs>): Prisma.PrismaPromise<GetWidgetConfigurationAggregateType<T>>;
    groupBy<T extends WidgetConfigurationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WidgetConfigurationGroupByArgs['orderBy'];
    } : {
        orderBy?: WidgetConfigurationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WidgetConfigurationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWidgetConfigurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WidgetConfigurationFieldRefs;
}
export interface Prisma__WidgetConfigurationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    system<T extends Prisma.SystemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SystemDefaultArgs<ExtArgs>>): Prisma.Prisma__SystemClient<runtime.Types.Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WidgetConfigurationFieldRefs {
    readonly id: Prisma.FieldRef<"WidgetConfiguration", 'String'>;
    readonly systemId: Prisma.FieldRef<"WidgetConfiguration", 'String'>;
    readonly triggerMoments: Prisma.FieldRef<"WidgetConfiguration", 'TriggerMoment[]'>;
    readonly frequencyValue: Prisma.FieldRef<"WidgetConfiguration", 'Int'>;
    readonly frequencyUnit: Prisma.FieldRef<"WidgetConfiguration", 'FrequencyUnit'>;
    readonly promptDelayMinutes: Prisma.FieldRef<"WidgetConfiguration", 'Int'>;
    readonly allowSkip: Prisma.FieldRef<"WidgetConfiguration", 'Boolean'>;
    readonly active: Prisma.FieldRef<"WidgetConfiguration", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"WidgetConfiguration", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"WidgetConfiguration", 'DateTime'>;
}
export type WidgetConfigurationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetConfigurationSelect<ExtArgs> | null;
    omit?: Prisma.WidgetConfigurationOmit<ExtArgs> | null;
    include?: Prisma.WidgetConfigurationInclude<ExtArgs> | null;
    where: Prisma.WidgetConfigurationWhereUniqueInput;
};
export type WidgetConfigurationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetConfigurationSelect<ExtArgs> | null;
    omit?: Prisma.WidgetConfigurationOmit<ExtArgs> | null;
    include?: Prisma.WidgetConfigurationInclude<ExtArgs> | null;
    where: Prisma.WidgetConfigurationWhereUniqueInput;
};
export type WidgetConfigurationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetConfigurationSelect<ExtArgs> | null;
    omit?: Prisma.WidgetConfigurationOmit<ExtArgs> | null;
    include?: Prisma.WidgetConfigurationInclude<ExtArgs> | null;
    where?: Prisma.WidgetConfigurationWhereInput;
    orderBy?: Prisma.WidgetConfigurationOrderByWithRelationInput | Prisma.WidgetConfigurationOrderByWithRelationInput[];
    cursor?: Prisma.WidgetConfigurationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WidgetConfigurationScalarFieldEnum | Prisma.WidgetConfigurationScalarFieldEnum[];
};
export type WidgetConfigurationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetConfigurationSelect<ExtArgs> | null;
    omit?: Prisma.WidgetConfigurationOmit<ExtArgs> | null;
    include?: Prisma.WidgetConfigurationInclude<ExtArgs> | null;
    where?: Prisma.WidgetConfigurationWhereInput;
    orderBy?: Prisma.WidgetConfigurationOrderByWithRelationInput | Prisma.WidgetConfigurationOrderByWithRelationInput[];
    cursor?: Prisma.WidgetConfigurationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WidgetConfigurationScalarFieldEnum | Prisma.WidgetConfigurationScalarFieldEnum[];
};
export type WidgetConfigurationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetConfigurationSelect<ExtArgs> | null;
    omit?: Prisma.WidgetConfigurationOmit<ExtArgs> | null;
    include?: Prisma.WidgetConfigurationInclude<ExtArgs> | null;
    where?: Prisma.WidgetConfigurationWhereInput;
    orderBy?: Prisma.WidgetConfigurationOrderByWithRelationInput | Prisma.WidgetConfigurationOrderByWithRelationInput[];
    cursor?: Prisma.WidgetConfigurationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WidgetConfigurationScalarFieldEnum | Prisma.WidgetConfigurationScalarFieldEnum[];
};
export type WidgetConfigurationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetConfigurationSelect<ExtArgs> | null;
    omit?: Prisma.WidgetConfigurationOmit<ExtArgs> | null;
    include?: Prisma.WidgetConfigurationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WidgetConfigurationCreateInput, Prisma.WidgetConfigurationUncheckedCreateInput>;
};
export type WidgetConfigurationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WidgetConfigurationCreateManyInput | Prisma.WidgetConfigurationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WidgetConfigurationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetConfigurationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WidgetConfigurationOmit<ExtArgs> | null;
    data: Prisma.WidgetConfigurationCreateManyInput | Prisma.WidgetConfigurationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WidgetConfigurationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WidgetConfigurationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetConfigurationSelect<ExtArgs> | null;
    omit?: Prisma.WidgetConfigurationOmit<ExtArgs> | null;
    include?: Prisma.WidgetConfigurationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WidgetConfigurationUpdateInput, Prisma.WidgetConfigurationUncheckedUpdateInput>;
    where: Prisma.WidgetConfigurationWhereUniqueInput;
};
export type WidgetConfigurationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WidgetConfigurationUpdateManyMutationInput, Prisma.WidgetConfigurationUncheckedUpdateManyInput>;
    where?: Prisma.WidgetConfigurationWhereInput;
    limit?: number;
};
export type WidgetConfigurationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetConfigurationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WidgetConfigurationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WidgetConfigurationUpdateManyMutationInput, Prisma.WidgetConfigurationUncheckedUpdateManyInput>;
    where?: Prisma.WidgetConfigurationWhereInput;
    limit?: number;
    include?: Prisma.WidgetConfigurationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WidgetConfigurationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetConfigurationSelect<ExtArgs> | null;
    omit?: Prisma.WidgetConfigurationOmit<ExtArgs> | null;
    include?: Prisma.WidgetConfigurationInclude<ExtArgs> | null;
    where: Prisma.WidgetConfigurationWhereUniqueInput;
    create: Prisma.XOR<Prisma.WidgetConfigurationCreateInput, Prisma.WidgetConfigurationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WidgetConfigurationUpdateInput, Prisma.WidgetConfigurationUncheckedUpdateInput>;
};
export type WidgetConfigurationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetConfigurationSelect<ExtArgs> | null;
    omit?: Prisma.WidgetConfigurationOmit<ExtArgs> | null;
    include?: Prisma.WidgetConfigurationInclude<ExtArgs> | null;
    where: Prisma.WidgetConfigurationWhereUniqueInput;
};
export type WidgetConfigurationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WidgetConfigurationWhereInput;
    limit?: number;
};
export type WidgetConfigurationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WidgetConfigurationSelect<ExtArgs> | null;
    omit?: Prisma.WidgetConfigurationOmit<ExtArgs> | null;
    include?: Prisma.WidgetConfigurationInclude<ExtArgs> | null;
};
