import React from "react";
import Add from "./component/Add";
import Filter from "./component/Filter";
import MovieCard from "./component/MovieCard";
import movieList from "./component/MovieList";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  function handleSearch(e) {
    const value = e.target.value;
    setSearchTerm(value);
  }

  const [searchRating, setSearchRating] = React.useState(0);
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });
  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const [addMovie, setAddMovie] = React.useState(movieList);
  function add() {
    setAddMovie([...addMovie, formData]);
  }

  const movies = addMovie
    .filter((item) => {
      return item.rating >= searchRating;
    })
    .filter((item) => {
      return item.title.includes(searchTerm);
    })
    .map((item) => {
      return (
        <div key={item.id} className="bg-zinc">
          <MovieCard
            title={item.title}
            description={item.description}
            posterURL={item.posterURL}
            rating={item.rating}
          />
        </div>
      );
    });

  return (
    <div className="flex flex-col">
      <Filter
        search={handleSearch}
        rating1={() => setSearchRating(1)}
        rating2={() => setSearchRating(2)}
        rating3={() => setSearchRating(3)}
        rating4={() => setSearchRating(4)}
      />
      <div className="grid grid-cols-4 gap-10">{movies} </div>
      <Add
        change={handleChange}
        add={add}
        title={formData.title}
        posterURL={formData.posterURL}
        description={formData.description}
        rating={formData.rating}
      />
      ;
    </div>
  );
}

export default App;
