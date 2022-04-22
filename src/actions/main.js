import { getImagesMain } from "../api/main";

export const GET_MAIN_IMAGES = "GET_MAIN_IMAGES";
export const GET_MAIN_IMAGES_SUCCESS = "GET_MAIN_IMAGES_SUCCESS";
export const GET_MAIN_IMAGES_ERROR = "GET_MAIN_IMAGES_ERROR";

export const getMainImages = (params) => {
  return async (dispatch) => {
    dispatch({ type: GET_MAIN_IMAGES });
    try {
      const response = await getImagesMain(params);
      const { success, results } = response;
      if (success) {
        console.log(results);
        dispatch({ type: GET_MAIN_IMAGES_SUCCESS, payload: results });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_MAIN_IMAGES_ERROR });
    }
  };
};
