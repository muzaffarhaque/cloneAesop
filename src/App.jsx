
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.scss'
import {Home} from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
