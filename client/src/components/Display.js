import React from'react'
import {connect} from 'react-redux'

function Display(props){
  return(<div>
    <ul>
          {props.locations.map(loc => { 
            return <li>{loc.longitude}-{loc.latitude}</li>
          })}
          </ul>
        </div>)
}

const mapStateToProps = (state) => {
  
  return {
    locations: state.locations
    
  }
}

export default connect(mapStateToProps)(Display)