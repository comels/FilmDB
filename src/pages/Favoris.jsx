import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Footer from "../components/Footer";
import axios from "axios";

const Favoris = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedData = window.localStorage.films
        ? window.localStorage.films.split(",")
        : [];
      const moviesArray = [];

      for (const id of storedData) {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=b1338b5e8d0e4a06c36fb4f9a9b3d776&language=fr-FR`
          );
          if (response.data) {
            moviesArray.push(response.data);
          }
        } catch (error) {
          console.error(
            `Erreur lors de la récupération du film avec l'ID ${id}: `,
            error
          );
        }
      }

      setFavorites(moviesArray);
    };

    fetchFavorites();
  }, []);

  return (
    <div className="flex bg-stone-100 flex-col min-h-screen">
      <Nav />
      <div className="flex-1 pt-16 mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <div className="-mx-px grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map((film) => (
            <Card key={film.id} film={film} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favoris;
