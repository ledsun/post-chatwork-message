import Promise from 'bluebird'
import request from 'superagent'

export default function(apiToken, roomId, message) {
  const url = `https://api.chatwork.com/v1/rooms/${roomId}/messages`

  return new Promise((resolve, reject) => {
    request
      .post(url)
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
