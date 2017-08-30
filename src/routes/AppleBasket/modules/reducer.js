
import { fromJS } from 'immutable'
import { BEGIN_PICK_APPLE, DONE_PICK_APPLE, FAIL_PICK_APPLE, EAT_APPLE, RIPEN_APPLE } from './actions.js'

const initialState = {
  isPicking: false,
  newAppleId: 0,
  apples: []
}

const appleBasketReducer = (state = initialState, action) => {
  console.log('123456', action)
  switch (action.type) {
    case BEGIN_PICK_APPLE:
      return fromJS(state).set('isPicking', true).toJS()   // 将isPicking设置为true

    case DONE_PICK_APPLE:
      if (state.newAppleId === 10) return
      let newApple = {
        id: state.newAppleId++,
        weight: action.payload,
        color: action.color,
        isEaten: false,
        isPicked: true
      }
      if (action.color === 'green') {
        newApple.isRipen = false
      }

      return fromJS(state).set('newAppleId', state.newAppleId)
                          .update('apples', list => list.push(newApple))
                          .set('isPicking', false)
                          .toJS()

    case FAIL_PICK_APPLE:
       /** 将isPicking设置false */
      return fromJS(state).set('isPicking', false).toJS()

    case EAT_APPLE:
      return fromJS(state).setIn(['apples', action.payload, 'isEaten'], true).toJS()

    case RIPEN_APPLE:

      return fromJS(state).setIn(['apples', action.payload, 'color'], 'red')
                          .setIn(['apples', action.payload, 'isRipen'], true)
                          .toJS()

    default:
      return state
  }
}

export default appleBasketReducer
