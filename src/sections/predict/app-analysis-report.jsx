import PropTypes from 'prop-types';

import { Box, Card, Divider, CardHeader, Typography } from '@mui/material';

export default function AppAnalysisReport({ title, subheader, churnRate, churnAccuracy, churnStatus, satisfactoryRate, accountCreated, phoneNumber, email, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {`Email `}
            <Typography variant="body2" color="text.primary" sx={{ mb: 4 }}>
              {/* {`${email}`} */}
            </Typography>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {`Phone `}
            <Typography variant="body2" color="text.primary">
              {/* {`${phoneNumber}`} */}
            </Typography>
          </Typography>
        </Box>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            height: '100%',
            marginLeft: 5,
          }}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 5 }}>
          <Typography variant="body2" color="text.secondary">
            {`Age `}
            <Typography variant="body2" color="text.primary" sx={{ mb: 4 }}>
              {/* {`${age} years`} */}
            </Typography>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {`Address `}
            <Typography variant="body2" color="text.primary">
              {/* {`${address}`} */}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

AppAnalysisReport.propTypes = {
  subheader: PropTypes.string,
  title: PropTypes.string,
  churnRate: PropTypes.string,
  churnAccuracy: PropTypes.string,
  churnStatus: PropTypes.string,
  satisfactoryRate: PropTypes.string,
  accountCreated: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
  // Add more PropTypes for additional fields
};
