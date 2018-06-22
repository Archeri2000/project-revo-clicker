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
		sophie.preMove(null,70);
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
		sophie.move(null,-50,2500,null,easeOut);
	});
})
]);