import { Outlet } from "react-router";
import Menu from "../components/menu/Menu.tsx";

const MenuLayout = () => {
    return (
        <div>
            <Menu />
            <Outlet /> {/* Здесь будут загружаться UsersPage или RecipesPage */}
        </div>
    );
};

export default MenuLayout;