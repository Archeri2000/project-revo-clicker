let erithvenWelcome =  new Scene("erithven_welcome",
[new Frame(function(){
	erithven.bringCharacter(sophie);
	erithven.bringCharacter(charles);
	erithven.bringCharacter(yusie);
	sophie.setTextColor('white');
	charles.setTextColor('white');
	yusie.setTextColor('white');
	erithven.display(1,null,1000);
})
,new Frame(function(){
	sophie.preMove(-50);
	charles.preMove(-50);
	yusie.preMove(-100);
	yusie.flipHorizontally();
	sophie.appear();
	yusie.appear();
	charles.appear(null,function() {
		sophie.move(null,null,850);
		charles.move(null,null,650);
		yusie.move(80,null,750);
	});
})
,new Frame(function(){
	yusie.move(20,null,800,function() {
		yusie.flipHorizontally(function() {
			yusie.preSpeak(function() {
				yusie.speak('Holy Prazines! So this is Erithven!');
			});
		});
	});
})
,new Frame(function(){
	yusie.speak('Look at the huge boats, the fluffy white clouds',function() {
		yusie.contSpeaking('and the BOOOOUNNNDDDLEESSSS OCEAN!',null,1000);
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.setFontSize('1.2vw');
		charles.speak('Ughh somehow I have the feeling that she\'s just finding an excuse to visit Erith-',function() {
			charles.setFontSize('1.7vw');
		});
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Hey! I\'m on official duty right now!');
	});
})
,new Frame(function(){
	yusie.speak('W-Who says I\'m on a holiday!!');
})
,new Frame(function(){
	yusie.speak('I-I\'m just admiring the secnery while at work!');
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('But oh myy, the this place is really beautif-');
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('I KNOW, RIGHT?');
	});
})
,new Frame(function(){
	yusie.speak('At this rate, I think I am really going to fall in love with this place!');
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Alright, alright, whatever you say, manta ray....');
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Uuuuuuu');
	});
})
,new Frame(function(){
	yusie.speak('Well whatever! Let\'s move on!',function() {
		yusie.endSpeak();
	});
})
,new Frame(function(){
	erithven.closeTextBox();
	sophie.flipHorizontally();
	charles.flipHorizontally();
	sophie.move(-50,null,850);
	charles.move(-80,null,650);
	yusie.move(-20,null,2000,function() {
		yusie.flipHorizontally();
		yusie.move(10,null,1000);
		charles.flipHorizontally();
	});
})
,new Frame(function(){
	yusie.setFontSize('1.2vw');
	yusie.preSpeak(function() {
		yusie.speak('But before that, just one more look at the vast ocea-');
		charles.move(90,null,1500,function() {
			charles.preSpeak(function() {
				charles.speak('Come on! Hurry!');
			});
		},swing);
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		charles.flipHorizontally();
		charles.move(-80,null,2000,null,linear);
		yusie.move(-90,null,2000,null,stepped);
		yusie.setFontSize('2vw');
		yusie.speak('Noooooooooo~');
	});
})
]);