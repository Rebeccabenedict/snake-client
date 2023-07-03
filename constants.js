// Giving each key a name based on the move and adding messages when certain keys are pressed
const IP = 'localhost';
const PORT = 50541;
const shiftUpwards = 'w';
const shiftDownwards = 's';
const shiftLeft = 'a';
const shiftRight = 'd';
const comments = {
  '1': 'This is a snake',
  '2': 'The snake moves very quickly',
  '3': 'The snake maneuvres in various directions'
};

// Module is exported
module.exports = {
  IP,
  PORT,
  shiftUpwards,
  shiftDownwards,
  shiftLeft,
  shiftRight,
  comments
};