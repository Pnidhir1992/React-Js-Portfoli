import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Work } from "./Pages/Work";
import { Contact } from "./Pages/Contact";
import { Layout } from "./components/Layout";
import { Error } from "./Pages/Error";
import { portfolioData } from "./Api/data";

import { DetailedWorkShow } from "./components/DeatileWork/DetailedWorkShow";

const App = () => {
  // console.log(portfolioData);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout data={portfolioData} />,
      errorElement: <Error data={portfolioData} />,
      children: [
        {
          path: "/",
          element: (
            <Home
              data={portfolioData.home}
              newData={portfolioData.home.skills}
            />
          ),
        },
        {
          path: "/about",
          element: <About data={portfolioData.about} />,
        },
        {
          path: "/work",
          element: <Work data={portfolioData.work} />,
        },
        {
          path: "/work/:uniqueId",
          element: <DetailedWorkShow />,
        },
        {
          path: "/contact",
          element: <Contact data={portfolioData.contact} />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
