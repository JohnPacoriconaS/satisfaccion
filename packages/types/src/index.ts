export type EvaluationTrigger =
  | 'LOGIN'
  | 'LOGOUT'
  | 'DURING'
  | 'MANUAL';

export type FrequencyUnit =
  | 'DAY'
  | 'WEEK'
  | 'MONTH';

export type EvaluationAction =
  | 'SHOWN'
  | 'SKIPPED'
  | 'SUBMITTED';