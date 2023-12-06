import { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { Grid, Container, Typography, CircularProgress } from '@mui/material';

import axios from 'src/api/axios';
import { CUSTOMERS_SEARCH_URL } from 'src/api/routes';

import SearchTableHead from 'src/sections/user/user-table-head';

import UserSearchBar from '../user-search-bar';
import SearchTableRow from '../search-table-row';

export default function SearchPage() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true before making the request
        const response = await axios.get(CUSTOMERS_SEARCH_URL, {
          params: {
            name: searchQuery,
          },
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });

        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false after the request is complete
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

      <Grid container mt={8} lg={10}>
      <TableContainer sx={{ overflow: 'unset' }}>
            <Table>
              <SearchTableHead
                headLabel={[
                  { id: 'profile', label: 'Profile' },
                  { id: 'name', label: 'Name' },
                  { id: 'gender', label: 'Gender' },
                  { id: 'branch', label: 'Branch' },
                ]}
              />
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <CircularProgress />
              </TableCell>
            </TableRow>
          ) : (
            <>
              {data.map((item, id) => (
                <SearchTableRow
                  key={item.uuid}
                  item={item}
                  avatarUrl={item.avatarUrl}
                />
              ))}
            </>
          )}
        </TableBody>
        </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
}
