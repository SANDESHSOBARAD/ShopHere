import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data.data);
  }
  

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <Box maxWidth="lg" mx="auto" py={6}>
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
              color="grey"
            >
              No products found 😢{" "}
              <Button
                component={Link}
                to="/create"
                variant="text"
                sx={{ color: "sky", textDecoration: "none" }}
              >
                Create a product
              </Button>
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default HomePage;
