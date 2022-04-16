import { combineReducers } from "redux";

import categoryReducer from "./catgoryReducer";
import mainReducer from "./mainReducer";
import searchReducer from "./searchReducer";

export const rootReducer = combineReducers({
  category: categoryReducer,
  search: searchReducer,
  main: mainReducer,
});

export default rootReducer;
