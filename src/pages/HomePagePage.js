import HomePage from "../components/HomePage/HomePage";
import NavBar from "../components/NavBar/NavBar";

export default function HomePagePage(props) {
  return (
    <>
      <NavBar />
      <HomePage
        setInputValue={props.setInputValue}
        handleSearch={props.handleSearch}
      />
    </>
  );
}
