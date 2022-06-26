import genres from "../data";
import * as actionTypes from "./constant";

const INITIAL_STATE = {
  genres_collection: genres,
  selected_genre: [],
  pages: 1,
  selected_subgenre: [],
};

const wizardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SELECT_GENRE:
      const item = state.genres_collection.find((item) => {
        return item.id === action.payload.id;
      });

      return {
        ...state,
        selected_genre: item ? [item] : [],
      };
    case actionTypes.SET_PAGE:
      return {
        ...state,
        pages:
          action.payload.type === "next" && state.pages < 6
            ? state.pages + 1
            : action.payload.type === "prev" && state.pages > 1
            ? state.pages - 1
            : state.pages,
      };

      case actionTypes.SELECT_SUBGENRE:
      const itemSub = state.selected_genre.subgenres.find((item) => {
        return item.id === action.payload.id;
      });

      return {
        ...state,
        selected_subgenre: itemSub ? [itemSub] : [],
      };

    default:
      return state;
  }
};

export default wizardReducer;
