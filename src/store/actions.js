
import * as actionTypes from "./constant";


export const addSelectedGenre = (itemID) => {
  return {
    type: actionTypes.SELECT_GENRE,
    payload: {
      id:itemID,
    },
  };
};

export const setPage = (type) => {
  return {
    type: actionTypes.SET_PAGE,
    payload: {
     type: type,
    },
  };
};

export const addSelectedSubGenre = (itemID) => {
  return {
    type: actionTypes.SELECT_SUBGENRE,
    payload: {
      id:itemID,
    },
  };
};

