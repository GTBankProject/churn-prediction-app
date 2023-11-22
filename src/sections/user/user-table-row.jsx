import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';

import Label from 'src/components/label';


export default function UserTableRow({ selected, handleClick, item }) {


  const buttonStyle = {
    backgroundColor: '#eca796',
    color: '#FFF',
  };


  return (
    <>
        <TableRow key={item.uuid} hover tabIndex={-1} role="checkbox" selected={selected}>
          <TableCell padding="checkbox">
            <Checkbox disableRipple checked={selected} onChange={handleClick} />
          </TableCell>

          <TableCell component="th" scope="row" padding="none">
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar alt={item.uuid} src={item.profile} />
            </Stack>
          </TableCell>

          <TableCell key={item.uuid}>{item.fullName}</TableCell>

          <TableCell>{item.branchMember}</TableCell>

          <TableCell>
          <Label color={item.churnFlag === '0' ? 'success' : 'error'}>
              {item.churnFlag === '0' ? 'Active' : 'Likely Churned'}
            </Label>
          </TableCell>

          <TableCell align="left">
            <Button size="small" variant="contained" sx={buttonStyle} component={Link} to={`/predict/${item.uuid}`} >
              View
            </Button>
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

UserTableRow.propTypes = {
  handleClick: PropTypes.func,
  selected: PropTypes.any,
  item: PropTypes.any
};
