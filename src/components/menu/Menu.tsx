import { Link, useNavigate } from "react-router"; // Исправлено с "react-router" на "react-router-dom"
import { useEffect, useState } from "react";
import { User } from "../../models/IUser.ts";

const Menu = () => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error("Ошибка парсинга пользователя из localStorage:", error);
            localStorage.removeItem("user"); // Очистить поврежденные данные
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };

    return (
        <nav>
            <Link to="/recipes">Усі рецепти</Link>
            <Link to="/users">Усі користувачі</Link>
            {user ? (
                <>
                    <img src={user.image} alt={user.firstName} style={{ width: 40, borderRadius: "50%" }} />
                    <span>{user.firstName}</span>
                    <button onClick={handleLogout}>Вийти</button>
                </>
            ) : (
                <Link to="/login">Увійти</Link>
            )}
        </nav>
    );
};

export default Menu;