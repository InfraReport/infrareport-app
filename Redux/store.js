import { createStore } from 'redux'
import rootReducer from './Root-reducer'

const store = createStore(rootReducer)

export default store
