import { Helmet } from 'react-helmet-async';

import { BotUI } from 'src/sections/bot';

// ----------------------------------------------------------------------

export default function BotPage() {
  return (
    <>
      <Helmet>
        <title> Bot | GT Bank </title>
      </Helmet>

      <BotUI />
    </>
  );
}
