import produce from "immer";
import { normalize, schema } from "normalizr";
import { AnyAction } from "redux";
import {
  LOAD_SHOWS,
  SHOWS_LOADED,
  SHOW_CAST,
  SHOW_DETAIL,
} from "../action/action";
import { Cast } from "../model/Cast";
import { Show, ShowClass } from "../model/Show";

type State = {
  loading: boolean;
  show: Show[];
  ShowClass: ShowClass;
  showCast: Cast[];
};

const initialState: State = {
  loading: false,
  show: [],
  ShowClass: {} as any,
  showCast: [],
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

    case SHOW_CAST:
      return produce(state, (draft) => {
        draft.showCast = action.payload;
      });

    default:
      return state;
  }
}
export default showReducer;
