import useBreakpoint from 'use-breakpoint';
import { BREAKPOINTS } from "../../commands";

export const useResponsive = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "md")

  return breakpoint
}