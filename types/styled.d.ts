import 'styled-components';
import type { Theme } from '@/constants/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}