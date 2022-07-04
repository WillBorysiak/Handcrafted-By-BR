import { Dispatch } from 'react';

export interface GalleryModalTypes {
	open: boolean;
	setOpen: Dispatch<boolean>;
	image: any;
}
