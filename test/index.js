const token = require('../token')
const postChatworkMessage = require('../src')
const assert = require('power-assert')
const request = require('superagent')

// & is need to be url encode.
const MESSAGE = 'A test message for post-chatwork-message & hello'

describe('postChatworkMessage', () => {
  beforeEach(done => {
    // Flush messages before test.
    postChatworkMessage
      .getRecents(token.token, token.roomId)
      .then(() => done())
  })

  it('post one message', (done) => {
    return postChatworkMessage(token.token, token.roomId, MESSAGE)
      .then(res => {
        assert(res, 'The res is not null.')
        assert.equal(res.status, 200)
        assert(res.body.message_id, 'The message_id is not null.')

        postChatworkMessage
          .getRecents(token.token, token.roomId)
          .then((res) => {
            assert.equal(res.body.length, 1)
            assert.equal(res.body[0].body, MESSAGE)
            done()
          })
      })
  })
})
