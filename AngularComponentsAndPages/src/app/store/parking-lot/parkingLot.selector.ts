import { createSelector, createFeatureSelector } from "@ngrx/store";
import { DictionariesState } from "./parkingLot.reducer";

export const getDictionariesState = createFeatureSelector<DictionariesState>('dictionaries');

export const getDictionaries = createSelector(
  getDictionariesState,
  (state) => state.entities
);

export const getLoading = createSelector(
  getDictionariesState,
  (state) => state.loading
);

export const getIsReady = createSelector(
  getDictionariesState,
  (state) => state.entities && !state.loading
);

export const getCarData = createSelector(
  getDictionaries,
  (state) => state?.carData
);

export const getRecords = createSelector(
  getDictionaries,
  (state) => state?.checkIn
);

export const getCarTypes = createSelector(
  getDictionaries,
  (state) => state?.costModel
);
