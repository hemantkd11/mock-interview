// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useStateValue } from "./ContextUse/context";


const Counter = () => {
  const [arr, setArr] = useState([])
  const [arr1, setArr1] = useState([])
  const { fetchdata, count, increment, decrement } = useStateValue();
  // console.log(fetchdata)
  const snakeLadder = () => {
    let arr1 = [];
    let row = 10;
    let col = 10;
    let num = 100;
    for (let i = 1; i <= row; i++) {
      let x = [];
      for (let j = 1; j <= col; j++) {
        x.push(num--);
      }
      if (i % 2 === 0) {
        x.reverse();
        arr1.push(x);
      } else {
        arr1.push(x);
      }
    }
    setArr(arr1)
  };
  const snakeLadder2 = () => {
    let arr = []
    let row = 10
    let col = 10
  }


  function snakegame() {
    let newarr = []
    let row = 0
    for (let i = 100; i > 0; i--) {
      newarr.push(i)
    }
    setArr1(newarr)

  }

  useEffect(() => {
    snakeLadder();
    snakegame()
  }, [])

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increment}>Count++</button>
      <button onClick={decrement}>Count--</button>
      {/* {fetchdata ? fetchdata.map((item) => { */}
      {/* console.log(Object.keys(item)) */}
      {fetchdata ? (
        <table>
          <thead>
            <tr>
              {Object.keys(fetchdata[0]).map((list) => (

                <th key={list}>{list}</th>
              )
              )}
            </tr>
          </thead>
          <tbody>
            {fetchdata.map((item, idx) => (

              <tr key={idx}>
                {Object.values(item).map((value, index) => (
                  <td key={index}>{typeof value === "object" ? JSON.stringify(value) : value}</td>
                ))}

              </tr>
            ))}
          </tbody>
        </table>


      ) : <div></div>}
      <div>
        {arr ? (
          <table>
            <tbody>
              {arr.map((item, index) => (
                <tr key={index}>{item.map((p, cellindex) => (
                  <td key={cellindex}>{p}</td>
                ))}</tr>
              ))}
            </tbody>
          </table>


        ) : <div>hello</div>}
      </div>
      <div>
        {arr1 ? (
          <table>
            <tbody>
              <tr className="grid">
                {arr1.map((item, index) => (
                  <td key={index} >{item}</td>
                ))}
              </tr>
            </tbody>
          </table>


        ) : <div>hello</div>}
      </div>

    </div >
  );
};

export default Counter;
