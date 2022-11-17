export interface User {
	_id: string;
	firstName: string;
	role: string;
	email: string;
	mobile: string;
	password: string;
	profileImage: string;
	status: boolean;
	bgImage?: string;
	address?: string;
	isFavourite?: boolean;
	speciality?: [];
	favourites?: [];
	experienceYear?: number;
	reviewCount?: number;
	profileApproval?: object;
	documents?: {
		certificate: string;
		address: string;
		identity: string;
	};
	device?: {
		id: string;
		token: string;
	};
	social?: {
		type: string;
		token: string;
	};
	orders?: any;
	bookings?: any;
}
