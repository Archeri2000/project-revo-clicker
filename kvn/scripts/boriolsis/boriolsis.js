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
})
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
})
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
																					yusie.speak('Hey!');
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
})
,new Frame(function(){
	halley.setDefaultSkippable(false);
	yusie.setDefaultSkippable(false);
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
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Its more lively this way~');
	});
})
,new Frame(function(){
	sophie.speak('I may die of boredom if tooo quiet');
})
,new Frame(function(){
	chief.setXOffSet(-60);
	chief.flipHorizontally();
	chief.appear();
	charles.preSpeak(function() {
		charles.speak('If you say so...');
	});
})
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
			sophie.move(10,null,200,null,swing);
			chief.wait(200,function() {
				chief.speak('Stop right there!');
			});
		});
	});
})
,new Frame(function(){
	chief.move(30,null,800);
	charles.move(15,null,300);
	sophie.move(-5,null,150);
})
]);