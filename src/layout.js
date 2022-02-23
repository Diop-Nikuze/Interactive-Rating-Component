// import {
//   Box,
//   Container,
//   HStack,
//   Text,
//   VStack,
//   Grid,
//   GridItem,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import Link from "next/link";
// import Image from "next/image";
// import { BsArrowRight } from "react-icons/bs";
// import vivamalt from "/public/assets/vivamalt.jpg";

// const layout = ({ sortedPosts }) => {
//   const colorLightDark = useColorModeValue("#006159", "#2ab391");
//   const colorContent = useColorModeValue("#686868", "#aeb2c0");
//   const readMoreColor = useColorModeValue("black", "#aeb2c0");
//   const colorBorder = useColorModeValue("#ddd", "#2D3748");

//   const formatDate = new Intl.DateTimeFormat("fr", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });

//   return (
//     <Container my={{ base: "50px", md: "60px" }} maxW="container.xl">
//       <Text
//         mb={8}
//         textTransform="uppercase"
//         fontSize="lg"
//         fontWeight="bold"
//         color={colorLightDark}
//         as="h1"
//       >
//         Actus Tendances
//       </Text>
//       <Grid templateColumns="repeat(3, 1fr)" gap={{ base: 5, md: 5, lg: 20 }}>
//         <GridItem colSpan={{ base: 4, md: 4, lg: 2 }}>
//           {sortedPosts.slice(3, 6).map((post, slug) => (
//             <HStack
//               key={slug}
//               spacing={5}
//               borderBottom={
//                 slug === 0 || slug === 1 ? `1px solid ${colorBorder}` : "none"
//               }
//             >
//               <VStack align="start">
//                 <Link href={`/post/${post.slug}`} passHref>
//                   <a>
//                     <Box
//                       w={{ base: "110px", md: "250px" }}
//                       h={{ base: "120px", md: "250px" }}
//                       filter="brightness(80%)"
//                       _hover={{ filter: "brightness(100%)" }}
//                       transition="ease-in-out .2s"
//                       className="box-img"
//                     >
//                       <Image
//                         src={post.image.formats.medium.url}
//                         objectFit="cover"
//                         layout="fill"
//                         priority
//                         alt=""
//                       />
//                     </Box>
//                   </a>
//                 </Link>
//               </VStack>
//               <VStack align="start">
//                 <Text
//                   fontSize={{ base: "9px", md: "11px" }}
//                   color={colorLightDark}
//                   as="h1"
//                   letterSpacing={{ base: ".00em", md: ".03em" }}
//                   mt={{ base: 2, md: "initial" }}
//                 >
//                   {post.category}
//                 </Text>
//                 <Link href={`/post/${post.slug}`} passHref>
//                   <a>
//                     <Text
//                       as="h1"
//                       fontSize={{ base: "sm", md: "22px" }}
//                       letterSpacing="-0.03em"
//                       my={{ base: 0, md: 2 }}
//                       _hover={{ color: "#2ab391" }}
//                       transition="ease-in-out .2s"
//                       lineHeight="1.40"
//                     >
//                       {post.title}
//                     </Text>
//                   </a>
//                 </Link>
//                 <Text
//                   fontSize="xx-small"
//                   color={colorContent}
//                   textTransform="capitalize"
//                 >
//                   {formatDate.format(new Date(post.date))}
//                 </Text>

//                 <Text
//                   color={colorContent}
//                   fontSize="14px"
//                   display={{ base: "none", md: "block" }}
//                   my={3}
//                 >
//                   {post.content.substring(0, 120)}...
//                 </Text>
//                 <Link href={`/post/${post.slug}`} passHref>
//                   <a>
//                     <Box display={{ base: "none", md: "block" }}>
//                       <Box
//                         display="flex"
//                         alignItems="center"
//                         _hover={{ color: "#2ab391" }}
//                         transition="ease-in-out .2s"
//                       >
//                         <Text
//                           mr={2}
//                           textDecor="underline"
//                           color={readMoreColor}
//                         >
//                           Voir plus
//                         </Text>
//                         <BsArrowRight color={colorLightDark} />
//                       </Box>
//                     </Box>
//                   </a>
//                 </Link>
//               </VStack>
//             </HStack>
//           ))}
//         </GridItem>
//         <GridItem
//           colEnd={{ base: 5, md: 5, lg: 4 }}
//           colStart={{ base: 1, md: 1, lg: "initial" }}
//         >
//           <Box
//             position="sticky"
//             top="30px"
//             mb={{ base: "-15px", md: "-15px", lg: "initial" }}
//             mt={{ base: "15px", md: "15px", lg: "initial" }}
//           >
//             <Image src={vivamalt} placeholder="blur" alt="" />
//           </Box>
//         </GridItem>
//       </Grid>
//     </Container>
//   );
// };

// export default layout;

//// actues tendances 2

/* <Container my={{ base: "50px", md: "60px" }} maxW="container.xl">
        <Text
          mb={8}
          textTransform="uppercase"
          fontSize="lg"
          fontWeight="bold"
          color={colorLightDark}
          as="h1"
        >
          Actus Tendances
        </Text>
        
          <Box>
            {sortedPosts.slice(3, 6).map((post, slug) => (
              <HStack
                key={slug}
                spacing={5}
                borderBottom={
                  slug === 0 || slug === 1 ? `1px solid ${colorBorder}` : "none"
                }
              >
                <VStack align="start">
                  <Link href={`/post/${post.slug}`} passHref>
                    <a>
                      <Box
                        w={{ base: "110px", md: "250px" }}
                        h={{ base: "120px", md: "250px" }}
                        filter="brightness(80%)"
                        _hover={{ filter: "brightness(100%)" }}
                        transition="ease-in-out .2s"
                        className="box-img"
                      >
                        <Image
                          src={post.image.formats.medium.url}
                          objectFit="cover"
                          alt=""
                          width="100%"
                          height="100%"
                        />
                      </Box>
                    </a>
                  </Link>
                </VStack>
                <VStack align="start">
                  <Text
                    fontSize={{ base: "9px", md: "11px" }}
                    color={colorLightDark}
                    as="h1"
                    letterSpacing={{ base: ".00em", md: ".03em" }}
                    mt={{ base: 2, md: "initial" }}
                  >
                    {post.category}
                  </Text>
                  <Link href={`/post/${post.slug}`} passHref>
                    <a>
                      <Text
                        as="h1"
                        fontSize={{ base: "sm", md: "22px" }}
                        letterSpacing="-0.03em"
                        my={{ base: 0, md: 2 }}
                        _hover={{ color: "#2ab391" }}
                        transition="ease-in-out .2s"
                        lineHeight="1.40"
                      >
                        {post.title}
                      </Text>
                    </a>
                  </Link>
                  <Text
                    fontSize="xx-small"
                    color={colorContent}
                    textTransform="capitalize"
                  >
                    {formatDate.format(new Date(post.date))}
                  </Text>

                  <Text
                    color={colorContent}
                    fontSize="14px"
                    display={{ base: "none", md: "block" }}
                    my={3}
                  >
                    {post.content.substring(0, 120)}...
                  </Text>

                  <Link href={`/post/${post.slug}`} passHref>
                    <a>
                      <Box display={{ base: "none", md: "block" }}>
                        <Box
                          display="flex"
                          alignItems="center"
                          _hover={{ color: "#2ab391" }}
                          transition="ease-in-out .2s"
                        >
                          <Text
                            mr={2}
                            textDecor="underline"
                            color={readMoreColor}
                          >
                            Voir plus
                          </Text>
                        </Box>
                      </Box>
                    </a>
                  </Link>
                </VStack>
              </HStack>
            ))}
          </Box>
          <Box>
            <Box
              position="sticky"
              top="30px"
              mb={{ base: "-15px", md: "-15px", lg: "initial" }}
              mt={{ base: "15px", md: "15px", lg: "initial" }}
              width={{ base: "100%", md: "100%", lg: "370px" }}
            >
              <Image
                src={vivamalt}
                alt=""
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </HStack>
      </Container> */
