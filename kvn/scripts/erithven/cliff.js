let cliff =  new Scene("erithven_cliff",
[new Frame(function(){
	erithven.bringCharacter(sophie);
	erithven.bringCharacter(charles);
	erithven.bringCharacter(yusie);
	erithven.bringCharacter(halley);
	erithven.bringCharacter(sophieslippedCG);
	yusie.setTextColor('white');
	sophie.setTextColor('white');
	charles.setTextColor('white');
	halley.setTextColor('white');
	erithven.display(0,null,0,function() {
		erithven.changeBackground('cliff',1,1000);
		yusie.flipHorizontally();
		halley.flipHorizontally();
		yusie.preMove(-25);
		halley.preMove(-73);
		sophie.preMove(-10,70);
		sophie.preRotate(degree=10);
		charles.appear(1000);
		halley.appear(1000);
		yusie.appear(1000);
		charles.appear(1000);
	});
})
,new Frame(function(){
	yusie.move(20,null,600,function() {
		yusie.flipHorizontally(function() {
			yusie.preSpeak(function() {
				yusie.speak('I must say it wasn\'t an easy hike to get all the way up here...');
			});
		},200);
	});
})
,new Frame(function(){
	yusie.speak('It would really be quite impressive for a Princess if Sophie were to achieve such a feat');
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('What\'s so difficult about ascending this cliff?',function() {
			halley.wait(200,function() {
				halley.speak('And I don\'t see why we should hold the Royal Family to a different set of standards');
			});
		});
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('So much for talking tough...',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('We\'ve been standing at this vantage point for a while already and you\'ve yet to deliver your promise...');
			});
		});
	});
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Hey!',function() {
			halley.wait(200,function() {
				halley.contSpeaking('Are you picking a figh-',function() {
					charles.interupt(function() {
						charles.speak('I\'ve enough of both of you!',function() {
							charles.wait(200,function() {
								charles.contSpeaking('If you all want to bicker or fight, please do so elsewhere and don\'t disrupt me');
							});
						});
					});
				});
			});
		});
	});
})
,new Frame(function(){
	erithven.closeTextBox();
	charles.wait(1200,function() {
		charles.speak('If I remember correctly...',function() {
			charles.wait(200,function() {
				charles.contSpeaking('Rigortas are white in color while Meisumptums are red in color');
			});
		});
	});
})
,new Frame(function(){
	charles.speak('So I should be looking out for clusters of this color around the cliffs which are more accessible than the rest',function() {
		charles.wait(200,function() {
			charles.speak('Those places will most likely be where I will be able to find Soph-');
		});
	});
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Charles...?',function() {
			halley.wait(200,function() {
				halley.contSpeaking('You\'re Charles, right?');
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Yeah');
	});
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('When do you want me to get the herbs for you?',function() {
			halley.wait(200,function() {
				halley.contSpeaking('I\'m ready to prove my abilities to this stupid girl!');
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Actually...',function() {
			charles.wait(300,function() {
				charles.contSpeaking('How about this?',function() {
					charles.wait(200,function() {
						charles.speak('Instead of getting the herbs, I need you to help me fetch Princess Sophie up in the event that she\'s caught on the path at the side of the Cliff');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	charles.speak('And don\'t worry because you\'ll still be able to show your trekking and climbing ability');
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Sorry but I\'m not going to do anything for any member of the Royal Family');
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('We\'ll see then');
	});
})
,new Frame(function(){
	charles.move(10,null,500,function() {
		erithven.closeTextBox();
		charles.wait(1200,function() {
			charles.speak('I see quite a large cluster of Meisumptums on the side of the cliff at the opposite side',function() {
				charles.wait(200,function() {
					charles.speak('There\'s a little path by the cliff if I\'m not seeing things');
				});
			});
		});
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Is that Sophie on the right hand side of the red cluster of herbs?');
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('You mean the left hand side?',function() {
			charles.wait(200,function() {
				charles.speak('Yes, I think you\'re right!');
			});
		});
	});
})
,new Frame(function(){
	charles.speak('It seems like Sophie has collected quite a number of the herbs already!');
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.changeBold(true);
		yusie.setFontSize('2vw');
		yusie.speak('AHHHH!!!');
		sophieslippedCG.bringAboveOverlay();
		yusie.wait(700,function() {
			erithven.closeTextBox();
			sophieslippedCG.appear(1000);
			erithven.changeOverlay(1,'black',700,function() {
				sophieslippedCG.wait(2000);
			});
		});
	});
})
,new Frame(function(){
	sophieslippedCG.disappear(700);
	erithven.changeOverlay(0,'black',1000,function() {
		charles.changeBold(true);
		charles.setFontSize('2vw');
		charles.preSpeak(function() {
			charles.speak('SOPHIE!',function() {
				charles.wait(200,function() {
					charles.contSpeaking('ARE YOU OKAY?!!!',null,700,false);
				});
			},700,false);
		});
	});
})
,new Frame(function(){
	sophie.wait(400);
	sophie.setFontSize('1.2vw');
	sophie.speak('C-Charles..?',function() {
		sophie.wait(200,function() {
			sophie.contSpeaking('Is that you?');
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('YEAH!',function() {
			charles.wait(200,function() {
				charles.contSpeaking('HANG ON THERE!');
			});
		});
	});
})
,new Frame(function(){
	charles.speak('WE\'LL TRY TO FIND A WAY TO GET YOU UP',function() {
		yusie.interupt(function() {
			yusie.speak('AHHHH!!!');
			sophieslippedCG.bringAboveOverlay();
			yusie.endSpeak();
			yusie.wait(700,function() {
				erithven.closeTextBox();
				sophieslippedCG.appear(1000);
				erithven.changeOverlay(1,'black',700,function() {
					sophieslippedCG.move(null,20,0,function() {
						sophieslippedCG.wait(150,function() {
							sophieslippedCG.move(null,-20,0,function() {
								sophieslippedCG.wait(2000);
							},easeIn,false);
						});
					},easeIn,false);
				});
			});
		});
	});
})
,new Frame(function(){
	sophieslippedCG.disappear(700);
	erithven.changeOverlay(0,'black',1000,function() {
		sophie.speak('I\'m okay!',function() {
			sophie.wait(200);
		});
	});
})
,new Frame(function(){
	charles.setNormalText();
	charles.setFontSize('1.7vw');
	charles.preSpeak(function() {
		charles.speak('Halley, I think we need your help right now!');
	});
})
,new Frame(function(){
	halley.changeItalic(true);
	halley.setFontSize('1.4vw');
	halley.preSpeak(function() {
		halley.speak('Should I help them...?');
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Ugh...',function() {
			charles.wait(200,function() {
				charles.contSpeaking('Forget about it');
			});
		});
	});
})
,new Frame(function(){
	charles.flipHorizontally(function() {
		charles.move(-80,null,850);
		yusie.wait(250,function() {
			yusie.move(-90,null,950,function() {
				halley.wait(400,function() {
					halley.flipHorizontally(function() {
						halley.move(-30,null,300,function() {
							charles.disappear();
							yusie.disappear();
							halley.disappear();
							charles.move(140);
							yusie.move(140);
							halley.move(140);
							erithven.closeTextBox();
							erithven.changeBackground('finalcliff',1,1000);
						});
					},200);
				});
			});
		});
	},200);
})
,new Frame(function(){
	charles.appear();
	yusie.appear();
	halley.appear(null,function() {
		charles.move(-50,null,850);
		yusie.move(-30,null,850);
		halley.move(-50,null,850,function() {
			charles.preSpeak(function() {
				charles.changeBold();
				charles.setFontSize('2vw');
				charles.speak('Sophie!',function() {
					charles.wait(200,function() {
						charles.contSpeaking('Hang on! I\'ll figure out a way to get you up!');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	charles.endSpeak();
	sophie.setFontSize('1.5vw');
	sophie.speak('It\'s okay!',function() {
		sophie.wait(500,function() {
			sophie.contSpeaking('I\'m a-almost up...',null,1200,false);
		});
	});
})
,new Frame(function(){
	sophie.appear(1000,function() {
		sophie.move(null,-50,2500,function() {
			sophie.move(3,2,300,function() {
				sophie.wait(100,function() {
					sophie.rotateClockwise(null,200);
					sophie.move(3,-22,400,null,swing);
				});
			});
		},easeOut);
	});
})
,new Frame(function(){
	sophie.setFontSize('1.7vw');
	yusie.setFontSize('1.7vw');
	halley.setFontSize('1.7vw');
	charles.setFontSize('1.7vw');
	yusie.setNormalText();
	halley.setNormalText();
	charles.setNormalText();
	sophie.preSpeak(function() {
		sophie.speak('Pheww...',function() {
			sophie.wait(500,function() {
				sophie.contSpeaking('That was close!');
			});
		},1000,false);
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('I\'m so glad that you\'re safe!',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('We were so worried about you!');
			});
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Sorry for causing all of you to get so worried...');
	});
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Hey...',function() {
			halley.wait(200,function() {
				halley.contSpeaking('I\'m sorry for not stopping Princess Sophie from attempting such a dangerous thing');
			});
		},1000,false);
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('You better be!',function() {
			yusie.wait(300,function() {
				yusie.contSpeaking('You were still so reluctant to save Princess Sophie when Charles asked you to do so earlier');
			});
		});
	});
})
,new Frame(function(){
	yusie.speak('I\'ve no idea what was going on in your head!');
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Hey!');
		halley.wait(300,function() {
			halley.contSpeaking('I\'ve already apologized!',function() {
				halley.wait(300,function() {
					halley.speak('Can you stop bugging me?');
				});
			});
		});
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('I just don\'t understand what do you hold against the Royal Family...');
	});
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('They abandoned me back then in the Great War against Kapitolis',function() {
			halley.wait(300,function() {
				halley.speak('Is that a good enough reason?');
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('What do you mean by that?');
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('You knew my parents personally?');
	});
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Back then during the Great War, I served as the Royal Ranger who led an elite team of rangers to lay an ambush in the mountains that bordered Kapitolis',function() {
			halley.wait(300,function() {
				halley.speak('However, because our ambush plans were compromised by a defeated Novalan Battalion,',function() {
					halley.wait(300,function() {
						halley.contSpeaking('the King and Queen ordered our reinforcements to retreat, leaving us stranded behind the enemy lines');
					});
				},1100);
			});
		});
	});
})
,new Frame(function(){
	halley.speak('In the end, I was the only ranger who made it out alive',function() {
		halley.wait(300,function() {
			halley.speak('I lost all of my brothers who had fought along side me because of one command',function() {
				halley.wait(300,function() {
					halley.speak('One stupid command from the King and the Queen!');
				});
			});
		});
	},1000,false);
})
,new Frame(function(){
	halley.speak('Tell me!',function() {
		halley.wait(300,function() {
			halley.contSpeaking('Is it wrong of me to hate them?');
		});
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('...',null,1000,false);
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Halley, I\'m so sorry about that...',function() {
			sophie.wait(400,function() {
				sophie.contSpeaking('I know that there\'s nothing that I can do to make it up to you...');
			});
		},1000,false);
	});
})
,new Frame(function(){
	sophie.speak('But I hope that you can forgive my parents on my behalf!');
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('...',function() {
			halley.wait(300,function() {
				halley.contSpeaking('I don\'t think that I can ever forgive anyone who treated my life like shit');
			});
		},1000,false);
	});
})
,new Frame(function(){
	halley.speak('But I must say that I have been quite impressed with you',function() {
		halley.wait(300,function() {
			halley.speak('It\'s been a while since I\'ve seen anyone with this amount of moral courage');
		});
	});
})
,new Frame(function(){
	halley.speak('The kind of selflessness and sense of responsibility which you\'ve shown is really commendable!',function() {
		halley.wait(300,function() {
			halley.speak('Not to mention the agility which you\'ve exhibited when you scaled this cliff');
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('It\'s really nothing much...',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('My parents always told me that we owe our power to the people');
			});
		});
	});
})
,new Frame(function(){
	sophie.speak('And I believe that as long as the tasks are within my means, I should always put in my best to make things right for others');
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Well said!',function() {
			halley.wait(300,function() {
				halley.speak('If you don\'t mind me asking, may I know what actually happened back at the castle?',function() {
					halley.wait(300,function() {
						halley.contSpeaking('Why are both of you on the run?');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Minister Mistrassimo launched a coup and ordered a secret force which he had been developing for years to chase after the Royal Family',function() {
			charles.wait(300,function() {
				charles.speak('We broke up with Princess Sophie\'s parents while escaping and we\'re now trying to rendezvous with them',function() {
					charles.wait(300,function() {
						charles.speak('The King and Queen were last seen in Malidret and that\'s where we\'re heading for now');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('I see...',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('Now everything makes sense!');
			});
		},1000,false);
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Mistrassimo\'s network of underlings is so humongous that we\'ve no choice but to keep a low profile',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('His control over the media makes it even harder for us to progress to Malidret!');
			});
		});
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Don\'t you worry, Princess Sophie!',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('I will definitely join your side and help you take down Mistrassimo!');
			});
		});
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('What about you Halley?');
	});
})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Me?',function() {
			halley.wait(300,function() {
				halley.contSpeaking('I will never help anyone from the Royal Family!');
			});
		});
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Charles, why\'re you so quiet?');
	});
})
,new Frame(function(){
	erithven.displayText('...',1000,null,null,null,null,null,null,null,false);
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Err...',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('I\'m sorry Charles...');
			});
		},1000,false);
	});
})
,new Frame(function(){
	sophie.speak('Can you stop being angry...?');
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('How do you expect me to be calm about this?',function() {
			charles.wait(300,function() {
				charles.speak('Your parents left you in my care and yet you disobeyed my instructions');
			});
		});
	});
})
,new Frame(function(){
	charles.speak('I can\'t believe you can\'t see the big picture...',function() {
		charles.wait(200,function() {
			charles.speak('I understand that you want to save people and make them happy');
		});
	});
})
,new Frame(function(){
	charles.speak('But we\'re talking about your parents and the fate of the entire Kingdom over here',function() {
		charles.wait(300,function() {
			charles.speak('Can you imagine what the other countries would do to us the moment they become aware of our political instability?');
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('B-Bu...',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('You\'re right...');
			});
		});
	});
})
,new Frame(function(){
	sophie.speak('I was too reckless...',function() {
		sophie.wait(300,function() {
			sophie.contSpeaking('I should have listened to you and not ran off on my own...');
		});
	});
})
,new Frame(function(){
	sophie.speak('I p-promise you that I won\'t do this again...');
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Have you gotten the herbs?',function() {
			charles.wait(300,function() {
				charles.contSpeaking('If you\'ve collected them already, let\'s return to the pharmacy',function() {
					charles.flipHorizontally(function() {
						charles.move(80,null,850);
					},200);
				});
			});
		});
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Is Charles still angry...?');
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('I think so...',function() {
			sophie.wait(500);
		});
	});
})
,new Frame(function(){
	sophie.contSpeaking('Let\'s catch up with him!',function() {
		sophie.wait(300,function() {
			sophie.speak('I\'m done collecting all the herbs');
		});
	});
})
,new Frame(function(){
	sophie.move(100,null,1050);
	yusie.wait(200,function() {
		halley.flipHorizontally(null,200);
		yusie.flipHorizontally(function() {
			halley.move(100,null,1050);
			yusie.move(100,null,1050);
		},200);
	});
})
]);