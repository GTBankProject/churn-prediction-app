import { Helmet } from 'react-helmet-async';

import { PredictView } from 'src/sections/predict/view';

// ----------------------------------------------------------------------

export default function PredictPage() {
  return (
    <>
      <Helmet>
        <title> Predict | GT Bank </title>
      </Helmet>

      <PredictView />
    </>
  );
}
