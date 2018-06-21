let erithvenPharma =  new Scene("erithven_pharma",
[new Frame(function(){
	erithven.bringCharacter(sophie);
	erithven.bringCharacter(charles);
	erithven.bringCharacter(halley);
	erithven.bringCharacter(comet);
	halley.setTextColor('white');
	comet.setTextColor('white');
	sophie.setTextColor('white');
	charles.setTextColor('white');
	erithven.display(0,null,0,function() {
		erithven.changeBackground('pharma',1,1000,function() {
			sophie.preMove(-50);
			charles.preMove(-70);
			halley.appear(1000);
			comet.appear(1000);
			sophie.appear();
			charles.appear();
		});
	});
})
,new Frame(function(){
	sophie.appear();
	charles.appear(null,function() {
		sophie.move(null,null,850);
		charles.move(null,null,850,function() {
			comet.preSpeak(function() {
				comet.speak('Hello how can I help you?');
			});
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Good Morning!',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('Can we purchase Rigorta and Meisumptum?',function() {
					sophie.wait(200,function() {
						sophie.speak('We\'re here to get the ingredients for a Brostikan sage to concoct an elixir for a sick boy down the road');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	comet.preSpeak(function() {
		comet.speak('Give me a moment to check!',function() {
			comet.wait(200,function() {
				comet.flipHorizontally(null,150);
				comet.move(2,null,200,function() {
					comet.speak('Halley, can you go to the back and check them for me?');
				});
			});
		});
	});
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Alright,aright...',function() {
			comet.move(-2,null,200);
			comet.flipHorizontally(null,150);
		});
	});
})
,new Frame(function(){
	halley.endSpeak(function() {
		halley.disappear(1000,function() {
			halley.wait(800,function() {
				halley.appear(1000,function() {
					halley.preSpeak(function() {
						halley.speak('I\'m sorry.',function() {
							halley.wait(200,function() {
								halley.contSpeaking('But we\'re currently short of these two ingredients.');
							});
						});
					});
				});
			});
		});
	});
})
,new Frame(function(){
	halley.speak('Our suppliers just informed us that it might take months before the new batch arrives');
})
,new Frame(function(){
	comet.preSpeak(function() {
		comet.speak('We\'re really sorry for inconveniencing you!',function() {
			comet.wait(200,function() {
				comet.contSpeaking('You must understand that both Rigortas and Meisumptums are really rare herbs');
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Indeed!',function() {
			charles.wait(200,function() {
				charles.contSpeaking('They are part of the Quinnsetas family after all');
			});
		});
	});
})
,new Frame(function(){
	comet.preSpeak(function() {
		comet.speak('Oh',function() {
			comet.wait(200,function() {
				comet.contSpeaking(', so you know about herbs?');
			});
		});
	});
})
,new Frame(function(){
	sophie.setFontSize('2vw');
	sophie.changeBold(true);
	sophie.preSpeak(function() {
		sophie.speak('Yesss!',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('He is really good with medicine and herbs!!');
			});
		});
	});
})
,new Frame(function(){
	sophie.setNormalText();
	sophie.setFontSize('1.7vw');
	charles.preSpeak(function() {
		charles.speak('It\'s really nothing much...',function() {
			charles.wait(200,function() {
				charles.contSpeaking('Just read them from a book somewhere before');
			});
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Actually',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking(', is it possible for us to find these herbs out in the wild ourselves?');
			});
		});
	});
})
,new Frame(function(){
	comet.preSpeak(function() {
		comet.speak('Ye-',function() {
			halley.interupt(function() {
				halley.speak('Duhh...',function() {
					halley.wait(200,function() {
						halley.contSpeaking('All herbs originate in the wild...');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	sophie.bringAboveOverlay();
	charles.bringAboveOverlay();
	sophie.preSpeak(function() {
		sophie.speak('Then can we help you to find the herbs?',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('We would love to hel-',function() {
					erithven.changeOverlay(0.55,'black',0,function() {
						charles.interupt(function() {
							charles.changeItalic(true);
							charles.setFontSize('1.2vw');
							charles.flipHorizontally(null,200);
							charles.move(10,null,200,function() {
								charles.speak('Sophie!');
							});
						});
					});
				});
			});
		});
	});
})
,new Frame(function(){
	charles.speak('We cannot afford to help!',function() {
		charles.wait(200,function() {
			charles.contSpeaking('To be honest, we can never be sure when the disease will break free from the Jakris\'s body',function() {
				charles.wait(200,function() {
					charles.speak('That\'s why we need to stop sticking our nose into the problem here and leave straight away');
				});
			});
		});
	});
})
,new Frame(function(){
	sophie.changeItalic(true);
	sophie.setFontSize('1.2vw');
	sophie.preSpeak(function() {
		sophie.speak('B-But we promised to help!',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('We can\'t just leave Jakris here alone!');
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('We only promised to check on the ingredients at the pharmacy',function() {
			charles.wait(200,function() {
				charles.speak('We didn\'t promise anything about providing the cure or anything along that line');
			});
		});
	});
})
,new Frame(function(){
	charles.speak('From the look of the boy, the situation is an increaisngly precarious one.',function() {
		charles.wait(200,function() {
			charles.speak('Think about your parents and Novala.',function() {
				charles.wait(200,function() {
					charles.contSpeaking('There\'s no reason why we should take such risks when we\'ve so much more at stake');
				});
			});
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('B-But think about Erithven!',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('The entire village is at stake!');
			});
		});
	});
})
,new Frame(function(){
	sophie.speak('If we don\'t help them, I\'ll definitely regret for the rest of my life!',function() {
		sophie.wait(200,function() {
			sophie.speak('How am I going to face the people of Novala in the future...');
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Bu-',function() {
			sophie.interupt(function() {
				sophie.speak('Charles, please...',null,800,false);
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('...',function() {
			charles.wait(200,function() {
				charles.speak('Alright.');
			});
		},1000,false);
	});
})
,new Frame(function(){
	charles.speak('But just this time.');
})
,new Frame(function(){
	sophie.setNormalText();
	sophie.setFontSize('1.7vw');
	charles.setNormalText();
	charles.setFontSize('1.7vw');
	sophie.preSpeak(function() {
		sophie.speak('YAY!');
		charles.flipHorizontally(null,200);
		charles.move(-10,null,200);
		erithven.changeOverlay(0,'black',0,function() {
			sophie.bringBelowOverlay();
			charles.bringBelowOverlay(function() {
				sophie.wait(200,function() {
					sophie.speak('So where can we find Rigortas and Meisumptums?');
				});
			});
		});
	});
})
,new Frame(function(){
	comet.preSpeak(function() {
		comet.speak('They can be found at the Cliffs of Kusuri!',function() {
			comet.wait(200,function() {
				comet.contSpeaking('Which isn\'t too far from here!');
			});
		});
	});
})
,new Frame(function(){
	comet.speak('Just walk along the port and after a steep ascent, you should see the cliffs in no time!',function() {
		comet.wait(200,function() {
			comet.speak('But do watch where you tread once you reach the cliffs!',function() {
				comet.wait(200,function() {
					comet.contSpeaking('Many have slipped and fallen to their deaths over there!');
				});
			});
		});
	});
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Rubbish!',function() {
			halley.wait(200,function() {
				halley.contSpeaking('What\'s so hard about keeping balance on a cliff?');
			});
		});
	});
})
,new Frame(function(){
	comet.preSpeak(function() {
		comet.speak('Sorry...',function() {
			comet.wait(200,function() {
				comet.contSpeaking('Just ignore him...');
			});
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Alright!',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('Just wait for us!');
			});
		});
	});
})
,new Frame(function(){
	sophie.speak('We\'ll be back in no time!');
})
]);