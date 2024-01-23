import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("war");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b1338b5e8d0e4a06c36fb4f9a9b3d776&query=${search}&language=fr-FR`
      )
      .then((response) => {
        setFilms(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  return (
    <div>
      <div className="my-10 max-w-80 m-auto flex rounded-md">
        <div className="relative flex flex-grow">
          <input
            type="text"
            name="search"
            id="search"
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full bg-ye rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm sm:leading-6"
            placeholder="Rechercher un film"
          />
        </div>
      </div>
      <div className="-mx-px grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
        {films &&
          films.map((film) => (
            <Card
              key={film.id}
              film={film}
            />
          ))}
      </div>
    </div>
  );
};

export default Form;
