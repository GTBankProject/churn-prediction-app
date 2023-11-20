import { Helmet } from 'react-helmet-async';

import { SearchUser } from 'src/sections/searchPage/view';

// ----------------------------------------------------------------------

export default function SearchUsers() {
  return (
    <>
      <Helmet>
        <title> Customer Search </title>
      </Helmet>

      <SearchUser />
    </>
  );
}
