import { ChakraProvider,Button } from "@chakra-ui/react";
import Navigation from "./Navigation";

export default function App(){
  return(
    <ChakraProvider>
      <Navigation />
    </ChakraProvider>
  );
}