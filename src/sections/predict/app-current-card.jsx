import * as React from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

export default function AppCurrentCard() {
  return (
    <Card sx={{ position: 'relative', maxWidth: 345, color: '#fff' }}>
      <CardActionArea >
        <img
          src="/assets/Cards/card1.svg"
          alt="credit card"
          style={{ width: '100%', objectFit: 'cover' }}
        />
        <CardContent gutterBottom>
          <Typography  style={{ position: 'absolute', top: 100, left: 0, width: '100%', marginLeft: 20 }} variant="h4" component="div">
            **** **** **** 1234
          </Typography>

          <Typography style={{ position: 'absolute', bottom: 30, right: 0, marginRight: 20, marginBottom: 20 }} variant="h9" component="div" >
            12/23
          </Typography>

          <Typography style={{ position: 'absolute', bottom: 30, left: 0, marginLeft: 20, marginBottom: 20 }} variant="h9" component="div" >
            Redeemer Dela
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
  );
}
