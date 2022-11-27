import { Image,Heading, VStack, Box } from "@chakra-ui/react";
import StarRate from "./StarRate";
const imageSrc = "https://greenlium.com/wp-content/uploads/2020/12/kentia-2-400x400.jpg";

export default function ShoppingCartView(){
    return(
        <VStack spacing="5">
            <Image src={imageSrc} w="15em" />
            <Heading as="h3" fontSize="xl">
                Starliçe – Strelitzia Nicolai
            </Heading>
            <Box>
                <StarRate />
            </Box>
        </VStack>
    );
}