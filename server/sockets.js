var socketio = require('socket.io');
var io =  {};
var sockets = {};
exports.init = function (server) {
	io = socketio.listen (server);
	sockets = io.sockets;
};

exports.sockets = function ()   {
	return sockets;
};