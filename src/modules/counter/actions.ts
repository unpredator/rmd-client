export const PLUS_COUNTER = 'counter/PLUS_COUNTER' as const;
export const MINUS_COUNTER = 'counter/MINUS_COUNTER' as const;
export const RESET_COUNTER = 'counter/RESET_COUNTER' as const;

export const plusCounter = () => ({ type: PLUS_COUNTER });
export const minusCounter = () => ({ type: MINUS_COUNTER });
export const resetCounter = () => ({ type: RESET_COUNTER });
