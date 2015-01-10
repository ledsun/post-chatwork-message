# post-chatwork-message

Post a message to a room of the Chatwork.

Chatworkにメッセージを投稿します。

This function will return a Promise.

Promiseを返します。

## Usage

実行例
```js
var APIKey = 'AAA',
    roomId = '1234'

postChatworkMessage(APIKey, roomId, 'hello world')
```

### Parameters
```
/**
* method
* @param apiToken {string} - Chatwork API Token {@link http://developer.chatwork.com/ja/authenticate.html 認証方法 - チャットワークAPIドキュメント}
* @param roomId {string} - An Id of the room of the Chatwork
* @param message {string} - A message to send
*/
```

## Setup

### For Node.js
```
npm install post-chatwork-message
```

実行例
```js
var document = require('post-chatwork-message')
var APIKey = 'AAA',
roomId = '1234'

postChatworkMessage(APIKey, roomId, 'hello world')
```

### For browsers

Use browserify.

For example:
```
browserify example.js -o bundle.js
```

htmlにscriptタグを埋め込みます。
```html
<span id="result"></span>
<script src="bundle.js"></script>
```

## Contributing

contributeするには

1. Fork it.
1. Create a branch (git checkout -b my_function)
1. Commit your changes (git commit -am "Added My Function")
1. Push to the branch (git push origin my_function)
1. Open a Pull Request
1. Enjoy a refreshing coffe and wait

### Test

[mocha](https://github.com/mochajs/mocha) is used to test.

[mocha](https://github.com/mochajs/mocha)を使います。

```
npm install
echo '{"token":"YOUR_TOKEN", "roomId":"YOUR_ROOM"}' > token.json
npm test
```


### Deploy
#### npm
Update `package.json`.

`package.json`を更新します。

```
npm install
npm test
npm run build
npm publish
```

## Reference
[エンドポイント /rooms - チャットワークAPIドキュメント](http://developer.chatwork.com/ja/endpoint_rooms.html#POST-rooms-room_id-messages)
