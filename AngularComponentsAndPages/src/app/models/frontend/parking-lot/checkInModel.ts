import { CostModel } from "..";

export interface CheckIn {
  id: number;
  car: CarData;
  checkInTime: Date;
  checkOutTime: Date | null;
  totalCost: number | null;
}

export interface CarData {
  id: number
  licensePlate: string;
  type: CostModel
}
