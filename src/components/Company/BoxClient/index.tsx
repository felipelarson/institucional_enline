import { BOXCLIENT_DATA } from "./mock";

import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export const BoxClient = () => {
  return (
    <Flex
      flexWrap={"wrap"}
      gap={{ base: "16px", sm: "32px", md: "32px", lg: "32px" }}
    >
      {BOXCLIENT_DATA.map((item, index) => (
        <Flex
          key={index}
          maxW={"223px"}
          p={"16px"}
          bg={"white"}
          borderRadius={"8px"}
          align={"center"}
          justify={"center"}
          h={"96px"}
        >
          <Image
            src={item.image}
            alt={item.alt}
            style={{ objectFit: "contain", width: `${item.width}` }}
          />
        </Flex>
      ))}
    </Flex>
  );
};
