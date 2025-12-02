export default function HeaderImage() {
    return (
      <div className="mt-10">
        {/* Header left aligned */}
        <h1 className="text-2xl font-bold text-left text-white">
          Delicious Meals
        </h1>
  
        {/* Image centered below header */}
        <div className="flex justify-center mt-4">
          <img
            src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
            alt="Meal"
            className="rounded-lg shadow-lg w-64"
          />
        </div>
      </div>
    );
  }
  