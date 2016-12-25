/**
 * Created by KrivolapchukNG on 19.10.2016.
 */
var os = require('os');
var net = require('net');

function getCpuAvg(){
    var os = require('os');
    var avgCPU = os.loadavg();
    var oneMinAvgCPU = Math.round(avgCPU[0] * 100);
    return oneMinAvgCPU.toString();
};
function getFreeMem(){
    var os = require('os');
    var mem = os.freemem();
    var freeMem = Math.round(((mem / 1024) / 1024));
    return freeMem.toString();
};
function getTotalMem(){
    var os = require('os');
    var mem = os.totalmem();
    var totalMem = Math.round(((mem / 1024) / 1024));
    return totalMem.toString();
};
var server = net.createServer(function(socket){
    var dataString = "";
    paramData = [
        getCpuAvg(),
        getFreeMem(),
        getTotalMem()
    ];
    for(var i = 0; i < paramData.length; i++){
        dataString += (paramData[i] + ',');
    }
    socket.write(dataString);
    socket.pipe(socket);
});
server.listen(9234, '0.0.0.0');