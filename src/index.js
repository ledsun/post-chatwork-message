var Promise = require('Promise'),
    request = require('request')

export function postChatworkMessage(apiToken, roomId, message) {
    const options = {
        url: 'https://api.chatwork.com/v1/rooms/' + roomIdd + '/messages',
        headers: {
            'X-ChatWorkToken': apiToken
        },
        form: {
            body: message
        },
        useQuerystring: true
    }

    return new Promise(function(resolve, reject) {
        request.post(options, function(err, res, body) {
            if (!err && res.statusCode == 200) {
                resolve(body)
            } else {
                reject(err)
            }
        })
    })
}
