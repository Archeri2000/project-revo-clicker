let erithvenElixir =  new Scene("erithven_elixir",
[new Frame(function(){
	erithven.bringCharacter(sophie);
	erithven.bringCharacter(charles);
	erithven.bringCharacter(halley);
	erithven.bringCharacter(comet);
	erithven.bringCharacter(yusie);
	halley.setTextColor('white');
	yusie.setTextColor('white');
	comet.setTextColor('white');
	sophie.setTextColor('white');
	charles.setTextColor('white');
	erithven.display(0,null,0,function() {
		erithven.changeBackground('pharma',1,1000,function() {
			sophie.preMove(-50);
			charles.preMove(-70);
			halley.preMove(-120);
			comet.preMove(15);
			halley.flipHorizontally();
			halley.appear(1000);
			comet.appear(1000);
			sophie.appear();
			charles.appear();
			halley.appear();
		});
	});
})
,new Frame(function(){
	sophie.move(null,null,850);
	charles.move(null,null,850);
	halley.move(88,null,800,function() {
		comet.preSpeak(function() {
			comet.speak('Welcome back!');
		});
	});
})
,new Frame(function(){
	comet.speak('So were you all impressed by Halley\'s abilities?',function() {
		comet.wait(300,function() {
			comet.speak('I mean after all, he used to be a ranger',function() {
				comet.wait(300,function() {
					comet.speak('The cliffs shouldn\'t have been an issue for him');
				});
			});
		});
	});
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('I didn\'t need to do anything',function() {
			halley.wait(300,function() {
				halley.speak('Princess Sophie managed to get them from the cliff by herself');
			});
		});
	});
})
,new Frame(function(){
	comet.preSpeak(function() {
		comet.speak('Woah!',function() {
			comet.wait(300,function() {
				comet.contSpeaking('That\'s really impressive!');
			});
		});
	});
})
,new Frame(function(){
	comet.speak('But anyways,',function() {
		comet.wait(300,function() {
			comet.contSpeaking('while all of you were gone, the sage had come by and dropped the incomplete elixir over here');
		});
	});
})
,new Frame(function(){
	comet.speak('I have already been briefed by him on how to add the remaining ingredients to produce the elixir');
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('That\'s great!',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('Here are the ingredients!',function() {
					sophie.move(70,null,850,function() {
						sophie.wait(300,function() {
							sophie.move(null,null,850);
						});
					});
				});
			});
		});
	});
})
,new Frame(function(){
	comet.preSpeak(function() {
		comet.speak('Alright!',function() {
			comet.wait(300,function() {
				comet.contSpeaking('Give me a moment while I head to the back to prepare the elixir!',function() {
					comet.disappear(1000);
				});
			});
		});
	});
})
,new Frame(function(){
	comet.wait(800,function() {
		comet.appear(1000,function() {
			comet.speak('Alright!',function() {
				comet.wait(200,function() {
					comet.contSpeaking('The elixir is ready for collection');
				});
			});
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Thank you so much!',function() {
			sophie.wait(200,function() {
				sophie.move(70,null,850,function() {
					sophie.wait(300,function() {
						sophie.move(null,null,850);
					});
				});
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak();
})
]);