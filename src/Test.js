import React from 'react'
import {useState} from 'react'
import _ from 'lodash'

const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      border:"1px solid red",
      width:"2%"
    };

function Test(){
  const [rinp,setInput]=useState([]);
  return (
      <div className="App">
        <input type="text" onChange={(e)=>setInput(e.target.value)}/>
        <p>{rinp}</p>
        <ol>
          { _.times(rinp, (i) => (
              <li style={mystyle} key={i}></li>
            ))
          }
        </ol>
      </div>
    );
}

export default Test;

/*


<ol>
          { _.times(rinp, (i) => (
              <li style={mystyle} key={i}></li>
            ))
          }
        </ol>
const matrix = Array.apply(null, Array(9)).map(function (x, i) {
    return <input></input>;
  });


Array.apply(null, Array(3))
  .map(function (x, i) {
    const col = Array.apply(null, Array(3))
      .map(function (y, j) {
        return <input></input>
      });
});





*/

