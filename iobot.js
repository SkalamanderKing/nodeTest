/*Examination - Socket.io Chatbot 2017-05-05 Fredrick Östlund*/

//export module
module.exports = {
sayHello: function(data){

	//Process the string from the user 
	let tmp = data.value.toLowerCase();
	tmp = tmp.split('?').join("");
	tmp = tmp.split('.').join("");
	tmp = tmp.split('!').join("");

	//if the string contain 'hej' always respond hej
	if( tmp.indexOf('hej') >= 0)
		return 'Hej!';

	//Diffrent posibly answear from the this bot
	if(tmp==='tjena')
		 return 'Hej själv!';
		else if(tmp==='hur mår du')
			return 'Bara bra, själv då?';
		else if(tmp==='bra')
			return 'Bra!';
		else if(tmp==='jag mår bra')
			return 'Bra att du har hälsan!';
		else if(tmp==='vad gör du')
			return 'Chatar med dig.';
		else if(tmp==='vad är du')
			return 'En bot.';
		else if(tmp==='vem är du')
			return 'En killer-bot.';
		else return 'Va?'; //default answear
	}
}