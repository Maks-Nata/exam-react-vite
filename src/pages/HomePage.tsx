import {Link} from "react-router";

const HomePage = () => {
    return (<div><h1>Ласкаво просимо</h1> <p>Щоб отримати доступ до рецептів Вам потрібно автентифікуватися</p> <Link to="/login">
        <button>Увійти</button>
    </Link></div>);
};
export default HomePage;