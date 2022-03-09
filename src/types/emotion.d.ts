/* eslint-disable @typescript-eslint/no-empty-interface */
import { ThemeTypes } from '@/styles/theme'

declare module '@emotion/react' {
	export interface Theme extends ThemeTypes {}
}
