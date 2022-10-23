import "./style.css";
import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//import Genres from "./Genres";

// Crear context de genres
//export const GenresContext = createContext(MoviesDetails);

function MoviesDetails() {
  const { id }: any = useParams();
  const [oneMovie, setOneMovie]: any = useState([id]);
  const [loading, setLoading]: any = useState(false);
  const [genresList, setGenresList]: any = useState([]);
  const [relatedMovies, setRelatedMovies]: any = useState([id]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1/movies/:id`
      )
      .then((res: any) => {
        //console.log(res.data.results[id])
        setOneMovie(res.data.results[id]);
        setLoading(false);
      }
    );
  }, []);

  // Recoger los genres de la api v2
  /*
  const { genres=[] }:any = oneMovie;
  
  genres.forEach((genre:any) => {
    if (genre.id === true) {
      //return genre.name;
      console.log(genre.name);
    }
  });
  */

  // Recoger los genres de la api v1
  /*
  const fetchGenresList = async (res: any) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`
    );
    const genres = await response.json();
    setGenresList(genres.results); //mostrar los genres
  };

  useEffect(() => {
    fetchGenresList(genresList);
  }, []);
  */
  const value: any = {
    genresList,
    setGenresList,
  };

  // https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1
  
  // Recoger las movies relacionadas de la api v1 ---> falta cambiar 436270 por el id de la movie -> ${oneMovie.id} ??

   useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/436270/similar?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`
      )
      .then((res: any) => {
        //console.log(res.data.results[id])
        setRelatedMovies(res.data.results[id]);
        setLoading(false);
      }
    );
  }, []);

  // prueba para recoger info de genres
  /*
  const dataGenres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];
  */

  // prueba para recoger info de related movies
  const dataRelated:any = [
{
          "adult": false,
          "backdrop_path": "/q8wkjgeFCGcwgiPt1JYQ7G78AHX.jpg",
          "genre_ids": [27],
          "id": 21484,
          "original_language": "fr",
          "original_title": "Possession",
          "overview": "A young woman left her family for an unspecified reason. The husband determines to find out the truth and starts following his wife. At first, he suspects that a man is involved. But gradually, he finds out more and more strange behaviors and bizarre incidents that indicate something more than a possessed love affair.",
          "popularity": 21.573,
          "poster_path": "/pnhC5V0rD9kl58stPtJXKJ7iIqF.jpg",
          "release_date": "1981-05-27",
          "title": "Possession",
          "video": false,
          "vote_average": 7.37,
          "vote_count": 745
        },
        {
          "adult": false,
          "backdrop_path": "/wso6Mld6foDdIZOdrwztLENzSjW.jpg",
          "genre_ids": [27, 53, 9648],
          "id": 39874,
          "original_language": "en",
          "original_title": "My Bloody Valentine",
          "overview": "Twenty years ago in the sleepy mining town of Valentine Bluffs, a fatal mining disaster occurred on Valentine's Day while some of the crew was decorating for a party. The sole survivor of the accident killed the remaining crewmembers and warned the town not to celebrate Valentine's Day again. When a group of teenagers decides to defy that order, a murderous maniac in mining gear begins dispatching townsfolk in bloody and creative ways.",
          "popularity": 16.398,
          "poster_path": "/kl3mewFceFtYIavvGts2atzB0e0.jpg",
          "release_date": "1981-02-11",
          "title": "My Bloody Valentine",
          "video": false,
          "vote_average": 6.5,
          "vote_count": 334
        },
        {
          "adult": false,
          "backdrop_path": "/zVStF8Ud82ynb7NU1NAk6SEmsA1.jpg",
          "genre_ids": [27, 9648, 53],
          "id": 36599,
          "original_language": "en",
          "original_title": "Prom Night",
          "overview": "At a high school senior prom, a masked killer stalks four teenagers who were responsible for the accidental death of a classmate six years previously",
          "popularity": 23.804,
          "poster_path": "/iIMXUkqobFKBxxAR3PPX92c4o0I.jpg",
          "release_date": "1980-07-18",
          "title": "Prom Night",
          "video": false,
          "vote_average": 5.658,
          "vote_count": 316
        },
        {
          "adult": false,
          "backdrop_path": "/leuav0ikW74sCZyuthKyvcKYVMP.jpg",
          "genre_ids": [14, 10751],
          "id": 27793,
          "original_language": "en",
          "original_title": "The NeverEnding Story III",
          "overview": "A young boy must restore order when a group of bullies steal the magical book that acts as a portal between Earth and the imaginary world of Fantasia.",
          "popularity": 20.357,
          "poster_path": "/o75HHfr23sgeqIeUPwjKY0V9Ppi.jpg",
          "release_date": "1994-10-26",
          "title": "The NeverEnding Story III",
          "video": false,
          "vote_average": 4.427,
          "vote_count": 315
        },
        {
          "adult": false,
          "backdrop_path": "/dOaF7zNAHYsSaAp8PXrUt4qfm8k.jpg",
          "genre_ids": [12, 35, 10751, 14, 10770],
          "id": 27850,
          "original_language": "en",
          "original_title": "Halloweentown",
          "overview": "On her 13th birthday, Marnie learns she's a witch, discovers a secret portal, and is transported to Halloweentown — a magical place where ghosts and ghouls, witches and werewolves live apart from the human world. But she soon finds herself battling wicked warlocks, evil curses, and endless surprises.",
          "popularity": 21.738,
          "poster_path": "/axYFa20HjBhYFrSz5LHbWuATjGU.jpg",
          "release_date": "1998-11-10",
          "title": "Halloweentown",
          "video": false,
          "vote_average": 6.876,
          "vote_count": 431
        },
        {
          "adult": false,
          "backdrop_path": "/22KKqRN37JMGcY4hqPHXLnvCMFm.jpg",
          "genre_ids": [18, 27],
          "id": 25853,
          "original_language": "en",
          "original_title": "Dahmer",
          "overview": "On February 15, 1992 in Milwaukee, Wisconsin, Jeffrey Dahmer, one of the world's most infamous serial killers, was convicted of 15 counts of murder and sentenced to 937 years in federal prison. This movie is based on events from his life.",
          "popularity": 201.438,
          "poster_path": "/gZPrXBXYf2s4VztHdQpd0441jF6.jpg",
          "release_date": "2002-06-21",
          "title": "Dahmer",
          "video": false,
          "vote_average": 5.275,
          "vote_count": 229
        },
        {
          "adult": false,
          "backdrop_path": "/e7Imdzy2E6ODQZi7Vld8Rpgc7jf.jpg",
          "genre_ids": [28],
          "id": 27310,
          "original_language": "en",
          "original_title": "The Marine 2",
          "overview": "Rebels seize control of the hotel where a Marine sniper and his wife are staying. Can he save the day?",
          "popularity": 21.355,
          "poster_path": "/z1PayLY6vlMeCrL6Xz8biuuVkLq.jpg",
          "release_date": "2009-12-29",
          "title": "The Marine 2",
          "video": false,
          "vote_average": 6.014,
          "vote_count": 179
        },
        {
          "adult": false,
          "backdrop_path": "/9wNgQTtCuzVoKEX3SeCgGzHZ9vU.jpg",
          "genre_ids": [27],
          "id": 26466,
          "original_language": "en",
          "original_title": "Triangle",
          "overview": "When Jess sets sail on a yacht with a group of friends, she cannot shake the feeling that there is something wrong. Her suspicions are realized when the yacht hits a storm and the group is forced to board a passing ocean liner to get to safety, a ship Jess is convinced she’s been on before.",
          "popularity": 30.574,
          "poster_path": "/qdqAewwUsKO1x2p9rAkAOBlXeiF.jpg",
          "release_date": "2009-10-16",
          "title": "Triangle",
          "video": false,
          "vote_average": 6.915,
          "vote_count": 2015
        },
        {
          "adult": false,
          "backdrop_path": "/hf2uZlzC7GL8mKWAGHMnhwjV8Ys.jpg",
          "genre_ids": [80, 18, 27],
          "id": 27387,
          "original_language": "en",
          "original_title": "Gacy",
          "overview": "Based on a true story of serial killer a model citizen, loving father and husband and serial killer John Wayne Gacy, a man with over 30 dead men and boys entombed in the crawl space underneath his house which he shared with his family.",
          "popularity": 29.252,
          "poster_path": "/jCEYOkub95lkFCfPbZJGhak1uZ0.jpg",
          "release_date": "2003-05-13",
          "title": "Gacy",
          "video": false,
          "vote_average": 4.598,
          "vote_count": 92
        },
        {
          "adult": false,
          "backdrop_path": "/2oxlor4lQrP2JX40ammAQdOqkEQ.jpg",
          "genre_ids": [53, 80, 878, 9648],
          "id": 17532,
          "original_language": "en",
          "original_title": "S. Darko",
          "overview": "Seven years after her brother's death, Samantha Darko finds herself stranded in a small desert town after her car breaks down where she is plagued by bizarre visions telling of the universe's end. As a result, she must face her own demons, and in doing so, save the world and herself.",
          "popularity": 15.642,
          "poster_path": "/rQJjsKhqL4VZx0VN2sD8PR0dK1h.jpg",
          "release_date": "2009-04-28",
          "title": "S. Darko",
          "video": false,
          "vote_average": 4.384,
          "vote_count": 402
        },
        {
          "adult": false,
          "backdrop_path": "/zK7wNuUQ4w0QQp9FF20YTPVgpyN.jpg",
          "genre_ids": [12, 28, 878],
          "id": 20526,
          "original_language": "en",
          "original_title": "TRON: Legacy",
          "overview": "Sam Flynn, the tech-savvy and daring son of Kevin Flynn, investigates his father's disappearance and is pulled into The Grid. With the help of a mysterious program named Quorra, Sam quests to stop evil dictator Clu from crossing into the real world.",
          "popularity": 66.277,
          "poster_path": "/vuifSABRpSnxCAOxEnWpNbZSXpp.jpg",
          "release_date": "2010-12-14",
          "title": "TRON: Legacy",
          "video": false,
          "vote_average": 6.43,
          "vote_count": 6225
        },
        {
          "adult": false,
          "backdrop_path": "/s4DoJFeK5RGBuhDxhKkBzAuAKKv.jpg",
          "genre_ids": [27, 35],
          "id": 23202,
          "original_language": "en",
          "original_title": "Trick 'r Treat",
          "overview": "Four interwoven stories that occur on Halloween: an everyday high school principal has a secret life as a serial killer; a college virgin might have just met the one guy for her; a group of teenagers pull a mean prank, and a bitter old recluse receives an uninvited guest.",
          "popularity": 69.825,
          "poster_path": "/w0nmol4g7n6MFfhfphV7GzHHYjB.jpg",
          "release_date": "2007-10-26",
          "title": "Trick 'r Treat",
          "video": false,
          "vote_average": 6.958,
          "vote_count": 1481
        },
        {
          "adult": false,
          "backdrop_path": "/xGGRgSD7vbkyFwrt24x6cG4ytbp.jpg",
          "genre_ids": [35, 27],
          "id": 19286,
          "original_language": "en",
          "original_title": "Leprechaun 3",
          "overview": "It was a normal night in Las Vegas, Nevada, all the lights were flashing brightly, until a man with one hand, one eye, and one leg walks into a pawn shop with a statue of a hideous looking Leprechaun. The owner claims it's a good luck charm. The statue also wore a medallion around it's neck. The careless pawn shop owner took off the medallion setting the Leprechaun free...",
          "popularity": 45.654,
          "poster_path": "/z9NT2smK66pYOjBtmZuKFFTZ478.jpg",
          "release_date": "1995-07-04",
          "title": "Leprechaun 3",
          "video": false,
          "vote_average": 5.936,
          "vote_count": 243
        },
        {
          "adult": false,
          "backdrop_path": "/3wLPGWYSix2Rbz4QUoAiaQe08wE.jpg",
          "genre_ids": [27, 35],
          "id": 19288,
          "original_language": "en",
          "original_title": "Leprechaun: Back 2 tha Hood",
          "overview": "When Emily Woodrow and her friends happen on a treasure chest full of gold coins, they fail to to heed the warnings of a wise old psychic who had foretold that they would encounter trouble with a very nasty and protective Leprechaun.",
          "popularity": 38.135,
          "poster_path": "/uBXtcz92oigWaWnFDyS8j5tMAc1.jpg",
          "release_date": "2003-12-30",
          "title": "Leprechaun: Back 2 tha Hood",
          "video": false,
          "vote_average": 5.2,
          "vote_count": 142
        },
        {
          "adult": false,
          "backdrop_path": "/jncviKGvFlxdeh6vYWe9g4LmG3j.jpg",
          "genre_ids": [27, 53],
          "id": 23823,
          "original_language": "en",
          "original_title": "Wrong Turn 3: Left for Dead",
          "overview": "A group of people find themselves trapped in the backwoods of West Virginia, fighting for their lives against a group of vicious and horribly disfigured inbred cannibals.",
          "popularity": 140.835,
          "poster_path": "/84s4LMWuGbm4xPWW5PSbHyQhh33.jpg",
          "release_date": "2009-10-20",
          "title": "Wrong Turn 3: Left for Dead",
          "video": false,
          "vote_average": 5.624,
          "vote_count": 911
        },
        {
          "adult": false,
          "backdrop_path": "/quYU0dRWsAHUY9DpIJqF0E3k91.jpg",
          "genre_ids": [12, 14, 16, 10751],
          "id": 16690,
          "original_language": "en",
          "original_title": "Return to Never Land",
          "overview": "In 1940, the world is besieged by World War II. Wendy, all grown up, has two children; including Jane, who does not believe Wendy's stories about Peter Pan.",
          "popularity": 31.068,
          "poster_path": "/y8TePNvpkId43hdFmZ6XvujVPl8.jpg",
          "release_date": "2002-02-14",
          "title": "Return to Never Land",
          "video": false,
          "vote_average": 6.433,
          "vote_count": 1941
        },
        {
          "adult": false,
          "backdrop_path": "/rzc1QTPRWlyzMQXp89Yjwq3zHg8.jpg",
          "genre_ids": [80, 53],
          "id": 16763,
          "original_language": "en",
          "original_title": "Joy Ride 2: Dead Ahead",
          "overview": "While driving to Las Vegas for the bachelor party of her sister Melissa and her fiance Bobby, Kayla stops the car at a gas station to meet her date, Nik, a guy she met on the internet. Nik convinces her to take a secondary road under the protest of Bobby but the car breaks down. They find a house in the middle of nowhere and decide to take the car parked in the house's garage to the next city...",
          "popularity": 14.029,
          "poster_path": "/pXgbAWuj7dNXxDoeuaafq1Hg1ZL.jpg",
          "release_date": "2008-10-07",
          "title": "Joy Ride 2: Dead Ahead",
          "video": false,
          "vote_average": 5.546,
          "vote_count": 196
        },
        {
          "adult": false,
          "backdrop_path": "/pk6jpt8SJi0eTeWfDHgVYgXoRLr.jpg",
          "genre_ids": [28, 12, 878],
          "id": 18627,
          "original_language": "ja",
          "original_title": "怪獣島の決戦 ゴジラの息子",
          "overview": "Reporter Goro Maki stumbles upon scientists conducting weather experiments on Sollgel Island in the South Seas. He discovers the island is inhabited by giant mantis and a woman named Saeko who's been cast away since the death of her father. The pair soon find a helpless infant monster that Godzilla must adopt and learn to raise as one of his own.",
          "popularity": 16.712,
          "poster_path": "/ueVb71Om2KaDcbeSLA8IHQtJ7oJ.jpg",
          "release_date": "1967-12-16",
          "title": "Son of Godzilla",
          "video": false,
          "vote_average": 6.4,
          "vote_count": 144
        },
        {
          "adult": false,
          "backdrop_path": "/tXPDZQZqoxYNTNohXVgFSHNWoio.jpg",
          "genre_ids": [28, 35],
          "id": 18707,
          "original_language": "cn",
          "original_title": "夏日福星",
          "overview": "The third installment in the Lucky Stars series, following Winners and Sinners and My Lucky Stars. The team are released from prison to play detective in order to stop a ruthless gang from ruining their reputations, taking their lives, and that of a key witness in an upcoming trial. They must battle their way through and with the help of Muscles, take down the bad guys.",
          "popularity": 23.957,
          "poster_path": "/vTrU2SP1BCtt2RGeojA8torrPAM.jpg",
          "release_date": "1985-08-15",
          "title": "Twinkle, Twinkle, Lucky Stars",
          "video": false,
          "vote_average": 6.742,
          "vote_count": 91
        },
        {
          "adult": false,
          "backdrop_path": "/gsmZfshUTp5n76oZqKxQdwlAZgb.jpg",
          "genre_ids": [878, 27],
          "id": 28260,
          "original_language": "en",
          "original_title": "Return of the Living Dead III",
          "overview": "Having recently witnessed the horrific results of a top secret project to bring the dead back to life, a distraught teenager performs the operation on his girlfriend after she's killed in a motorcycle accident.",
          "popularity": 32.14,
          "poster_path": "/dfFY2ZlCUyoWpUGKHKoTzq2Yd9C.jpg",
          "release_date": "1993-10-01",
          "title": "Return of the Living Dead III",
          "video": false,
          "vote_average": 6.6,
          "vote_count": 686
        }
  ]

  if (loading) return <section>Cargando...</section>;

  return (
    
    <section className="FilmsDetails">
      <h1>Id: {oneMovie.id}</h1>
      <h1>Title: {oneMovie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${oneMovie.backdrop_path}`}
        alt={oneMovie.title}
      />
      {/*}
      <GenresContext.Provider value={value}>
      <div>
        {genresList.slice(0, 4).map((genres: any, i: any) => (
          <p key={i}>{oneMovie.genre}</p>
        ))}
      </div>
      </GenresContext.Provider>
      */}
      <p>Release date: {oneMovie.release_date}</p>
      <p>Duration (mins): {oneMovie.runtime}</p>
      <p>Overview: {oneMovie.overview}</p>
      <p>Vote average: {oneMovie.vote_average}</p>
      <p>Vote count: {oneMovie.vote_count}</p>
      <section>
        {
          dataRelated.map((related:any, i:any) =>(
            <section key={i}>
              <p>{related.title}</p>
            </section>
          ))
        }
        {/*
        <p>Related movies:{relatedMovies.title}</p>
        */}
      </section>
    </section>
  );
}
export default MoviesDetails;
