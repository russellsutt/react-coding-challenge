import { combineReducers } from 'redux'
import seriesReducer from './seriesReducer'
import movieReducer from './movieReducer'

const series = seriesReducer
const movies = movieReducer

const rootReducer = combineReducers({
    series,
    movies,
})


export default rootReducer