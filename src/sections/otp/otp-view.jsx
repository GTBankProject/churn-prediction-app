import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import axios from 'src/api/axios';
import { OTP_URL } from 'src/api/routes';
import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();

  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleClick = async (e) => {
    try {
      const response = await axios.post(OTP_URL, JSON.stringify({ otp }), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
        withCredentials: false,
      });
      if (response.status === 202) {
        alert('logged in successfully');
        navigate('/dashboard ', { replace: true });
      } else {
        alert('Authorization returned null');
      }
    } catch (err) {
      alert('Acess Denied');
    }
  };

  const renderForm = (
    <>
      <Stack>
        <TextField
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          autoComplete="false"
          required
          InputProps={{
            startAdornment: <InputAdornment position="start">GTB- </InputAdornment>,
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Request again?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        Confirm OTP
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.5),
          imgUrl: '/assets/background/overlay_6.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />
      <Stack alignItems="left" justifyContent="center" sx={{ height: 1, marginLeft: 20 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Verify Auth</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Check your email for otp code
          </Typography>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
