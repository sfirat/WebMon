/**
 * Created by KrivolapchukNG on 19.10.2016.
 */
var net = require('net');
var clientParam = [];
var client = new net.Socket();
client.connect(9234, '104.199.3.185', function() {
    console.log('Connected');
});
client.on('data', function(data) {
    var dataString = data;
    console.log(dataString.toString());
    client.destroy();
});
client.on('close', function() {
    console.log('Connection closed');
});