import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { withRouter } from "react-router";
import Loader from './Loader';

class Footer extends React.Component {
   constructor(props) {
     super(props)
   }
   state = {

   }

   render(){
     return(
       <div className='footer'>
         <h2 style={{'display':'flex','justifyContent':'center','alignItems':'center'}}>Footer
         </h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
}

export default withRouter(connect(mapStateToProps)(Footer));
