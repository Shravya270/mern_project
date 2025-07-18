import {Container,VStack,Text,SimpleGrid,Box} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useProductStore } from '../src/store/product';
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("Products", products);

  return (
    <Container maxW={'container.xl'} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          textAlign={"center"}
          bgGradient={"linear(to-r,cyan.400,blue.500)"}
          bgClip={"text"}
        >
          Current Products
        </Text>

        {products.length === 0 ? (
          <Box textAlign="center">
            <Text fontSize="xl" fontWeight="bold" color="gray.500">
              No Products found!{' '}
              <Link to="/create">
                <Text as="span" color="blue.500" _hover={{ textDecoration: 'underline' }}>
                  Create a Product
                </Text>
              </Link>
            </Text>
          </Box>
        ) : (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={10}
            w="full"
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
