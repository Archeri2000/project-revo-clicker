let chief_house_1 =  new Scene("chief_house_1",
[new Frame(function(){
	boriolsis.bringCharacter(yusie);
	boriolsis.bringCharacter(charles);
	boriolsis.bringCharacter(chief);
	boriolsis.bringCharacter(halley);
	boriolsis.bringCharacter(sophie);
	boriolsis.display(null,null,1000,function() {
		sophie.appear(500);
		charles.appear(500);
		chief.appear(500,function() {
			chief.preSpeak(function() {
				chief.speak('This is the village of Boriolsis.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.speak('I haven\'t properly introduced myself yet.');
}, function(){return null})
,new Frame(function(){
	chief.speak('My name is Helmuth, and I am a chief of this village.');
}, function(){return null})
,new Frame(function(){
	chief.speak('Our village is really poor, due to the lack of resource around.',function() {
		chief.wait(500,function() {
			chief.contSpeaking('As the chief of our village,',function() {
				chief.wait(300,function() {
					chief.contSpeaking('I apologise that you have to stay in such a poor village.');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.speak('Its an honour to have you.');
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('It\'s no problem Helmuth!',function() {
			sophie.wait(500,function() {
				sophie.contSpeaking('Really!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.preSpeak(function() {
		chief.speak('Alright then,',function() {
			chief.wait(500,function() {
				chief.contSpeaking('my house is just up ahead.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	boriolsis.fadeOutBackground(800);
	boriolsis.closeTextBox();
	chief.disappear(800);
	sophie.disappear(800);
	charles.disappear(800,function() {
		boriolsis.setAnchorX(0);
		boriolsis.setAnchorY(0);
		boriolsis.scaleBackground(1.5,null,null,function() {
			boriolsis.changeBackground('house',0,null,function() {
				boriolsis.fadeInBackground(800);
				chief.appear(800);
				sophie.appear(800);
				charles.appear(800);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
}, function(){return null})
]);