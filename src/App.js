import { useState } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

import "./App.css";

function App() {
	const API_KEY = "98e3fb1f";

	const [movie, setMovie] = useState(null);

	const getMovie = async (searchTerm) => {
		// make fetch request and store response
		const response = await fetch(
			`http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`
		);
		// Parse JSON response into a javascript object
		const data = await response.json();
		//set the Movie state to the movie
		setMovie(data);
	};
	// USE OUR COMPONENTS IN APPs RETURNED JSX
	// We pass the getMovie function as a prop called moviesearch
	return (
		<div className="App">
			<Form moviesearch={getMovie} />
			<MovieDisplay movie={movie} />
		</div>
	);
}

export default App;
