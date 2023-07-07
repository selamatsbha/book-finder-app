import React from "react";
import BookDataItem from "../BookDataItem/BookDataItem";

export default function BookData(props) {
  return (
    <>
      <BookDataItem bookData={props.bookData} />
    </>
  );
}
