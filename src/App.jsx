import Home from "./compo/Homepage/Home";
import MyProvider from "./api_data/MyProvider";
import Hero from "./compo/contentpage/Hero";

function App() {
  return (
    <MyProvider>
      <Home />
    </MyProvider>
  );
}

export default App;
