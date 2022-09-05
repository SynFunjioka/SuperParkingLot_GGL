import { ActionReducerMap } from '@ngrx/store';

import * as fromParkingLotDictionaries from './parking-lot';

export interface State {
  parkingLotDictionaries: fromParkingLotDictionaries.DictionariesState;
}

export const reducers: ActionReducerMap<State> = {
  parkingLotDictionaries: fromParkingLotDictionaries.reducer
}

export const effect = [
  fromParkingLotDictionaries.DictionariesEffects
]
