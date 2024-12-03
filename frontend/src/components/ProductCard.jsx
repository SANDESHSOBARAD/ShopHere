import React, { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  useTheme,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import axios from "axios";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const theme = useTheme();

  const handleDeleteProduct = async (pid) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/products/${pid}`);
      const { success, message } = response.data;
  
      alert(success ? `Success: ${message}` : `Error: ${message}`);
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error: Could not delete the product. Please try again.");
    }
  };
  
  const handleUpdateProduct = async (pid, updatedProduct) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/products/${pid}`, updatedProduct);
      const { success, message } = response.data;
  
      setDialogOpen(false);
      alert(success ? "Product updated successfully" : `Error: ${message}`);
    } catch (error) {
      console.error("Error updating product:", error);
      setDialogOpen(false);
      alert("Error: Could not update the product. Please try again.");
    }
  };

  return (
    <Card
      sx={{
        boxShadow: theme.shadows[3],
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: theme.shadows[6],
        },
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        height="200"
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          color="primary"
          onClick={() => setDialogOpen(true)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color="error"
          onClick={() => handleDeleteProduct(product._id)}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>

      {/* Update Product Dialog */}
      <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Update Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update the product details below and click "Update" to save changes.
          </DialogContentText>
          <TextField
            fullWidth
            margin="dense"
            label="Product Name"
            name="name"
            value={updatedProduct.name}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Price"
            name="price"
            type="number"
            value={updatedProduct.price}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Image URL"
            name="image"
            value={updatedProduct.image}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={() => handleUpdateProduct(product._id, updatedProduct)}
          >
            Update
          </Button>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default ProductCard;
