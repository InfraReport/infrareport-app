import UserActionTypes from "./action-types"

export const loginUser=(payload)=>({//action to a login
    type: UserActionTypes.LOGIN,
    payload: payload
})

export const logoutUser=()=>({// action to a logout
    type: UserActionTypes.LOGOUT
})