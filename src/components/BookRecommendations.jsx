// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";


const BookRecommendations = () => {
  // State for all book data
  const [books, setBooks] = useState(bookData);
  const [ourGenre, setOurGenre] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  // SUGGESTED TODOS:
  // TODO: Implement state for selected genre and recommendations
  // TODO: Implement state for recommendations
  // TODO: Implement the handleGenreSelect function


  const handleGenreSelect = (genre) => {
    const ourBooks = books[genre];
    setRecommendations(ourBooks);
    setOurGenre(genre);
    
  };

  return (
    <div className="book-recommendations">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        {/* TODO: Map over genres and create buttons */}
        {Object.keys(books).map((genre) =>(
          <button
          //key={genre}
          className={ourGenre === genre ? "active" : ""}
          onClick={() =>{ handleGenreSelect(genre)
          genreString = genre}}>
            {genre}
          </button>
        ))}
      </div>
      <div >
        <h3>Recommendations for {ourGenre}:</h3>
        {/* TODO: Display recommendations based on selected genre */}
        {recommendations.length > 0 ? (
          <ul className="book-list" >
            {recommendations.map((bookTitle, index) => (
              <li key={index}>{bookTitle}</li>
            ))}
          </ul>
        ):( <p>choose a genre.</p>
        )}
      </div>
    </div>
  );
};

export default BookRecommendations;
