define(["canvas", "socket", "player"], function (canvas, socket, player) {

	var loop = function () {
		console.log("allo");
		inputs();
		render();
		window.requestAnimationFrame (loop);
	};

	function inputs ()  {

	};

	function render () {
		console.log("allo");
		canvas.ctx.fillStyle = "#FF0000";
		canvas.ctx.fillRect (0, 0, 100, 100);
		canvas.ctx.fillStyle =  "000";
		canvas.ctx.fillRect(player.x, player.y, 20, 20);
	}

	function init () {
		socket.on('update', function (data) {
			player.update (data);
		});
		loop();
	};

	return {
		loop : loop,
		init : init
	};
});