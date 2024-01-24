import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const Card = ({ film }) => {
  const addStorage = () => {
    let storedData = window.localStorage.films
      ? window.localStorage.films.split(",")
      : [];

    if (!storedData.includes(film.id.toString())) {
      storedData.push(film.id);
      window.localStorage.films = storedData;
    }
  };
  const deleteStorage = () => {
    let storedData = window.localStorage.films
      ? window.localStorage.films.split(",")
      : [];

    if (storedData.includes(film.id.toString())) {
      storedData = storedData.filter((id) => id !== film.id.toString());
      window.localStorage.films = storedData;
    }
    window.location.reload();
  };
  return (
    <div className="group relative p-4 sm:p-8 text-center">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg group-hover:opacity-75 mb-4">
        <Link to={`/film/${film.id}`}>
          <img
            src={
              film.poster_path
                ? "https://image.tmdb.org/t/p/original/" + film.poster_path
                : "https://images.pexels.com/photos/3953965/pexels-photo-3953965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt={film.title}
            className="h-full w-full object-contain object-center"
          />
        </Link>
      </div>
      <h3 className="text-sm font-medium text-gray-900">{film.title}</h3>
      <div className="mt-3">
        <p className="flex justify-center items-center">
          {film.vote_average % 1 === 0
            ? film.vote_average
            : film.vote_average.toFixed(1)}{" "}
          / 10 <StarIcon className="text-yellow-400 h-5 w-5 pl-1" />
          <span className="ml-2 text-sm text-gray-500">
            {film.vote_count} avis
          </span>
        </p>
      </div>
      {film.genre_ids ? (
        <button
          type="button"
          className="mt-4 rounded-md bg-stone-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-stone-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
          onClick={addStorage}
        >
          {" "}
          Ajouter aux favoris
        </button>
      ) : (
        <button
          type="button"
          className="mt-4 rounded-md bg-stone-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-stone-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
          onClick={deleteStorage}
        >
          {" "}
          Supprimer de la liste
        </button>
      )}
    </div>
  );
};

export default Card;
