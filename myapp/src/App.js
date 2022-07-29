import React from "react";


// 1부터 100까지 들어있는 arr
const arr = Array.from(Array(100), (_, i) => i + 1);

const App = () => {
    const [result, setResult] = React.useState(0); 
    const [left, leftVal] = React.useState(0); 
    const [right, rightVal] = React.useState(0); 
  return ( 
    <> 
      <input type='number' onChange={(e)=>{leftVal(parseInt(e.target.value))}}/> 
      + 
      <input type='number' onChange={(e)=>{rightVal(parseInt(e.target.value))}}/> 
      = 
      <input type='number' disabled value={result} /> 
      <button type='button' onClick={()=>{
        setResult(left + right)
      }}>계산</button> 
    </> 
  ); 
} 
export default App;
