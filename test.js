//node test.jsで実行するとgoogle Homeのipアドレスと教えてくれる

const googlehome = require('./google-home-notifier')
const language = 'ja';

googlehome.device('Google-Home', language); //第一引数はなんでもよい

googlehome.notify('こんにちは。私はつばさのグーグルホームです。', function(res) {
  console.log(res);
});