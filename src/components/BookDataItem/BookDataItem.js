import "./BookDataItem.css";
import { useContext } from "react";
import { BookContext } from "../../BookAppContext";

export default function BookDataItem() {
  const { bookData } = useContext(BookContext);
  return (
    <>
      {bookData.map(({ imageUrl, title, authors }, index) => {
        return (
          <>
            <div className="div" key={index}>
              <img src={imageUrl} alt="Pic here" />
              <div>
                <p>{title}</p>
                <h4>{authors}</h4>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
