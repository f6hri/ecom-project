import { Container } from "@chakra-ui/react";

export default function Content({children}:any){
    return(
        <Container maxW="container.xl">
            {children}
        </Container>
    );
}