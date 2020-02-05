const initialState = {
  user: [{name:"John", email:"john@gmail.com", password:"test12"}],
  locations: []
}

const reducer = (state=initialState, action) => {
  return {
    state
  }
}

export default reducer