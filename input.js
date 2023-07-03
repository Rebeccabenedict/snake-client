const {shiftUpwards, shiftDownwards, shiftLeft, shiftRight, comments} = require('./constants');
let connection;
// Telling each function what to do
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit()
  }
  if (key === shiftUpwards) {
    connection.write('Move: up');
  }
  if (key === shiftLeft) {
    connection.write('Move: left');
  }
  if (key === shiftRight) {
    connection.write('Move: right');
  }
   if (key === shiftDownwards) {
    connection.write('Move: down');
  }
  if (comments[key]) {
    connection.write(comments[key]);
  }
};

const setUpInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = { setUpInput };