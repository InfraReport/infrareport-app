import { combineReducers } from "redux"
import userReducer from "./UserReducer/Reducer"

const reducersCombined={
    userReducer
}

const rootReducer = combineReducers(reducersCombined)

export default rootReducer