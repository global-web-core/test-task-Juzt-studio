import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TopBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	onBack?: boolean;
}