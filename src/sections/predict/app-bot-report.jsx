import PropTypes from 'prop-types';

import { Card, CardHeader, Typography } from '@mui/material';

export default function AppBotReport({ title, subheader, botReport, ...other }) {
    return (
        <Card {...other}>
            <CardHeader title={title} subheader={subheader} />

            <Card
                mt={5}
                md={6}
                sx={{
                    margin: 2,
                    backgroundColor: '#fff3ef',
                    textAlign: 'justify',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 2,
                    maxWidth: 'calc(93% - 4px)',
                    maxHeight: 'calc(90% - 4px)',
                }}
            >
                <Typography>
                    Lorem Ipsum is commonly used as a placeholder text in the
                    printing and typesetting industry. Feel free to use it as
                    needed. If you need a specific amount of Lorem Ipsum text
                    or want variations, you can generate it using online
                    Lorem Ipsum generators.
                    Lorem Ipsum is commonly used as a placeholder text in the
                    printing and typesetting industry. Feel free to use it as
                    needed. If you need a specific amount of Lorem Ipsum text
                    or want variations, you can generate it using online
                    Lorem Ipsum generators.
                </Typography>
            </Card>



        </Card>
    );
}

AppBotReport.propTypes = {
    subheader: PropTypes.string,
    title: PropTypes.string,
    botReport: PropTypes.string,
};
