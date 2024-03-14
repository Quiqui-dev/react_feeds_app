import {configureStore} from "@reduxjs/toolkit"

import { initialState } from "./initialState"
import rootReducer from "./reducers/rootReducer"

const store = configureStore({reducer:rootReducer}, undefined, undefined, undefined, initialState)

export default store