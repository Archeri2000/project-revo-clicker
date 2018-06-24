let brostikaEnd =  new Scene("brostika_end",
[new Frame(function(){
	brostika.bringCharacter(sophie);
	brostika.bringCharacter(charles);
	brostika.bringCharacter(yusie);
	brostika.bringCharacter(broski);
	brostika.bringCharacter(yusieHelpedCG);
	sophie.setTextColor('white');
	charles.setTextColor('white');
	yusie.setTextColor('white');
	broski.setTextColor('white');
	brostika.display(0,null,100,function() {
		yusieHelpedCG.bringAboveOverlay();
		yusieHelpedCG.bringToFront();
		yusieHelpedCG.appear(1000,function() {
			brostika.changeOverlay(1,'black',null,function() {
				brostika.changeBackground('winery',1,2,function() {
					yusie.preMove(6,20);
					yusie.preRotate(degree=-10);
					yusie.appear();
					sophie.appear();
					charles.appear();
				});
			});
		},easeOut);
	});
}, function(){return null})
,new Frame(function(){
	yusieHelpedCG.disappear(1000,function() {
		brostika.changeOverlay(0,null,1000);
	});
}, function(){return null})
,new Frame(function(){
	yusie.move(-3,2,300,function() {
		yusie.wait(100,function() {
			yusie.rotateClockwise(null,200);
			yusie.move(-3,-22,400,null,swing);
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('We could have taken them even without your help...',function() {
			yusie.wait(400,function() {
				yusie.contSpeaking('but,',function() {
					yusie.wait(300,function() {
						yusie.contSpeaking('thanks...');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('Why didn\'t you all say you could fight earlier?');
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Well,',function() {
			charles.wait(300,function() {
				charles.contSpeaking('if you decided to actually listen instead of rushing off...');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Hey!',function() {
			yusie.wait(500,function() {
				yusie.contSpeaking('My weapon was just dull from a lack of use recently!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('I could have taken them no problem otherwise!');
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('It\'s a shame your weapon\'s not as sharp as your tongue, or-',function() {
			yusie.wait(150,function() {
				yusie.interupt(function() {
					yusie.speak('Excuse me?!');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('I-',function() {
		yusie.wait(400,function() {
			yusie.contSpeaking('Did you just-',function() {
				yusie.wait(500,function() {
					yusie.speak('Ugh,',function() {
						yusie.wait(400,function() {
							yusie.contSpeaking('we should go back.');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('I\'ll need you all to make a statement.');
}, function(){return null})
,new Frame(function(){
	brostika.changeOverlay(0.55,null,null,function() {
		charles.bringAboveOverlay();
		charles.preSpeak(function() {
			charles.setItalic();
			charles.setFontSize('1.2vw');
			charles.speak('I hope Mr Broski isn\'t still there...');
		});
	});
}, function(){return null})
,new Frame(function(){
	brostika.setOpacity(0);
	brostika.changeOverlay(0);
	charles.bringBelowOverlay(function() {
		yusie.bringToFront(function() {
			brostika.closeTextBox();
			brostika.animate(500);
			sophie.disappear(500);
			charles.disappear(500);
			yusie.disappear(500,function() {
				yusie.move(-25);
				charles.move(-70);
				yusie.move(-70);
				sophie.move(-70);
				yusie.flipHorizontally(null,0);
				brostika.changeBackground('police',1,500,function() {
					brostika.wait(500,function() {
						sophie.appear();
						charles.appear();
						yusie.appear();
						broski.move(10);
						broski.flipHorizontally();
						broski.appear(500);
						broski.preSpeak(function() {
							broski.speak('...and you must know that we age our wines in the very best oak barrels,',function() {
								sophie.move(70,null,1200,null,swing,false);
								charles.wait(50,function() {
									charles.move(70,null,1200,null,swing,false);
								});
								yusie.wait(100,function() {
									yusie.move(70,null,1200,null,swing,false);
								});
								broski.wait(300,function() {
									broski.speak('carefully crafted in Malidret and imported-',function() {
										brostika.wait(300,function() {
											brostika.displayText('Sir, Captain Yusie has returned!',400,function() {
												charles.setNormalText();
												charles.setFontSize('1.7vw');
												broski.wait(400,function() {
													broski.flipHorizontally(function() {
														broski.wait(700,function() {
															broski.speak('Ah!',null,null,false);
														});
													},null,null,false);
												});
											},'Town Guard',false,null,'white',null,null,false);
										});
									},null,false);
								});
							},null,false);
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	broski.speak('You\'ve returned, my friends!',function() {
		broski.wait(400,function() {
			broski.contSpeaking('Thank you for recovering my beloved winery!');
		});
	});
}, function(){return null})
,new Frame(function(){
	broski.speak('It’s such a shame that I’ve lost Tristan because of this incident!',function() {
		broski.wait(400,function() {
			broski.contSpeaking('Such a capable lad...',function() {
				broski.wait(700,function() {
					broski.contSpeaking('He will be sorely missed.',null,500);
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	broski.speak('BUT!');
}, function(){return null})
,new Frame(function(){
	broski.speak('It’s okay!',function() {
		broski.wait(600,function() {
			broski.contSpeaking('As long as I’m still around,',function() {
				broski.wait(400,function() {
					broski.contSpeaking('Brostikine will continue to produce the best-',function() {
						sophie.interupt(function() {
							sophie.speak('Erm it\'s okay, Mr Broski!',function() {
								sophie.wait(200,function() {
									sophie.contSpeaking('I think we all understand how you feel...');
								});
							});
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('That\'s right.',function() {
			charles.wait(200,function() {
				charles.contSpeaking('It\'s getting a little late.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Y-',function() {
			yusie.wait(300,function() {
				yusie.contSpeaking('yes,',function() {
					yusie.wait(200,function() {
						yusie.contSpeaking('as much as I love your stories,',function() {
							yusie.wait(300,function() {
								yusie.contSpeaking('I still have to take a statement from these folks.');
							});
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('So, if you could excuse us,',function() {
		yusie.move(20,null,500);
		broski.wait(100,function() {
			broski.move(20,null,500,function() {
				yusie.contSpeaking('Mr Broski...',function() {
					yusie.move(20,null,500,function() {
						broski.wait(100,function() {
							broski.move(20,null,500,function() {
								broski.speak('Alright, goodbye!',function() {
									broski.wait(300,function() {
										broski.contSpeaking('Hope to see you fine folks again soon!');
									});
								});
							});
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('Phew,',function() {
		yusie.flipHorizontally();
		yusie.wait(300,function() {
			yusie.move(-20,null,500,function() {
				yusie.contSpeaking('I thought he\'d never leave.',null,null,false);
			},null,false);
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('So,',function() {
		yusie.wait(300,function() {
			yusie.contSpeaking('why were you in Brostika to begin with?');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('I don\'t see why we have to reveal any more-',function() {
			sophie.wait(300,function() {
				sophie.interupt(function() {
					sophie.speak('Come on, Charles, we can trust Yusie.');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('We were just passing through here to Erithven!');
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Oh',function() {
			yusie.wait(300,function() {
				yusie.contSpeaking(', you\'re heading to Erithven?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Yes,',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('we\'ll be making our way through Erithven before heading to Boriolsis.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Excellent,',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('in that case, could you do me a favour and deliver something?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('I need to deliver some medication to a family in Erithven.');
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Wow,',function() {
			charles.wait(400,function() {
				charles.contSpeaking('I didn\'t expect the town guards to be THAT shorthanded.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('I\'ll have you know our staffing is perfectly sufficient!');
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Why not do it yourself?');
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('Who made this medicine anyway?',function() {
		charles.wait(300,function() {
			charles.contSpeaking('And who is it for?',function() {
				charles.wait(700,function() {
					charles.speak('We\'re not running a courier service.');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Why do you even ask so many questions?',function() {
			yusie.wait(300,function() {
				yusie.contSpeaking('Do you still doubt me?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Err Yusie...',function() {
			sophie.wait(400,function() {
				sophie.contSpeaking('I\'m sure Charles is not questioning you...',function() {
					sophie.wait(200,function() {
						sophie.contSpeaking('He just likes to understand what\'s going on...');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Hmphh!',function() {
			yusie.wait(400,function() {
				yusie.speak('It seems to me that you folks don\'t even have the confidence to do a simple delivery,',function() {
					yusie.wait(400,function() {
						yusie.contSpeaking('or will you prove me wrong?');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.flipHorizontally();
		charles.speak('Sophie, since Yusie seems unwilling to divulge any of this information with us,',function() {
			charles.wait(200,function() {
				charles.contSpeaking('I suppose we should make our way-',function() {
					yusie.setFontSize('2vw');
					yusie.changeBold(true);
					yusie.preSpeak(function() {
						yusie.speak('HEYYY!',function() {
							yusie.setFontSize('1.7vw');
							yusie.setNormalText();
							charles.flipHorizontally();
							yusie.wait(400,function() {
								yusie.contSpeaking('Hold up a little, alright?');
							});
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('I didn\'t think you all would really walk out...');
}, function(){return null})
,new Frame(function(){
	yusie.speak('The medicine was made by Brostika\'s sage.');
}, function(){return null})
,new Frame(function(){
	yusie.contSpeaking('A kid in Erithven recently developed an extremely rare and deadly illness...');
}, function(){return null})
,new Frame(function(){
	yusie.speak('Right now, it is still in a dormant state, but if it spreads, all of Erithven could be in danger!',function() {
		yusie.wait(400,function() {
			yusie.speak('Thus far, only a few people know of it so as to prevent mass hysteria.');
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('Our sage is working hard at a cure, but he is still searching for a few critical ingredients.');
}, function(){return null})
,new Frame(function(){
	yusie.speak('That\'s why we need to deliver a stablizer to buy a bit more time.');
}, function(){return null})
,new Frame(function(){
	yusie.speak('Having the town guards make this delivery would have drawn too much attention, so...');
}, function(){return null})
,new Frame(function(){
	yusie.speak('I would really appreciate it if you could help me out.',function() {
		yusie.wait(300,function() {
			yusie.contSpeaking('Regardless, please keep this a secret from the townspeople...');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Sure!',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('We can help, right Charles?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('I don\'t know, we don\'t have much-',function() {
			yusie.preSpeak(function() {
				yusie.speak('Great! I\'ll need you to deliver it to his mother\'s house!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('But how\'re supposed to know which house the lady lives in?',function() {
			charles.wait(200,function() {
				charles.contSpeaking('It\'s our first time going to Erithven after all...');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Oh yeah...',null,null,false);
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('Hmm...',function() {
		yusie.wait(300);
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('I-I haven\'t really figured that out...');
}, function(){return null})
,new Frame(function(){
	yusie.speak('...',null,500,false);
}, function(){return null})
,new Frame(function(){
	yusie.speak('Well, you could walk past the tall house, and-',function() {
		yusie.wait(300,function() {
			yusie.contSpeaking('uhh...');
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('I think...',function() {
		yusie.wait(300,function() {
			yusie.contSpeaking('you then make a right until you reach a street.');
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('Then you can make a turn and walk up the other street before making a-',function() {
		yusie.wait(300,function() {
			yusie.contSpeaking('umm,',function() {
				yusie.wait(300,function() {
					yusie.contSpeaking('right turn and then walk straight down...',function() {
						yusie.wait(300,function() {
							yusie.contSpeaking('I think.');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Well, you could just tell us the color of the roof or the relative position of the house...',function() {
			charles.wait(300,function() {
				charles.contSpeaking('Street names would also help...');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Actually...');
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('Never mind!',function() {
		yusie.wait(200,function() {
			yusie.contSpeaking('You all seem terrible at directions.',function() {
				yusie.wait(500,function() {
					yusie.speak('I\'ll just bring the three of you to Erithven, so you don\'t get lost!');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	brostika.changeOverlay(0.55,null,null,function() {
		charles.bringAboveOverlay();
		charles.preSpeak(function() {
			charles.setItalic();
			charles.setFontSize('1.2vw');
			charles.speak('Yeah, sure...');
		});
	});
}, function(){return null})
,new Frame(function(){
	brostika.changeOverlay(0);
	sophie.preSpeak(function() {
		charles.setNormalText();
		charles.setFontSize('1.7vw');
		sophie.speak('Great! Let\'s all go together!');
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Whatever happened to town guards attracting too much attention?');
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('I-',function() {
			yusie.wait(300,function() {
				yusie.speak('I\'ll wear something else! No one will notice!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('' + playName + ' , can you hold onto this stabilizer? I\'ll lead all of you to Erithven!');
}, function(){return null})
,new Frame(function(){
	yusie.endSpeak(function() {
		charles.bringAboveOverlay();
		sophie.bringAboveOverlay();
		brostika.changeOverlay(0.55,'black',0,function() {
			charles.preSpeak(function() {
				charles.speak('She\'s really one of a kind, isn\'t she?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('On the bright side, I\'m sure things will be more lively!');
	});
}, function(){return null})
]);