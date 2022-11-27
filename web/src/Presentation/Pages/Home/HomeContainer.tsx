import Content from "../../Components/Content";
import Main from "../../Components/Main";
import HomeView from "./HomeView";

export function HomeContainer(){
    return(
        <Main page="Home">
            <Content>
                <HomeView />
            </Content>
        </Main>
    );
}