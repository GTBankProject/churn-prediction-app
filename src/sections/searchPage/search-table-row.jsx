import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

export default function SearchTableRow({ selected, item }) {
  return (
    <>
      <TableContainer sx={{ overflow: 'unset',ml: 10, width: 820 }}>
        <Table sx={{ minWidth: 800 }}>
          <TableRow key={item.uuid} hover tabIndex={-1} role="checkbox" selected={selected}>
            <TableCell component="th" scope="row" padding="none">
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar alt={item.uuid} src={item.profile} />
              </Stack>
            </TableCell>

            <TableCell key={item.uuid}>
              {item.fullName}
            </TableCell>


            <TableCell key={item.uuid}>
              {item.gender}
            </TableCell>

            <TableCell key={item.uuid}>
              {item.branchMember}
            </TableCell>

          </TableRow>
        </Table>
      </TableContainer>

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
