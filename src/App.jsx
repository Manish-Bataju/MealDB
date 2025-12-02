import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import RootLayout from "./components/RootLayout";
import Contact from "./pages/contact/Contact";
import API from "./pages/API";
import MealCategories from "./pages/meals/MealCategories";
import MealList from "./pages/meals/MealList";

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
          path: 'meal-list',
          element: <MealList/>
        },
        {
          path: 'api',
          element: <API/>
        },
      ]
    },


    {
      path: '*',
      element: <NotFound />

    }

  ]);




  return <RouterProvider router={router} />
}

