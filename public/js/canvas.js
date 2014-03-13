define(["jquery", "config"], function ($, config) {
	var Canvas = function () {
		this.canvas = $(config.canvasId);
		this.ctx = this.canvas[0].getContext('2d');
	};

	return new Canvas();
});