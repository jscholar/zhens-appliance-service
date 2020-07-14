import axios from 'axios';

const sendMessage = (data) => (
  axios.post('/api/message', data)
);

export default sendMessage;
