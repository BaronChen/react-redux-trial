/*
 * action types
 */

export const SHOW_ALERT = 'SHOW_ALERT'

/*
 * action creators
 */

export function showAlert(text) {
  return { type: SHOW_ALERT, text }
}
