import { BREAKPOINTS, type BreakpointKey } from '../config/breakpoints'
import { useMediaQuery } from './useMediaQuery'

export const useResponsiveVisibility = (hideBelow?: BreakpointKey): boolean => {
    return hideBelow ? useMediaQuery(BREAKPOINTS[hideBelow]) : false
}
