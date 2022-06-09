import { Box } from "@mui/material";
import { useState } from "react";
import { creteFavoriteMovie } from "./movies";
import "./index.css";


const DeletableMovieEntry = ({ movie, handleDelete, handleChange }) => {
    const onDelete = () => {
        handleDelete(movie);
    };

    const onChange = (event) => {
        handleChange(movie.id, event.target.value);
    };

    return (
        <div className="movie-entry">
            <input
                className="movie-input"
                defaultValue={movie.movieName}
                onChange={onChange}
            />
            <button onClick={onDelete}>x</button>
        </div>
    );
}

const FavoriteMovies = () => {
    // state
    const [selectedMovies, setSelectedMovies] = useState([]);

    // handlers
    const handleDelete = (movie) => {
        setSelectedMovies(prevState => prevState.filter((r) => r.id !== movie.id));
    };

    const handleChange = (id, movieName) => {
        setSelectedMovies(prevState => {
            const newState = [...prevState];
            const movieIndex = newState.findIndex((m) => m.id === id);
            newState.splice(movieIndex, 1, { id, movieName });
            return newState;
        });
    };

    const addMovie = () => {
       setSelectedMovies(prevState => [...prevState, creteFavoriteMovie()])
    };

    // render
    return (
        <div className="container">
            <h1>Add your favorite movies</h1>
            <button className="add-movie-button" onClick={addMovie}>Add movie</button>
            <div>
                { selectedMovies.map((movie) =>
                        <DeletableMovieEntry
                            key={movie.value}
                            movie={movie}
                            handleDelete={handleDelete}
                            handleChange={handleChange}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default FavoriteMovies;