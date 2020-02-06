import React from 'react';
import * as actionTypes from './store/action'
import {connect} from 'react-redux'
import {useState} from 'react'
import Display from './components/Display'
import './App.css';


function App(props) {
  
  const [location, setLocation] = useState({})
  
  const getLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
        
        props.onSave({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      })
      
    }
   
  }
  //const local = props.locations.map(locale => { return <li>{locale.longitude}-{locale.latitude}</li>})
  return (
    <div className="App">
      <h1>Welcome to Hiking Trail</h1>
      <button onClick={()=> getLocation()}>SAVE</button>
      <h3>{location.latitude}  {location.longitude}</h3> 
      <Display />     
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return{
//     locations: state.locations
//   }
// }
const mapDispatchToProps = (dispatch) => {
  return{
    onSave: (some) => dispatch({type: actionTypes.SAVED_LOCATION, value: some})
  }
}
export default connect(null, mapDispatchToProps)(App);
