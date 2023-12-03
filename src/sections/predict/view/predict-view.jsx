import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { Box, Grid, Button, Divider, Container, Typography, CircularProgress } from '@mui/material';

import axios from 'src/api/axios';
import { BOT_URL, CHURN_ANALYSIS, CUSTOMER_ONE_URL} from 'src/api/routes';

import AppBotReport from '../app-bot-report';
import AppCurrentProfile from '../app-current-profile';
import AppAnalysisReport from '../app-analysis-report';
import AppCurrentBankDetails from '../app-current-bank-details';

function calculateAge(birthday) {
  const birthDate = new Date(birthday);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
    // eslint-disable-next-line no-plusplus
    age--;
  }

  return age;
}



export default function PredictionView() {
  const userId = useParams();
  const [showProfile, setShowProfile] = useState(false);
  const [data, setData] = useState([]);
  const [churn, setChurn] = useState('');
  const [loading, setLoading] = useState(true);
  const [BotResponse, setBotResponse] = useState('')

  
  
  const HasCrCardOriginal = data.hasCrCard;
  const IsActiveMemberOriginal = data.isActiveMember;
  const Credit_LimitOriginal = data.creditLimit;
  const EstimatedSalaryOriginal = data.estimatedSalary;
  const BalanceOriginal = data.balance;
  const Name = data.fullName

  const HasCrCard = parseInt(HasCrCardOriginal, 10);
  const IsActiveMember = parseInt(IsActiveMemberOriginal, 10);
  const Credit_Limit = parseInt(Credit_LimitOriginal, 10);
  const EstimatedSalary = parseInt(EstimatedSalaryOriginal, 10);
  const Balance = parseInt(BalanceOriginal, 10);

  const userIdentification = userId.uuid;
  const Gender = GenderMain()
  const Geography = GeographyMain()

  function GenderMain(){
    const Genders = data.gender;
    if (Genders === "M"){
      return 1
    }
  }
  console.log(Gender)

  function GeographyMain(){
    const Geographys = data.city;
    if (Geographys !== " "){
      return 1
    }
  }

  function CreateSentence() {
    const sentence = `'Write an expert churn report and solution on the user ${Name}. with the details follwoing details:  Has credit card: ${HasCrCardOriginal}, Is an active member ${IsActiveMemberOriginal}. Note that al the 1s means Yes'`;
    return sentence;
  }
  const message ="List the name of 10 customers who are in Kumasi"
  
console.log(CreateSentence())
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(CUSTOMER_ONE_URL, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
          params: {
            id: userIdentification,
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
  }, [userId, userIdentification]);
  

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.post(
          BOT_URL,
          JSON.stringify({
            message
          }),
          {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          }
        );

        setBotResponse(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [message]);
  console.log(BotResponse)
  console.log('Converted Request Body:',{
    message
  })

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.post(
          CHURN_ANALYSIS,
          {
            HasCrCard,
            IsActiveMember,
            Credit_Limit,
            EstimatedSalary,
            Geography,
            Gender,
            Balance
            
          },
          {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          }
        );

        setChurn(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [HasCrCard, IsActiveMember, Credit_Limit, EstimatedSalary, Geography,Gender, Balance]);

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
          <Typography variant="h4" sx={{ mb: 5 }}>
            User Info
          </Typography>

          <Grid container spacing={3}>
            <Grid xs={12} md={6} lg={5} sx={{ pr: 3 }}>
              <AppCurrentProfile
                title="Personal Information"
                fullName={data.fullName}
                profilePicture={data.profile}
                age={age}
                phoneNumber="+233 54 791 5491"
                email={data.email}
                address={data.city}
              />
            </Grid>

            <Grid xs={12} md={6} lg={7}>
              {console.log(data.cardType)}

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
                  sx={{ flex: 1.5, mr: 3 }}
                  churnStatus={churn.prediction}
                  churnRate={churn.churnRate}
                  churnAccuracy={churn.churnAccuracy}
                  satisfactoryRate={churn.satisfactoryRate}
                />
                <AppBotReport
                  title="Bot Report"
                  subheader="The A.I consultancy report on customer"
                  sx={{ flex: 1, lg: 10 }}
                  botReport = {BotResponse}
                />
              </Grid>
            </Grid>
          )}
        </>
      )}
    </Container>
  );
}
