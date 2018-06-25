let erithvenWelcome =  new Scene("erithven_welcome",
[new Frame(function(){
	erithven.bringCharacter(sophie);
	erithven.bringCharacter(charles);
	erithven.bringCharacter(yusie);
	sophie.setTextColor('white');
	charles.setTextColor('white');
	yusie.setTextColor('white');
	erithven.display(1,null,1000);
}, function(){return null})
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
}, function(){return null})
,new Frame(function(){
	yusie.move(20,null,800,function() {
		yusie.flipHorizontally(function() {
			yusie.preSpeak(function() {
				yusie.speak('Holy Prazines! So this is Erithven!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('Look at the huge boats, the fluffy white clouds',function() {
		yusie.contSpeaking('and the BOOOOUNNNDDDLEESSSS OCEAN!',null,1000);
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.setFontSize('1.2vw');
		charles.speak('Ughh somehow I have the feeling that she\'s just finding an excuse to visit Erith-',function() {
			charles.setFontSize('1.7vw');
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Hey! I\'m on official duty right now!');
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('W-Who says I\'m on a holiday!!');
}, function(){return null})
,new Frame(function(){
	yusie.speak('I-I\'m just admiring the secnery while at work!');
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('But oh myy, the this place is really beautif-');
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('I KNOW, RIGHT?');
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('At this rate, I think I am really going to fall in love with this place!');
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('It would be so great to stay here and experience the fishermen lifestyle');
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Huh?',function() {
		sophie.wait(300,function() {
			sophie.contSpeaking('What are those glowing colored rings in the sea?');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('They look really pretty!',function() {
		charles.wait(300,function() {
			charles.preSpeak(function() {
				charles.speak('Those rings are called Septras.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('Septras are rings which the fishermen build from manacytes to demarcate their fishing zone.',function() {
		charles.wait(300,function() {
			charles.speak('These rings will not only help to prevent conflict of interest between fishermen but also facilitate the entire fishing process.');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('These rings and the sea look really good together!',function() {
		sophie.wait(300,function() {
			sophie.speak('Imagine waking up every morning to the sun rising up from the ocean...',function() {
				sophie.wait(500,function() {
					sophie.speak('Ahhh~~~',null,1000,false);
				});
			},1200,false);
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Alright, alrigh-',function() {
			yusie.interupt(function() {
				yusie.speak('Hey Charles!',function() {
					yusie.wait(300,function() {
						yusie.contSpeaking('Stop delaying our movement!');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('......',function() {
			charles.endSpeak();
		},1000,false);
	});
}, function(){return null})
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
}, function(){return null})
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
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		charles.flipHorizontally();
		charles.move(-80,null,2000,null,linear);
		yusie.move(-90,null,2000,null,stepped);
		yusie.setFontSize('2vw');
		yusie.speak('Noooooooooo~');
	});
}, function(){return null})
]);  sophie.preSpeak();