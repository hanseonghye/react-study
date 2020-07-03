import Counter from 'components/Counter'
import * as actions from 'actions'
import { connect } from 'react-redux'
import { getRandomColor } from 'utils'


// store안의 state 값을 props 로 연결
const mapStateTpProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
})

// 액션 생성자를 사용하여 액션을 생성하고
// 해당 액션을 dispatch 하는 함수를 만든후 , 이를 props로 연결
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor()
        dispatch(actions.setColor(color))
    }
})


// counter 컴포넌트의 container 컴포넌트
// counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할
const CounterContainer = connect(
    mapStateTpProps,
    mapDispatchToProps
)(Counter)


export default CounterContainer