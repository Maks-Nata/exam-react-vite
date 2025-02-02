import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store.ts";
import { setRecipes } from "../store/slices/recipeSlice.ts";

const RecipesPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const recipes = useSelector((state: RootState) => state.recipes.recipes);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((data) => dispatch(setRecipes(data.recipes)))
            .catch((err) => console.error("Ошибка загрузки рецептов", err));
    }, [dispatch]);

    return (
        <div>
            <h1>Список рецептов</h1>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <img src={recipe.image} alt={recipe.name} width={100} />
                        <h3>{recipe.name}</h3>
                        <p>ID: {recipe.id}</p>
                        <p>Пользователь: {recipe.userId}</p>
                        <p>Ингредиенты: {recipe.ingredients.join(", ")}</p>
                        <p>Теги: {recipe.tags.join(", ")}</p>
                        <p>Время приготовления: {recipe.prepTimeMinutes} мин.</p>
                        <p>Время готовки: {recipe.cookTimeMinutes} мин.</p>
                        <p>Инструкции: {recipe.instructions.join(" ")}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipesPage;