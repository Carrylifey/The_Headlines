// NewsDetailsModal.js
import React from "react";

const News = ({ article, onClose }) => {
  
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
