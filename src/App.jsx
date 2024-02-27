import { useEffect, useState } from "react";

const App = () => {
  const [character, setCharacter] = useState([]);
  const [pages, setPages] = useState(1);
  useEffect(() => {
    const fetching = async () => {
      const results = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${pages}`
      );
      const response = await results.json();
      setCharacter(response.results);
    };
    fetching();
  },[pages]);
    return (
      <div>
        <div className="h-[500px] flex flex-col justify-center items-center ">
          <h1 className="text-7xl font-bold ">RICK AND MORTHY</h1>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-between w-1/2 ">
            <button
              onClick={() => {
                if (pages > 1) {
                  setPages(pages - 1);
                } else {
                  setPages(1);
                }
              }}
              className="bg-yellow-500 p-2 rounded"
            >
              back
            </button>
            <p>pages: {pages}</p>
            <button
              onClick={() => {
                setPages(pages + 1);
              }}
              className="bg-yellow-500 p-2 rounded"
            >
              next
            </button>
          </div>
        </div>
        <div className="bg-gray-800 grid grid-cols-3 pt-20 font-mono ">
          {character
            ? character.map((char, index) => {
                return (
                  <div
                    className="bg-zinc-700 space-x-2 m-4 text-white flex rounded-md"
                    key={index}
                  >
                    <img
                      className="h-[200px]"
                      src={char.image}
                      alt={char.name}
                    ></img>
                    <div className="flex flex-col">
                      <p className="text-3xl font-bold">{char.name}</p>
                      <p>{char.species}</p>
                      <p>{char.type}</p>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
}

export default App;
