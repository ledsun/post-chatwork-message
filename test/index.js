import token from '../token'
import postChatworkMessage from '../src'
import assert from 'power-assert'

describe('postChatworkMessage', () => {
  it('do without error', () => {
    return postChatworkMessage(token.token, token.roomId, 'A test messago for post-chatwork-message')
      .then(function(res) {
        assert(res, 'The res is not null.')
        assert.equal(res.status, 200)
        assert(res.body.message_id, 'The message_id is not null.')
      })
  })
})
