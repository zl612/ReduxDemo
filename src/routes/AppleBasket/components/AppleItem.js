import React from 'react'
import styled from 'styled-components'
import redApple from '../assets/red_apple.png'
import greenApple from '../assets/green_apple.jpg'

class AppleItem extends React.Component {

  render () {
    let { apple, action } = this.props
    console.log('8888888', this.props)
    return (
      <AppleItemDiv>
        <div style={{ display: 'flex' }}><ImgDiv src={apple.color === 'red' ? redApple : greenApple} alt='' />
          <InfoDiv>
            <h4>{apple.color === 'red' ? '红苹果' : '青苹果'} - {apple.id + 1}号</h4>
            <h6>{apple.weight}克</h6>
          </InfoDiv>
        </div>

        <ButDiv>
          {apple.color === 'red'
          ? <button onClick={() => action.eatApple(apple.id)}>吃掉</button>
          : <button style={{ background: 'red' }} onClick={() => action.ripenApple(apple.id)}>催熟</button>
          }
        </ButDiv>
      </AppleItemDiv>
    )
  }
}

export default AppleItem

AppleItem.propTypes = {
  apple: React.PropTypes.object,
  action: React.PropTypes.object
}

const AppleItemDiv = styled.div`
  width: 360px;
  margin: 10px auto;
  border-radius: 4px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`
const ImgDiv = styled.img`
  width: 50px;
  height: 50px;
`
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 10px;

  &>h4{
    padding: 6px 0;
    font-size: 20px;
    color: #069;
    font-weight: 500;
  }

  &>h6{
    font-size: 16px;
    font-weight: 200;
  }
`

const ButDiv = styled.div`
  padding-right: 10px;

  &>button{
    background-color: #3498db;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    padding: 10px 24px;
    border-radius: 6px;
    outline: none;
    border: none;
  }

  &>button: hover {
    background-color: #5dade2
  }
`
