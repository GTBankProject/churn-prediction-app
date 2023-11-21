import { useState } from 'react';

import { Grid, Button, TextField } from '@mui/material';

export default function UserSearchbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Grid container maxWidth="md" sx={{ mt: 15, justifyContent: 'center', alignItems: 'center' }}>
      <TextField
        id="search"
        type="search"
        label="Type Customer Name ...."
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: 700, ml: 10 }}
      />
      <Button variant="contained" size="large" href='/predict' sx={{ ml: 2, backgroundColor: '#df4900', borderRadius: '10%',           '&:hover': {
            backgroundColor: 'orange',} }}>
        <img src="public/assets/icons/ic_search.svg" alt="Search Icon" style={{ width: 20, height: 20, color: 'white' }} />
      </Button>
    </Grid>
  );
}
