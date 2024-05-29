import axios from "axios";
import { useState, useEffect } from "react";

function Search() {
    const [pokemon, setPokemon] = useState("");
    const baseURl = "https://pokeapi.co/api/v2/";
    
    const getRandom = async () => {
        try {
            axios
                .get(`${baseURl}pokemon/${Math.floor(Math.random() * 100)}`)
                .then((res) => {
                    console.log(res.data.name);
                    setPokemon(res.data);
                });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getRandom();
    }, []);
  return (
    <div>
      <button className="border border-red-500 text-white p-2 rounded-md hover:cursor-pointer" onClick={getRandom}>
        Generate Random Pokemon
          </button>
          <img src="" />
    </div>
  );
}

export default Search;
