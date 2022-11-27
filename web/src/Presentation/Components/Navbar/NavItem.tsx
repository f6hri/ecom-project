import { Link,useLocation } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function NavItem({href,title}:any){
    const routePath = useLocation().pathname;
    return(
        <Link to={href}>
            <Button variant="link" colorScheme="green" isDisabled={routePath === href? true:false } >{title}</Button>
        </Link>
    );
}