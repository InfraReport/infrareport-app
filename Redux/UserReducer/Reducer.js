import UserActionTypes from "./Action-types"

const userState={
    position: null,
    email: null,
    password: null,
    celphone: null,
    cep: null,
    cityName: null,
    points: null,
    profileCategory: null,
    profileMedal: null,
    name: null
}

const userReducer=(state=userState, action)=>{
    switch(action.type){
        case UserActionTypes.LOGIN://If the action is login
            return { ...state, currentUser: action.payload }
        case UserActionTypes.SET_EMAIL://If the action is login
            return { ...state, email: action.payload }
        case UserActionTypes.SET_NAME://If the action is logout
            return { ...state, name: action.payload }
        case UserActionTypes.SET_NUMBER://If the action is login
            return { ...state, number: action.payload }
        case UserActionTypes.SET_PASSWORD://If the action is logout
            return { ...state, password: active.payload }
        case UserActionTypes.SET_POINTS://If the action is logout
            return { ...state, points: active.payload }
        case UserActionTypes.SET_POSITION://If the action is logout
            return { ...state, position: active.payload }
        default:
            return state
    }
}

export default userReducer