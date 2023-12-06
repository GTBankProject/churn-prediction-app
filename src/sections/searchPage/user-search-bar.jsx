import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Grid, Button, TextField } from '@mui/material';

const UserSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  const handleSearch = () => {

    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Grid
      container
      maxWidth="md"
      sx={{ mt: 15, justifyContent: 'center', alignItems: 'center' }}
    >
      <TextField
        id="search"
        type="search"
        label="Type Customer Name ...."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        sx={{ width: 700, ml: 10 }}
      />

      <Button
        variant="contained"
        size="large"
        onClick={handleSearch}
        sx={{
          ml: 2,
          backgroundColor: '#df4900',
          borderRadius: '10%',
          '&:hover': { backgroundColor: 'orange' },
        }}
      >
        Search
      </Button>
    </Grid>
  );
};

UserSearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default UserSearchBar;
