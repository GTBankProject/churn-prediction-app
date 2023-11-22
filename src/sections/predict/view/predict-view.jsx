import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import {
  Box,
  Grid,
  Button,
  Divider,
  Container,
  Typography,
  CircularProgress,
} from '@mui/material';

import axios from 'src/api/axios';
import { CUSTOMER_ONE_URL } from 'src/api/routes';

import AppBotReport from '../app-bot-report';
import AppCurrentProfile from '../app-current-profile';
import AppAnalysisReport from '../app-analysis-report';
import AppCurrentBankDetails from '../app-current-bank-details';

function calculateAge(birthday) {
  const birthDate = new Date(birthday);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    // eslint-disable-next-line no-plusplus
    age--;
  }

  return age;
}

export default function PredictionView() {
  const  userId  = useParams(); 
  const [showProfile, setShowProfile] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const userIdentification = userId.uuid

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(CUSTOMER_ONE_URL, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
          params: {
            id: userIdentification ,
          },
        });

        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  },[userId,userIdentification ]);

  const buttonStyle = {
    marginTop: -50,
    backgroundColor: '#f1512e',
    color: '#FFF',
  };

  const handleAnalyzeClick = () => {
    setShowProfile(true);
  };

  const age = calculateAge(data.birthday);

  return (
    <Container maxWidth="xl" style={{ display: 'flex', flexDirection: 'column' }}>
      {loading ? (
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress size={40} />
        </Box>
      ) : (
        <>
          <Typography variant="h4" sx={{ mb: 5,}}>
            User Info
          </Typography>

          <Grid container spacing={3}>
            <Grid xs={12} md={6} lg={5} sx={{ pr: 3 }}>
              <AppCurrentProfile
                title="Personal Information"
                fullName={data.fullName}
                profilePicture={data.profile}
                age={age + 20}
                phoneNumber="+233 54 791 5491"
                email={data.email}
                address={data.city}
              />
            </Grid>

            <Grid xs={12} md={6} lg={7}>
              <AppCurrentBankDetails
                title="Bank Details"
                fullName={data.fullName}
                cardExp={data.cardExp}
                cardNumber={data.cardNumber}
                cardType={data.cardType}
                balance={data.balance}
                estimated_salary={data.estimatedSalary}
                branch={data.branchMember}
                totalTransCt={data.totalTransCt}
                vat={data.vat}
                creditLimit={data.creditLimit}
              />
            </Grid>

            <Button
              size="large"
              variant="contained"
              style={buttonStyle}
              onClick={handleAnalyzeClick}
            >
              Analyze User Data
            </Button>

            <Divider
              style={{
                marginTop: 20,
                width: '100%',
                height: 1,
                backgroundImage:
                  'linear-gradient(to right, #ccc 33%, transparent 0%)',
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
                  sx={{ flex: 1.5, mr: 3 }}
                />
                <AppBotReport
                  title="Bot Report"
                  subheader="The A.I consultancy report on customer"
                  sx={{ flex: 1, lg: 10 }}
                />
              </Grid>
            </Grid>
          )}
        </>
      )}
    </Container>
  );
}
