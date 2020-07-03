import number from 'reducers/number'
import color from 'reducers/color'


import { combineReducers } from "redux";


const reducers = combineReducers({
    numberData: number,
    colorData: color
})


export default reducers