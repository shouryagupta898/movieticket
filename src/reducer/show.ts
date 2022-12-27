import produce from "immer";
import { normalize, schema } from "normalizr";
import { AnyAction } from "redux";
import { LOAD_SHOWS, SHOWS_LOADED, SHOW_DETAIL } from "../action/action";
import { Show, ShowClass } from "../model/Show";

type State = {
  loading: boolean;
  show: Show[];
  ShowClass: ShowClass;
};

const initialState: State = {
  loading: false,
  show: [],
  ShowClass: {} as any,
};

function showReducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    case LOAD_SHOWS:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case SHOWS_LOADED:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.show = action.payload;
      });

    case SHOW_DETAIL:
      return produce(state, (draft) => {
        draft.ShowClass = action.payload;
      });

    default:
      return state;
  }
}
export default showReducer;
