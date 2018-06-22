let boriolsisWelcome =  new Scene("boriolsis_welcome",
[new Frame(function(){
	boriolsis.bringCharacter(charles);
	boriolsis.bringCharacter(sophie);
	boriolsis.bringCharacter(chief);
	boriolsis.bringCharacter(june);
	boriolsis.bringCharacter(yusie);
	boriolsis.bringCharacter(halley);
	yusie.setTextColor('white');
	charles.setTextColor('white');
	sophie.setTextColor('white');
	june.setTextColor('white');
	chief.setTextColor('white');
	halley.setTextColor('white');
	boriolsis.display(0,null,0,function() {
		yusie.setXOffSet(8);
		sophie.setXOffSet(-7);
		halley.setXOffSet(-24);
		charles.setXOffSet(-41);
		charles.animate();
		yusie.animate();
		halley.animate();
		sophie.animate();
		yusie.flipHorizontally();
		halley.flipHorizontally();
		boriolsis.setAnchorY(0);
		boriolsis.setAnchorX(0);
		charles.bringToFront(function() {
			halley.bringToFront(function() {
				sophie.bringToFront(function() {
					yusie.bringToFront();
				});
			});
		});
		boriolsis.scaleBackground(2,1,0,function() {
			boriolsis.changeBackground('forest',1,1000,function() {
				yusie.appear(500,null,null,false);
				sophie.appear(500,null,null,false);
				charles.appear(500,null,null,false);
				halley.appear(500,null,null,false);
			},null,false);
		});
	});
})
,new Frame(function(){
	yusie.setDefaultSkippable(false);
	yusie.move(25,null,800,function() {
		yusie.flipHorizontally(function() {
			yusie.wait(500,function() {
				yusie.flipHorizontally(function() {
					yusie.wait(1000,function() {
						yusie.flipHorizontally(function() {
							yusie.wait(500,function() {
								yusie.preSpeak(function() {
									yusie.speak('Hmm...',function() {
										yusie.wait(500,function() {
											yusie.contSpeaking('I\'m pretty sure it was here...',function() {
												yusie.wait(500);
											});
										});
									});
								});
							});
						},200);
					});
				},200);
			});
		},200);
	});
})
,new Frame(function(){
	yusie.setDefaultSkippable();
	halley.preSpeak(function() {
		halley.speak('Again?',function() {
			halley.wait(500,function() {
				halley.contSpeaking('You are lost again?!',function() {
					halley.wait(500,function() {
						halley.contSpeaking('How many time does this make it, Miss I-am-good-with-directions?');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Hey!',function() {
			yusie.wait(500,function() {
				yusie.contSpeaking('What do you mean again?',function() {
					yusie.wait(500,function() {
						yusie.contSpeaking('This is pretty much the first time!',function() {
							yusie.wait(500,function() {
								yusie.speak('And its not my fault!',function() {
									yusie.wait(500,function() {
										yusie.speak('It says right here in the map that this is the place!');
									});
								});
							});
						});
					});
				});
			});
		});
	});
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Yeah, yeah.',function() {
			halley.wait(500,function() {
				halley.contSpeaking('This is like the fifth time you said \"I\'m pretty sure it was here...\"!',function() {
					halley.wait(500,function() {
						halley.speak('At this rate, we will never reach boriolsis!');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	sophie.bringAboveOverlay();
	charles.bringAboveOverlay();
	boriolsis.changeOverlay(0.55,'black',200);
	charles.preSpeak(function() {
		charles.speak('There they go again...',function() {
			charles.wait(500,function() {
				charles.speak('I\'m sure we would have reached boriolsis if they don\'t argue every other minute.',function() {
					charles.wait(500,function() {
						charles.speak('Frankly speaking, I wish they would just keep quiet.');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Don\'t be like that Charles!',function() {
			sophie.wait(500,function() {
				sophie.speak('At least our journey is lively.');
			});
		});
	});
})
,new Frame(function(){
	sophie.speak('I may die of boredom if tooo quiet');
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('If you say so...');
	});
})
,new Frame(function(){
	yusie.setDefaultSkippable(false);
	charles.setDefaultSkippable(false);
	chief.setDefaultSkippable(false);
	halley.setDefaultSkippable(false);
	sophie.setDefaultSkippable(false);
	boriolsis.changeOverlay(0,null,null,function() {
		charles.bringBelowOverlay(function() {
			sophie.bringBelowOverlay(function() {
				chief.changeName('???');
				chief.speak('Stop right there!');
				yusie.wait(300,function() {
					yusie.flipHorizontally(function() {
						yusie.move(-10,null,100);
						sophie.wait(50,function() {
							sophie.move(-5,null,100);
							charles.wait(50,function() {
								charles.move(-5,null,100);
							});
						});
					},100);
				});
			});
		});
	});
})
]);