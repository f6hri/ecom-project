import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function ButtonLink({href,type,title}:any){
    return(
        <Link to={href}>
            <Button colorScheme="green" variant={type}>
                {title}
            </Button>
        </Link>
    );
}