import { Flex } from "@chakra-ui/react";
import ShoppingCart from "../../../../Components/ShoppingCart";

export default function ShoppingCartsView(){
    return(
        <Flex gap="10" wrap="wrap" justifyContent="center">
            <ShoppingCart />
            <ShoppingCart />
            <ShoppingCart />
            <ShoppingCart />
            <ShoppingCart />
        </Flex>
    );
}