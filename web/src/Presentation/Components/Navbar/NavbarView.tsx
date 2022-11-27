import { Flex } from "@chakra-ui/react";
import Brand from "./Brand";
import ButtonLinks from "./ButtonLinks";
import Nav from "./Nav";

export default function NavbarView(){
    return(
        <Flex justifyContent="space-between">
            <Brand />
            <Nav />
            <ButtonLinks />
        </Flex>
    );
}