export declare const TriggerMoment: {
    readonly LOGIN: "LOGIN";
    readonly LOGOUT: "LOGOUT";
    readonly DURING: "DURING";
    readonly MANUAL: "MANUAL";
};
export type TriggerMoment = (typeof TriggerMoment)[keyof typeof TriggerMoment];
export declare const FrequencyUnit: {
    readonly DAY: "DAY";
    readonly WEEK: "WEEK";
    readonly MONTH: "MONTH";
};
export type FrequencyUnit = (typeof FrequencyUnit)[keyof typeof FrequencyUnit];
export declare const EvaluationAction: {
    readonly SHOWN: "SHOWN";
    readonly SKIPPED: "SKIPPED";
    readonly SUBMITTED: "SUBMITTED";
};
export type EvaluationAction = (typeof EvaluationAction)[keyof typeof EvaluationAction];
