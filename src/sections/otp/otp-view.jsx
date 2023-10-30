import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();

  const router = useRouter();

  const [otp, setOtp] = useState("");

  const [seconds, setSeconds] = useState(90);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds]);


  const handleClick = (e) => {
    e.preventDefault();

    if (otp.trim() === "") {
      alert("Please enter a valid OTP");
    }
    // else if (/* Add additional validation if needed */) {
    //   // Handle the case where the OTP is invalid (e.g., doesn't meet specific criteria)
    //   alert("Invalid OTP. Please check and try again."); }
     else {
      router.push("/dashboard", { replace: true });
    }
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField
          name="otp"
          label="otp code"
          type="number"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          autoComplete="false" />

      </Stack>

        <Typography variant="body2" sx={{ mt: 2 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
          {seconds} sec
        </Typography>

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
