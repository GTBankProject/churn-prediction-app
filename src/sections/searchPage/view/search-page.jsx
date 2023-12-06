import { useState, useEffect } from 'react';

import { Grid, Container, Typography } from '@mui/material';

import axios from 'src/api/axios';
import { CUSTOMERS_SEARCH_URL } from 'src/api/routes';

import Scrollbar from 'src/components/scrollbar';

import UserSearchBar from '../user-search-bar';
import SearchTableRow from '../search-table-row';

export default function SearchPage() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(CUSTOMERS_SEARCH_URL, {
          params: {
            name: searchQuery
          },
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });

        setData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors
      }
    };

    fetchData();
  }, [searchQuery]);



  return (
    <Container maxWidth="xl" style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Search Customer
      </Typography>

      <UserSearchBar onSearch={handleSearch} />

      <Grid container mt={8} lg={8}>
        <Scrollbar>
          {data.map((item, id) => (
            <SearchTableRow
              key={item.uuid}
              item={item}
              avatarUrl={item.avatarUrl}
            />
          ))}
        </Scrollbar>
      </Grid>
    </Container>
  );
}
