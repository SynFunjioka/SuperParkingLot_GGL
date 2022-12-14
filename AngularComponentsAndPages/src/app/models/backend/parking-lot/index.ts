export interface CheckIn {
  id: number,
  fk_CarData: number;
  checkInTime: Date;
  checkOutTime: Date | null;
  totalCost: number | null;
}

export interface CarData {
  id: number
  licensePlate: string;
  type: number
}
