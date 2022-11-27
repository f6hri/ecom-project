import { Box } from "@chakra-ui/react";

export default function Main({page,children}:any){
    return(
        <Box as="main" id={page}>
            {children}
        </Box>
    );
}