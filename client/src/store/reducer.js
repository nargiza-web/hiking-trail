import * as actionTypes from './action'
const initialState = {
  
  user: [{name:"John", email:"john@gmail.com", password:"test12"}],
  locations: [{latitude: 23, longitude: 25}]
  
}

const reducer = (state=initialState, action) => {
  
  if(action.type === actionTypes.SAVED_LOCATION){
    return {
      ...state,
      locations: [...state.locations, action.value]
      
    }
  }
  return state
}

export default reducer