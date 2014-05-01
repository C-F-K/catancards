var disCount = new Firebase('https://discount-app.firebaseio.com/');
var newposxleft = 0;
var newposxright = 0;
var newposyup = 0;
var newposydown = 0;
var roomContents = [];
var roomRow = [];
var row = "";
var roomX = 0;
var roomY = 0;
disCount.on('value',function(snapshot){
	if (snapshot.val() === null) {
		console.log("no user yet");
	} else {
		console.log("position is " + snapshot.val().user.posx + "," + snapshot.val().user.posy);
		newposxleft = snapshot.val().user.posx;
		newposxleft--;
		newposxright = snapshot.val().user.posx;
		newposxright++;
		newposyup = snapshot.val().user.posy;
		newposyup--;
		newposydown = snapshot.val().user.posy;
		newposydown++;
	}
});

$(document).ready(function(){
	roomX = prompt("room width?");
	roomY = prompt("room height?");
	
	$('#submit').on('click',function(){
		disCount.set({user: {char: $('#char').val(), posx: 0, posy: 0}}, function(error) {
			if (error) {
				alert('char not saved ' + error);
			} else {
				alert('char saved');
			}
		});
	});
	
//	$(document).keyup(function (e) {
//		alert(e.keyCode);
//	});

	var abstractRoom = function(x,y) {
		for (var i = 0; i < y; i++) {
			roomRow = [];
			for (var j = 0; j < x; j++) {
				roomRow.push('.');
			}
			roomContents.push(roomRow);
		}
	};
		
	var concreteRoom = function() {
		abstractRoom(roomX,roomY);
		var room = $('.room').innerHTML;
		for (var k = 0; k < roomContents.length; k++) {
			row = "";
			for (var l in roomContents[k]) {
				row.concat(l);
			}
			row.concat('<br>');
			room.concat(row);
		}
		$('.room').html(room);
	};

	$(document).keydown(function(key) {
		switch(parseInt(key.which,10)) {
			case 37:
				//left
				disCount.child('user').child('posx').set(newposxleft);
				//$('img').animate({left: "-=10px"}, 'fast');
				break;
			case 40:
				//down
				disCount.child('user').child('posy').set(newposydown);
				//$('img').animate({top: "+=10px"}, 'fast');
				break;
			case 38:
				//up
				disCount.child('user').child('posy').set(newposyup);
				//$('img').animate({top: "-=10px"}, 'fast');
				break;
			case 39:
				//right				
				disCount.child('user').child('posx').set(newposxright);
				//$('img').animate({left: "+=10px"}, 'fast');
				break;
			case 82:
				// press 'r' to attempt to write roomContents to room div
				concreteRoom();
			default:
				break;
		}
	});	
});

