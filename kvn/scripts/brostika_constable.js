function preSpeak(char,promise){
    char.scale(1.05,1.05,200,function(){
        char.bringToFront(function(){
            if(typeof promise === "function"){
                promise();
            }
        })
    })
}

let policescene = new Scene("brostika_constable", [
  new Frame(function() { //frame 0
    brostika.bringCharacter(charles);
    brostika.bringCharacter(sophie);
    brostika.bringCharacter(yusie);

    charles.preMove(-50);
    sophie.preMove(-50);

    brostika.display(0, 1, 0, function() {
      brostika.changeBackground("police", 1, 800);

    });

  })

  , new Frame(function() { //frame 1
    sophie.setTextColor("white");
    charles.setTextColor("white");
    yusie.setTextColor("white");
    yusie.changeName("Guard");
    yusie.setFontSize("1.7vw");
    sophie.changeSprite("def", function() { //changes the sprite of sophie

      yusie.appear(500, function() {
        sophie.appear(00, function() {
          sophie.move(null, null, 1000, null, easeOut);
        });
        charles.appear(00, function() {
          charles.wait(200, function() {
            charles.move(null, null, 1000, null, easeOut);
          });
        });
      });
    });
  })

  , new Frame(function() { //frame 2
    preSpeak(charles, function() {
      charles.speak("Hello girl guard, we're here to report the wine poisoning in the Brostikine winery.");
    });
  }), new Frame(function() { //frame 3
    charles.scale(null, null, 200, function() {
      preSpeak(yusie, function() {
        yusie.speak("Excuse you, we are collectively addressed as 'guards',", function() {
          yusie.wait(200, function() {
            yusie.contSpeaking(" not 'girl guard' or 'guy guard'.");
          }, false);
        });
      });
    });
  }), new Frame(function() { //frame 4
    yusie.speak("Besides, ", function() {
      yusie.wait(200, function() {
        yusie.contSpeaking("are you not one of those competitors trying to put down our towns winery?")
      }, false);
    })
  }), new Frame(function() { //frame 5
    yusie.speak("We've seen too of your kind before, if you're here to try your luck, the door's right there.");
  }), new Frame(function() { // frame 6
    yusie.scale(null, null, 200, function() {
      preSpeak(sophie, function() {
        sophie.speak("Sorry, but I assure you that we're do not harbour any malicious intent.");
      })
    })
  }), new Frame(function() { //frame 7
    sophie.scale(null, null, 200, function() {
      preSpeak(charles, function() {
        charles.speak("We are really serious about this.", function() {
          charles.wait(200, function() {
            charles.contSpeaking("As you can see, this dead man whom we have we us is the man who reported to you previously.");
          }, false);
        });
      });
    });
  }), new Frame(function() { //frame 8
    charles.speak("Tristan sneaked back into the winery to get a sample of the poison wine.", function() {
      charles.wait(200, function() {
        charles.contSpeaking("Unfortunately, he was caught and was forced to be the test subject of the poison.");
      }, false);
    });
  }), new Frame(function() { //frame 9
    charles.scale(null, null, 200, function() {
      preSpeak(sophie, function() {
        sophie.speak("Tristan risked his life to get this sample of poisoned wine, we need your help to save Brostika!");
      });
    });
  }), new Frame(function() { //frame 10
    sophie.scale(null, null, 200, function() {
      preSpeak(yusie, function() {
        yusie.speak("It seems like I might have misunderstood him...", function() {
          yusie.wait(200, function() {
            yusie.contSpeaking("But the lengths at which competitors are willing to go to these days have increased quite drastically");
          }, false);
        });
      });
    });
  })

  , new Frame(function() { //frame 11
    yusie.speak("I find it quite hard to believe the entire story about the conspiracy and everything.", function() {
      yusie.wait(200, function() {
        yusie.contSpeaking("Unless, Mr Broski himself steps forward to request for assistance, I would not partake in your shady operations");
      }, false);
    });
  })

  , new Frame(function() { //frame 12
    charles.bringAboveOverlay();
    sophie.bringAboveOverlay();
    brostika.changeOverlay(0.55, "#000", 0, function() {
      yusie.scale(null, null, 200, function() {
        preSpeak(sophie, function() {
          sophie.speak("Charles, I think we have no choice but to scout around the winery to find Mr Broski");
          charles.wait(100, function() {
            charles.flipHorizontally(null, 200);
            charles.move(15, 0, 200);
          }, false);
        });
      });
    });
  })

  , new Frame(function() { //frame 13
    sophie.scale(null, null, 200, function() {
      preSpeak(charles, function() {
        charles.speak("Before we go ahead with that, let's pass Tristan's body to the guard.", function() {
          charles.wait(200, function() {
            charles.contSpeaking(playName + ", we will need your help to scout for the location of the winery.");
          }, false);
        });
      });
    });
  })
]);
