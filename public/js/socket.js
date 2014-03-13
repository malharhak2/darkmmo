define(["socket.io"], function (io) {
	var socket = io.connect(location.origin);
	return socket;
});