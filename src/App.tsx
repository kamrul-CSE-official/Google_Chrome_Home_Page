import { RouterProvider } from "react-router-dom";
import router from "./Routers/Router";
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
