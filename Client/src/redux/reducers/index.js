import { combineReducers } from "redux";
import blogData from "./blogData";
import blogId from "./blogId";
import EditPost from "./EditBlog";
const rootReducer = combineReducers({
  blogData,
  blogId,
  EditPost,
});

export default rootReducer;
