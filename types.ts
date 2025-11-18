
export enum MotorStatus {
  AVAILABLE = 'Available',
  RENTED = 'Rented',
  MAINTENANCE = 'Maintenance',
}

export interface Price {
  daily: number;
  weekly: number;
  monthly: number;
}

export interface Motor {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  plateNumber: string;
  status: MotorStatus;
  price: Price;
  imageUrl: string;
}

export enum RentalStatus {
    ONGOING = 'Ongoing',
    COMPLETED = 'Completed',
    UPCOMING = 'Upcoming',
    RENTED = 'Rented',
    AVAILABLE = 'Available',
}

export interface Rental {
    id: string;
    no?: number;
    customerName: string;
    customerPhone?: string;
    motorId: string;
    motorName: string;
    rentalDurationDays?: number;
    startDate: string; 
    endDate: string;
    totalPrice: number;
    status: RentalStatus;
}


export type Page = 'dashboard' | 'motors' | 'rentals' | 'maintenance' | 'customers' | 'accounting';