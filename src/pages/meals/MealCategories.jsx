import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { design } from "@/lib/design";
import clsx from "clsx";



/**
 * MealList is a component that displays a list of meals based on the given parameters.
 * It uses the useNavigate and useSearch hooks from react-router to handle navigation and search. 
 * The component is initialized with an empty object as its state, and accepts no props.
 * @returns {JSX.Element} A JSX element representing the MealList component.
 */

export default function MealCategory() {
  const[data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);

  const getData = async () =>{
    try {
      setLoad(true);
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
      setLoad(false);
      setData(response.data.categories);
      console.log(response.data.categories);
     } catch (error) {
      setLoad(false);
      setErr(err);
      
    }
  }

  useEffect(() => {
    getData();
  }, []);

    if (load) {
      return <h1>Loading...</h1>
    }

    if (err) {
      return <h1>{err.message}</h1>
    }
  return (
    <div className={"gap-5 mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}> 
     
      {data && data.map((cat) =>{
        return (
          <Card className='max-w-md pt-0 flex flex-col' key={cat.strCategory}>
          <CardContent className='py-6'>
            <img src={cat.strCategoryThumb}   alt={cat.strCategoryThumb}
              className="aspect-video h-70 rounded-t-xl object-cover w-full cursor-pointer"
            />
          </CardContent>
          <CardHeader>
            <CardTitle className="text-3xl font-medium cursor-pointer" >{cat.strCategory}</CardTitle>
            <CardDescription className="line-clamp-5">{cat.strCategoryDescription}</CardDescription>
          </CardHeader>
          <CardFooter className='gap-3 max-sm:flex-col max-sm:items-stretch mt-auto'>
            <Button variant={'outline'} className="text-white cursor-pointer">Recipe</Button>
            <Button variant={'outline'} className="text-white cursor-pointer">Ingredients</Button>
          </CardFooter>
        </Card>
        )
      })}
    </div>

  )
}
