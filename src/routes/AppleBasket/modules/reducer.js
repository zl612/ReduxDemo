/**
 * Created by songang on 2017/8/18.
 */
import * as types from './constants'

function appleReducer(state, action) {
  switch (action.type) {
    case types.INIT_APPLES:
      return state

    case types.PICK_APPLE:
      return state

    case types.EAT_APPLE:
      return state

    case types.RIPENING_APPLE:
      return state

    default:
      return state
  }
}

export default appleReducer

