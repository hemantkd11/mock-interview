import React, { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [fetchdata, setfetchdata] = useState()

  const CallAPiTofetchData = () => {
    const URL = "https://www.freetestapi.com/api/v1/users"
    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not working" + res.statusText)
        }
        return res.json()
      })
      .then((data) => {
        // console.log("data", data)
        setfetchdata(data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {

    CallAPiTofetchData()
  }, [])
  // console.log("fetchdata :", fetchdata)
  const increment = () => {
    setCount((num) => num + 1);
  };
  const decrement = () => {
    setCount((num) => num - 1);
  };
  return (
    <AppContext.Provider value={{ fetchdata, count, increment, decrement }}>
      {children}
    </AppContext.Provider>
  );
};

export const useStateValue = () => useContext(AppContext);


// const CallAPiTofetchData = async () => {
//   // const URL = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=5bc76d6e2424d82342e31e516f23d229&units=metric"
//   const URL = "https://www.freetestapi.com/api/v1/users"


//   try {
//     const res = await fetch(URL)
//     if (res.ok) {

//       const data = await res.json()
//       console.log("data", data)
//       setfetchdata(data)
//     }
//     else {
//       throw new Error("Network response was not working" + res.statusText)
//     }
//   }
//   catch (err) {
//     console.log("ERROR In fatching", err)
//   }
// }