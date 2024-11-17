import { useEffect } from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { useSelector } from "react-redux";

function App() {
  const texts = useSelector((state) => state.texts);

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput />
      <TextList />
    </div>
  );
}

export default App;
