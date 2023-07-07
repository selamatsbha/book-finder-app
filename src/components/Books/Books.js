import React from "react";
import BookData from "../BookData/BookData";

export default function Books(props) {
  return (
    <>
      <BookData bookData={props.bookData} />
    </>
  );
}
