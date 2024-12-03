import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log(products)
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(90deg, cyan.400, blue.500)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Current Products 🚀
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography
              variant="h6"
              textAlign="center"
              fontWeight="bold"
              color="textSecondary"
            >
              No products found 😢{" "}
              <Button
                component={Link}
                to="/create"
                variant="text"
                sx={{ color: "primary.main", textDecoration: "none" }}
              >
                Create a product
              </Button>
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default HomePage;
