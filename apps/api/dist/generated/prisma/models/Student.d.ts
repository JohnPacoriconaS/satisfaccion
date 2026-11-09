import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StudentModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentPayload>;
export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
};
export type StudentMinAggregateOutputType = {
    id: string | null;
    institutionalCode: string | null;
    fullName: string | null;
    email: string | null;
    active: boolean | null;
    createdAt: Date | null;
};
export type StudentMaxAggregateOutputType = {
    id: string | null;
    institutionalCode: string | null;
    fullName: string | null;
    email: string | null;
    active: boolean | null;
    createdAt: Date | null;
};
export type StudentCountAggregateOutputType = {
    id: number;
    institutionalCode: number;
    fullName: number;
    email: number;
    active: number;
    createdAt: number;
    _all: number;
};
export type StudentMinAggregateInputType = {
    id?: true;
    institutionalCode?: true;
    fullName?: true;
    email?: true;
    active?: true;
    createdAt?: true;
};
export type StudentMaxAggregateInputType = {
    id?: true;
    institutionalCode?: true;
    fullName?: true;
    email?: true;
    active?: true;
    createdAt?: true;
};
export type StudentCountAggregateInputType = {
    id?: true;
    institutionalCode?: true;
    fullName?: true;
    email?: true;
    active?: true;
    createdAt?: true;
    _all?: true;
};
export type StudentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentCountAggregateInputType;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
};
export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
    [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudent[P]> : Prisma.GetScalarType<T[P], AggregateStudent[P]>;
};
export type StudentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithAggregationInput | Prisma.StudentOrderByWithAggregationInput[];
    by: Prisma.StudentScalarFieldEnum[] | Prisma.StudentScalarFieldEnum;
    having?: Prisma.StudentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentCountAggregateInputType | true;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
};
export type StudentGroupByOutputType = {
    id: string;
    institutionalCode: string;
    fullName: string | null;
    email: string | null;
    active: boolean;
    createdAt: Date;
    _count: StudentCountAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
};
export type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentGroupByOutputType[P]>;
}>>;
export type StudentWhereInput = {
    AND?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    OR?: Prisma.StudentWhereInput[];
    NOT?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    id?: Prisma.UuidFilter<"Student"> | string;
    institutionalCode?: Prisma.StringFilter<"Student"> | string;
    fullName?: Prisma.StringNullableFilter<"Student"> | string | null;
    email?: Prisma.StringNullableFilter<"Student"> | string | null;
    active?: Prisma.BoolFilter<"Student"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Student"> | Date | string;
    evaluations?: Prisma.SatisfactionEvaluationListRelationFilter;
    interactions?: Prisma.WidgetInteractionListRelationFilter;
};
export type StudentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    institutionalCode?: Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    evaluations?: Prisma.SatisfactionEvaluationOrderByRelationAggregateInput;
    interactions?: Prisma.WidgetInteractionOrderByRelationAggregateInput;
};
export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    institutionalCode?: string;
    AND?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    OR?: Prisma.StudentWhereInput[];
    NOT?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    fullName?: Prisma.StringNullableFilter<"Student"> | string | null;
    email?: Prisma.StringNullableFilter<"Student"> | string | null;
    active?: Prisma.BoolFilter<"Student"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Student"> | Date | string;
    evaluations?: Prisma.SatisfactionEvaluationListRelationFilter;
    interactions?: Prisma.WidgetInteractionListRelationFilter;
}, "id" | "institutionalCode">;
export type StudentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    institutionalCode?: Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.StudentCountOrderByAggregateInput;
    _max?: Prisma.StudentMaxOrderByAggregateInput;
    _min?: Prisma.StudentMinOrderByAggregateInput;
};
export type StudentScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentScalarWhereWithAggregatesInput | Prisma.StudentScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentScalarWhereWithAggregatesInput | Prisma.StudentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Student"> | string;
    institutionalCode?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    fullName?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    active?: Prisma.BoolWithAggregatesFilter<"Student"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Student"> | Date | string;
};
export type StudentCreateInput = {
    id?: string;
    institutionalCode: string;
    fullName?: string | null;
    email?: string | null;
    active?: boolean;
    createdAt?: Date | string;
    evaluations?: Prisma.SatisfactionEvaluationCreateNestedManyWithoutStudentInput;
    interactions?: Prisma.WidgetInteractionCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateInput = {
    id?: string;
    institutionalCode: string;
    fullName?: string | null;
    email?: string | null;
    active?: boolean;
    createdAt?: Date | string;
    evaluations?: Prisma.SatisfactionEvaluationUncheckedCreateNestedManyWithoutStudentInput;
    interactions?: Prisma.WidgetInteractionUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    institutionalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluations?: Prisma.SatisfactionEvaluationUpdateManyWithoutStudentNestedInput;
    interactions?: Prisma.WidgetInteractionUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    institutionalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluations?: Prisma.SatisfactionEvaluationUncheckedUpdateManyWithoutStudentNestedInput;
    interactions?: Prisma.WidgetInteractionUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateManyInput = {
    id?: string;
    institutionalCode: string;
    fullName?: string | null;
    email?: string | null;
    active?: boolean;
    createdAt?: Date | string;
};
export type StudentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    institutionalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    institutionalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    institutionalCode?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StudentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    institutionalCode?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StudentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    institutionalCode?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StudentScalarRelationFilter = {
    is?: Prisma.StudentWhereInput;
    isNot?: Prisma.StudentWhereInput;
};
export type StudentCreateNestedOneWithoutEvaluationsInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutEvaluationsInput, Prisma.StudentUncheckedCreateWithoutEvaluationsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutEvaluationsInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutEvaluationsInput, Prisma.StudentUncheckedCreateWithoutEvaluationsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutEvaluationsInput;
    upsert?: Prisma.StudentUpsertWithoutEvaluationsInput;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutEvaluationsInput, Prisma.StudentUpdateWithoutEvaluationsInput>, Prisma.StudentUncheckedUpdateWithoutEvaluationsInput>;
};
export type StudentCreateNestedOneWithoutInteractionsInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutInteractionsInput, Prisma.StudentUncheckedCreateWithoutInteractionsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutInteractionsInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneRequiredWithoutInteractionsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutInteractionsInput, Prisma.StudentUncheckedCreateWithoutInteractionsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutInteractionsInput;
    upsert?: Prisma.StudentUpsertWithoutInteractionsInput;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutInteractionsInput, Prisma.StudentUpdateWithoutInteractionsInput>, Prisma.StudentUncheckedUpdateWithoutInteractionsInput>;
};
export type StudentCreateWithoutEvaluationsInput = {
    id?: string;
    institutionalCode: string;
    fullName?: string | null;
    email?: string | null;
    active?: boolean;
    createdAt?: Date | string;
    interactions?: Prisma.WidgetInteractionCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutEvaluationsInput = {
    id?: string;
    institutionalCode: string;
    fullName?: string | null;
    email?: string | null;
    active?: boolean;
    createdAt?: Date | string;
    interactions?: Prisma.WidgetInteractionUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutEvaluationsInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutEvaluationsInput, Prisma.StudentUncheckedCreateWithoutEvaluationsInput>;
};
export type StudentUpsertWithoutEvaluationsInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutEvaluationsInput, Prisma.StudentUncheckedUpdateWithoutEvaluationsInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutEvaluationsInput, Prisma.StudentUncheckedCreateWithoutEvaluationsInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutEvaluationsInput, Prisma.StudentUncheckedUpdateWithoutEvaluationsInput>;
};
export type StudentUpdateWithoutEvaluationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    institutionalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    interactions?: Prisma.WidgetInteractionUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutEvaluationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    institutionalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    interactions?: Prisma.WidgetInteractionUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateWithoutInteractionsInput = {
    id?: string;
    institutionalCode: string;
    fullName?: string | null;
    email?: string | null;
    active?: boolean;
    createdAt?: Date | string;
    evaluations?: Prisma.SatisfactionEvaluationCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutInteractionsInput = {
    id?: string;
    institutionalCode: string;
    fullName?: string | null;
    email?: string | null;
    active?: boolean;
    createdAt?: Date | string;
    evaluations?: Prisma.SatisfactionEvaluationUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutInteractionsInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutInteractionsInput, Prisma.StudentUncheckedCreateWithoutInteractionsInput>;
};
export type StudentUpsertWithoutInteractionsInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutInteractionsInput, Prisma.StudentUncheckedUpdateWithoutInteractionsInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutInteractionsInput, Prisma.StudentUncheckedCreateWithoutInteractionsInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutInteractionsInput, Prisma.StudentUncheckedUpdateWithoutInteractionsInput>;
};
export type StudentUpdateWithoutInteractionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    institutionalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluations?: Prisma.SatisfactionEvaluationUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutInteractionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    institutionalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluations?: Prisma.SatisfactionEvaluationUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCountOutputType = {
    evaluations: number;
    interactions: number;
};
export type StudentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evaluations?: boolean | StudentCountOutputTypeCountEvaluationsArgs;
    interactions?: boolean | StudentCountOutputTypeCountInteractionsArgs;
};
export type StudentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentCountOutputTypeSelect<ExtArgs> | null;
};
export type StudentCountOutputTypeCountEvaluationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SatisfactionEvaluationWhereInput;
};
export type StudentCountOutputTypeCountInteractionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WidgetInteractionWhereInput;
};
export type StudentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    institutionalCode?: boolean;
    fullName?: boolean;
    email?: boolean;
    active?: boolean;
    createdAt?: boolean;
    evaluations?: boolean | Prisma.Student$evaluationsArgs<ExtArgs>;
    interactions?: boolean | Prisma.Student$interactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["student"]>;
export type StudentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    institutionalCode?: boolean;
    fullName?: boolean;
    email?: boolean;
    active?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["student"]>;
export type StudentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    institutionalCode?: boolean;
    fullName?: boolean;
    email?: boolean;
    active?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["student"]>;
export type StudentSelectScalar = {
    id?: boolean;
    institutionalCode?: boolean;
    fullName?: boolean;
    email?: boolean;
    active?: boolean;
    createdAt?: boolean;
};
export type StudentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "institutionalCode" | "fullName" | "email" | "active" | "createdAt", ExtArgs["result"]["student"]>;
export type StudentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evaluations?: boolean | Prisma.Student$evaluationsArgs<ExtArgs>;
    interactions?: boolean | Prisma.Student$interactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StudentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type StudentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $StudentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Student";
    objects: {
        evaluations: Prisma.$SatisfactionEvaluationPayload<ExtArgs>[];
        interactions: Prisma.$WidgetInteractionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        institutionalCode: string;
        fullName: string | null;
        email: string | null;
        active: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["student"]>;
    composites: {};
};
export type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentPayload, S>;
export type StudentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentCountAggregateInputType | true;
};
export interface StudentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Student'];
        meta: {
            name: 'Student';
        };
    };
    findUnique<T extends StudentFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentFindManyArgs>(args?: Prisma.SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentCreateArgs>(args: Prisma.SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StudentDeleteArgs>(args: Prisma.SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentUpdateArgs>(args: Prisma.SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StudentUpsertArgs>(args: Prisma.SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentCountArgs>(args?: Prisma.Subset<T, StudentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentCountAggregateOutputType> : number>;
    aggregate<T extends StudentAggregateArgs>(args: Prisma.Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>;
    groupBy<T extends StudentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentFieldRefs;
}
export interface Prisma__StudentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    evaluations<T extends Prisma.Student$evaluationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SatisfactionEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    interactions<T extends Prisma.Student$interactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WidgetInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentFieldRefs {
    readonly id: Prisma.FieldRef<"Student", 'String'>;
    readonly institutionalCode: Prisma.FieldRef<"Student", 'String'>;
    readonly fullName: Prisma.FieldRef<"Student", 'String'>;
    readonly email: Prisma.FieldRef<"Student", 'String'>;
    readonly active: Prisma.FieldRef<"Student", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Student", 'DateTime'>;
}
export type StudentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentCreateInput, Prisma.StudentUncheckedCreateInput>;
};
export type StudentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentCreateManyInput | Prisma.StudentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    data: Prisma.StudentCreateManyInput | Prisma.StudentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentUpdateInput, Prisma.StudentUncheckedUpdateInput>;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyInput>;
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type StudentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyInput>;
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type StudentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateInput, Prisma.StudentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentUpdateInput, Prisma.StudentUncheckedUpdateInput>;
};
export type StudentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type Student$evaluationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Student$interactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
};
