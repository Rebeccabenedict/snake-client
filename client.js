const net = require("net");
const {IP, PORT} = require('./constants')

// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");
// The server will print a comment if the connection is successful
  conn.on('connect', () => {
    console.log("Connection is sucessful");
    conn.write('Name: RBA');
  })

  conn.on('data', (data) => {
    console.log('Server indicates: ', data);
  });

  return conn;
};
module.exports = { connect };