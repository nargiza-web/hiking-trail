import * as actionTypes from './action'
const initialState = {
  user: [{name:"John", email:"john@gmail.com", password:"test12"}],
  locations: []
}

const reducer = (state=initialState, action) => {
  if(action.type === actionTypes.SAVED_LOCATION){
    return {
      ...state,
      locations: state.locations.concat(action.value)
    }
  }
  
}

export default reducer