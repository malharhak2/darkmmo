var player = require('./player.js');
var sockets = require('sockets').sockets;
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
	loop();
};

exports.init = init;