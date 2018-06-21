let brostika_constable2 =  new Scene("brostika_constable2",
[new Frame(function(){
	brostika.bringCharacter(charles);
	brostika.bringCharacter(sophie);
	brostika.bringCharacter(yusie);
	brostika.bringCharacter(broski);
	charles.preMove(-50);
	sophie.preMove(-50);
	broski.preMove(-100);
	broski.setHorizontalFlip(true);
	brostika.display(0,1,0,function() {
		brostika.changeBackground('police',1,800);
	});
})
,new Frame(function(){
	sophie.setTextColor('white');
	charles.setTextColor('white');
	yusie.setTextColor('white');
	broski.setTextColor('white');
	yusie.changeName('Guard');
	yusie.setFontSize('1.7vw');
	sophie.changeSprite('default',function() {
		yusie.appear(500,function() {
			sophie.appear(0,function() {
				sophie.move(null,null,1000,null,easeOut);
			});
			charles.appear(0,function() {
				charles.wait(200);
				charles.move(null,null,1000,null,easeOut);
			});
		});
	});
})
,new Frame(function(){
	broski.preSpeak(function() {
		broski.speak('Yusie, thank you for dispatching this group of helpful people to free me.',function() {
			yusie.changeName('Yusie');
		});
		broski.wait(200,function() {
			broski.contSpeaking('If not for them, I would still be tied up in the old shed next to my winery.');
		});
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Actually...',function() {
			yusie.wait(400,function() {
				yusie.contSpeaking('I didn\'t trust them when they reported the incident to me.',function() {
					yusie.wait(200,function() {
						yusie.contSpeaking('I merely told them to get you to inform me about the situation of your winery in person.');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	yusie.speak('I am so sorry, -',function() {
		yusie.wait(300,function() {
			yusie.speak('What are your names again?');
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('I am Sophie and they are Charles and',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('And don\'t worry about what happened earlier',function() {
					sophie.wait(200,function() {
						sophie.contSpeaking('You were merely doing your job.');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	broski.preSpeak(function() {
		broski.speak('Yusie, now that we\'ve confirmed the matter, you should take your men to arrest the Revolutionists.');
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Of Course!',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('I will round up my men now.');
			});
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Yusie, let us assist you in fighting the Revolutionists!');
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Assist me?',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('I doubt that any of you will be of much help.');
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Let\'s hope you don\'t mix up the good and bad guys again...');
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Excuse me?!');
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('...');
	});
})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Just wait here while I show you how it\'s done.');
	});
})
,new Frame(function(){
	yusie.endSpeak(function() {
		yusie.flipHorizontally(function() {
			yusie.move(50,null,500);
		},200);
	});
})
,new Frame(function(){
	broski.move(20,null,500,function() {
		broski.flipHorizontally(function() {
			broski.preSpeak(function() {
				broski.speak('Thank you for saving me once again!');
			});
		},200);
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('No problem, if you would excuse us now, we have to-',function() {
			charles.wait(200,function() {
				broski.preSpeak(function() {
					broski.speak('I believe I haven\'t introduced myself yet.');
				});
			});
		});
	});
})
,new Frame(function(){
	broski.speak('I\'m Mr Broski, the 16th generation head of hte Brostikine winery family.');
})
,new Frame(function(){
	broski.speak('Our family has a long history, making wine for Brostika for many centuries.');
})
,new Frame(function(){
	broski.speak('Last year, we sold, erm...',function() {
		broski.wait(200,function() {
			charles.preSpeak(function() {
				charles.wait(200,function() {
					broski.preSpeak(function() {
						broski.speak('Ah yes, seventy thousand barrels! We sold seventy thousand barrles of wine last year!');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	sophie.cycle(function() {
		sophie.disappear(150,function() {
			sophie.changeSprite('default',function() {
				sophie.wait(null,function() {
					sophie.appear(150,function() {
						sophie.wait(600,function() {
							sophie.disappear(150,function() {
								sophie.rotateClockwise(5,600,function() {
									sophie.appear(150,function() {
										sophie.wait(600,function() {
											sophie.disappear(150,function() {
												sophie.rotateAntiClockwise(10,600,function() {
													sophie.appear(150,function() {
														sophie.wait(600,function() {
															sophie.endOfCycle();
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
	charles.cycle(function() {
		charles.disappear(null,function() {
			charles.changeSprite('default',function() {
				charles.wait(600,function() {
					charles.appear(150,function() {
						charles.wait(600,function() {
							charles.disappear(150,function() {
								charles.flipHorizontally();
								charles.move(10,null,null,function() {
									charles.appear(150,function() {
										charles.wait(600,function() {
											charles.disappear(150,function() {
												charles.flipHorizontally();
												charles.changeSprite('default',function() {
													charles.appear(null,function() {
														charles.wait(null,function() {
															charles.endOfCycle();
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
	brostika.textbox.speed = 1/2.5;
		broski.speak('That was the best record we ever had in the history of our winery!',function() {
			broski.speak('I can still remember how my father used to question if I could actually outdo him.',function() {
				broski.wait(200,function() {
					broski.speak('I was so proud of what we have achieved last year.',function() {
						broski.wait(200,function() {
							broski.speak('It was not easy, honestly.',function() {
								broski.wait(200,function() {
									broski.speak('While my lineage had the ability to significantly speed up the speed of fermentation of the wine, it was not quite enough to distinguish our wine from others.',function() {
										broski.wait(200,function() {
											broski.speak('Because this is not only about the quality of the product.',function() {
												broski.wait(200,function() {
													broski.speak('It is also about the marketing.',function() {
														broski.wait(200,function() {
															broski.speak('You must have known by now that our wine has been rebranded by many other manufacturers outside of Brostika as their own product.',function() {
																broski.wait(200,function() {
																	broski.speak('This used to impede our sales tremendously since a long time back.',function() {
																		broski.wait(200,function() {
																			broski.speak('However, I was able to employ certain tactics to safeguard our brand.',function() {
																				broski.wait(200,function() {
																					broski.speak('Though there is still plenty of room for improvement, I must say I have done an incredible job when it comes to increaisng sales.',function() {
																						broski.wait(200,function() {
																							broski.speak('But this increase in sales have also gotten unwanted attention.',function() {
																								broski.wait(200,function() {
																									broski.speak('The M Revolutionists, wanting to take advantage of the newly increased popularity of our product, began to infiltrate our winery with its men before wresting the winery from my hands.',function() {
																										broski.wait(200,function() {
																											broski.speak('My beloved baby, the winery, was stolen from me right under my nose.',function() {
																												broski.wait(200,function() {
																													broski.speak('Their conspiracy is really frightening but the method which they have chosen to take is even worse.',function() {
																														broski.wait(200,function() {
																															broski.speak('It is undoubtedly clever but definitely immoral -',function() {
																																broski.wait(200);
																															});
																														});
																													});
																												});
																											});
																										});
																									});
																								});
																							});
																						});
																					});
																				});
																			});
																		});
																	});
																});
															});
														});
													});
												});
											});
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
	brostika.textbox.speed=1;
		sophie.stopCycle(100);
		charles.stopCycle(200,function() {
			charles.setFontSize('1.2vw');
			charles.changeItalic();
			brostika.changeOverlay(0.55,'' + 000 + '',0,function() {
				charles.bringAboveOverlay(function() {
					sophie.bringAboveOverlay(function() {
						charles.move(10,null,200);
						charles.flipHorizontally(function() {
							charles.preSpeak(function() {
								charles.speak('Sophie...');
							});
						});
					});
				});
			});
		});
})
,new Frame(function(){
	charles.speak('Sophie...');
})
,new Frame(function(){
	charles.speak('Sophie!',function() {
		sophie.wait(100,function() {
			sophie.move(5,null,100,function() {
				sophie.move(-5,null,100,function() {
					sophie.changeSprite('default');
				});
			});
		});
	});
})
,new Frame(function(){
	charles.speak('We should find a way to leave soon.',function() {
		charles.wait(200,function() {
			charles.contSpeaking('We shouldn\'t waste any more time here');
		});
	});
})
,new Frame(function(){
	sophie.setFontSize('1.2vw');
	sophie.changeBold(true);
	sophie.preSpeak(function() {
		sophie.speak('Where is Yusie?',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('Are they back yet?');
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('No...');
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Doesn\'t that mean that they\'ve been gone for a raelly long time?',function() {
			sophie.wait(null,function() {
				sophie.contSpeaking('I\'m starting to get really worried for them...');
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('I\'m sure that the guards will manage fine on their own',function() {
			charles.wait(200,function() {
				charles.contSpeaking('We should focus on getting to Malidret as soon as possible');
			});
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('But you promised to help me...',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('We need to make sure that Brostika is safe before we leave!');
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('...',null,600,false);
	});
})
,new Frame(function(){
	charles.speak('Alright,',function() {
		charles.wait(null,function() {
			charles.contSpeaking('alright');
		});
	});
})
,new Frame(function(){
	charles.move(null,0,200,function() {
		brostika.changeOverlay(0,null,null,function() {
			sophie.preSpeak(function() {
				sophie.speak('Mr Broski',function() {
					sophie.wait(200,function() {
						sophie.contSpeaking('Don\'t you think Yusie and the rest has been gone for too long?');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	broski.preSpeak(function() {
		broski.speak('Huh?',function() {
			broski.wait(null,function() {
				broski.contSpeaking('Yusie?');
			});
		});
	});
})
,new Frame(function(){
	broski.speak('Now that you mention it');
})
,new Frame(function(){
	broski.contSpeaking('They have been goen for far too long');
})
,new Frame(function(){
	broski.speak('They should have returned by now',function() {
		broski.wait(200,function() {
			broski.contSpeaking('Perhaps something happened to them?');
		});
	});
})
,new Frame(function(){
	broski.speak('I\'m sure hope not, I need my winery to be safe');
})
,new Frame(function(){
	broski.speak('Let us go take a look!');
})
,new Frame(function(){
	brostika.closeTextBox(function() {
		sophie.disappear();
		charles.disappear();
		broski.disappear(null,function() {
			charles.move(-70);
			sophie.move(-50);
		});
		brostika.fadeOutBackground(800,function() {
			brostika.setAnchorX();
			brostika.scaleBackground(1.5,1,0,function() {
				brostika.changeBackground('winery',1,800);
			});
		});
	});
})
,new Frame(function(){
	yusie.setDefaultAnimationInterpolation(easeOut);
	slime.setDefaultAnimationInterpolation(easeOut);
	slime2.setDefaultAnimationInterpolation(easeOut);
	brostika.bringCharacter(slime,function() {
		brostika.bringCharacter(slime2,function() {
			yusie.move(-20,null,null,function() {
				slime.move(20);
				slime2.move(20);
				slime.appear();
				slime2.appear();
				yusie.appear(null,function() {
					yusie.move(-50);
					slime.move(-50);
					slime2.move(-50);
					brostika.pan(-50,null,805);
					slime.setDefaultAnimationInterpolation(easeOut);
					slime2.setDefaultAnimationInterpolation(easeOut);
					yusie.setDefaultAnimationInterpolation(easeOut);
					slime.cycle(function() {
						slime.wait(250,function() {
							slime.move(-8,null,200,function() {
								slime.move(8,null,200,function() {
									yusie.scale(1.05,1.05,100,function() {
										yusie.scale(null,null,100,function() {
											slime.endOfCycle();
										});
									});
								});
							});
						});
					});
					slime2.cycle(function() {
						slime2.wait(300,function() {
							slime2.move(-5,null,200,function() {
								slime2.move(5,null,200,function() {
									slime2.endOfCycle();
								});
							});
						});
					});
				});
			});
		});
	});
	broski.wait(2000,function() {
		sophie.move(-30);
		charles.setHorizontalFlip();
		charles.move(-30,null,null,function() {
			sophie.appear(null,function() {
				sophie.scale();
			});
		});
		slime2.stopCycle(300);
		slime.stopCycle(300,function() {
			yusie.move(50,null,400,null,swing);
			slime.move(70,null,400);
			slime2.move(70,null,800);
			sophie.wait(100,function() {
				charles.move(null,null,850,null,swing);
				sophie.wait(100,function() {
					sophie.move(null,null,750);
				});
			});
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Hurry! Let\'s go help her!');
	});
})
]);