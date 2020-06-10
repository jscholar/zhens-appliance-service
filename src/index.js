import server from './server/server';

server.listen(process.env.PORT || 3000, () => {
  console.log('server has started on port 3000');
});
