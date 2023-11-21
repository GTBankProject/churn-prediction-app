
import {
  Container,
  Typography,
} from '@mui/material';

import UserSearchBar from '../user-search-bar';



export default function SearchPage() {


  return (
    <Container maxWidth="xl" style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" sx={{ mb: 5, }}>
        Search Customer
      </Typography>

      <UserSearchBar />
    </Container>
  );
}
