

const movieReducer = (state = {movies: [], loading: false}, action) => {


    switch(action.type) {
        case 'LOADING_SHOWS': {
            return { ...state, movies: [...state.movies], loading: true }
        };
        case 'ADD_MOVIES': {
            return { ...state, movies: action.movies, loading: false }
        };
        default:
            return state;
    }
}

export default movieReducer