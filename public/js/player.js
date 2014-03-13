define(["Vector2"], function (Vector2) {
	var Player = function ()  {
		this.x = 0;
		this.y = 0;
		this.speed = new Vector2(0, 0);
	};

	Player.prototype.update = function (data) {
		this.x = data.x;
		this.y = data.y;
		this.speed = new Vector2(data.speed.x, data.speed.y);
	};

	return new Player();
});