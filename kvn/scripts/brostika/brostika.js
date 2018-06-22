var brostika_scene = new Scene("brostika_outside", [
  //background animation should a frame itself
  new Frame(function() {
    //adding characters to the stage, does not mean they are visible unless u preset them to be
    brostikaM.play();
    brostika.bringCharacter(charles);
    brostika.bringCharacter(sophie);
    brostika.bringCharacter(chelsea);

    charles.preMove(20, 0);
    sophie.preMove(20, 0);
    chelsea.preMove(40, 0);
    //fades in the background over a time span of 500ms
    brostika.display(1, 1, 500, function() {
      //after the above animation is done, display text
      //parameters are: text, promise, name (if there is a speaker), centered, fontsize, fontcolor, bold, italic
      //parameters are: text, time, promise, name (if there is a speaker), centered, fontsize, fontcolor, bold, italic, skip
      brostika.displayText("--Village of Brostika--", 400, null, null, true, "2.5vw", "white", false, false, false); //font size should be in vw, normal text is 1.5vw
    });

  })

  , // marks the next part of the array, the comma i mean
  new Frame(function() {
    sophie.setTextColor("white");
    charles.setTextColor("white");
    chelsea.setTextColor("white");
    sophie.changeSprite("def", function() { //changes the sprite of sophie
      sophie.appear(500);
      charles.appear(500);
      chelsea.changeName("???");
      chelsea.bringToFront();
      chelsea.speak("Welcome to Brostika, travellers!");
    });
  })

  ,
  new Frame(function() {
    chelsea.speak("Come, give our locally-produced Brostikine wine a try!", function() {
      chelsea.appear(0, function() {
        chelsea.move(-40, 0, 250);
        charles.move(-20, 0, 250);
        sophie.wait(100, function() {
          sophie.move(-20, 0, 300);
        });
      });
    });
  }),
  new Frame(function() {
    charles.bringToFront(); // brings sophie to the front
    charles.scale(1.05, 1.05, 200);
    charles.speak("And who might you be?", function() {
      charles.wait(400, function() {
        charles.contSpeaking("Isn’t it a bit unusual to be drinking wine in the middle of the day?");
      }, false);
    });
  }),
  new Frame(function() {
    brostika.changeOverlay(0.55, "black", 0, function() { //ons the stage overlay
      sophie.bringAboveOverlay(); //brings sophie above overlay
      charles.bringAboveOverlay(); // brings charles above overlay
      sophie.bringToFront(); // brings sophie to the front
      sophie.changeSprite("def", function() {
        //para: new anchor, animation time, promise, swing, adjust	, skippable
        //agjust refers to whether the game should readjust her to her current position (changing anchor will move her).
        //sophie.changeAnchorX(1, 0, null, null, true);//sets the horizontal anchor to middle so she will expand <^>
        //sophie.changeAnchorY(2, 0, null, null, true);//sets the vertical anchor to bottom so she will expand <^>
        charles.scale(1 / 1.05, 1 / 1.05, 200, function() {
          sophie.scale(1.05, 1.05, 200, function() {
            sophie.setItalic(); //makes sophie's text italic
            sophie.setFontSize("1.2vw"); //makes her text smaller, default is 1.5vw;
            sophie.speak("Don’t be so mean! She’s offering it out of goodwill!");
          });
        });
      });
    });
  }),
  new Frame(function() {
    sophie.changeSprite("def", function() {
      sophie.scale(1 / 1.05, 1 / 1.05, 200, function() {
        //charles.changeAnchorX(1, 0, null, null, true);
        //charles.changeAnchorY(2, 0, null, null, true);
        charles.bringToFront();
        charles.scale(1.05, 1.05, 200, function() {
          charles.move(10, 0, 300);
          charles.wait(100, function() {
            charles.flipHorizontally(function() {
              charles.setItalic();
              charles.setFontSize("1.2vw"); //makes his text smaller, default is 1.5vw;
              charles.speak("And how can you be so sure of that?", function() {
                charles.wait(400, function() {
                  charles.contSpeaking("What if the wine is poisoned?");
                }, false);
              });
            }, 200);
          });
        });
      });
    });
  }),
  new Frame(function() {
    sophie.changeSprite("def", function() {
      charles.scale(1 / 1.05, 1 / 1.05, 200, function() {
        sophie.bringToFront();
        sophie.scale(1.05, 1.05, 200, function() {
          //do note that sophie's preset text settings are not changed
          sophie.setBold();
          sophie.setFontSize("1.8vw");
          sophie.speak("AHEM", null, 600);
        });
      });
    });
  }),
  new Frame(function() {
    sophie.changeSprite("def", function() {
      sophie.setFontSize("1.5vw");
      sophie.setNormalText();
      sophie.speak("I am Princess Sophie of the Kingdom of Novala.", function() {
        sophie.speak("And ~", null, 400, false);
      }, null, false);
    });
  })

  ,

  new Frame(function() {
    sophie.changeSprite("def", function() {
      sophie.contSpeaking("I can read the Carofle of any -", function() {
        sophie.scale(1 / 1.05, 1 / 1.05, 100, function() {
          charles.wait(20, function() {
            charles.bringToFront();
            charles.scale(1.05, 1.05, 100, function() {
              charles.speak("Shh! You’re not supposed to say that!");
            });
          }, false);
        });
      });

    });
  })

  ,
  new Frame(function() {
    charles.scale(1 / 1.05, 1 / 1.05, 200, function() {
      sophie.changeSprite("def", function() {
        sophie.bringToFront();
        sophie.scale(1.05, 1.05, 200, function() {
          sophie.speak("She's a nice person!", function() {
            sophie.wait(400, function() {
              ///*shift the next line onto a second line*/
              sophie.contSpeaking("I can see it~!");
            }, false);
          }, null, false);
        });
      });
    });
  })

  ,
  new Frame(function() {
    sophie.speak("Oh!", function() { //multi text within 1 frame demo
      sophie.wait(700, function() {
        sophie.changeSprite("def", function() {
          sophie.speak("Her name is Chelsea by the way!");
        });
      });
    });
  })

  ,
  new Frame(function() {
    brostika.changeOverlay(def, "black", 0, function() {
      sophie.bringBelowOverlay();
      charles.bringBelowOverlay();
      sophie.scale(1 / 1.05, 1 / 1.05, 200, function() {
        chelsea.bringToFront();
        chelsea.scale(1.05, 1.05, 200, function() {
          chelsea.changeName("Chelsea");
          chelsea.speak("Ah, where are my manners? I'm Chelsea!");
          sophie.changeSprite("def");
        });

      });
    });
  })

  ,
  new Frame(function() {
    chelsea.scale(1 / 1.05, 1 / 1.05, 200, function() {
      charles.bringToFront();
      charles.speak("...");
    });
  })

  ,
  new Frame(function() {
    charles.speak("Alright...", function() {
      charles.wait(400, function() {
        charles.flipHorizontally();
        charles.move(-10, 0, 150);
      }, false);
    }, null, false);
  })

  ,
  new Frame(function() {
    charles.setNormalText();
    charles.setFontSize("1.5vw");
    sophie.changeSprite("def");
    chelsea.changeSprite("def");
    brostika.displayText("You took a sip of this expensive-looking wine and found the flavour to be extremely rich!", 500, null, null, false, "1.5vw", null, false, true, false);
  })

  ,
  new Frame(function() {
    sophie.bringToFront();
    sophie.changeSprite("def", function() {
      sophie.scale(1.05, 1.05, 200, function() {
        sophie.speak("I want to try it!");
      });
    });
  })

  ,
  new Frame(function() {
    sophie.changeSprite("def", function() {
      sophie.contSpeaking("Can I have a sip too?");
    });
  })

  ,
  new Frame(function() {
    sophie.scale(1 / 1.05, 1 / 1.05, 200, function() {
      sophie.changeSprite("def", function() {
        charles.bringToFront();
        charles.flipHorizontally(null, 150);
        charles.move(10, 0, 150);
        charles.scale(1.05, 1.05, 200, function() {
          charles.speak("I would suggest otherwise.");
        });
      });
    });
  })

  ,
  new Frame(function() {
    sophie.changeSprite("def", function() {
      charles.speak("Imagine what your father would say!");
    });
  })

  ,
  new Frame(function() {
    sophie.changeSprite("def", function() {
      charles.speak("You’re much too young to be drinking such things!");
    });
  })

  ,
  new Frame(function() {
    charles.scale(1 / 1.05, 1 / 1.05, 200, function() {
      sophie.bringToFront();
      sophie.changeSprite("def", function() {
        sophie.scale(1.05, 1.05, 200, function() {
          sophie.speak("Sorry...");
        });
      });
    });
  })


  ,
  new Frame(function() {
    sophie.scale(1 / 1.05, 1 / 1.05, 200, function() {
      chelsea.bringToFront();
      sophie.changeSprite("def", function() {
        sophie.notifyWaiter(chelsea);
      });
      chelsea.changeSprite("def", function() {
        chelsea.waitFor(sophie, function() {
          charles.flipHorizontally(null, 400);
          charles.move(-10, 0, 150);
          chelsea.scale(1.05, 1.05, 200, function() {
            chelsea.speak("Don’t worry young miss, in a few years, you’ll be able to, ");
          });
        });
      });
    });
  })

  ,
  new Frame(function() {
    chelsea.contSpeaking("and~ ", function() {
      chelsea.wait(300, function() {
        chelsea.contSpeaking("we always appreciate return visitors!");
      }, false);
    }, 450);

  }),

  new Frame(function() {
    sophie.changeSprite("def", function() {
      chelsea.speak("We always welcome travellers with wine and bread!");
    });
  })

  ,
  new Frame(function() {
    chelsea.scale(1 / 1.05, 1 / 1.05, 200, function() {
      sophie.bringToFront();
      chelsea.changeSprite("def", function() {
        chelsea.notifyWaiter(sophie);
      });
      sophie.changeSprite("def", function() {
        sophie.waitFor(chelsea, function() {
          sophie.scale(1.05, 1.05, 200, function() {
            sophie.speak("Oh!", function() {
              sophie.wait(500, function() {
                sophie.changeSprite("def", function() {
                  sophie.speak("You wouldn’t happen to have any prasines, would you?");
                });
              }, false);
            });
          });
        });
      });
    });
  })

  ,
  new Frame(function() {
    sophie.scale(1 / 1.05, 1 / 1.05, 200, function() {
      charles.bringToFront();
      charles.scale(1.05, 1.05, 200, function() {
        charles.speak("Prasines again, Sophie?");
        sophie.changeSprite("def");
      });

    });
  })

  ,
  new Frame(function() {
    charles.scale(1 / 1.05, 1 / 1.05, 200, function() {
      chelsea.bringToFront();
      sophie.changeSprite("def", function() {
        sophie.notifyWaiter(chelsea);
      });
      chelsea.changeSprite("def", function() {
        chelsea.waitFor(sophie, function() {
          chelsea.scale(1.05, 1.05, 200, function() {
            chelsea.speak("No, prasines are much too sweet to go along with wine.", function() {
              chelsea.wait(300, function() {
                chelsea.contSpeaking(" They would dull your tastebuds.");
              }, false);
            });
          });
        });
      });
    });
  })


  ,
  new Frame(function() {
    chelsea.scale(1 / 1.05, 1 / 1.05, 200, function() {
      sophie.bringToFront();
      chelsea.changeSprite("def", function() {
        chelsea.notifyWaiter(sophie);
      });
      sophie.changeSprite("def", function() {
        sophie.waitFor(chelsea, function() {
          sophie.scale(1.05, 1.05, 200, function() {
            sophie.speak("Aww...");
            sophie.move(0, 2, 700);
          });
        });
      });
    });
  })

  ,
  new Frame(function() {
    sophie.preMove(0, -2);
    sophie.scale(1 / 1.05, 1 / 1.05, 200, function() {
      charles.bringToFront();
      charles.scale(1.05, 1.05, 200, function() {
        charles.speak("Yes, that would be a waste of such great wine!"); //look back, "yes feels weird"
      });

    });
  })

  ,
  new Frame(function() {
    sophie.changeSprite("def");
    charles.contSpeaking("The liquor has so much depth and texture!");
  })

  ,
  new Frame(function() {
    sophie.changeSprite("def");
    charles.speak("Wait, this taste…", function() {
      charles.wait(500, function() {
        charles.contSpeaking("Is this Crème de Cassis?");
      }, false);
    });
  })
  //maybe put some joke about charles being old or something to satisfy sophie "your daughter seems most displeased"???
  ,
  new Frame(function() {
    charles.scale(1 / 1.05, 1 / 1.05, 200, function() {
      chelsea.bringToFront();
      chelsea.changeSprite("def", function() {
        chelsea.scale(1.05, 1.05, 200, function() {
          chelsea.speak("Indeed, this is Crème de Cassis, made from the freshest blackcurrants!", function() {
            chelsea.wait(250, function() {
              chelsea.contSpeaking("I’m glad you enjoyed it!");
            }, false);
          });
          sophie.changeSprite("def");
        });
      });
    });
  })

  ,
  new Frame(function() {
    brostika.changeOverlay(0.55, "black", 0, function() { //ons the stage overlay
      sophie.bringAboveOverlay(); //brings sophie above overlay
      chelsea.scale(1 / 1.05, 1 / 1.05, 200, function() {
        sophie.bringToFront();
        sophie.changeSprite("def", function() {
          sophie.scale(1.05, 1.05, 200, function() {
            sophie.setItalic();
            sophie.setFontSize("1.2vw");
            sophie.speak("All those blackcurrants and not a single prasine?!", function() {
              sophie.contSpeaking("What kind of town doesn’t have prasines?");
            }, null, false);
          });
        });
      });
    });
  })

  ,
  new Frame(function() {
    brostika.changeOverlay(def, "black", 0, function() {
      sophie.bringBelowOverlay();
      sophie.setNormalText();
      sophie.setFontSize("1.5vw");
      charles.bringToFront();
      sophie.scale(1 / 1.05, 1 / 1.05, 200, function() {
        chelsea.bringToFront();
        chelsea.scale(1.05, 1.05, 200, function() {
          chelsea.speak("We Brostikans really take pride in our wines, so it is always a joy to find travellers capable of appreciating good wine.");
        });
      });
    });
  })

  ,
  new Frame(function() {
    sophie.changeSprite("def");
    brostika.backgroundSepia(0.1, 400);
    brostika.changeOverlay(0.05, "#FD5E53", 400, function() {
      chelsea.speak("Here in Brostika, wine is very deeply ingrained into our culture and dining habits");
    });
  })

  ,
  new Frame(function() {
    chelsea.scale(1 / 1.05, 1 / 1.05, 200, function() {
      charles.bringToFront();
      charles.scale(1.05, 1.05, 200, function() {
        charles.speak("Ah, of course!");
      });

    });
  })

  ,
  new Frame(function() {
    chelsea.changeSprite("def");
    charles.speak("I recall reading that wine actually originated from Brostika, where villagers first collected alcohol produced from berries.");
  })

  ,
  new Frame(function() {
    charles.scale(1 / 1.05, 1 / 1.05, 200, function() {
      chelsea.bringToFront();
      chelsea.changeSprite("def", function() {
        chelsea.scale(1.05, 1.05, 200, function() {
          chelsea.speak("I see you’re rather well informed!");
        });
      });
    });
  })

  ,
  new Frame(function() {
    brostika.backgroundSepia(0.2, 400);
    brostika.changeOverlay(0.1, "#FD5E53", 400, function() {
      sophie.bringAboveOverlay(); //brings sophie above overlay
      charles.bringAboveOverlay(); // brings charles above overlay
      chelsea.bringAboveOverlay();
      chelsea.speak("Yes, wine originated from this humble village. It’s been a major part of our culture ever since!");
    });
  })

  ,
  new Frame(function() {
    chelsea.speak("In fact, Brostika is home to some of the world’s best vineyards, including the Brostikine Winery!");
  })

  ,
  new Frame(function() {
    chelsea.speak("Unfortunately, despite having nearly a century of history, Brostikine wine isn’t really famous throughout the kingdom...");
  })

  ,
  new Frame(function() {
    chelsea.speak("The density of our neighbouring forests and the presence of bandits makes it very hard to export our precious wine.");
  })

  ,
  new Frame(function() {
    chelsea.scale(1 / 1.05, 1 / 1.05, 200, function() {
      sophie.bringToFront();
      chelsea.changeSprite("def", function() {
        chelsea.notifyWaiter(sophie);
      });
      sophie.changeSprite("def", function() {
        sophie.waitFor(chelsea, function() {
          sophie.scale(1.05, 1.05, 200, function() {
            sophie.speak("That’s terrible...", function() {
              sophie.wait(300, function() {
                sophie.contSpeaking("Can’t the law enforcement do anything about it?");
              }, false);
            });
          });
        });
      });
    });
  })

  ,
  new Frame(function() {
    sophie.scale(1 / 1.05, 1 / 1.05, 200, function() {
      chelsea.bringToFront();
      sophie.changeSprite("def", function() {
        sophie.notifyWaiter(chelsea);
      });
      chelsea.changeSprite("def", function() {
        chelsea.waitFor(sophie, function() {
          chelsea.scale(1.05, 1.05, 200, function() {
            chelsea.speak("If only the law enforcement here was that capable…");
          });
        });
      });
    });
  })

  ,
  new Frame(function() {
    brostika.backgroundSepia(0.3, 400);
    brostika.changeOverlay(0.15, "#FD5E53", 400, function() {
      chelsea.speak("Nonetheless, we try to support our vineyards and sell as much of our wine as possible to armed merchants that pass through our village.");
    });
  })

  ,
  new Frame(function() {
    chelsea.speak("They sell quite well in large towns like Erithven, but most of the merchants rebrand our wine.");
  })

  ,
  new Frame(function() {
    chelsea.scale(1 / 1.05, 1 / 1.05, 200, function() {
      sophie.bringToFront();
      chelsea.changeSprite("def", function() {
        chelsea.notifyWaiter(sophie);
      });
      sophie.changeSprite("def", function() {
        sophie.waitFor(chelsea, function() {
          sophie.scale(1.05, 1.05, 200, function() {
            sophie.speak("That’s unfair!", function() {
              sophie.wait(300, function() {
                sophie.contSpeaking("Brostika deserves to be recognised for its wine!");
              }, false);
            });
          });
        });
      });
    });
  })

  ,
  new Frame(function() {
    sophie.scale(1 / 1.05, 1 / 1.05, 200, function() {
      charles.bringToFront();
      sophie.changeSprite("def");
      charles.scale(1.05, 1.05, 200, function() {
        charles.speak("Indeed, I can imagine many tourists flocking to these parts if they learnt that the wine was produced here.");
      });

    });
  })

  ,
  new Frame(function() {
    charles.scale(1 / 1.05, 1 / 1.05, 200, function() {
      chelsea.bringToFront();
      chelsea.scale(1.05, 1.05, 200, function() {
        chelsea.speak("As of now, the wine we sell to the merchants is more than enough to keep our wineries afloat.", function() {
          chelsea.wait(250, function() {
            chelsea.contSpeaking("Besides, we do enjoy the peace we get in Brostika.");
          }, false);
        });
      });

    });
  })

  ,

  new Frame(function() {
    brostika.backgroundSepia(0.4, 400);
    brostika.changeOverlay(0.2, "#FD5E53", 400, function() {
      chelsea.scale(1 / 1.05, 1 / 1.05, 200, function() {
        charles.bringToFront();
        charles.scale(1.05, 1.05, 200, function() {
          charles.speak("By the way, do you know how to get to Brostika from here?", function() {
            charles.wait(300, function() {
              charles.contSpeaking("According to the map we should have reached Brostika by now...");
            }, false);
          });
        });
      });
    });
  }),

  new Frame(function() {
    sophie.speak("Yupp, we've been walking for quite a while");
  }),

  new Frame(function() {
    chelsea.speak("You're almost there! It's just up ahead!");
  }),
  new Frame(function() {
    charles.speak("That's great!", function() {
      charles.wait(250, function() {
        charles.contSpeaking("Also, I've heard that there's path from Brostika that leads to Erithven. Would you know anything about it?")
      }, false);
    })
  }),
  new Frame(function() {
    charles.scale(1 / 1.05, 1 / 1.05, 200, function() {
      chelsea.bringToFront();
      chelsea.scale(1.05, 1.05, 200, function() {
        chelsea.speak("Once you reach Brostika, make a turn at the first alley you see!", function() {
          chelsea.contSpeaking("The path that leads to Erithven will be clear from there.");
        });
      });

    });
  }),

  new Frame(function() {
    chelsea.scale(1 / 1.05, 1 / 1.05, 200, function() {
      charles.bringToFront();
      charles.scale(1.05, 1.05, 200, function() {
        charles.speak("Alright, thank you for your help.", function() {
          sophie.wait(250, function() {
            charles.contSpeaking("We should make our way before the sun sets.") //find context for exhiliration & chelsea exit @ marcus
          }, false);
        });
      });

    });
  }),


  new Frame(function() {
    brostika.backgroundSepia(0.5, 400);
    brostika.changeOverlay(0.25, "#FD5E53", 400, function() {
      sophie.changeSprite("def");
      chelsea.changeSprite("def", function() {
        chelsea.speak("You're welcome!", function() {
          chelsea.wait(150, function() {
            chelsea.contSpeaking("It's my pleasure to assist travellers like you!");
          }, false);
        });
      });
    });
  })

  ,
  new Frame(function() {
    chelsea.speak("I’ve got to get going and prepare dinner for the kids!", function() {
      chelsea.wait(200, function() {
        chelsea.contSpeaking("Take care!", function() {
          chelsea.wait(400, function() {
            chelsea.flipHorizontally(function() {
                chelsea.move(40, 0, 400, null, null, false); //chelsea's eyes look weird after flipping. might wanna look into expression
            }, 200);
          }, false);
        });
      }, false);
    });
  })

  ,
  new Frame(function() {
    brostika.displayText("...", 500, null, null, false, "1.5vw", null, false, false, false);
  })

  ,
  new Frame(function() {
    brostika.removeCharacter(chelsea);
    charles.bringToFront();
    charles.move(30, 0, 400, function() {
      charles.flipHorizontally(null, 200);
      charles.wait(100, function() {
        charles.scale(1.05, 1.05, 200, function() {
          charles.speak("Well, I suppose you were right, I was too suspicious.", function() {
            charles.wait(200, function() {
              charles.contSpeaking(" It was nice meeting Chelsea.");
            }, false);
          });
        });
      });
    });
  })

  ,
  new Frame(function() {
    charles.scale(1 / 1.05, 1 / 1.05, 200, function() {
      sophie.bringToFront();
      sophie.changeSprite("def", function() {
        sophie.scale(1.05, 1.05, 200, function() {
          sophie.speak("See? You should rely on me when it comes to judging people!");
        });
      });
    });
  })

  ,
  new Frame(function() {
    sophie.speak("And poisoned wine?!", function() {
      sophie.wait(200, function() {
        sophie.contSpeaking("Where did you get that idea from?");
      }, false);
    });
  })

  ,
  new Frame(function() {
    sophie.scale(1 / 1.05, 1 / 1.05, 200, function() {
      charles.bringToFront();
      charles.scale(1.05, 1.05, 200, function() {
        charles.speak("Well, it isn’t totally out of the question now, is it?", function() {
          charles.wait(200, function() {
            charles.contSpeaking("Plenty of people are out to get you.");
          }, false);
        });
      });

    });
  })

  ,
  new Frame(function() {
    sophie.changeSprite("def");
    charles.speak("I suppose we should get going.", function(){
      charles.wait(200,function(){
        charles.contSpeaking(" We don’t have much time left to buy supplies before it gets dark.");
      },false);
    });
    sophie.bringBelowOverlay(); //brings sophie above overlay
    charles.bringBelowOverlay();
    brostika.changeOverlay(1, "black", 200);
  })
  ,
  new Frame(function(){
    brostika.closeTextBox();
  })
]);
