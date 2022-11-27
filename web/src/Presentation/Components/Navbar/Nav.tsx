import { HStack } from "@chakra-ui/react";
import NavItem from "./NavItem";

export default function Nav(){
    return(
        <HStack spacing="10" as="nav">
            <NavItem href="/" title="Anasayfa" />
            <NavItem href="/products" title="Ürünler" />
        </HStack>
    );
}