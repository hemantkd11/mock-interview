import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Homepage } from './component/pages/home'
import { Codingpage } from './component/pages/codingpage'
import TheoryPage from './component/pages/theroy'
import Counter from './component/pages/RuffonlineCode'
import { AppProvider } from './component/pages/ContextUse/context'
function App() {

  return (
    //   hello
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/theroy-question-ans-dsa' element={<TheoryPage />}></Route>

          <Route path='/nodejs-notes' element={<TheoryPage />}></Route>

          <Route path='/cooding-questions-with-answers/' element={<Codingpage />} />
          <Route path='/ruff-code' element={<Counter />} />
        </Routes>
      </Router>
    </AppProvider>

  )
}

export default App


//  npm run dev to run the app
// import Counter from './component/utiils/counter'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment, incrementByAmount, multiply } from './counter/counterSlice'


// const count = useSelector((state) => state.counter.value)
// const dispatch = useDispatch()
// return (
//   <div>
//     <h1>current count {count}</h1>
//     <button onClick={() => dispatch(increment())}>Click for +</button>
//     <button onClick={() => dispatch(decrement())}>Click for -</button>
//     <button onClick={() => dispatch(incrementByAmount(3))}>increment by amount</button>
//     <button onClick={() => dispatch(multiply(2))}>click for *</button>
//   </div>
// )

//   //   < div >
//   //   <button onClick={() => dispatch(decrement())}>-</button>
//   //     Current count is { count }
//   // <button onClick={() => dispatch(increment())}>+</button>
//   //   </div >