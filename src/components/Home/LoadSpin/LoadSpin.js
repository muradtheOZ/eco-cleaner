import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './LoadSpin.css'



export default function LoadSpin() {
  return (
    <div>
      <CircularProgress color="secondary" />
    <h4>It's taking some time to collect the data.</h4>
    <h6>Please wait.... <span role="img" > 😥 </span></h6>
    </div>
  );
}