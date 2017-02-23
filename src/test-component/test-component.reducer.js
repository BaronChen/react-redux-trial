import { SHOW_ALERT } from './actions';

export const testComponentReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return Object.assign({}, state, { text: action.text })
    default:
      return state
  }
}
