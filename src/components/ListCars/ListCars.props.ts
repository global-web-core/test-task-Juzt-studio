import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ICars } from '../../typesAndInterfaces/interfaces';

export interface ListCarsProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	cars: ICars.Db[];
}