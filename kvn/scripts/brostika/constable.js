let brostikaConstable =  new Scene("brostika_constable",
[new Frame(function(){
	brostika.bringCharacter(sophie);
	brostika.bringCharacter(charles);
	brostika.bringCharacter(yusie);
	sophie.setTextColor('white');
	charles.setTextColor('white');
	yusie.setTextColor('white');
	charles.preMove(-50);
	sophie.preMove(-50);
	brostika.display(0,null,0,function() {
		brostika.changeBackground('police',1,800);
	});
}, function(){return null})
,new Frame(function(){
	yusie.changeName('Guard');
	yusie.setFontSize('1.7vw');
	yusie.appear(500,function() {
		charles.appear();
		sophie.appear(null,function() {
			sophie.move(null,null,1000,null,easeOut);
			charles.move(null,null,1000,null,easeOut);
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Hello girl guard, we\'re here to report the wine poisoning in the Brostikine winery.');
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Excuse you, we are collectively addressed as \'guards\',',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('not \'girl guard\' or \'guy guard\'.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('Besides,',function() {
		yusie.wait(200,function() {
			yusie.contSpeaking('are you not one of those competitors trying to put down our towns winery?');
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('We\'ve seen too of your kind before, if you\'re here to try your luck, the door\'s right there.',function() {
		sophie.preSpeak(function() {
			sophie.speak('Sorry, but I assure you that we\'re do not harbour any malicious intent.');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('We are really serious about this.',function() {
			charles.wait(200,function() {
				charles.contSpeaking('As you can see, this dead man whom we have we us is the man who reported to you previously.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('Tristan sneaked back into the winery to get a sample of the poison wine.',function() {
		charles.wait(200,function() {
			charles.contSpeaking('Unfortunately, he was caught and was forced to be the test subject of the poison.');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Tristan risked his life to get this sample of poisoned wine, we need your help to save Brostika!');
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('It seems like I might have misunderstood him...',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('But the lengths at which competitors are willing to go to these days have increased quite drastically');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('I find it quite hard to believe the entire story about the conspiracy and everything.',function() {
		yusie.wait(200,function() {
			yusie.contSpeaking('Unless, Mr Broski himself steps forward to request for assistance, I would not partake in your shady operations');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.bringAboveOverlay();
	sophie.bringAboveOverlay();
	brostika.changeOverlay(0.55,'black',0,function() {
		sophie.preSpeak(function() {
			sophie.speak('Charles, I think we have no choice but to scout around the winery to find Mr Broski');
			charles.wait(100,function() {
				charles.flipHorizontally(null,200);
				charles.move(15,null,200);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Before we go ahead with that, let\'s pass Tristan\'s body to the guard.',function() {
			charles.wait(200,function() {
				charles.contSpeaking('' + playName + ' , we will need your help to scout for the location of the winery.');
			});
		});
	});
}, function(){return null})
]);