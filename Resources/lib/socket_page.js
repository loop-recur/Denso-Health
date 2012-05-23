SocketPage = function(ip){
	return '<html> \
		<head> \
		  <script src="'+ip+'/socket.io/socket.io.js"></script> \
			<script> \
		    socket = io.connect("'+ip+'"); \
				socket.on("car_stats_received", function(data){ \
					Ti.App.fireEvent("car_stats_received", data); \
				}); \
        socket.emit("getCurrentData"); \
			</script> \
		</head>	\
		<body style="background-color:green;">\
		<h1>Poo</h1>\
		</body> \
		</html>';
}
