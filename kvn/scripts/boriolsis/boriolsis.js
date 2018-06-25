var reply = 'I knew it!';
var exp = 'overjoyed';
window.youRight = new Options('Of course! I will never hurt you!','youRight',function() {
	return false;
});
window.maybeRight = new Options('Yeah, probably.','maybeRight',function() {
	reply = 'Why are you so uncertain...';
	exp = 'sad';
	return false;
});
let boriolsisWelcome =  new Scene("boriolsis_welcome",
[new Frame(function(){
	boriolsis.bringCharacter(charles);
	boriolsis.bringCharacter(sophie);
	boriolsis.bringCharacter(chief);
	boriolsis.bringCharacter(yusie);
	boriolsis.bringCharacter(halley);
	yusie.setTextColor('white');
	charles.setTextColor('white');
	sophie.setTextColor('white');
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
}, function(){return null})
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
}, function(){return null})
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
}, function(){return null})
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
										yusie.contSpeaking('It says right here in the map that this is the place!');
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
	halley.preSpeak(function() {
		halley.speak('Yeah, yeah.',function() {
			halley.wait(500,function() {
				halley.contSpeaking('This is like the fifth time you said \"I\'m pretty sure it was here...\"!',function() {
					halley.wait(500,function() {
						halley.speak('At this rate, we will never reach boriolsis!',function() {
							halley.endSpeak();
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	halley.setDefaultSkippable(false);
	yusie.setDefaultSkippable(false);
	halley.speak('Give me the map!',function() {
		halley.move(45,null,500,function() {
			halley.wait(200,function() {
				halley.move(-2,null,300,function() {
					yusie.wait(50,function() {
						yusie.move(-5,null,150);
						halley.move(-5,null,150,function() {
							yusie.speak('H-',function() {
								yusie.wait(100,function() {
									yusie.contSpeaking('Hey!',function() {
										yusie.wait(500,function() {
											yusie.move(5,null,150);
											halley.move(5,null,150,function() {
												yusie.wait(500,function() {
													yusie.move(-5,null,150);
													halley.move(-5,null,150);
													halley.speak('Give it to me!',function() {
														halley.wait(500,function() {
															halley.move(-3,null,1000,null,easeIn);
															yusie.wait(50,function() {
																yusie.move(2,null,1000,null,easeIn);
															});
															halley.speak('Let me do it instead, maybe we will finally reach',function() {
																halley.move(-4,null,50,null,swing);
																yusie.move(-8,null,150,null,stepped);
																halley.contSpeaking('Boriolsis!',function() {
																	halley.wait(800,function() {
																		halley.speak('Hmm...',function() {
																			halley.wait(500,function() {
																				halley.flipHorizontally(function() {
																					halley.wait(900,function() {
																						halley.flipHorizontally(function() {
																							halley.wait(900,function() {
																								halley.flipHorizontally(function() {
																									halley.wait(900,function() {
																										halley.flipHorizontally(function() {
																											halley.wait(900,function() {
																												halley.speak('It should be...');
																												halley.move(15,null,800,function() {
																													halley.wait(150,function() {
																														halley.move(15,null,800,function() {
																															halley.wait(150,function() {
																																halley.move(15,null,800,function() {
																																	halley.wait(150,function() {
																																		halley.move(15,null,800,function() {
																																			halley.wait(150);
																																		},swing);
																																		yusie.flipHorizontally(function() {
																																			yusie.speak('Hey!',function() {
																																				yusie.wait(500,function() {
																																					yusie.contSpeaking('Get back here!!',function() {
																																						yusie.move(40,null,500);
																																					});
																																				});
																																			});
																																		},200);
																																	});
																																},swing);
																															});
																														},swing);
																														yusie.move(25,null,600,function() {
																															yusie.speak('Hey!!');
																														},swing);
																													});
																												},swing);
																											});
																										},400);
																									});
																								},400);
																							});
																						},400);
																					});
																					yusie.speak('Hey!',function() {
																						yusie.wait(800,function() {
																							yusie.setFontSize('1.8vw');
																							yusie.contSpeaking('Hey!',function() {
																								yusie.wait(1500,function() {
																									yusie.setFontSize('1.9vw');
																									yusie.contSpeaking('Hey!',function() {
																										yusie.wait(1500,function() {
																											yusie.setFontSize('2.0vw');
																											yusie.contSpeaking('Hey!');
																										});
																									});
																								});
																							});
																						});
																					});
																				},400);
																			});
																		},null,false);
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
				},easeOut);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.setFontSize('1.7vw');
	halley.setDefaultSkippable(true);
	yusie.setDefaultSkippable(true);
	sophie.bringAboveOverlay();
	charles.bringAboveOverlay();
	boriolsis.changeOverlay(0.55,'black',200,function() {
		charles.move(20,null,300);
		sophie.move(30,null,500,function() {
			charles.preSpeak(function() {
				charles.speak('There they go again...',function() {
					charles.wait(500,function() {
						charles.speak('I\'m sure we would have reached boriolsis if they don\'t argue every other minute.',function() {
							charles.wait(500,function() {
								charles.speak('Frankly speaking, I wish they weren\'t coming with us.',function() {
									charles.wait(500,function() {
										charles.contSpeaking('We would have reached erithven by now if not for them');
									});
								});
							});
						});
					});
				});
			});
			sophie.flipHorizontally(null,100);
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Its more lively this way~');
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('I may die of boredom if tooo quiet');
}, function(){return null})
,new Frame(function(){
	chief.setXOffSet(-60);
	chief.flipHorizontally();
	chief.appear();
	charles.preSpeak(function() {
		charles.speak('If you say so...');
	});
}, function(){return null})
,new Frame(function(){
	charles.endSpeak();
	boriolsis.changeOverlay(0);
	charles.bringBelowOverlay();
	sophie.bringBelowOverlay();
	chief.changeName('???');
	chief.speak('Hey!',function() {
		charles.wait(500,function() {
			charles.flipHorizontally(null,200);
			charles.move(10,null,200,null,swing);
			sophie.move(5,null,200,null,swing);
			chief.wait(200,function() {
				chief.speak('Stop right there!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.move(25,null,500);
	charles.move(10,null,300,null,swing);
	sophie.wait(400,function() {
		sophie.move(-20,null,500);
	});
}, function(){return null})
,new Frame(function(){
	chief.preSpeak(function() {
		chief.speak('Hmm...',function() {
			chief.wait(400,function() {
				chief.speak('Aren\'t you Princess Sophie?!',function() {
					sophie.wait(500,function() {
						sophie.preSpeak(function() {
							sophie.setFontSize('1.4vw');
							sophie.speak('N',function() {
								sophie.wait(200,function() {
									sophie.contSpeaking('-No...',null,500,null,null,false);
								});
							});
						});
					});
				});
			});
		});
		yusie.setHorizontalFlip(false);
		halley.setHorizontalFlip(false);
		yusie.animate();
		halley.animate(null,function() {
			yusie.move(-45,null,1500,null,easeBack);
			halley.wait(100,function() {
				halley.move(-40,null,1500,null,easeBack);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	halley.preSpeak(function() {
		sophie.sendToBack();
		halley.speak('Hey, hey,',function() {
			halley.wait(300,function() {
				halley.contSpeaking('what\'s this?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.preSpeak(function() {
		chief.speak('You look exactly like her..',function() {
			sophie.wait(500,function() {
				sophie.move(-1,null,500,null,easeOut);
			});
			chief.move(4,null,1000,function() {
				chief.speak('You are Princess Sophie!',function() {
					chief.wait(200,function() {
						chief.speak('That\'s the royal pendant on your waist!');
					});
				});
			},easeOut);
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.preSpeak(function() {
		chief.speak('Needless to say, you people are the ones who kidnapped her!!');
		chief.move(-10,null,100);
	});
}, function(){return null})
,new Frame(function(){
	sophie.move(5,null,null,function() {
		sophie.preSpeak(function() {
			sophie.speak('No!',function() {
				sophie.wait(200,function() {
					sophie.speak('There\'re not!');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.preSpeak(function() {
		chief.speak('It\'s alright princess!',function() {
			chief.wait(200,function() {
				chief.contSpeaking('I don\'t know what they are threatening you with, but you can come over here!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.speak('I swear on my life that I will protect you from these thugs!');
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('No...',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('It\'s a misunderstanding!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.move(-10,null,1000,function() {
		charles.speak('Hmm....');
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Are you by any chance...',function() {
			charles.wait(300,function() {
				charles.contSpeaking('Helmuth?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeName('Helmuth');
	chief.preSpeak(function() {
		chief.speak('Huh!',function() {
			chief.wait(200,function() {
				chief.speak('Wait a minute...',null,1500);
				chief.move(5,null,1000);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.speak('Charles...?!',function() {
		chief.wait(500,function() {
			chief.contSpeaking('Are you Charles?',function() {
				chief.wait(500,function() {
					chief.contSpeaking('Our village\'s child prodigy that made it to the Royal Academy?');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Yes, I am Charles indeed.',function() {
			charles.wait(200,function() {
				charles.contSpeaking('How many years has it been Helmuth?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.preSpeak(function() {
		chief.speak('What are you doing with the Princess?',function() {
			chief.wait(200,function() {
				chief.contSpeaking('Have you turned against the Royal Family?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('It\'s a long story.',function() {
			charles.wait(300,function() {
				charles.contSpeaking('Mistrassimo stage a coup and the Royal Family are all on the run.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('In order to catch them while putting himself in a good light, Mistrasimmo sent out news that the Royal family has been kidnapped.');
}, function(){return null})
,new Frame(function(){
	chief.preSpeak(function() {
		chief.speak('Mistrassimmo?',function() {
			chief.wait(200,function() {
				chief.contSpeaking('He did that?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('What Charles said is the truth!');
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Charles has been escorting us along with this warriors!');
}, function(){return null})
,new Frame(function(){
	sophie.speak('They have been really helpful,',function() {
		sophie.wait(200,function() {
			sophie.contSpeaking('and they will never harm me!',function() {
				sophie.wait(200,function() {
					sophie.moveAnchorY(10,null,function() {
						sophie.setXOffSet(0);
						sophie.preScale(1.15,1.15);
						sophie.animate(500,function() {
							sophie.flipHorizontally(function() {
								sophie.contSpeaking('Right, ' + playName + '?',function() {
									boriolsis.displayOption([youRight,maybeRight]);
								});
							},200);
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.scale(null,null,500,function() {
		sophie.changeSprite('' + exp + '',function() {
			sophie.speak('' + reply + '');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.flipHorizontally(function() {
		sophie.moveAnchorY(null,null,function() {
			sophie.move(5,null,800,function() {
				sophie.changeSprite(def,function() {
					sophie.speak('Anyways,',function() {
						sophie.wait(500,function() {
							sophie.contSpeaking('I assure you that they are my allies!');
						});
					});
				});
			});
		});
	},200);
}, function(){return null})
,new Frame(function(){
	chief.preSpeak(function() {
		chief.speak('Hmm...');
	});
}, function(){return null})
,new Frame(function(){
	chief.speak('It\'s hard to believe Mistrasimmo has turned against the family,',function() {
		chief.wait(200,function() {
			chief.contSpeaking('but if both Charles and Princess Sophie are saying so, there isn\'t much reason to doubt it...');
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.speak('I always thought Mistrassimo was acting strange, but',function() {
		chief.wait(300,function() {
			chief.contSpeaking('staging a coup?',function() {
				chief.wait(300,function() {
					chief.contSpeaking('That\'s unexpected...');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.speak('That aside,',function() {
		chief.wait(500,function() {
			chief.contSpeaking('it\'s really dangerous in this forest right now.');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Dangerous?');
	});
}, function(){return null})
,new Frame(function(){
	chief.preSpeak(function() {
		chief.speak('Let\'s hurry to my house first.',function() {
			chief.wait(500,function() {
				chief.contSpeaking('I will explain later.');
			});
		});
	});
}, function(){return null})
]);