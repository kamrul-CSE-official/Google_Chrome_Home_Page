import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
