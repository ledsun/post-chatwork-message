var token = require('../token'),
    chatwork = require('../lib/index'),
    assert = require('assert')

describe('post', function() {
    it('do without error', function() {
        return chatwork
            .post(token.token, token.roomId, 'A test messago for post-chatwork-message')
            .then(function(body) {
                assert(body)
            })
    })
})
