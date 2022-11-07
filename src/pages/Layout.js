import { Link, Outlet } from "react-router-dom"
import Logo from "../images/reactLogo.png"; //변수화 시킴.
import '../pages/logo.css';

const Layout = () => {
    return(
        <div className="wrap">
            <header>
                <div className="innerBox">
                    <h1 className="logo"><Link to="/"><img src={Logo} /></Link></h1>
                    <ul id="nav">
                        <li><Link to="/about">About</Link></li> 
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                        <li><Link to="/skill">Skills</Link></li>
                    </ul>
                </div>
            </header>
            <Outlet />
        </div>
    )
}

export default Layout;