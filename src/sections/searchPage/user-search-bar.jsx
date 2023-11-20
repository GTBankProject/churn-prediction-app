import { useState } from 'react';
import { Icon } from '@iconify/react';

import { Button, Container, TextField } from '@mui/material';

export default function UserSearchbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 20 }}>
      <TextField
        id="search"
        type="search"
        label="Search Customer...."
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: 700, }}
      />
      <Button variant="contained" size="large" sx={{ ml:2, backgroundColor: '#a52a2a', }}>
        {' '}
        <Icon icon="icon-park:search" style={{ fontSize: '40px',  }} />
      </Button>
    </Container>
  );
}
