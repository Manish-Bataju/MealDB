import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import RootLayout from "./components/RootLayout";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import API from "./pages/API";
import MealCategories from "./pages/meals/MealCategories";

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home /> 
        },
        {
          path: 'about',
          element: <About/>
        },
        {
          path: 'api',
          element: <API/>
        },
        {
          path: 'contact',
          element:<Contact/>

        },
        {
          path:'/meals',
          element:<MealCategories/>
        }

      ]
    },


    {
      path: '*',
      element: <NotFound />

    }

  ]);




  return <RouterProvider router={router} />
}

