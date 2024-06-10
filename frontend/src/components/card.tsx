import React, { useState } from "react";

type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const truncatedDescription =
    description.split(" ").slice(0, 15).join(" ") +
    (description.split(" ").length > 15 ? "...click to see more" : "");

  return (
    <>
      <div
        onClick={handleCardClick}
        className="block m-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        style={{ width: "350px", height: "250px" }}
      >
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-medium text-gray-700 dark:text-gray-300">
          {truncatedDescription}
        </p>
      </div>
      {isPopupOpen && (
        <div
          onClick={handleClosePopup}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-8 rounded-lg shadow-lg text-gray-800"
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Close
            </button>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
