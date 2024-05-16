import React,{useState} from 'react'

export default function TmnUseState() {
  // Declare a new state variable , which we'll call 'count'
  const [count,setCount]= useState(0); 
  // Mang 
  const [list, setList]=useState([2,1,4]);
  // Ham xu ly su kien "Them ngau nhien"
  const tmnHandleList = ()=>{
    // sinh ngau nhien mot gia tri so 
    let num = parseInt(Math.random()*100);
    // cap nhat lai state: list 
    setList([
      ...list,
      num
    ])
    // cach khac 
    // let lst = list.push(num);
    // setList(lst);

  }
  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me  
        </button>
        <hr />
        <h3>List: {list.toString()}</h3>
        <button onClick={tmnHandleList}>Them ngau nhien</button>

    </div>
  )
}
