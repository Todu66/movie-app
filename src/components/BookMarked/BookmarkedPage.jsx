import React, { useEffect, useState } from "react";

const BookmarkedPage = () => {
  // Retrieve the bookmarked data from localStorage
  const bookmarkedData = JSON.parse(localStorage.getItem("bookmarkedData"));

  return (
    <div>
      {/* Display the bookmarked data */}
      <h1>{bookmarkedData.name}</h1>
      <p>{bookmarkedData.year}</p>
      {/* ... */}
    </div>
  );
};
export default BookmarkedPage;