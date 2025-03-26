export interface Restaurant {
  id: string;
  name: string;
  address: string;
  url: string;
  phone: string,
  cuisine: string;
  availableTimings?: Array<{
    type: string,
    open: string,
    close: string,
    slots: Array<string>,
  }>
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
