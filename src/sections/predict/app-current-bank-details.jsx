import PropTypes from 'prop-types';

import { Box, Card, Typography, CardHeader } from '@mui/material';

import AppCurrentCard from './app-current-card';

// ----------------------------------------------------------------------


export default function AppCurrentBankDetails({ title, subheader, totalTransCt, branch, balance, fullName, creditLimit, profilePicture, estimated_salary, vat, ...other }) {



    return (
        <Card {...other}>
            <CardHeader title={title} subheader={subheader} sx={{ mb: 5 }} />

            <Box sx={{ p: 3, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <AppCurrentCard />

                <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 5 }}>
                    <Typography variant="body2" color="text.secondary">
                        {`Balance `}
                        <Typography variant="body2" color="text.primary" sx={{ mb: 4 }}>
                            {`${balance}`}
                        </Typography>
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {`Estimated Salary `}
                        <Typography variant="body2" color="text.primary">
                            {`${estimated_salary}`}
                        </Typography>
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ p: 3, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 5 }}>
                    <Typography variant="body2" color="text.secondary">
                        {`Bank Branch `}
                        <Typography variant="body2" color="text.primary" sx={{ mb: 4 }}>
                            {`${branch}`}
                        </Typography>
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {`Total Transactions `}
                        <Typography variant="body2" color="text.primary">
                            {`${totalTransCt}`}
                        </Typography>
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 25 }}>
                    <Typography variant="body2" color="text.secondary">
                        {`Credit Limit `}
                        <Typography variant="body2" color="text.primary" sx={{ mb: 4 }}>
                            {`${creditLimit}`}
                        </Typography>
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {`VAT `}
                        <Typography variant="body2" color="text.primary">
                            {`${vat}`}
                        </Typography>
                    </Typography>
                </Box>
            </Box>


        </Card>
    );
}

AppCurrentBankDetails.propTypes = {
    subheader: PropTypes.string,
    title: PropTypes.string,
    fullName: PropTypes.string,
    creditLimit: PropTypes.number,
    profilePicture: PropTypes.string,
    estimated_salary: PropTypes.string,
    totalTransCt: PropTypes.string,
    vat: PropTypes.string,
    branch: PropTypes.string,
    balance: PropTypes.string,
};
