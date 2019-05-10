const selectPageType = 'SELECT_PAGE';
const initialState = {
    page: 'Main'
};

export const actionCreators = {
    selectPage: (page) => ({type: selectPageType, payload: page})
};

export function rootReducer(state = initialState, action) {

    if (action.type === selectPageType) {
        console.log(action.payload);
        return {
            ...state,
            page: action.payload
        }
    }
    return state
}
