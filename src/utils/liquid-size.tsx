import { theme } from '../constants/theme';

export function getLiquidSizePc(size: number): string {
  return (size / parseInt(theme.baseWidth.pc, 10)) * 100 + 'vw';
}

export function getLiquidSizeSp(size: number): string {
  return (size / parseInt(theme.baseWidth.sp, 10)) * 100 + 'vw';
}
