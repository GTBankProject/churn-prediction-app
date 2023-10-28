import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';

import axios from 'src/api/axios';
import { CHURN_USER, TOTAL_USER, ACTIVE_USER } from 'src/api/routes';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  const [activeUsers, setActiveUsers] = useState([]);
  const [churnedUsers, setChurnedusers] = useState([]);
  const [totalUser, setTotalUser] = useState([]);

  useEffect(() => {
    axios
      .get(CHURN_USER, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => setChurnedusers(response.data));
  }, []);

  useEffect(() => {
    axios
      .get(ACTIVE_USER, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => setActiveUsers(response.data));
  }, []);

  useEffect(() => {
    axios
      .get(TOTAL_USER, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => setTotalUser(response.data));
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Active Users"
            total={activeUsers}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Churned Users"
            total={churnedUsers}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_churn.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Bank Branches"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bank.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Users"
            total={totalUser}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Customer Statistics"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
              ],
              series: [
                {
                  name: 'Attritted',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Active',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Likely to Churn',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Customer Locations"
            chart={{
              series: [
                { label: 'Takoradi', value: 4344 },
                { label: 'Accra', value: 5435 },
                { label: 'Kumasi', value: 1443 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Branch Churn Rates"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'East Legon', value: 400 },
                { label: 'Accra', value: 430 },
                { label: 'Lapaz', value: 448 },
                { label: 'Nima', value: 470 },
                { label: 'Legon', value: 540 },
                { label: 'Cantonment', value: 580 },
                { label: 'Tesano', value: 690 },
                { label: 'Sakumono', value: 1100 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Performance Radar"
            chart={{
              categories: [
                'Fin. Advisory',
                'Customers',
                'Insurance',
                'User feedbacks',
                'Loans',
                'Investments',
              ],
              series: [
                { name: '2021', data: [80, 50, 30, 40, 100, 20] },
                { name: '2022', data: [20, 30, 40, 80, 20, 80] },
                { name: '2023', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
