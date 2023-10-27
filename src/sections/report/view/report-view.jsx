import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';


// ----------------------------------------------------------------------

export default function ReportView() {

  const buttonStyle = {
    backgroundColor: '#f1512e',
    color: '#FFF',
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Report</Typography>

      </Stack>

      <Box
          sx={{
            py: 12,
            maxWidth: 480,
            mx: 'auto',
            display: 'flex',
            minHeight: '100vh',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src="/assets/illustrations/under-construction.jpg"
            sx={{
              mx: 'auto',
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />

          <Button href="/" size="large" variant="contained" component={RouterLink} style={buttonStyle}>
            Go to Home
          </Button>
        </Box>


    </Container>
  );
}
