/*Examination - Socket.io Chatbot 2017-05-05 Fredrick Östlund*/

//use socket
let socket = io.connect();

//used to see numers of input
let counter=0;

/*Send a message to the bot with socket.io*/
$(document).ready(function(){
	$( "#txt" ).focus();
    $("button").click(function(){
    var	globen=$("#txt").val();

    	//Send 	server
		socket.emit('chat', {value: globen});
		$('#txt').val('');
		 counter++;
    });
    //same as above but code for enter buttom
     $(document).bind('keypress', function(e) {
            if(e.keyCode==13){
            	var globen=$("#txt").val();
            	socket.emit('chat', {value: globen});
            	$('#txt').val('');
            	counter++;
             }
        });
    
});

//Recive from server
socket.on('message', (data)=>{

//clean textarea is needed
 if(counter>=3){counter=0; $('textarea').val('');}

 //Set answear from bot
 $("textarea").val($('textarea').val() + data  + "\n");
});