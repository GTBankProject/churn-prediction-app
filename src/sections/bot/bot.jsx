import * as React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

import { Box, Grid, Paper, Button, Avatar, TextField, Typography } from '@mui/material';

import axios from 'src/api/axios';
import { Login_URl } from 'src/api/routes';

export default function ChatUI() {
  const [input, setInput] = React.useState('');
  const [userName] = React.useState('user');
  const [messages, setMessages] = React.useState([]);

  const checkInput = (e) => {
    const { type, key } = e;
    const value = input.trim();

    if (!value) return;

    const message = { name: userName, message: value };

    if (type === 'click' || key === 'Enter') {
      if (!userName) {
        message.name = value;
        updateChatText(message);
      } else {
        updateChatText(message);
        onSendButton(message);
      }

      setInput('');
    }
  };

  const onSendButton = async (data) => {
    try {
      const botResponse = await (data.message);
      const returnMessage = { name: 'bot', message: botResponse };
      updateChatText(returnMessage);

      // Assuming baseUrl is defined somewhere in your code
      await axios.post(Login_URl, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error:', error);
      updateChatText({ name: 'bot', message: 'Error occurred...' });
    }
  };


  const updateChatText = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        bgcolor: 'grey.200',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          height: '87vh',
          p: 2,
          position: 'relative',
        }}
      >
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </Box>
      <Box
        sx={{
          position: 'fixed',
          width: '80%',
          bottom: 0,
          p: 2,
          backgroundColor: 'background.default',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              size="small"
              fullWidth
              placeholder="Type a message"
              variant="outlined"
              value={input}
              onChange={handleInputChange}
              onKeyUp={checkInput}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              color="warning"
              variant="contained"
              endIcon={<Icon icon="ant-design:send-outlined" />}
              onClick={() => onSendButton({ name: userName, message: input })}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const Message = ({ message }) => {
  const isBot = message.name === 'bot';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isBot ? 'flex-start' : 'flex-end',
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: isBot ? 'row' : 'row-reverse',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ backgroundColor: isBot ? 'primary.darkOrange' : 'primary.pBot' }}>
          {isBot ? 'B' : 'U'}
        </Avatar>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            ml: isBot ? 1 : 0,
            mr: isBot ? 0 : 1,
            backgroundColor: isBot ? 'grey.0' : 'primary.bot',
            borderRadius: isBot ? '20px 20px 20px 5px' : '20px 20px 5px 20px',
          }}
        >
          <Typography variant="body1">{message.message}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

Message.propTypes = {
  message: PropTypes.object,
};
