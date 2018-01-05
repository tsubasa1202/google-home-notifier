var googlehome = require('./google-home-notifier');
var language = 'en'; // if not set 'us' language will be used

googlehome.device('リビング', language); //第一引数はなんでもよい
googlehome.ip('192.168.1.27');

var text = 'This is a pen';

try {
    googlehome.notify(text, function(notifyRes) {
        console.log(notifyRes);
    });
} catch(err) {
    console.log(err);
}