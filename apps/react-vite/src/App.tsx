import { Container, Button, TextField } from "components";

function App() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Container>
      <h1>Todo List</h1>
      <form>
        <TextField placeholder="type here create todo" />
        <Button type="submit" onClick={handleClick}>
          Add
        </Button>
      </form>
    </Container>
  );
}

export default App;
