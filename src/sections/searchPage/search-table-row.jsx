import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function SearchTableRow({ selected, item }) {
  return (
    <>
          <TableRow key={item.uuid} hover tabIndex={-1} role="checkbox" selected={selected}>
          <TableCell key={item.uuid}>
              <Stack direction="row" alignItems="start" justifyContent="flex-start" spacing={2}>
                {}
              </Stack>
            </TableCell>
            <TableCell component="th" scope="row" padding="none">
              <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={2}>
                <Avatar alt={item.uuid} src={item.profile} />
              </Stack>
            </TableCell>

            <TableCell key={item.uuid}>
              <Stack direction="row" alignItems="start" justifyContent="flex-start" spacing={2}>
                {item.fullName}
              </Stack>
            </TableCell>

            <TableCell key={item.uuid}>
              <Stack direction="row" alignItems="start" justifyContent="flex-start" spacing={2}>
                {item.gender}
              </Stack>
            </TableCell>

            <TableCell key={item.uuid}>
              <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={2}>
                {item.branchMember}
              </Stack>
            </TableCell>
          </TableRow>

      <Popover
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        {/* ... (popover menu items) */}
      </Popover>
    </>
  );
}

SearchTableRow.propTypes = {
  selected: PropTypes.any,
  item: PropTypes.any,
};
