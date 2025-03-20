
export interface Restaurant {
  id: string;
  name: string;
  address: string;
  availableTimeSlots: TimeSlot[];
}

export interface TimeSlot {
  id: string;
  time: string;
  availableSeats: number;
}

export interface Reservation {
  id: string;
  restaurantId: string;
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
