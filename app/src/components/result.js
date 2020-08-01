import React from 'react';
import '../style/globalStyle.css'

const Result = ({msg , color}) => {
    return (
        <div className = 'div1'>
         
          <p style = {{
              backgroundColor : color,
              paddingTop :5,
              fontWeight : "bold",
              height : 35,
          }}>{msg}</p>
        </div>
    )
}

export default Result;