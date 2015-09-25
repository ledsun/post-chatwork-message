import token from '../token'
import postChatworkMessage from '../src'
import assert from 'power-assert'
import request from 'superagent'

describe('postChatworkMessage', () => {
  beforeEach(done => {
    // Flush messages before test.
    postChatworkMessage
      .getRecents(token.token, token.roomId)
      .then(() => done())
  })

  it('post one message', (done) => {
    return postChatworkMessage(token.token, token.roomId, 'A test messago for post-chatwork-message')
      .then(res => {
        assert(res, 'The res is not null.')
        assert.equal(res.status, 200)
        assert(res.body.message_id, 'The message_id is not null.')

        postChatworkMessage
          .getRecents(token.token, token.roomId)
          .then((res) => {
            assert.equal(res.body.length, 1)
            assert.equal(res.body[0].body, 'A test messago for post-chatwork-message')
            done()
          })
      })
  })
})
