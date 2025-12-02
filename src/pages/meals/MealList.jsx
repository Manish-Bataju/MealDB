import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router"

export default function MealList() {
  const [params, setParams] = useSearchParams();

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);
  const nav = useNavigate();

  const getData = async () =>{
    try {
      setLoad(true);
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php`, {params: {c: params.get(`category`)} });
      setLoad(false);
      setData(response.data.meals || []);
     } catch (err) {
      setLoad(false);
      setErr(err);
      
    }
  }

  useEffect(() => {
    getData();
  }, [params]);

    if (load) {
      return <h1>Loading...</h1>
    }

    if (err) {
      return <h1>{err.message}</h1>
    }
  

  return (
    <div className={'gap-3 mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10'}>
      {Array.isArray(data) && data.map((meal)=>{
        return ( 
              <div className="mt-5" key={meal.idMeal}>
                {/* Header left aligned */}
                <h1 className="text-2xl font-bold text-left text-white overflow-hidden line-clamp-1">
                  {meal.strMeal}  </h1>
          
                {/* Image centered below header */}
                <div className="flex justify-center mt-4">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMealThumb}
                    className="rounded-lg shadow-lg w-64"/>
                </div>
              </div>
        )
      })}
    </div>
  )
}
