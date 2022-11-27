import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../Navigation/CONSTANS";
import ShoppingCartView from "./ShoppingCartView";

export function ShoppingCartContainer(){
    return(
        <Link to={ROUTE.PRODUCT}>
            <Box p="10" border="1px" borderColor="blackAlpha.300" rounded="10">
                <ShoppingCartView />
            </Box>
        </Link>
    );
}