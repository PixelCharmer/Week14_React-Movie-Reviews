import React from 'react';
import Movie from './Movie';


// array of objects making up the componenets 

export default class MovieList extends React.Component {
    render() {
        let movies = [
            {
                id: 1,
                title: "Oppenheimer",
                description: "A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bomb, thus helping end World War 2. We see his life from university days all the way to post-WW2, where his fame saw him embroiled in political machinations.",
                genre: " Thriller",
                director: " Christopher Nolan",
                runTime: " 3h 0m",
                ageRating: " R",
                image: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
            },
            {
                id: 2,
                title: "Dungeons & Dragons: Honor Among Thieves",
                description: "A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a long lost relic, but their charming adventure goes dangerously awry when they run afoul of the wrong people.",
                genre: " Adventure",
                director: " John Francis Daley",
                runTime: " 2h 16m",
                ageRating: " PG-13",
                image: "https://www.jesusfreakhideout.com/movies/pics/DungeonsandDragonsHonorAmongThieves.jpg",
            },
            {
                id: 3,
                title: "Book Club: The Next Chapter",
                description: "Four best friends take their book club to Italy for the fun girls trip they never had. When things go off the rails and secrets are revealed, their relaxing vacation turns into a once-in-a-lifetime cross-country adventure.",
                genre: " Romance",
                director: " Bill Holderman",
                runTime: " 2h 46m",
                ageRating: " PG-13",
                image: "https://i.ebayimg.com/images/g/p-sAAOSwnFZkVIqV/s-l1200.jpg",
            },
            {
                id: 4,
                title: "The Super Mario Bros. Movie",
                description: "While working underground to fix a water main, Brooklyn plumbers and brothers Mario and Luigi are transported through a mysterious pipe to a magical new world. But when the siblings are separated, an epic adventure begins.",
                genre: " Animation",
                director: " Aaron Horvath",
                runTime: " 1h 32m",
                ageRating: " PG",
                image: "https://wrhsbluestreak.com/wp-content/uploads/2023/04/MarioMoviePoster.jpg",
            },
            {
                id: 5,
                title: "Guardians of the Galaxy Vol. 3",
                description: "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own. If the mission is not completely successful, it could possibly lead to the end of the Guardians as we know them.",
                genre: " Action",
                director: " James Gunn",
                runTime: " 2h 30m",
                ageRating: " PG-13",
                image: "https://www.themoviedb.org/t/p/original/7itZv6ZAblGN1nYgGtTWGPqNDVj.jpg",
            },
            {
                id: 6,
                title: "The Flash",
                description: "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.",
                genre: " Fantasy",
                director: " Andy Muschetti",
                runTime: " 2h 24m",
                ageRating: " PG-13",
                image: "https://s.movieinsider.com/images/p/654026_m1674329978.jpg",
            }
        ]

        // uses to map function to iterate over the movies array
        // declaring values to create props for each item 

        return (
            <div>
                {movies.map((movie, index) => (
                    <Movie
                        key={index}
                        title={movie.title}
                        description={movie.description}
                        genre={movie.genre}
                        director={movie.director}
                        runTime={movie.runTime}
                        ageRating={movie.ageRating}
                        image={movie.image}
                    />
                ))}
            </div >
        )
    }
}
