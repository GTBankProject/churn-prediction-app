import * as React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

function maskCardNumber(cardNumber) {
  cardNumber = String(cardNumber);
  const lastFourDigits = cardNumber.slice(-4);
  const maskedCardNumber = cardNumber.slice(0, -4).replace(/\d/g, '*') + lastFourDigits;
  return maskedCardNumber;
}

export default function AppCurrentCard({name, cardExp, cardType, cardNumber, ...other }) {

  const getCardImageSource = () => {
    switch (cardType) {
      case "Visa":
        return "/assets/Cards/card1.svg";
      case 'Master':
        return '/assets/Cards/card2.svg';
      default:
        return "/assets/Cards/card3.svg";
    }
  };

  return (
    <Card {...other} sx={{ position: 'relative', maxWidth: 345, color: '#fff' }}>
      <CardActionArea >
        <img
          src={getCardImageSource()}
          alt="credit card"
          style={{ width: '100%', objectFit: 'cover' }}
        />
        <CardContent gutterBottom>
          <Typography  style={{ position: 'absolute', top: 100, left: 0, width: '100%', marginLeft: 20 }} variant="h4" component="div">
            {maskCardNumber(cardNumber)}

          </Typography>

          <Typography style={{ position: 'absolute', bottom: 30, right: 0, marginRight: 20, marginBottom: 20 }} variant="h9" component="div" >
          {`${cardExp}`}
          </Typography>

          <Typography style={{ position: 'absolute', bottom: 30, left: 0, marginLeft: 20, marginBottom: 20 }} variant="h9" component="div" >
          {`${name}`}
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
  );
}

AppCurrentCard.propTypes = {
  name: PropTypes.string,
  cardExp: PropTypes.string,
  cardNumber: PropTypes.string,
  cardType: PropTypes.any,
}
