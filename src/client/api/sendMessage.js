import axios from 'axios';

const sendMessage = (data) => (
  axios.post('/api/message', data)
    .then(() => {
      console.log('success');
    })
);

export default sendMessage;
