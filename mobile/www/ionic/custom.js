window.shouldRotateToOrientation = function(degrees) {
    return true;
};

IS_MOBILE = true;
IONIC = 'ionic';

var socket_io_url = "http://blue-jay-dev.herokuapp.com/socket.io/socket.io.js";
document.write('<script src="'+socket_io_url+'"></script>');
