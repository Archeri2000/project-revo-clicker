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
]);
