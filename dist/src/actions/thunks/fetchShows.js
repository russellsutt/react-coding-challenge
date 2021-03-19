import { API } from '../../App'

export const fetchShows = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING' })
            fetch(API)
                .then(response => response.json())
                .then(response => {
                    let shows = response.entries
                    let movies = shows.filter(show => show.programType !== 'series')
                    let series = shows.filter(show => show.programType === 'series')
                    dispatch({ type: 'ADD_SERIES', series: series })
                    dispatch({ type: 'ADD_MOVIES', movies: movies })
                })
        }
}