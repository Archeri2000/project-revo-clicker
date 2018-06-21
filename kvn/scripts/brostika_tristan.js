let tristanscene =  new Scene("borstika_tristan",
[new Frame(function(){
	brostika.bringCharacter(charles);
	brostika.bringCharacter(sophie);
	brostika.bringCharacter(tristan);
	brostika.bringCharacter(healingMagicCG);
	brostika.display(0,1,0,function() {
		brostika.changeBackground('alley',1,800);
	});
})
,new Frame(function(){
	sophie.setTextColor();
	charles.setTextColor();
	tristan.setTextColor();
	tristan.changeName();
	tristan.setFontSize();
	tristan.changeBold();
	tristan.preMove(-30);
	sophie.changeSprite(null,function() {
		sophie.appear(500);
		charles.appear(500);
		tristan.appear(500);
	});
})
,new Frame(function(){
	tristan.preSpeak(function() {
		tristan.speak('T...thank you for your help!');
	});
})
,new Frame(function(){
	tristan.speak('I\'m Tristan.');
})
,new Frame(function(){
	tristan.changeName('Tristan');
	sophie.preSpeak(function() {
		sophie.speak('Hi Tristan, I am Sophie. They are Charles and ' + playName + '');
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('What was going on just now?',function() {
			charles.wait(200,function() {
				charles.contSpeaking('Why were there slimes in town?');
			});
		});
	});
})
,new Frame(function(){
	tristan.preSpeak(function() {
		tristan.speak('The M Revolutionists set the slimes on me.');
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('M Revolutionists?');
	});
})
,new Frame(function(){
	tristan.preSpeak(function() {
		tristan.speak('Haven\'t you heard about them?');
	});
})
,new Frame(function(){
	tristan.contSpeaking('They are a self-organized armed group who had wrested control over the Brostikine Winery after tying Mr Broski up, the boss of the winery.');
})
,new Frame(function(){
	tristan.speak('They are planning to write off the whole village as an accident due to the whole village drinking poisoned wine.');
})
,new Frame(function(){
	tristan.speak('With that, they can finally mine the manacytes under our land.');
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('That\'s scary...');
	});
})
,new Frame(function(){
	tristan.preSpeak(function() {
		tristan.speak('After learning about it, I sneaked away from the winery and tried to report it to the law enforcement in Brositka');
	});
})
,new Frame(function(){
	tristan.speak('However, they did not believe my words.');
})
,new Frame(function(){
	tristan.contSpeaking('They thought I was just another competitor trying to drag the famous winery down.');
})
,new Frame(function(){
	tristan.speak('They said they won\'t let me in unless I have some proof.');
})
,new Frame(function(){
	tristan.speak('So, I decided to go to loot some wine from the winery');
})
,new Frame(function(){
	tristan.speak('but right when I was about to leave, I got caught by one of the guards keeping the winery workers in check.');
})
,new Frame(function(){
	tristan.speak('Realising that I was the one who escaped the other day, he locked me up in a place guard by malicious slimes. They then fed me the poison to test its effectiveness');
})
,new Frame(function(){
	tristan.speak('Determined to protect my town, I fought broke a path out the slimes, leaving them to chase me all the way here.');
})
,new Frame(function(){
	tristan.speak('I don\'t think I much time left, the poison seems to be taking its eefect. I got to report to the town\'s law enforcement fast.');
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Did you manage to get the sample?',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('You can get Charles here to try help you decode for a antidote!',function() {
					sophie.wait(200,function() {
						sophie.contSpeaking('Charles is a great doct-!',function() {
							sophie.bringAboveOverlay(function() {
								charles.bringAboveOverlay(function() {
									brostika.changeOverlay(0.55,'' + 000 + '',0);
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
	charles.setFontSize();
	charles.changeItalic(true);
	charles.flipHorizontally(null,200);
	charles.move(10,null,200,function() {
		charles.preSpeak(function() {
			charles.speak('Sophie, I don\'t really think we have time for this.',function() {
				charles.wait(200,function() {
					charles.contSpeaking('We shouldn\'t meddle in affairs of others');
				});
			});
		});
	});
})
,new Frame(function(){
	sophie.setFontSize('1.2vw');
	sophie.changeItalic(true);
	sophie.preSpeak(function() {
		sophie.speak('But but but, the entire village is at stake!',function() {
			sophie.wait(200,,function() {
				sophie.contSpeaking('How can we just let it happen?!');
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Your parent\'s life is at stake too!',function() {
			charles.wait(200,function() {
				charles.contSpeaking('We have to find them as fast as possible!',function() {
					charles.wait(200,function() {
						charles.contSpeaking('Imagine them being worried and scared!');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('But my parents would definitely not left the village alone!',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('It\'s the right thing to do, we should help Tristan!');
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('...',function() {
			charles.wait(200,function() {
				charles.contSpeaking('Fine...',function() {
					charles.setFontSize();
					sophie.setFontSize();
					charles.setNormalText();
					sophie.setNormalText();
					brostika.changeOverlay(0,null,0,function() {
						charles.flipHorizontally(null,200);
						charles.move(-10,null,200);
					});
				});
			});
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Tristan, you can pass Charles the bottle of poisoned wine!',function() {
			sophie.wait(200,,function() {
				sophie.contSpeaking('He will try to decode the poison as soon as possible');
			});
		});
	});
})
,new Frame(function(){
	sophie.endSpeak(function() {
		tristan.move(-10,null,400,function() {
			tristan.wait(150,function() {
				tristan.move(10,null,400,function() {
					sophie.bringBelowOverlay();
					charles.bringBelowOverlay();
				});
			});
		});
	});
})
,new Frame(function(){
	brostika.closeTextBox(function() {
		healingMagicCG.bringAboveOverlay(function() {
			healingMagicCG.bringToFront(function() {
				brostika.changeOverlay(1,'' + 000 + '',300,function() {
					healingMagicCG.appear(1000,function() {
						healingMagicCG.wait(500);
					});
				});
			});
		});
	});
})
,new Frame(function(){
	charles.speak('So its not ausperium? Hmm...');
})
,new Frame(function(){
	charles.contSpeaking('Looks like the poison is more complicated than I thought');
})
,new Frame(function(){
	charles.speak('...',null,500,false);
})
,new Frame(function(){
	charles.speak('Hmm... looks like its not Gorgium either');
})
,new Frame(function(){
	charles.speak('This might take longer than expected.');
})
,new Frame(function(){
	healingMagicCG.disappear(1000,function() {
		tristan.speak('Cough... cough...');
		brostika.changeOverlay(0,'' + 000 + '',300,function() {
			brostika.removeCharacter(healingMagicCG);
			tristan.rotateAntiClockwise(5,200);
			tristan.move(null,20,200,function() {
				tristan.wait(200,function() {
					tristan.move(null,10,500,,null,stepped,false);
					tristan.rotateAntiClockwise(75,500,null,null,false);
				});
			},easeIn,false);
		},linear,false);
	});
})
,new Frame(function(){
	sophie.setFontSize('2.0vw');
	sophie.changeBold();
	sophie.preSpeak(function() {
		sophie.speak('Tristan!',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('Tristan!',function() {
					sophie.wait(200,function() {
						sophie.contSpeaking('Tristan!');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	sophie.speak('Charles!');
})
,new Frame(function(){
	sophie.setFontSize();
	sophie.setNormalText();
	sophie.preSpeak(function() {
		charles.speak('Let me take a look at him!');
	});
})
,new Frame(function(){
	charles.speak('...',function() {
		charles.wait(200);
	},null,false);
})
,new Frame(function(){
	charles.speak('...',null,null,false);
})
,new Frame(function(){
	charles.speak('He\'s...',function() {
		charles.wait(200,function() {
			charles.contSpeaking('dead.');
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('...',null,null,false);
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Are you alright, Princess?',function() {
			charles.wait(500,function() {
				charles.contSpeaking('I\'m really sorry...');
			});
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('I\'m okay.',function() {
			sophie.wait(500,function() {
				sophie.contSpeaking('Tristan will be fine.',function() {
					sophie.wait(200,function() {
						sophie.contSpeaking('Brostikans always believe that they will turn into fishes and swim in the sky, always to watch over their loved ones.');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	sophie.speak('Charles, what\'s the progress on the decoding of the poison?');
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('I\'m afraid that there\'s nothing more that I can do about this.',function() {
			charles.wait(200,function() {
				charles.contSpeaking('The poison seems to have a complex curse embedded which might take up to weeks to decode.');
			});
		});
	});
})
,new Frame(function(){
	charles.speak('Curses are like knots on a string which require untying.',function() {
		charles.wait(200,function() {
			charles.contSpeaking('In this case, because a knot has been tied several times over at the same point in various ways, the complexity of the knot demands a lot more examination and experimentation.');
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('In that case, we should locate the winery and stop the M Revolutionists from spreading the wine.',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('But first, let\'s head to the constables to get their assistance on this matter.');
			});
		});
	});
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('It will be good for us to hand Tristan over to the police as well.',function() {
			charles.wait(200,function() {
				charles.contSpeaking('' + playName + ' , take this bottle of poisoned wine and keep it with you.',function() {
					charles.wait(200,function() {
						charles.speak('We might just need it in the future.');
					});
				});
			});
		});
	});
})
]);