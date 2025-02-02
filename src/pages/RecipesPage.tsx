import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, nextPage, prevPage, selectRecipe } from "../store/slices/recipeSlice";
import { RootState, AppDispatch } from "../store/store";

const RecipesPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { recipes, skip, total } = useSelector((state: RootState) => state.recipes);

    useEffect(() => {
        dispatch(fetchRecipes(skip));
    }, [dispatch, skip]);

    return (
        <div>
            <h1>Список рецептів</h1>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h3>{recipe.name}</h3>
                    <img src={recipe.image} alt={recipe.name} width="100" />
                    <button onClick={() => dispatch(selectRecipe(recipe))}>Детальніше</button>
                    <div>
                        {recipe.tags.map((tag) => (
                            <button key={tag} onClick={() => dispatch(fetchRecipes(skip))}>{tag}</button>
                        ))}
                    </div>
                </div>
            ))}

            <button onClick={() => dispatch(prevPage())} disabled={skip === 0}>Prev</button>
            <button onClick={() => dispatch(nextPage())} disabled={skip + 30 >= total}>Next</button>
        </div>
    );
};

export default RecipesPage;