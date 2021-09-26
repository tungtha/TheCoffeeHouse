import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import detailReducer from './detailReducer';
// định nghĩa các reducer khác ...

const rootReducer = combineReducers({
    cartReducer,
    authReducer,
    detailReducer
    // nếu có reducer khác thì add thêm ở đây
});

export default rootReducer;