import { ActionCreator } from ".";
import { Show, ShowClass } from "../model/Show";

export const LOAD_SHOWS = "LOAD_SHOWS";

export const loadingShows: ActionCreator = () => ({
  type: LOAD_SHOWS,
});

export const SHOWS_LOADED = "SHOWS_LOADED";

export const showsLoaded: ActionCreator<Show[]> = (show: Show[]) => ({
  type: SHOWS_LOADED,
  payload: show,
});

export const SHOW_DETAIL = "SHOW_DETAIL";

export const ShowDetailLoaded: ActionCreator<ShowClass> = (
  ShowClass: ShowClass
) => ({
  type: SHOW_DETAIL,
  payload: ShowClass,
});
