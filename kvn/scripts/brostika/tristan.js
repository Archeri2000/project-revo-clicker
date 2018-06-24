let tristanscene =  new Scene("brostika_tristan",
[new Frame(function(){
	brostika.bringCharacter(charles);
	brostika.bringCharacter(sophie);
	brostika.bringCharacter(tristan);
	brostika.bringCharacter(healingMagicCG);
	brostika.display(0,1,0,function() {
		brostika.changeBackground('alley',1,800);
	});
}, function(){return null})
,new Frame(function(){
	sophie.setTextColor('white');
	charles.setTextColor('white');
	tristan.setTextColor('white');
	tristan.changeName();
	tristan.setFontSize();
	tristan.changeBold();
	charles.preMove(10);
	tristan.preMove(-20);
	charles.animate();
	tristan.animate();
	sophie.changeSprite('default',function() {
		sophie.appear(500);
		charles.appear(500);
		tristan.appear(500);
	});
}, function(){return null})
,new Frame(function(){
	tristan.preSpeak(function() {
		tristan.speak('T...thank you for your h-',function() {
			tristan.wait(100,function() {
				tristan.contSpeaking('help!',function() {
					tristan.wait(300,function() {
						tristan.speak('Argghh!',function() {
							tristan.move(0,15,300);
							tristan.rotateAntiClockwise(10,300);
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Are you alright?');
	});
}, function(){return null})
,new Frame(function(){
	tristan.preSpeak(function() {
		tristan.speak('I-',function() {
			tristan.wait(300,function() {
				tristan.contSpeaking('I must find the constable...');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.speak('Don\'t have',function() {
		tristan.wait(400,function() {
			tristan.speak('much time...');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('What\'s going on?',function() {
			charles.wait(400,function() {
				charles.contSpeaking('You\'re looking awfully pale.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.preSpeak(function() {
		tristan.speak('Winery...',function() {
			tristan.wait(300,function() {
				tristan.contSpeaking('poisoned...',function() {
					tristan.wait(600,function() {
						tristan.contSpeaking('Must save the others and boss...');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Pull yourself together!',function() {
			charles.wait(400,function() {
				charles.contSpeaking('What on earth happened?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.preSpeak(function() {
		tristan.speak('Bandits,',function() {
			tristan.wait(300,function() {
				tristan.contSpeaking('with \'M\' tattoos.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.speak('They\'ve taken over Brostikine winery and poisoned the wine!',function() {
		tristan.scale(1.02,1.02,80,function() {
			tristan.scale(null,null,80,function() {
				tristan.wait(200,function() {
					tristan.scale(1.02,1.02,80,function() {
						tristan.scale(null,null,80,function() {
							tristan.wait(200,function() {
								tristan.scale(1.02,1.02,80,function() {
									tristan.scale(null,null,80,function() {
										tristan.wait(200);
									},null,false);
								},null,false);
							});
						},null,false);
					},null,false);
				});
			},null,false);
		},null,false);
	});
}, function(){return null})
,new Frame(function(){
	tristan.speak('They want to kill the village!',function() {
		tristan.scale(1.02,1.02,80,function() {
			tristan.scale(null,null,80,function() {
				tristan.wait(200,function() {
					tristan.scale(1.02,1.02,80,function() {
						tristan.scale(null,null,80,function() {
							tristan.wait(200,function() {
								tristan.scale(1.02,1.02,80,function() {
									tristan.scale(null,null,80,function() {
										tristan.wait(200);
									},null,false);
								},null,false);
							});
						},null,false);
					},null,false);
				});
			},null,false);
		},null,false);
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('That\'s terrible!');
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Where\'s the constable?',function() {
		sophie.wait(300,function() {
			sophie.contSpeaking('We\'ll bring you there, you\'re in no shape to walk alone.');
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.preSpeak(function() {
		tristan.speak('I-',function() {
			tristan.wait(400,function() {
				tristan.contSpeaking('I\'m not...',function() {
					tristan.wait(300,function() {
						tristan.speak('sure.');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.speak('My head hurts...');
}, function(){return null})
,new Frame(function(){
}, function(){return null})
,new Frame(function(){
	tristan.speak('I-',function() {
		tristan.wait(400,function() {
			tristan.contSpeaking('I don\'t think I can make it...');
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.speak('They fed me poison when they caught me escaping...');
}, function(){return null})
,new Frame(function(){
	tristan.speak('...and let me go so they could hunt me for sport...');
}, function(){return null})
,new Frame(function(){
	tristan.speak('Joke\'s on them, I ran fast...');
}, function(){return null})
,new Frame(function(){
	tristan.speak('Ahh, it\'s gotten so dark...');
}, function(){return null})
,new Frame(function(){
	tristan.speak('Tell the constable for me,',function() {
		tristan.wait(400,function() {
			tristan.contSpeaking('those thugs can\'t have their way...');
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.speak('I spat out some of the poison into a vial...');
}, function(){return null})
,new Frame(function(){
	tristan.speak('Take it.',function() {
		tristan.wait(400,function() {
			tristan.contSpeaking('I hope it is useful...');
		});
	});
}, function(){return null})
,new Frame(function(){
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Tristan?',function() {
			sophie.wait(300,function() {
				sophie.speak('Tristan!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('He\'s',function() {
			charles.wait(300,function() {
				charles.contSpeaking('stopped breathing...');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('I\'m sorry, I wish I could have done something for him.');
}, function(){return null})
,new Frame(function(){
	charles.speak('He was a kind soul,',function() {
		charles.wait(300,function() {
			charles.contSpeaking('worrying about his fellow workers till the very end.');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Poor Tristan,',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('There was so much fear and anger in his eyes.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Those thugs must have really tortured him to make him hate them like that.');
}, function(){return null})
,new Frame(function(){
	sophie.speak('I hope he is at peace now.');
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('What are you doing, Sophie?');
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Brostikans believe that if you tie a thread to the pinky of someone who passes on,');
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('their spirit will not disappate and they will be able to watch over their loved ones.');
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('You\'re as knowledgeable about local superstitions as always...');
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('They\'re not superstitions, Charles!',function() {
			sophie.endSpeak();
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Anyway,',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('can you carry Tristan, Charles?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('We should hand his body to the constable so that he can be given a proper burial.');
}, function(){return null})
,new Frame(function(){
	sophie.speak('Besides, we can\'t possibly leave him with the corpses of his pursuers here.');
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Yes, of course.');
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('We\'ll make our way to Erithven after handing this issue over to the town guards.');
}, function(){return null})
]);