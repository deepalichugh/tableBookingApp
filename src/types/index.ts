
export interface Reservation {
  id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  tableNumber: number;
}

export interface Table {
  id: number;
  seats: number;
  isAvailable: boolean;
}
