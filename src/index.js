import Promise from 'bluebird'
import request from 'superagent'

export default postChatworkMessage

function postChatworkMessage(apiToken, roomId, message) {
  return new Promise((resolve, reject) => {
    request
      .post(url(roomId))
      .set('X-ChatWorkToken', apiToken)
      .send(`body=${message}`)
      .end((err, res) => {
        if (!err && res.statusCode == 200) {
          resolve(res)
        } else {
          reject(err)
        }
      })
  })
}

postChatworkMessage.getRecents = function(apiToken, roomId) {
  return new Promise((resolve, reject) => {
    request
      .get(url(roomId))
      .set('X-ChatWorkToken', apiToken)
      .end((err, res) => {
        if (!err) {
          resolve(res)
        } else {
          reject(err)
        }
      })
  })
}

function url(roomId) {
  return `https://api.chatwork.com/v1/rooms/${roomId}/messages`
}
