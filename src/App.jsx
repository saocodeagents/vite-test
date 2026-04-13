import './App.css'

function App() {
  const loadTime = new Date().toLocaleString()

  return (
    <main className="home">
      <div className="headline">200 - Vite-Test-Site</div>
      <div className="subhead">load successful: {loadTime}</div>
    </main>
  )
}

export default App
