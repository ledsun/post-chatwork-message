var Promise = require('bluebird'),
    request = require('request')

export default function(apiToken, roomId, message) {
    const options = {
        url: 'https://api.chatwork.com/v1/rooms/' + roomId + '/messages',
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
                console.error(err || res.statusCode);
                reject(err || res.statusCode)
            }
        })
    })
}
