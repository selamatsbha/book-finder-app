import "./BookDataItem.css";

export default function BookDataItem({ bookData }) {
  return (
    <>
      {bookData.map(({ image, bookName, authorName }) => {
        return (
          <>
            <div className="div">
              <img src={image} alt="Pic here" />
              <h4>{bookName}</h4>
              <p>{authorName}</p>
            </div>
          </>
        );
      })}
    </>
  );
}
