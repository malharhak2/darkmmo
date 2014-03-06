requirejs.config ({
	baseUrl : "js/",
	paths : {
		"jquery": "../libs/jquery/jquery.min",
		"socket.io" : "/socket.io/socket.io"
	},
	shim : {
		"jquery" : {
			exports : "$"
		},
		"socket.io" : {
			exports : "io"
		}
	}
});

requirejs (["jquery", "socket.io"], function ($, io) {
	console.log("Tmtc");
	console.log(io);
});