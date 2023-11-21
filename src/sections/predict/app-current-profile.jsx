import PropTypes from 'prop-types';

import { Box, Card, Avatar, CardHeader, Typography } from '@mui/material';


export default function AppCurrentProfile({ title, subheader, dob, email, fullName, age, profilePicture, phoneNumber, address,...other }) {
  
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, pb: 1 }}>
        <Avatar src={profilePicture} alt={title} sx={{ width: 190, height: 190 }} />

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" color="text.primary">
            {fullName}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ p: 3, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {`Email `}
            <Typography variant="body2" color="text.primary" sx={{ mb: 4 }}>
              {`${email}`}
            </Typography>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {`Phone `}
            <Typography variant="body2" color="text.primary">
              {`${phoneNumber}`}
            </Typography>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 5 }}>
          <Typography variant="body2" color="text.secondary">
            {`Age `}
            <Typography variant="body2" color="text.primary" sx={{ mb: 4 }}>
              {`${age} years`}
            </Typography>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {`City `}
            <Typography variant="body2" color="text.primary">
              {`${address}`}
            </Typography>
          </Typography>
        </Box>
      </Box>

    </Card>
  );
}

AppCurrentProfile.propTypes = {
  subheader: PropTypes.string,
  title: PropTypes.string,
  fullName: PropTypes.string,
  age: PropTypes.number,
  profilePicture: PropTypes.string,
  phoneNumber: PropTypes.string,
  address: PropTypes.string,
  dob: PropTypes.string,
  email: PropTypes.string,
  item: PropTypes.any
  // Add more PropTypes for additional fields
};
