import { createSelector } from "reselect";
import { State } from "../store";

export const showsStateSelector = (state: State) => {
  return state.show;
};

export const showsLoadingSelector = createSelector(
  showsStateSelector,
  (showsState) => showsState.loading
);

export const showsSelector = createSelector(
  showsStateSelector,
  (showsState) => showsState.show
);

export const showDetailSelector = createSelector(
  showsStateSelector,
  (showState) => showState.ShowClass
);

export const showCastSel = createSelector(
  showsStateSelector,
  (showState) => showState.showCast
);
