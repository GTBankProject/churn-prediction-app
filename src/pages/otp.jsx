import { Helmet } from 'react-helmet-async';

import { OtpView } from 'src/sections/otp';

// ----------------------------------------------------------------------

export default function OtpPage() {
  return (
    <>
      <Helmet>
        <title> Otp | GT Bank </title>
      </Helmet>

      <OtpView />
    </>
  );
}
