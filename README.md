# post-chatwork-message

Post a message to a room of the Chatwork. / Chatworkにメッセージを投稿します。

This function will return a Promise. / Promiseを返します。

## Usage

Exapmle / 実行例

```js
const apiToken = 'AAA'
const roomId = '1234'

postChatworkMessage(apiToken, roomId, 'hello world')
```

### Parameters

Name | Type | Description
--- | --- | ---
apiToken | string | Chatwork API Token. see [認証方法 - チャットワークAPIドキュメント](http://developer.chatwork.com/ja/authenticate.html).
roomId | string | An Id of the room of the Chatwork. Remember a `#!rid` is excluded.
message | string | A message to send.

## Setup

```
npm install post-chatwork-message
```

Exapmle / 実行例

```js
const postChatworkMessage = require('post-chatwork-message')
const APIKey = 'AAA'
const roomId = '1234'

postChatworkMessage(APIKey, roomId, 'hello world')
```

## For development

### Test

[mocha](https://github.com/mochajs/mocha) is used to test. / [mocha](https://github.com/mochajs/mocha)を使います。

Prepare secrets for Chatwork in `token.json`. / Chatworkへの接続情報を書いた`token.json`ファイルを用意します。

```
echo '{"token":"YOUR_TOKEN", "roomId":"YOUR_ROOM"}' > token.json
npm test
```

### Deploy
```
npm version patch
npm publish
```

## Reference
[エンドポイント /rooms - チャットワークAPIドキュメント](http://developer.chatwork.com/ja/endpoint_rooms.html#POST-rooms-room_id-messages)
