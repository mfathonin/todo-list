import { Button } from "components";

function App() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <h1>Todo List</h1>
      <Button onClick={handleClick}>Add</Button>
    </>
  );
}

export default App;
