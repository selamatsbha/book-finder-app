import "./BookDataItem.css";

export default function BookDataItem({ bookData }) {
  return (
    <>
      {bookData.map(({ image_url, title, authors }, index) => {
        return (
          <>
            <div className="div" key={index}>
              <img src={image_url} alt="Pic here" />
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
