import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies!",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Mayo-less Tuna Pasta Salad",
    description:
      "Delicious, satisfying, and perfect for lunch – it’s tuna salad all grown up!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Detox Vegetable Soup",
    description: "Dairy-free, creamy, LOADED with nutrient-rich goodness.",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Buffalo Shrimp Lettuce Wraps",
    description:
      "Low-carb, spicy, light and delicious! Topped with celery and blue cheese or ranch dressing.",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
