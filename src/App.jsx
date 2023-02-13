import Search from "./components/Search";

function App() {
  return (
    <div id="App" className="flex justify-center m-5">
      <div
        id="card"
        className="block p-6 rounded-lg shadow-lg bg-slate-600 max-w-sm bg-opacity-10">
        <Search />
      </div>
    </div>
  );
}

export default App;
