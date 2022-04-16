import { getImagesCategory } from "../api/category";

export const GET_CATEGORY_IMAGES = "GET_CATEGORY_IMAGES";
export const GET_CATEGORY_IMAGES_SUCCESS = "GET_CATEGORY_IMAGES_SUCCESS";
export const GET_CATEGORY_IMAGES_ERROR = "GET_CATEGORY_IMAGES_ERROR";

// import {getImages} from "../api/category"
//устанавливает значение внутри стора

export const getCategoryImages = (params) => {
  return async (dispatch) => {
    dispatch({ type: GET_CATEGORY_IMAGES });
    try {
      const response = await getImagesCategory(params);
      const { success, results } = response;
      if (success) {
        dispatch({ type: GET_CATEGORY_IMAGES_SUCCESS, payload: results });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_CATEGORY_IMAGES_ERROR });
    }
  };
};
// export const setSearchTerm = (params) => {
// return async (dispatch) => {
//     dispatch({type: GET_CATEGORY_IMAGES})
//     try {
//         const response = await getImages(params);
//         const {success, results} = response;
//         if(success) {
//             dispatch({type: GET_CATEGORY_IMAGES_SUCCESS})
//         }
//     } catch (error) {
//         console.log(error)
//         dispatch({type: GET_CATEGORY_IMAGES_ERROR})
//     }
// }
// };
