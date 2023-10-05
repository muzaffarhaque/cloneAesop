
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.scss'
import {Home} from "./pages";
import { ErrorPage } from './components';
import Download from './components/Download';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage />,
    },
    {
      path:"/download",
      element:<Download/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
