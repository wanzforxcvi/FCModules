async function stiker(sock, target) {
  await sock.sendMessage(target, {
    text: 'ini STC jir'
  }) 
}

module.exports = stiker;
