import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleSubmit =  (e) => {
        e.preventDefault();
        const data = {
            name,
            price,
            image
        }

        axios
            .post('http://localhost:3000/api/products', data)
            .then(() =>{
                alert("new product created!")
                navigate('/')
            })
            .catch((error) => {
                console.log(error.message);

            })
    }

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Center vertically in the viewport
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: 'background.paper',
        }}
      >
        <Typography variant="h4" component="h1" textAlign="center" gutterBottom color='black' fontSize='50px' fontWeight='800'>
          Create New Item
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <TextField
          label="Image"
          variant="outlined"
          fullWidth
          name="image"
          type='url'
          value={image || ''}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default CreateForm;
