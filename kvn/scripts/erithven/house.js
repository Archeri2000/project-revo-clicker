let erithvenHouse =  new Scene("erithven_house",
[new Frame(function(){
	erithven.bringCharacter(sophie);
	erithven.bringCharacter(charles);
	erithven.bringCharacter(yusie);
	erithven.bringCharacter(mother);
	erithven.bringCharacter(sickchild);
	sophie.preMove();
	charles.preMove();
	yusie.preMove();
	sickchild.changeName('???');
	mother.changeName('???');
	sickchild.setTextColor('white');
	mother.setTextColor('white');
	sophie.setTextColor('white');
	charles.setTextColor('white');
	yusie.setTextColor('white');
	erithven.display(0,null,0,function() {
		erithven.changeBackground('outsidehouse',1,1000,function() {
			sophie.preMove(-50);
			charles.preMove(-70);
			yusie.preMove(-100);
			yusie.flipHorizontally();
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.appear();
	yusie.appear();
	charles.appear(null,function() {
		sophie.move(null,null,850);
		charles.move(null,null,650);
		yusie.move(80,null,750);
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('This should be the house!');
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Let\'s go in to pass the stabilizer!',function() {
			sophie.endSpeak(function() {
				sophie.wait(200,function() {
					sophie.move(10,null,200);
					charles.move(10,null,200);
					yusie.move(10,null,200);
					mother.wait(100,function() {
						mother.setFontSize('2vw');
						mother.changeBold(true);
						mother.speak('You must move to Malidret!');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sickchild.speak('Nooo!',function() {
		sickchild.wait(250,function() {
			sickchild.contSpeaking('I want to stay in Erithven with you and Papa!');
		});
	});
}, function(){return null})
,new Frame(function(){
	mother.speak('Listen to me!',function() {
		mother.wait(200,function() {
			mother.contSpeaking('The warm weather in Malidret will only do you good!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sickchild.speak('Nooo!',function() {
		sickchild.wait(250,function() {
			sickchild.contSpeaking('I don\'t want to leave you and Papa!');
		});
	});
}, function(){return null})
,new Frame(function(){
	mother.speak('Don\'t you understand?!',function() {
		mother.wait(200,function() {
			mother.setFontSize('1.7vw');
			mother.setNormalText();
			mother.speak('If you don\'t move, there\'s no chance of you getting well.',function() {
				mother.wait(200,function() {
					mother.speak('Can you just be a good boy and listen to Mama?');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sickchild.speak('B-But I am dying soon...',function() {
		sickchild.wait(700,function() {
			sickchild.contSpeaking('right?',function() {
				sickchild.wait(300,function() {
					sickchild.speak('Why must I leave',function() {
						sickchild.setFontSize('1.4vw');
						sickchild.contSpeaking('Papa and',function() {
							sickchild.setFontSize('1.2vw');
							sickchild.contSpeaking('Mamaa...',null,800,false);
						},800);
					},800);
				});
			},800,false);
		});
	},1000,false);
}, function(){return null})
,new Frame(function(){
	erithven.displayText('......',1000,null,null,null,null,null,null,null,false);
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Was that the sick boy and his mother arguing..?');
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('It appears so...',function() {
			charles.wait(200,function() {
				charles.contSpeaking('We should watch our words when we enter the house later');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.disappear(1000);
	charles.disappear(1000);
	yusie.disappear(1000);
	charles.endSpeak(function() {
		erithven.closeTextBox();
		erithven.unDisplay(1000);
		erithven.display(0,null,0,function() {
			sophie.move(-50);
			charles.move(-80);
			sophie.appear();
			charles.appear();
			mother.appear();
			sickchild.appear(null,function() {
				erithven.changeBackground('house',0,null,function() {
					erithven.setAnchorX(0);
					erithven.scaleBackground(1.5,null,null,function() {
						erithven.setOpacity(1);
						erithven.animate(500,function() {
							sophie.move(null,null,650);
							charles.move(null,null,850);
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	erithven.pan(-50,null,1000,null,swing);
	sophie.move(-40,null,1000,null,swing);
	charles.move(-40,null,1000,null,swing);
	mother.move(-40,null,1000,null,swing);
	sickchild.move(-40,null,1000,function() {
		sickchild.scale(1.05,1.05,200,function() {
			sickchild.scale(null,null,200,function() {
				sickchild.scale(1.05,1.05,200,function() {
					sickchild.scale(null,null,200,function() {
						erithven.pan(50,null,1000,null,swing);
						sophie.move(40,null,1000,null,swing);
						charles.move(40,null,1000,null,swing);
						mother.move(40,null,1000,null,swing);
						sickchild.move(40,null,1000,null,swing);
						sickchild.changeName();
						mother.changeName();
					},null,false);
				},null,false);
			},null,false);
		},null,false);
	},swing);
}, function(){return null})
,new Frame(function(){
	mother.preSpeak(function() {
		mother.speak('Hello, you are?');
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Hi, I am Sophie!',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('They are Charles and ' + playName + '');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('We are here to deliver the stabilizer from Brostika');
}, function(){return null})
,new Frame(function(){
	mother.preSpeak(function() {
		mother.speak('Oh it\'s here already?',function() {
			mother.wait(200,function() {
				mother.contSpeaking('That\'s great!',function() {
					mother.wait(200,function() {
						mother.speak('Thank you so much!',function() {
							mother.wait(200,function() {
								mother.contSpeaking('I can\'t thank all of you enough!');
							});
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('You\'re welcome!',function() {
			sophie.wait(200,function() {
				sophie.speak('Here\'s the stabilizer',function() {
					sophie.move(55,null,500,function() {
						sophie.wait(100,function() {
							sophie.move(-55,null,500,null,null,false);
						});
					},null,false);
				},null,false);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	erithven.pan(-50,null,1000,null,swing);
	sophie.move(-40,null,1000,null,swing);
	charles.move(-40,null,1000,null,swing);
	mother.move(-40,null,1000,null,swing);
	sickchild.move(-40,null,1000,function() {
		sickchild.scale(1.05,1.05,200,function() {
			sickchild.scale(null,null,200,function() {
				sickchild.scale(1.05,1.05,200,function() {
					sickchild.scale(null,null,200,null,null,false);
				},null,false);
			},null,false);
		},null,false);
	},swing);
}, function(){return null})
,new Frame(function(){
	mother.flipHorizontally();
	mother.move(25,null,500,function() {
		mother.preSpeak(function() {
			mother.speak('Jakris...',null,1000,false);
		});
	},null,false);
}, function(){return null})
,new Frame(function(){
	mother.speak('Drink this slowly...',function() {
		mother.wait(300,function() {
			mother.contSpeaking('You\'ll feel better',function() {
				sickchild.wait(500,function() {
					sickchild.setFontSize('1.4vw');
					sickchild.speak('Mmmmm');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	mother.speak('Alright, close your eyes and rest...',function() {
		mother.wait(200,function() {
			mother.flipHorizontally();
			mother.move(-25,null,500,function() {
				erithven.pan(50,null,1000,null,swing);
				sophie.move(40,null,1000,null,swing);
				charles.move(40,null,1000,null,swing);
				mother.move(40,null,1000,null,swing);
				sickchild.move(40,null,1000,null,swing);
			},null,false);
		});
	},1000,false);
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Woahh',function() {
			sophie.wait(200,function() {
				sophie.speak('The stabilizer sure works fast...');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('I took a look at the stabilizer earlier.',function() {
			charles.wait(200,function() {
				charles.speak('The sage probably employed morphicology to freeze all activities of the harmful matter within the kid\'s body',function() {
					charles.wait(200,function() {
						charles.speak('Drowsiness is hence probably one of the side effects');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Anyway, sorry for eavesdropping...',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('But we heard something about sending your child to Malidret?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('What was that all about?',function() {
		sophie.wait(200,function() {
			sophie.contSpeaking('I\'m just curious because we\'ll be heading to Malidret as well');
		});
	});
}, function(){return null})
,new Frame(function(){
	mother.preSpeak(function() {
		mother.speak('Err...',function() {
			mother.wait(200,function() {
				mother.contSpeaking('Well, I believe you know about my son\'s condition already',function() {
					mother.wait(200,function() {
						mother.speak('The sage had advised me to send my child to Malidret because of the warmer climate there');
					});
				});
			});
		},800,false);
	});
}, function(){return null})
,new Frame(function(){
	mother.speak('He said that the sea breeze at Erithven would be detrimental for Jakris\'s condition.',function() {
		mother.wait(200,function() {
			mother.contSpeaking('So I knew that no matter how hard it would be for my husband and I to send Jakris all the way to Malidret',function() {
				mother.wait(300,function() {
					mother.speak('We must do so because it would be for the good of our child');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Malidret is really far from here...',function() {
			sophie.wait(400);
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('But why is Jakris so against the plan?',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('Doesn\'t he want to get well?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	mother.preSpeak(function() {
		mother.speak('There are two main reasons for this.',function() {
			mother.wait(200,function() {
				mother.speak('Firstly, both my husband and I are unable to follow him.',function() {
					mother.wait(200,function() {
						mother.contSpeaking('We have to stay in Erithven to continue fishing to make ends meet.');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	mother.speak('Erithven might be a bustling and prosperous port but fishermen families like ours lead very difficult lives.',function() {
		mother.wait(200,function() {
			mother.speak('Because of the recent encroachment of our fishing areas by the Kapitolian fishermen, the size of our catch has been decreasingly steadily');
		});
	});
}, function(){return null})
,new Frame(function(){
	mother.speak('That\'s why it\'s important for us to stay behind to safeguard our fishing area and to maintain our source of income to sustain the heavy cost of living at Malidret should Jakris move there',function() {
		sophie.wait(200,function() {
			sophie.preSpeak(function() {
				sophie.speak('To protect the septras from being taken over by the Kapitolians?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	mother.preSpeak(function() {
		mother.speak('Are you a local?',function() {
			mother.contSpeaking('How did you know about the septras?');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('My friend here is very knowledgeable');
	});
}, function(){return null})
,new Frame(function(){
	mother.preSpeak(function() {
		mother.speak('Your friend is right',function() {
			mother.wait(300,function() {
				mother.speak('Nowadays, the encroachment is so bad that the local merchants in Erithven have to step in to redraw and renegotiate the layout of the fishing area so as to ensure Erithven remains conducive enough for traidng and fishing');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('I see...',function() {
			charles.wait(300,function() {
				charles.speak('Oh you mentioned that there was a second reason why Jakris is so upset');
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	mother.preSpeak(function() {
		mother.speak('Yes, you see',function() {
			mother.wait(300,function() {
				mother.contSpeaking('Jakris knows that it\'s very unlikely that he will ever get well.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Huh...?',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('Why is that so?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	mother.preSpeak(function() {
		mother.speak('The last time the sage came, he told us that he was unable to concoct anything that can cure Jakris',function() {
			mother.wait(200,function() {
				mother.speak('He told us that Jakris didn\'t have much longer to live');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	mother.speak('The sage mentioned that staying at Malidret might help to make his life more comfortable.',function() {
		mother.wait(200,function() {
			mother.contSpeaking('But Jakris kept insisting that it no longer made any difference if he was still going to die at the end',function() {
				mother.wait(200);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	mother.speak('All he wanted was to stay close with us and be with the family',function() {
		mother.wait(200,function() {
			mother.contSpeaking('before he eventually leaves our world...',function() {
				mother.wait(200,function() {
					mother.speak('I really don\'t know what to do...');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	mother.speak('He must be in so much agony all the time...',function() {
		mother.wait(300,function() {
			mother.speak('How I wish I can take his place instead...',null,1000,false);
		});
	},1000,false);
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Don\'t worry!',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('We were just informed us that the sage had already managed to come up with an elixir that can cure Jakris!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('He passed us a recipe to collect some missing ingredients from the pharmacy in Erithven.',function() {
		sophie.wait(200,function() {
			sophie.contSpeaking('The sage himself will be coming shortly',function() {
				sophie.wait(200,function() {
					sophie.speak('Jakris will be alright in no time!',null,null,false);
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	mother.preSpeak(function() {
		mother.speak('I-Is that really true?',function() {
			mother.wait(200,function() {
				mother.contSpeaking('This isn\'t a dream, is it?',null,700,false);
			});
		},700,false);
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Of course not!',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('We just came from Brostika, and we have the recipe with us!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	mother.setFontSize('2vw');
	mother.changeBold(true);
	mother.preSpeak(function() {
		mother.speak('Thank God!',function() {
			mother.wait(200,function() {
				mother.setNormalText();
				mother.setFontSize('1.7vw');
				mother.contSpeaking('I must carve more coconut offerings in return for its mercy!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	mother.speak('Thank you for bringing such good news to me!');
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('You\'re welcome!',function() {
			charles.wait(300,function() {
				charles.preSpeak(function() {
					charles.speak('We should go and check on the pharmacy soon.');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	mother.preSpeak(function() {
		mother.speak('That will be great!',function() {
			mother.wait(200,function() {
				mother.contSpeaking('Thank you so much!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.disappear(1000);
	charles.disappear(1000);
	mother.disappear(1000);
	sickchild.disappear(1000);
	mother.endSpeak(function() {
		erithven.closeTextBox();
		erithven.unDisplay(1000);
		erithven.display(0,null,0,function() {
			erithven.changeBackground('outsidehouse',0,null,function() {
				erithven.setAnchorX(0);
				erithven.scaleBackground(1.5,null,null,function() {
					erithven.setOpacity(1);
					erithven.animate(1000,function() {
						sophie.appear(1000);
						charles.appear(1000);
						yusie.appear(1000);
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Yusie',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking(', you\'re still around?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Well...',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('I figured that all of you might still need my help to locate the pharmacy',function() {
					yusie.wait(200,function() {
						yusie.speak('So I decided to wait for you');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('That\'s so nice of you!',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('Actually',function() {
					sophie.wait(200,function() {
						sophie.contSpeaking(', do you want to join us in our travel to Malidret?');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('It would be good to have one more person aboard!');
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('C-can I?',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('That will be great!',function() {
					yusie.wait(200,function() {
						yusie.speak('I-I mean I do have work left in Brostika',function() {
							yusie.wait(200,function() {
								yusie.contSpeaking('But I\'m sure my superior can manage alone');
							});
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('Besides, you look like you\'re bad with directions.',function() {
		yusie.wait(200,function() {
			yusie.contSpeaking('As a member of the prestigious Guards,',function() {
				yusie.wait(200,function() {
					yusie.contSpeaking('I cannot leave all of you in the lurch');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Yayy!',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('Now we have one more person in our team!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Of course you should be glad!',function() {
			yusie.wait(400,function() {
				yusie.speak('You just got free navigation and security services!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('Hey Charles, what\'s with that unhappy look on your face?');
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Never mind...',function() {
			charles.wait(200,function() {
				charles.speak('Let\'s head to the pharmacy',function() {
					charles.endSpeak();
				});
			});
		});
	});
}, function(){return null})
]);