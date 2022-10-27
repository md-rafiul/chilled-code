import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "../src/Routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
