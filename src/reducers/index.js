import {pages} from "./../const/PagesConst";

const selectPageType = 'SELECT_PAGE';
const initialState = {
    page: pages.MAIN
};

export const actionCreators = {
    selectPage: (page) => ({type: selectPageType, payload: page})
};

export function rootReducer(state = initialState, action) {

    if (action.type === selectPageType) {
        return {
            ...state,
            page: action.payload
        }
    }
    return state
}
