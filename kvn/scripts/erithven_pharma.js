let erithvenPharma =  new Scene("erithven_pharma",
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
			yusie.preMove(-50);
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
		comet.speak('Yes! Of cour-',function() {
			halley.interupt(function() {
				halley.speak('Duhh...!',function() {
					halley.wait(300,function() {
						halley.speak('It\'s common sense that all herbs originate in the wild...');
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
		charles.wait(300,function() {
			charles.contSpeaking('To be honest, we can never be sure when the disease will break free from the Jakris\'s body');
		});
	});
})
,new Frame(function(){
	charles.speak('That\'s why we need to stop sticking our nose into the problem and leave straight away');
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
	charles.speak('From the look of the boy, the situation is an increasingly precarious one.',function() {
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
		sophie.speak('B-But what about Erithven?!',function() {
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
		charles.speak('No!',function() {
			charles.wait(300,function() {
				charles.contSpeaking('I\'m not going to allow you to participate in this!');
			});
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('......',function() {
			sophie.wait(300,function() {
				sophie.speak('Fine...',function() {
					sophie.setNormalText();
					charles.setNormalText();
					sophie.setFontSize('1.7vw');
					charles.setFontSize('1.7vw');
				});
			});
		},1000,false);
	});
})
,new Frame(function(){
	erithven.changeOverlay(0,'black',0);
	charles.flipHorizontally(null,200);
	charles.move(-10,null,200,function() {
		charles.preSpeak(function() {
			charles.speak('I\'m sorry but I don\'t think we\'ll be needing your help to find the herbs anymore',function() {
				charles.wait(200,function() {
					charles.speak('We shall be taking our leave now');
				});
			});
		});
	});
})
,new Frame(function(){
	comet.preSpeak(function() {
		comet.speak('No worries!',function() {
			comet.wait(200,function() {
				comet.contSpeaking('Don\'t hesitate to pop by our pharmacy if you need any medication!');
			});
		});
	});
})
,new Frame(function(){
	sophie.flipHorizontally(null,200);
	charles.flipHorizontally(function() {
		charles.move(-70,null,850);
		sophie.move(-5,null,1000,function() {
			sophie.wait(1000,function() {
				sophie.flipHorizontally(function() {
					sophie.wait(1000,function() {
						sophie.flipHorizontally(function() {
							sophie.move(-40,null,1000,null,null,false);
						},200);
					});
				},200);
			});
		},null,false);
	},200);
})
,new Frame(function(){
	comet.disappear(1000);
	halley.disappear(1000,function() {
		erithven.closeTextBox();
		erithven.changeBackground('default',null,1000,function() {
			yusie.appear(null,function() {
				yusie.flipHorizontally();
				charles.flipHorizontally();
				yusie.move(null,null,1000);
				charles.move(null,null,1000);
			});
		},null,false);
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('So where\'s the way that leads to Boriolsis?',function() {
			charles.wait(300,function() {
				charles.speak('We\'ve been going around in circles...');
			});
		});
	});
})
,new Frame(function(){
	yusie.flipHorizontally(function() {
		yusie.preSpeak(function() {
			yusie.speak('Can you stop being so impatient?',function() {
				yusie.wait(200);
			});
		});
	},200);
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Well, we\'ve wasted enough time finding our way around Erithven.',function() {
			charles.wait(200,function() {
				charles.speak('It\'s time we start heading in the right direction');
			});
		});
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Just give me a little more time...',function() {
			yusie.wait(700,function() {
				yusie.speak('Hey!',function() {
					yusie.wait(200,function() {
						yusie.contSpeaking('Where\'s Sophie?');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Huh?',function() {
			charles.wait(200,function() {
				charles.contSpeaking('Wasn\'t she behind us all this while?');
			});
		});
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Did she got lost or something?');
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('...',function() {
			charles.wait(300,function() {
				charles.speak('I think I know where she might have gone to...');
			});
		},500,false);
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('A prasine shop...?',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('I mean she kept going on and on about prasines...');
			});
		});
	});
})
,new Frame(function(){
	yusie.speak('She might have broken contact from us when we went by the bakery earlier');
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('I don\'t think she\'ll be at the bakery.',function() {
			charles.wait(300,function() {
				charles.contSpeaking('It\'s more likely that she had gone back to the pharmacy to ask for the location of the missing herbs');
			});
		});
	});
})
,new Frame(function(){
	charles.speak('Let\'s hurry!',function() {
		charles.wait(200,function() {
			charles.contSpeaking('We need to catch her before she goes off hunting for the herbs',function() {
				charles.flipHorizontally(function() {
					charles.move(-80,null,800);
					yusie.move(-100,null,850,function() {
						erithven.closeTextBox();
						erithven.changeBackground('pharma',null,1000,function() {
							halley.appear(1000);
							comet.appear(1000);
						},null,false);
					});
				},200);
			},null,false);
		});
	});
})
,new Frame(function(){
	charles.flipHorizontally();
	yusie.flipHorizontally();
	charles.move(null,null,850);
	yusie.move(30,null,850,function() {
		comet.preSpeak(function() {
			comet.speak('Huh? You\'re back so soon?',function() {
				comet.wait(200,function() {
					comet.contSpeaking('Didn\'t we just give you the location to find the ingredients?');
				});
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Wait',function() {
			charles.wait(200,function() {
				charles.contSpeaking('so Sophie has left?');
			});
		});
	});
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Yes.',function() {
			halley.wait(200,function() {
				halley.contSpeaking('Your beloved Princess Sophie has left without you.',function() {
					halley.wait(400,function() {
						halley.speak('Aren\'t you worried now?');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Wait...',function() {
			charles.wait(300,function() {
				charles.contSpeaking('How...?',null,1000,false);
			});
		},1000,false);
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Wait, what\'s going on?',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('Sophie is the Princess...?');
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Yusie...not now',function() {
			charles.wait(300,function() {
				charles.speak('Who are you, Halley?',function() {
					charles.wait(300,function() {
						charles.contSpeaking('And how long have you known about this?');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('I\'m just a harmless stranger who happened to recognize a royalty when I see one.',function() {
			halley.wait(200,function() {
				halley.speak('And don\'t worry about me!');
			});
		});
	});
})
,new Frame(function(){
	halley.speak('Though I might not bear the friendliest of intentions towards the Royal Family, I\'m not the biggest threat to her right now.',function() {
		halley.wait(400,function() {
			halley.speak('Comet, do you want to share with them where our dear Princess Sophie has headed to?');
		});
	});
})
,new Frame(function(){
	comet.preSpeak(function() {
		comet.speak('We told her to try her luck at the Cliffs of Kusuri',function() {
			comet.wait(200,function() {
				comet.speak('Usually, a healthy amount of Quinnsetas tend to grow by the Cliffs of Kusuri - which isn\'t too far from here');
			});
		});
	});
})
,new Frame(function(){
	comet.speak('It\'s simply a short walk along the port and after a steep ascent, you should see the cliffs in no time!',function() {
		comet.wait(400,function() {
			comet.speak('But do watch where you tread once you reach the cliffs!',function() {
				comet.wait(400,function() {
					comet.contSpeaking('Many have slipped and fallen to their deaths over there!');
				});
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('What?!',function() {
			charles.wait(200,function() {
				charles.contSpeaking('How could you send her to such a dangerous place?!');
			});
		},600,false);
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Are you all crazy?!',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('Why would you all encourage her to do such a dangerous thing?!');
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
		comet.speak('Sorry, just ignore Halley...',function() {
			comet.wait(200,function() {
				comet.contSpeaking('Well, we didn\'t know that she would be going alon-',function() {
					halley.interupt(function() {
						halley.speak('It doesn\'t matter.');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	halley.speak('What\'s wrong with a member of the Royal Family dying?',function() {
		halley.wait(200,function() {
			halley.speak('People die every single day',function() {
				halley.wait(200,function() {
					halley.speak('There\'s no reason why they should be exempted fro-',function() {
						yusie.interupt(function() {
							yusie.changeBold(true);
							yusie.setFontSize('2vw');
							yusie.speak('THAT\'S TOO MUCH!');
						});
					});
				});
			});
		});
	});
})
,new Frame(function(){
	yusie.speak('Who do you think you are?',function() {
		yusie.wait(200,function() {
			yusie.contSpeaking('Speaking as if you\'re the Master of Death!');
		});
	});
})
,new Frame(function(){
	yusie.speak('Can you even scale the Cliffs of Kusuri?!',function() {
		yusie.wait(200,function() {
			yusie.speak('Who knows you might just be someone who talks really tough behind your stupid pharmacy counter?!');
		});
	});
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.changeBold(true);
		halley.setFontSize('2vw');
		halley.speak('What did you say?!',function() {
			halley.wait(200,function() {
				halley.contSpeaking('How dare you question my ability?!');
			});
		});
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('You\'ve got a problem with that, Mr Pharmacy Assistant?');
	});
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Fine!',function() {
			halley.wait(200,function() {
				halley.contSpeaking('Let me show you how it\'s done!',function() {
					halley.wait(200,function() {
						halley.speak('I will go with you and get the herbs from the steepest cliff!',function() {
							halley.setNormalText();
							yusie.setNormalText();
							halley.setFontSize('1.7vw');
							yusie.setFontSize('1.7vw');
						});
					});
				});
			});
		});
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Let\'s see about that!');
	});
})
]);