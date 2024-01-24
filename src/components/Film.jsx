import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import { StarIcon } from "@heroicons/react/20/solid";

function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString("fr-FR", options);
}

const Film = () => {

  const [film, setFilm] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=b1338b5e8d0e4a06c36fb4f9a9b3d776&language=fr-FR`
        );
        setFilm(response.data);
        console.log(response.data); // Affiche les données chargées ici
      } catch (error) {
        console.error(
          `Erreur lors de la récupération du film avec l'ID ${id}: `,
          error
        );
      }
    };

    fetchFilm();
  }, [id]);

  if (!film) {
    return (
      <div className="text-center text-xl mt-10">
        Chargement des informations du film...
      </div>
    );
  }

  return (
    <div className=" min-h-screen bg-stone-100">
      <Nav />
      <div className="flex mx-auto pt-32 flex-col items-center rounded-lg md:flex-row max-w-5xl">
        <img
          className="object-contain mx-8 rounded-lg w-1/2 md:w-1/3"
          src={
            film.poster_path
              ? "https://image.tmdb.org/t/p/original/" + film.poster_path
              : "https://images.pexels.com/photos/3953965/pexels-photo-3953965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt={film.title}
        />
        <div className="flex flex-col mx-8 p-4">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 text-center md:text-start">
            {film.title}
          </h5>
          <ul className="flex mx-auto md:mx-0 flex-wrap my-2">
            {film.genres.map((genre) => (
              <li
                key={genre.id}
                className="mr-2 mb-2 px-2 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
              >
                {genre.name}
              </li>
            ))}
          </ul>
          <p className="mb-2 text-sm text-gray-700 text-center md:text-start">
            Sortie le {formatDate(film.release_date)} - {film.runtime} mins
          </p>
          <div className="mx-auto md:mx-0">
            <p className="flex items-center">
              {film.vote_average % 1 === 0
                ? film.vote_average
                : film.vote_average.toFixed(1)}{" "}
              / 10 <StarIcon className="text-yellow-400 h-5 w-5 pl-1" />
              <span className="ml-2 text-sm text-gray-500">
                {film.vote_count} avis
              </span>
            </p>
          </div>

          <p className="py-10 mx-auto font-normal max-w-2xl text-gray-700">
            {film.overview}
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Film;
