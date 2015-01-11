# post-chatwork-message

Post a message to a room of the Chatwork. / Chatworkにメッセージを投稿します。

This function will return a Promise. / Promiseを返します。

## Usage

Exapmle / 実行例

```js
var apiToken = 'AAA',
    roomId = '1234'

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
var postChatworkMessage = require('post-chatwork-message')
var APIKey = 'AAA',
roomId = '1234'

postChatworkMessage(APIKey, roomId, 'hello world')
```

## Development

### Build

This function is written in ES6. / ES6で書いています。

[6to5](https://github.com/6to5/6to5) is used to convert ES5. /
 [6to5](https://github.com/6to5/6to5)を使ってES5に変換します。

 ```
 npm install
 npm run build
 ```

### Test

[mocha](https://github.com/mochajs/mocha) is used to test. / [mocha](https://github.com/mochajs/mocha)を使います。

Prepare secrets for Chatwork in `token.json`. / Chatworkへの接続情報を書いた`token.json`ファイルを用意します。

```
echo '{"token":"YOUR_TOKEN", "roomId":"YOUR_ROOM"}' > token.json
npm test
```

### Deploy
Update `package.json`. / `package.json`を更新します。

and / それから
```
npm install
npm run build
npm test
npm publish
```

## Reference
[エンドポイント /rooms - チャットワークAPIドキュメント](http://developer.chatwork.com/ja/endpoint_rooms.html#POST-rooms-room_id-messages)
