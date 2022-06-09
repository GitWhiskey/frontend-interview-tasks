import { useState } from "react";
import { addRandomFavoriteMovie } from "./movies";
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
            <button
                className="delete-movie-button"
                data-testid="delete-movie-button"
                onClick={onDelete}>
                x
            </button>
        </div>
    );
}

const FavoriteMovies = ({ favoriteMovies = [], onMoviesChanged }) => {
    // state
    const [selectedMovies, setSelectedMovies] = useState(favoriteMovies);

    // handlers
    const addMovie = () => {
        setSelectedMovies(prevState => [...prevState, addRandomFavoriteMovie()]);
        onMoviesChanged && onMoviesChanged(selectedMovies);
    };

    const handleChange = (id, movieName) => {
        setSelectedMovies(prevState => {
            const newState = [...prevState];
            const movieIndex = newState.findIndex((m) => m.id === id);
            newState.splice(movieIndex, 1, { id, movieName });
            return newState;
        });
        onMoviesChanged && onMoviesChanged(selectedMovies);
    };

    const handleDelete = (movie) => {
        setSelectedMovies(prevState => prevState.filter((r) => r.id !== movie.id));
        onMoviesChanged && onMoviesChanged(selectedMovies);
    };

    // render
    return (
        <div className="container">
            <h1>Add your favorite movies</h1>
            <button
                data-testid="add-movie-button"
                className="add-movie-button"
                onClick={addMovie}>
                Add movie
            </button>
            <div>
                { selectedMovies.map((movie) =>
                        <DeletableMovieEntry
                            key={movie.values}
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