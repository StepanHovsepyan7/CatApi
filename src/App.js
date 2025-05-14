import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key":
      "live_P2AUEmpWbp21YJSv57DwNRY7KHL9sjiF5028vfe4fbs52UFpYjRQ8bhToFyk0Rd4",
  });

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=25`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setdata(result))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <div className="card__container">
        <h1 className="title">Cats</h1>
        <div className="cardsParent">
          {data.map((card) => {
            return (
              <Cards
                key={card.id}
                imageUrl={card.url}
                name={card.breeds[0].name}
                origin={card.breeds[0].origin}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
