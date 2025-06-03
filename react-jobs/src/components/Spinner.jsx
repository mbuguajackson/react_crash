import React from 'react'
import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }) => {
    const override = {
        display: 'block',
        margin: '100px auto',
       
    };
  return (
    <ClipLoader
      color="#4f46e5"
      loading={loading}
      size={150}
      style={override}
     
     /> 
  )
}
export default Spinner