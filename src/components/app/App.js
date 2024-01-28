import { RouterProvider } from "react-router-dom";
// import router from "../routing/routing";
// -------------------------

import { createBrowserRouter } from "react-router-dom";
import Header from "../header/app-header";
import Features from "../pages/features/features";
import Pricing from "../pages/pricing/pricing";
import HomePage from "../pages/home-page/homePage";
import "./App.css";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <Header
        logo="Training project"
        links={["Home", "Features", "Pricing"]}
        path={["/", "features", "pricing"]}
      />
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "features", element: <Features /> },
      { path: "pricing", element: <Pricing /> },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
