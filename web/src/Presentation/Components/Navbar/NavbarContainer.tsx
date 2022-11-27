import {Box} from "@chakra-ui/react";
import Content from "../Content";
import NavbarView from "./NavbarView";

export function NavbarContainer(){
    return(
        <Box as="header" id="navbar" py="7">
            <Content>
                <NavbarView />
            </Content>
        </Box>
    );
}