import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import MenuLayout from "../layouts/MenuLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "login", element: <LoginPage /> },
        ],
    },
    {
        path: "/",
        element: <MenuLayout />,
        children: [
            { path: "recipes", element: <RecipesPage /> },
            { path: "users", element: <UsersPage /> },
        ],
    },
]);