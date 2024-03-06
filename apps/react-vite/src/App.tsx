import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" errorElement={<ErrorPage />}>
          <Route index element={<TodoPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
