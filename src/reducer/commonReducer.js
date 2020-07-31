export default function commonReducer(state ,action) {
    switch (action.type) {
        case "MOVIE_DETAILS":
            return { ...state, MovieDetails: action.MovieDetails };
        default:
            return state;
    }
    
}