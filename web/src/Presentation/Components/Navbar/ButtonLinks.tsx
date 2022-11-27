import { HStack } from "@chakra-ui/react";
import ButtonLink from "./ButtonLink";

export default function ButtonLinks(){
    return(
        <HStack>
            <ButtonLink href="/login" type="outline" title="Login" />
            <ButtonLink href="/login" title="Join Now" />
        </HStack>
    );
}