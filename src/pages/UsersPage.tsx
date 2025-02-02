import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, nextPage, prevPage, selectUser } from "../store/slices/userSlice";
import { RootState, AppDispatch } from "../store/store";

const UsersPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { users, skip, total } = useSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(fetchUsers(skip));
    }, [dispatch, skip]);

    return (
        <div>
            <h1>Список користувачів</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <p>{user.firstName} {user.lastName}</p>
                    <img src={user.image} alt={user.firstName} width="50" />
                    <button onClick={() => dispatch(selectUser(user))}>Детальніше</button>
                </div>
            ))}

            <button onClick={() => dispatch(prevPage())} disabled={skip === 0}>Prev</button>
            <button onClick={() => dispatch(nextPage())} disabled={skip + 30 >= total}>Next</button>
        </div>
    );
};

export default UsersPage;