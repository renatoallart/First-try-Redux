import {combineReducers} from 'redux'
import reducers from '../store/reducers'

const rootReducer = combineReducers({
    field: reducers
})

export default rootReducer