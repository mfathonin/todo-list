import { Button, ButtonWithIcon } from "components/styled-components";

function App() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <h1>Todo List</h1>
      <Button onClick={handleClick}>Add</Button>
      <ButtonWithIcon
        onClick={handleClick}
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19"
              stroke="#a5d8ff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12H19"
              stroke="#a5d8ff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      >
        Add
      </ButtonWithIcon>
    </>
  );
}

export default App;
