export const BREAKPOINTS = {
  sm: '(max-width: 639px)',
  md: '(max-width: 767px)',
  lg: '(max-width: 1023px)',
  xl: '(max-width: 1279px)',
} as const

export type BreakpointKey = keyof typeof BREAKPOINTS