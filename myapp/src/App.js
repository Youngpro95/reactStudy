import React from "react";


// 1부터 100까지 들어있는 arr
// const arr = Array.from(Array(100), (_, i) => i + 1);

const App = () => {
  const [inputTest , inputVal] = React.useState(0);
  const input = React.useRef(null); 
  const handleClick = () => { 
    if (input.current) { 
      input.current.value = ''; 
    } 
  } 
  return ( 
    <div> 
      <div>현재 value는 {inputTest} 입니다.</div>
      <input type="text" ref={input} onChange={(e)=>inputVal(e.target.value)} />
      <button type="button" onClick={handleClick}>Click to Reset</button> 
    </div> 
  ); 
} 
export default App;
