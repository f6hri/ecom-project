import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Product from "../Pages/Product";
import { ROUTE } from "./CONSTANS";

export default function Navigation(){
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={ROUTE.HOME} element={<Home />} />
                <Route path={ROUTE.PRODUCT} element={<Product />} />
                <Route path={ROUTE.LOGIN} element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}