import PropTypes from 'prop-types';

import { Box, Card, Divider, CardHeader, Typography } from '@mui/material';

export default function AppAnalysisReport({ title, subheader, churnRate, churnAccuracy, churnStatus, satisfactoryRate, accountCreated, phoneNumber, email, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {`Churn Status `}
            <Typography variant="body2" color="text.primary" sx={{ mb: 8 }}>
              {`${churnStatus}`}
            </Typography>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {`Churn Rate `}
            <Typography variant="body2" color="text.primary">
              {`${churnRate}`}
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

        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
          <Typography variant="body2" color="text.secondary">
            {`Satisfactory Rate `}
            <Typography variant="body2" color="text.primary" sx={{ mb: 8 }}>
              {`${satisfactoryRate} `}
            </Typography>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {`Churn Accuracy `}
            <Typography variant="body2" color="text.primary">
              {`${churnAccuracy}`}
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
