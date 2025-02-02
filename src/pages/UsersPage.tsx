import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store.ts";
import { setUsers } from "../store/slices/userSlice.ts";

const UsersPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector((state: RootState) => state.users.users);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then((data) => dispatch(setUsers(data.users)))
            .catch((err) => console.error("Ошибка загрузки пользователей", err));
    }, [dispatch]);

    return (
        <div>
            <h1>Список пользователей</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <img src={user.image} alt={user.firstName} width={50} />
                        <span>{user.firstName} (ID: {user.id})</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;