import UserActionTypes from "./action-types"

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
        case UserActionTypes.LOGOUT://If the action is logout
            return { ...state, currentUser: null }
        default:
            return state
    }
}

export default userReducer