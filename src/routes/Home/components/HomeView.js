import React from 'react'
import { connect } from 'react-redux'
import DuckImage from '../assets/Duck.jpg'
import styled from 'styled-components'

class HomeView extends React.Component {
  calculateStatus (apples) {
    let status = {
      appleEaten: {
        quantity:0,
        weight: 0
      }
    }
    apples.forEach(apple => {
      if (apple.isEaten) {
        status.appleEaten.quantity ++
        status.appleEaten.weight += apple.weight
      }
    })
    return status
  }

  render () {
    console.log('666666666', this.props)
    let { appleBasket } = this.props
    let apples = appleBasket.apples
    let status = this.calculateStatus(apples)
    let {
        appleEaten: { quantity:EatenQuantity, weight:EatenWeight },
    } = status
    console.log('bbbbbbb', (1 + EatenWeight) / EatenWeight)
    return (
      <div>
        <h4>Welcome!</h4>
        <DuckImg style={{ transform: 'scale(' + (EatenQuantity || 1) + ')' }} alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
      </div>
    )
  }
}

// 每一个键值对就是一个映射
const mapStateToProps = state => ({
  appleBasket: state.appleBasket
})

export default connect(mapStateToProps)(HomeView)

HomeView.propTypes = {
  appleBasket: React.PropTypes.object,
}

const DuckImg = styled.img`
  display: block;
  width: 60px;
  margin: 300px auto;
`
