import React from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = React.useState([])
  
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.adviceslip.com/advice")
      const data = await res.json()
      setAdvice(data.slip.advice)
      
    }
    fetchData()

  }, [])

  function randamAdvice() {
    async function fetchData() {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip.advice)
    }
    fetchData();
  }

  

  return (
    <div className="App">
      <h2>{advice}</h2>
      <button onClick={randamAdvice}>Give Me Advice</button>
    </div>
  )
}

export default App
