import Search from "../Components/Search";

function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col">
        <h1 className="text-3xl text-[#2ca243]">Welcome to Poke API!</h1>
        <p className="text-xl text-[#2ca243]">
          Click the button to generate a random Pokemon.
              </p>
              {<Search /> }
      </div>
    </div>
  );
}

export default Home;
