


const seriesReducer = ( state = { series: [], loading: false }, action) => {


    switch(action.type) {
        case 'LOADING_SHOWS': {
            return { ...state, series: [...state.series], loading: true }
        }
        case 'ADD_SERIES': {
            return { ...state, series: action.series, loading: false}
        }
        default:
            return state
    }
}

export default seriesReducer