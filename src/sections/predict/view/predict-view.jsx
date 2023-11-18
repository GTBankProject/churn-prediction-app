import React, { useState } from 'react';

import { Grid, Button, Divider, Container, Typography } from '@mui/material';

import AppBotReport from '../app-bot-report';
import AppCurrentProfile from '../app-current-profile';
import AppAnalysisReport from '../app-analysis-report';
import AppCurrentBankDetails from '../app-current-bank-details';

export default function PredictionView() {
  const [showProfile, setShowProfile] = useState(false);

  const buttonStyle = {
    marginTop: -50,
    backgroundColor: '#f1512e',
    color: '#FFF',
  };

  const handleAnalyzeClick = () => {
    setShowProfile(true);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        User Info
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={5} sx={{ pr: 3 }}>
          <AppCurrentProfile
            title="Personal Information"
            fullName="Redeemer Dela"
            age={70}
            phoneNumber="+233 54 791 5491"
            email="redeemerdela419wew@gmail.com"
            address="Adenta Housing"
          />
        </Grid>

        <Grid xs={12} md={6} lg={7}>
          <AppCurrentBankDetails
            title="Bank Details"
            balance="GHC 2,000.00"
            estimated_salary="GHC 9,500.00"
            branch="Tema"
            totalTransCt="54"
            vat="50455338904"
            creditLimit="GHC 4,000.00"
          />
        </Grid>

        <Button size="large" variant="contained" style={buttonStyle} onClick={handleAnalyzeClick}>
          Analyze User Data
        </Button>

        <Divider
          style={{
            marginTop: 20,
            width: '100%',
            height: 1,
            backgroundImage: 'linear-gradient(to right, #ccc 33%, transparent 0%)',
            backgroundSize: '6px 1px',
            backgroundRepeat: 'repeat',
            borderStyle: 'dashed',
            borderWidth: 1,
          }}
        />
      </Grid>

        {showProfile && (
          <Grid container spacing={3}>

            <Grid
              mt={7}
              md={6}
              lg={15}
              sx={{
                pr: 3,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >

              <AppAnalysisReport
              title="Analysis Reports"
              subheader="Insights in Customer Churn Analysis Reports"

              sx={{ flex: 1.5, mr: 3 }} />
              <AppBotReport
              title="Bot Report"
              subheader="The A.I consultancy report on customer"


              sx={{ flex: 1, lg: 10 }} />
            </Grid>
          </Grid>


        )}
    </Container>
  );
}
