let actions = {
  pickApple: function () {
    console.log('正在摘苹果')
    return (dispatch, getState) => {
      // 如果正在摘苹果, 则结束这个thunk, 不执行摘苹果
      if (getState().pickApple) return false

      // 通知开始摘苹果
      dispatch(actions.beginPickApple())

      let math = Math.ceil((Math.random() * 100)) % 2
      let appleColor = math === 0 ? 'green' : 'red'

      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(appleColor), 1000)
      })
        .then(result => {
          let weight = Math.floor(200 + Math.random() * 50)
          let appleColor = result
          dispatch(actions.donePickApple(weight, appleColor))
        })
        .then((data) => {
          console.log('data=>', data)
          // resolve(data)
        })
        .catch(error => {
          dispatch(actions.failPickApple(error))
        })

    }
  },

  // 通知store应用开始摘苹果
  beginPickApple: () => ({
    type: 'BEGIN_PICK_APPLE'
  }),

  // 摘苹果成功
  donePickApple: (appleWeight, appleColor) => ({
    type: 'DONE_PICK_APPLE',
    payload: appleWeight,
    color: appleColor
  }),

  failPickApple: errMsg => ({
    type: 'FAIL_PICK_APPLE',
    payload: new Error(errMsg),
    error: true
  }),

  eatApple: appleId => ({
    type: 'EAT_APPLE',
    payload: appleId
  }),

  ripenApple: (appleId, weight) => ({
    type: 'RIPEN_APPLE',
    payload: appleId,
    weight: weight
  })

}

export default actions

export const BEGIN_PICK_APPLE = 'BEGIN_PICK_APPLE'

export const DONE_PICK_APPLE = 'DONE_PICK_APPLE'

export const FAIL_PICK_APPLE = 'FAIL_PICK_APPLE'

export const EAT_APPLE = 'EAT_APPLE'

export const RIPEN_APPLE = 'RIPEN_APPLE'
