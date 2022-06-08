import MovieDisplay from "./components/MovieDisplay"
import Form from "./components/Form"
import './App.css';

function App() {
  return (
    <div className="App">
      {/* invoking a function */}
      <Form />          
      <MovieDisplay />

    </div>
  );
}

export default App;
