var player = require('./player.js');
var sock = require('./sockets');
var sockets = {};
function inputs () {

}
function physics () {
	player.x++;
	if (player.x > 800) {
		player.x = 0;
	}
}
function network () {
	sockets.emit('update', player);
}

var loop = function () {
	inputs();
	physics();
	network();
	setTimeout (function () {
		loop();
	}, 30);
};

var init = function () {
	sockets = sock.sockets();
	loop();
};

exports.init = init;