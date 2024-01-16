import { combineReducers } from "redux"
import userReducer from "./UserReducer/Reducer"

const reducersCombined={
    user:userReducer
}

const rootReducer = combineReducers(reducersCombined)

export default rootReducer