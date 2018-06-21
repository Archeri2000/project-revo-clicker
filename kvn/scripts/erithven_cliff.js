let erithvenCliff =  new Scene("erithven_cliff",
[new Frame(function(){
	erithven.bringCharacter(sophie);
	erithven.bringCharacter(charles);
	erithven.bringCharacter(yusie);
	erithven.bringCharacter(sophieslippedCG);
	yusie.setTextColor('white');
	sophie.setTextColor('white');
	charles.setTextColor('white');
	erithven.display(1,null,1,function() {
		sophie.appear(1000);
		charles.appear(1000);
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Charles...',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('Are you okay?');
			});
		});
	});
})
,new Frame(function(){
	sophie.speak('You\'ve been looking quite unhappy lately...');
})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('It\'s nothing...',function() {
			charles.wait(200,function() {
				charles.contSpeaking('Don\'t worry about me.');
			});
		});
	});
})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('I know you don\'t like talking to people like Halley and Yusie...',function() {
			sophie.wait(200,function() {
				sophie.speak('But trust me!',function() {
					sophie.wait(200,function() {
						sophie.contSpeaking('They are good people!');
					});
				});
			});
		});
	});
})
,new Frame(function(){
	sophie.speak('You know that I ca-',function() {
		charles.interupt(function() {
			charles.speak('I know you can read the carofles of others as long as you establish eye contact with them',function() {
				charles.wait(200,function() {
					charles.contSpeaking('But it\'s not about this...');
				});
			});
		});
	});
})
]);