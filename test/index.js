import token from '../token'
import postChatworkMessage from '../lib'
import assert from 'assert'

describe('postChatworkMessage', () => {
    it('do without error', () => {
        return postChatworkMessage(token.token, token.roomId, 'A test messago for post-chatwork-message')
            .then(function(body) {
                assert(body)
            })
    })
})
