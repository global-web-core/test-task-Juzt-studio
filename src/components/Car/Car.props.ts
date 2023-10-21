import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ICars } from '../../typesAndInterfaces/interfaces';

export interface CarProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	car: ICars.Db | null;
}