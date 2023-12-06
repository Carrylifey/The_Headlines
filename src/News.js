// NewsDetailsModal.js
import React from "react";
import { useState, useEffect } from "react";
import { auth, setUserFavorites, getUserFavorites } from "./Firebase";

const News = ({ article, onClose }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the current article is in the user's favorites
    const checkFavoriteStatus = async () => {
      const userId = auth.currentUser?.uid;
      if (userId) {
        const favorites = await getUserFavorites(userId);
        setIsFavorite(favorites.includes(article.id));
      }
    };

    checkFavoriteStatus();
  }, [article.id]);

  const handleToggleFavorite = async () => {
    const userId = auth.currentUser?.uid;

    if (userId) {
      const favorites = await getUserFavorites(userId);
      const updatedFavorites = isFavorite
        ? favorites.filter((favId) => favId !== article.id)
        : [...favorites, article.id];

      await setUserFavorites(userId, updatedFavorites);
      setIsFavorite(!isFavorite);
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white p-8 max-w-2xl max-h-full overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
        <p className="text-gray-700 mb-4">{article.description}</p>
        <img
          src={article.urlToImage}
          alt={article.title}
          className="max-w-full h-auto mb-4"
        />
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read Full Article
        </a>
        <button
          onClick={handleToggleFavorite}
          className={`mt-4 ${
            isFavorite ? "bg-red-500" : "bg-blue-500"
          } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default News;
