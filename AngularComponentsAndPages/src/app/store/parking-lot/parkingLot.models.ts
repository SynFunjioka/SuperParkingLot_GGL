import { CarData, CheckIn } from "@app/models/backend";
export { CarData, CheckIn } from "@app/models/backend";

import { CostModel } from "@app/models/frontend";
export { CostModel } from "@app/models/frontend";

export interface Dictionaries {
  carData: CarData[];
  checkIn: CheckIn[];
  costModel: CostModel[];
}
