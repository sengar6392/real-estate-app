import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import About from "./pages/About";
import Profile from "./pages/Profile";

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/sign-in",
    element:<SignIn/>
  },
  {
    path:"/sign-out",
    element:<SignOut/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },

])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App