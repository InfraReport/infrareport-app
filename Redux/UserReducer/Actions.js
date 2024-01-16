import UserActionTypes from "./Action-types"

export const setUserLogin=(payload)=>({//action to a login
    type: UserActionTypes.LOGIN,
    payload: payload
})

export const setUserName=(payload)=>({//action to set the name
    type: UserActionTypes.SET_NAME,
    payload: payload
})

export const setUserNumber=(payload)=>({//action to set the number
    type: UserActionTypes.SET_NUMBER,
    payload: payload
})
export const setUserPosition=(payload)=>({//action to set the position
    type: UserActionTypes.SET_POSITION,
    payload: payload
})

export const setUserPassword=(payload)=>({//action to set the password
    type: UserActionTypes.SET_PASSWORD,
    payload: payload
})

export const setUserPoints=(payload)=>({//action to set the points
    type: UserActionTypes.SET_POINTS,
    payload: payload
})