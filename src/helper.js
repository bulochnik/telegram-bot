module.exports = {
  
  logStart() {
    console.log('Bot has been started ...')
  },

  getChatId(message) {
    return message.chat.id
  },

  getChatFirstName(message) {
    return message.chat.first_name
  },

  getItemUuid(source) {
    return source.substr(2, source.length)
  }
}
