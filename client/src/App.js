import React from 'react';
import * as actionTypes from './store/action'
import {connect} from 'react-redux'
import {useState} from 'react'
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
  return (
    <div className="App">
      <h1>Welcome to Hiking Trail</h1>
      <button onClick={()=> getLocation()}>SAVE</button>
      <h3>{location.latitude}  {location.longitude}</h3>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSave: (location) => dispatch({type: actionTypes.SAVED_LOCATION, value: location})
  }
}
export default connect(null, mapDispatchToProps)(App);
