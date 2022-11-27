import Content from "../../Components/Content";
import Main from "../../Components/Main";
import ProductView from "./ProductView";

export function ProductContainer(){
    return(
        <Main page="Product">
            <Content>
                <ProductView />
            </Content>
        </Main>
    );
}