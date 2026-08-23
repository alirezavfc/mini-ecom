import { Link } from "react-router-dom"

function Navbar (){
    return(
        <nav>
            <Link to="/">خانه</Link>
            <Link to="/about">درباره‌ما</Link>
            <Link to="/cart">سبد خرید</Link>
        </nav>
    )
}

export default Navbar