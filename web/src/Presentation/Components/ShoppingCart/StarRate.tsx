import { StarIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

export default function StarRate(){
    return(
        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < 4 ? 'green' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            20 reviews
          </Box>
        </Box>
    );
}