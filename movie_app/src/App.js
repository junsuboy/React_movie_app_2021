import React from "react";


const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 3.3
  },
  {
    id: 2,
    name: "ramen",
    image:
      "https://i.huffpost.com/gen/1410937/thumbs/o-RAMEN-facebook.jpg#Ramen%202000x1000",
    rating: 4.4
  },
  {
    id: 3,
    name: "samgyeopsal",
    image:
      "https://www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg",
    rating: 5.5
  },
  {
    id: 4,
    name: "kimbap",
    image:
      "https://www.maangchi.com/wp-content/uploads/2007/08/gimbap_plate.jpg",
    rating: 5.0
  },
  {
    id: 5,
    name: "bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1200px-Dolsot-bibimbap.jpg",
    rating: 4.1
  },
];


function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;