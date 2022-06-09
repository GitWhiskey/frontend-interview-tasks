export const creteFavoriteMovie = () => {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    return {
        id: Math.random().toString(),
        movieName: randomMovie,
    }
}

export const movies = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Godfather: Part II',
    'The Dark Knight',
    '12 Angry Men',
    "Schindler's List",
    'Pulp Fiction',
    'The Lord of the Rings: The Return of the King',
    'The Good, the Bad and the Ugly',
    'Fight Club',
    'The Lord of the Rings: The Fellowship of the Ring',
    'Star Wars: Episode V - The Empire Strikes Back',
    'Forrest Gump',
    'Inception',
    'The Lord of the Rings: The Two Towers',
    "One Flew Over the Cuckoo's Nest",
    'Goodfellas',
    'The Matrix',
    'Seven Samurai',
    'Star Wars: Episode IV - A New Hope',
    'City of God',
    'Se7en',
    'The Silence of the Lambs',
    "It's a Wonderful Life",
    'Life Is Beautiful',
    'The Usual Suspects',
    'Léon: The Professional',
    'Spirited Away',
    'Saving Private Ryan',
    'Once Upon a Time in the West',
    'American History X',
    'Interstellar',
    'Casablanca',
    'City Lights',
    'Psycho',
    'The Green Mile',
    'The Intouchables',
    'Modern Times',
    'Raiders of the Lost Ark',
    'Rear Window',
    'The Pianist',
    'The Departed',
    'Terminator 2: Judgment Day',
    'Back to the Future',
    'Whiplash',
    'Gladiator',
    'Memento',
    'The Prestige',
    'The Lion King',
    'Apocalypse Now',
    'Alien',
    'Sunset Boulevard'
];