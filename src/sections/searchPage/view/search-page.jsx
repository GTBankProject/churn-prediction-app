import { useState, useEffect } from 'react';

import {
  Grid,
  Container,
  Typography,
} from '@mui/material';

import axios from 'src/api/axios';
import { CUSTOMERS_URL } from 'src/api/routes';

import Scrollbar from 'src/components/scrollbar';

import UserSearchBar from '../user-search-bar';
import SearchTableRow from '../search-table-row';

export default function SearchPage() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(CUSTOMERS_URL, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Container maxWidth="xl" style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" sx={{ mb: 5, }}>
        Search Customer
      </Typography>

      <UserSearchBar onSearch={handleSearch} />

      <Grid xs={12} mt={8} lg={8}>
        <Scrollbar>
          <SearchTableRow
            key={data.uuid}
            item={data}
            avatarUrl={data.avatarUrl}
          />
        </Scrollbar>
      </Grid>
    </Container>
  );
}
