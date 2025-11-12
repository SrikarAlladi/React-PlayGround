export interface Theater {
  maxSeats: number;
  seatDimension: number;
  seatGap: number;
  seatGroups: SeatGroup[];
}

export interface SeatGroup {
  label: string;
  seatRows: SeatRow[];
}

export interface SeatRow {
  label: string;
  seats: Seat[];
}

export interface Seat {
  id?: string;
  isSeat: boolean;
  status?: "BOOKED" | "AVAILABLE" | "UNAVAILABLE";
  price?: number;
  type?: "NORMAL" | "RECLINER" | "PWD";
  isSelected?: boolean;
}
