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
        case UserActionTypes.LOGIN:
            return { ...state, currentUser: action.payload }
        case UserActionTypes.SET_EMAIL:
            return { ...state, email: action.payload }
        case UserActionTypes.SET_NAME:
            return { ...state, name: action.payload }
        case UserActionTypes.SET_NUMBER:
            return { ...state, number: action.payload }
        case UserActionTypes.SET_PASSWORD:
            return { ...state, password: active.payload }
        case UserActionTypes.SET_POINTS:
            return { ...state, points: action.payload }
        case UserActionTypes.SET_POSITION:
            return { ...state, position: action.payload }
        case UserActionTypes.SET_CATEGORY:
            return { ...state, profileCategory: action.payload }
        default:
            return state
    }
}

export default userReducer