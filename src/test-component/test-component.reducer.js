import { SHOW_ALERT } from './test-component.action';

export const testComponentReducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      alert(action.text);
      return Object.assign({}, state, { text: action.text })
    default:
      return Object.assign({}, state, { text : "test" })
  }
}
