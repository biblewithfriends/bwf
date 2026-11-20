// ============================================================
//  GAME CONTENT BANK
//  The games look up today's assigned reading (set on the Serving Ones site).
//  If the chapter has a pack below, they use it. If not, they rotate through
//  the general Bible packs at the bottom so there is always a game.
//
//  To add a chapter: copy one block in CHAPTERS, change the key ("James 3"),
//  the ladder words, and the 5 climb prompts.
//    ladder.path = one shortest path (every step a real 4-letter word)
//    climb answers: k = words that count, s = points (rarer = higher, max 100),
//                   t = what is shown
// ============================================================
const CHAPTERS = {
 "Hebrews 11": {
  "ladder": {
   "start": "DARK",
   "target": "HOPE",
   "path": [
    "DARK",
    "HARK",
    "HANK",
    "HONK",
    "HONE",
    "HOPE"
   ],
   "verse": "Heb. 11:1 — Faith is the substantiation of things hoped for."
  },
  "climb": [
   {
    "q": "Name someone who did something “by faith” in Hebrews 11",
    "a": [
     {
      "k": [
       "abraham"
      ],
      "s": 10,
      "t": "Abraham"
     },
     {
      "k": [
       "moses"
      ],
      "s": 10,
      "t": "Moses"
     },
     {
      "k": [
       "noah"
      ],
      "s": 15,
      "t": "Noah"
     },
     {
      "k": [
       "abel"
      ],
      "s": 30,
      "t": "Abel"
     },
     {
      "k": [
       "enoch"
      ],
      "s": 45,
      "t": "Enoch"
     },
     {
      "k": [
       "sarah"
      ],
      "s": 45,
      "t": "Sarah"
     },
     {
      "k": [
       "rahab"
      ],
      "s": 55,
      "t": "Rahab"
     },
     {
      "k": [
       "isaac"
      ],
      "s": 60,
      "t": "Isaac"
     },
     {
      "k": [
       "jacob"
      ],
      "s": 65,
      "t": "Jacob"
     },
     {
      "k": [
       "joseph"
      ],
      "s": 75,
      "t": "Joseph"
     },
     {
      "k": [
       "david"
      ],
      "s": 40,
      "t": "David (vv. 32-33)"
     },
     {
      "k": [
       "samson"
      ],
      "s": 50,
      "t": "Samson (vv. 32-33)"
     },
     {
      "k": [
       "samuel"
      ],
      "s": 55,
      "t": "Samuel (vv. 32-33)"
     },
     {
      "k": [
       "gideon"
      ],
      "s": 70,
      "t": "Gideon (vv. 32-33)"
     },
     {
      "k": [
       "barak"
      ],
      "s": 85,
      "t": "Barak (vv. 32-33)"
     },
     {
      "k": [
       "jephthah",
       "jeptha",
       "jepthah",
       "jephtah"
      ],
      "s": 90,
      "t": "Jephthah (vv. 32-33)"
     },
     {
      "k": [
       "parents",
       "amram",
       "jochebed"
      ],
      "s": 100,
      "t": "Moses’ parents (v. 23)"
     }
    ]
   },
   {
    "q": "“Time will fail me if I tell of…” — name someone from verse 32",
    "a": [
     {
      "k": [
       "david"
      ],
      "s": 15,
      "t": "David"
     },
     {
      "k": [
       "samson"
      ],
      "s": 25,
      "t": "Samson"
     },
     {
      "k": [
       "samuel"
      ],
      "s": 35,
      "t": "Samuel"
     },
     {
      "k": [
       "gideon"
      ],
      "s": 50,
      "t": "Gideon"
     },
     {
      "k": [
       "prophet"
      ],
      "s": 60,
      "t": "the prophets"
     },
     {
      "k": [
       "barak"
      ],
      "s": 85,
      "t": "Barak"
     },
     {
      "k": [
       "jephthah",
       "jeptha",
       "jepthah",
       "jephtah"
      ],
      "s": 100,
      "t": "Jephthah"
     }
    ]
   },
   {
    "q": "Name something people did “through faith” (vv. 33-34)",
    "a": [
     {
      "k": [
       "lion"
      ],
      "s": 15,
      "t": "stopped the mouths of lions"
     },
     {
      "k": [
       "fire"
      ],
      "s": 35,
      "t": "quenched the power of fire"
     },
     {
      "k": [
       "sword"
      ],
      "s": 45,
      "t": "escaped the edge of the sword"
     },
     {
      "k": [
       "kingdom"
      ],
      "s": 55,
      "t": "overcame kingdoms"
     },
     {
      "k": [
       "promise"
      ],
      "s": 65,
      "t": "obtained promises"
     },
     {
      "k": [
       "righteous"
      ],
      "s": 75,
      "t": "worked righteousness"
     },
     {
      "k": [
       "war",
       "mighty"
      ],
      "s": 75,
      "t": "became mighty in war"
     },
     {
      "k": [
       "weak",
       "strong"
      ],
      "s": 85,
      "t": "made strong in weakness"
     },
     {
      "k": [
       "armies",
       "army",
       "foreign",
       "rout"
      ],
      "s": 95,
      "t": "routed the armies of foreigners"
     }
    ]
   },
   {
    "q": "Name an OBJECT you could touch in Hebrews 11",
    "a": [
     {
      "k": [
       "ark",
       "boat"
      ],
      "s": 10,
      "t": "the ark"
     },
     {
      "k": [
       "wall"
      ],
      "s": 25,
      "t": "walls of Jericho"
     },
     {
      "k": [
       "sacrifice",
       "gift"
      ],
      "s": 40,
      "t": "Abel’s sacrifice"
     },
     {
      "k": [
       "tent"
      ],
      "s": 45,
      "t": "tents"
     },
     {
      "k": [
       "star"
      ],
      "s": 50,
      "t": "stars of heaven"
     },
     {
      "k": [
       "sand"
      ],
      "s": 50,
      "t": "sand by the seashore"
     },
     {
      "k": [
       "blood"
      ],
      "s": 60,
      "t": "the blood (Passover)"
     },
     {
      "k": [
       "bone"
      ],
      "s": 70,
      "t": "Joseph’s bones"
     },
     {
      "k": [
       "staff",
       "stick",
       "cane"
      ],
      "s": 80,
      "t": "Jacob’s staff"
     },
     {
      "k": [
       "sheepskin",
       "goatskin",
       "skin"
      ],
      "s": 100,
      "t": "sheepskins & goatskins"
     }
    ]
   },
   {
    "q": "Name someone in Hebrews 11 who is NOT praised for faith",
    "a": [
     {
      "k": [
       "cain"
      ],
      "s": 40,
      "t": "Cain"
     },
     {
      "k": [
       "egyptian"
      ],
      "s": 50,
      "t": "the Egyptians"
     },
     {
      "k": [
       "king",
       "pharaoh"
      ],
      "s": 60,
      "t": "the king / Pharaoh"
     },
     {
      "k": [
       "esau"
      ],
      "s": 75,
      "t": "Esau"
     },
     {
      "k": [
       "disobedient",
       "jericho"
      ],
      "s": 90,
      "t": "the disobedient of Jericho"
     },
     {
      "k": [
       "destroy",
       "destroyer"
      ],
      "s": 100,
      "t": "the one destroying the firstborn"
     }
    ]
   }
  ]
 },
 "Hebrews 12": {
  "ladder": {
   "start": "REST",
   "target": "RACE",
   "path": [
    "REST",
    "FEST",
    "FAST",
    "FACT",
    "FACE",
    "RACE"
   ],
   "verse": "Heb. 12:1 — Let us run with endurance the race which is set before us."
  },
  "climb": [
   {
    "q": "How do we run the race? Name one thing from 12:1-2",
    "a": [
     {
      "k": [
       "run"
      ],
      "s": 10,
      "t": "run"
     },
     {
      "k": [
       "look",
       "jesus"
      ],
      "s": 20,
      "t": "looking away unto Jesus"
     },
     {
      "k": [
       "endur",
       "persever"
      ],
      "s": 35,
      "t": "with endurance"
     },
     {
      "k": [
       "sin"
      ],
      "s": 45,
      "t": "put away sin"
     },
     {
      "k": [
       "encumbrance",
       "weight"
      ],
      "s": 70,
      "t": "put away every encumbrance"
     },
     {
      "k": [
       "witness",
       "cloud"
      ],
      "s": 80,
      "t": "surrounded by a cloud of witnesses"
     },
     {
      "k": [
       "entangle"
      ],
      "s": 90,
      "t": "the sin that so easily entangles"
     }
    ]
   },
   {
    "q": "Name something said about Jesus in Hebrews 12",
    "a": [
     {
      "k": [
       "cross"
      ],
      "s": 20,
      "t": "endured the cross"
     },
     {
      "k": [
       "author"
      ],
      "s": 45,
      "t": "Author of our faith"
     },
     {
      "k": [
       "perfect"
      ],
      "s": 55,
      "t": "Perfecter of our faith"
     },
     {
      "k": [
       "right hand",
       "throne",
       "sat down"
      ],
      "s": 55,
      "t": "sat down at the right hand of God’s throne"
     },
     {
      "k": [
       "joy"
      ],
      "s": 65,
      "t": "for the joy set before Him"
     },
     {
      "k": [
       "shame"
      ],
      "s": 70,
      "t": "despised the shame"
     },
     {
      "k": [
       "mediator",
       "covenant"
      ],
      "s": 85,
      "t": "Mediator of a new covenant (v. 24)"
     },
     {
      "k": [
       "sprinkl",
       "blood"
      ],
      "s": 95,
      "t": "blood of sprinkling (v. 24)"
     }
    ]
   },
   {
    "q": "Name a word from the “discipline” verses (vv. 5-11)",
    "a": [
     {
      "k": [
       "disciplin"
      ],
      "s": 10,
      "t": "discipline"
     },
     {
      "k": [
       "son"
      ],
      "s": 25,
      "t": "sons"
     },
     {
      "k": [
       "father"
      ],
      "s": 30,
      "t": "Father / fathers"
     },
     {
      "k": [
       "holiness",
       "holy"
      ],
      "s": 55,
      "t": "partake of His holiness"
     },
     {
      "k": [
       "love"
      ],
      "s": 55,
      "t": "the Lord disciplines whom He loves"
     },
     {
      "k": [
       "scourg"
      ],
      "s": 70,
      "t": "scourges"
     },
     {
      "k": [
       "peace",
       "fruit"
      ],
      "s": 80,
      "t": "peaceable fruit of righteousness"
     },
     {
      "k": [
       "spirits"
      ],
      "s": 85,
      "t": "the Father of spirits"
     },
     {
      "k": [
       "exercise",
       "trained"
      ],
      "s": 90,
      "t": "exercised by it"
     },
     {
      "k": [
       "illegitimate"
      ],
      "s": 100,
      "t": "illegitimate (v. 8)"
     }
    ]
   },
   {
    "q": "Name something at Mount Sinai or Mount Zion (vv. 18-24)",
    "a": [
     {
      "k": [
       "fire"
      ],
      "s": 20,
      "t": "fire"
     },
     {
      "k": [
       "zion"
      ],
      "s": 25,
      "t": "Mount Zion"
     },
     {
      "k": [
       "angel"
      ],
      "s": 40,
      "t": "myriads of angels"
     },
     {
      "k": [
       "trumpet"
      ],
      "s": 45,
      "t": "the sound of a trumpet"
     },
     {
      "k": [
       "jerusalem"
      ],
      "s": 45,
      "t": "the heavenly Jerusalem"
     },
     {
      "k": [
       "dark"
      ],
      "s": 50,
      "t": "darkness"
     },
     {
      "k": [
       "voice",
       "word"
      ],
      "s": 50,
      "t": "a voice of words"
     },
     {
      "k": [
       "judge"
      ],
      "s": 65,
      "t": "God the Judge of all"
     },
     {
      "k": [
       "firstborn",
       "church"
      ],
      "s": 75,
      "t": "church of the firstborn"
     },
     {
      "k": [
       "whirlwind",
       "storm"
      ],
      "s": 80,
      "t": "whirlwind"
     },
     {
      "k": [
       "gloom"
      ],
      "s": 85,
      "t": "gloom"
     },
     {
      "k": [
       "beast",
       "stone"
      ],
      "s": 95,
      "t": "a beast to be stoned"
     }
    ]
   },
   {
    "q": "Pursue it or watch out for it — name one from vv. 14-17",
    "a": [
     {
      "k": [
       "peace"
      ],
      "s": 25,
      "t": "pursue peace"
     },
     {
      "k": [
       "sanctif",
       "holy",
       "holiness"
      ],
      "s": 45,
      "t": "sanctification"
     },
     {
      "k": [
       "esau"
      ],
      "s": 45,
      "t": "Esau"
     },
     {
      "k": [
       "grace"
      ],
      "s": 55,
      "t": "falling short of the grace of God"
     },
     {
      "k": [
       "bitter"
      ],
      "s": 60,
      "t": "root of bitterness"
     },
     {
      "k": [
       "birthright"
      ],
      "s": 65,
      "t": "his birthright"
     },
     {
      "k": [
       "meal",
       "food",
       "stew"
      ],
      "s": 75,
      "t": "for one meal"
     },
     {
      "k": [
       "profane"
      ],
      "s": 85,
      "t": "profane person"
     },
     {
      "k": [
       "tear"
      ],
      "s": 95,
      "t": "sought it with tears"
     }
    ]
   }
  ]
 },
 "Hebrews 13": {
  "ladder": {
   "start": "MEAN",
   "target": "LOVE",
   "path": [
    "MEAN",
    "MOAN",
    "MORN",
    "MORE",
    "LORE",
    "LOVE"
   ],
   "verse": "Heb. 13:1 — Let brotherly love continue."
  },
  "climb": [
   {
    "q": "Name something Hebrews 13 tells us TO DO",
    "a": [
     {
      "k": [
       "love"
      ],
      "s": 10,
      "t": "let brotherly love continue"
     },
     {
      "k": [
       "stranger",
       "hospitality",
       "entertain"
      ],
      "s": 30,
      "t": "show hospitality to strangers"
     },
     {
      "k": [
       "prison"
      ],
      "s": 45,
      "t": "remember the prisoners"
     },
     {
      "k": [
       "content"
      ],
      "s": 50,
      "t": "be content"
     },
     {
      "k": [
       "obey",
       "leader",
       "submit"
      ],
      "s": 50,
      "t": "obey your leaders"
     },
     {
      "k": [
       "pray"
      ],
      "s": 60,
      "t": "pray for us"
     },
     {
      "k": [
       "praise"
      ],
      "s": 65,
      "t": "offer a sacrifice of praise"
     },
     {
      "k": [
       "share",
       "good"
      ],
      "s": 70,
      "t": "do good and share"
     },
     {
      "k": [
       "camp",
       "outside",
       "reproach"
      ],
      "s": 90,
      "t": "go out to Him outside the camp"
     }
    ]
   },
   {
    "q": "Name a promise or comfort from Hebrews 13",
    "a": [
     {
      "k": [
       "leave",
       "forsake"
      ],
      "s": 15,
      "t": "I will by no means leave you"
     },
     {
      "k": [
       "same",
       "yesterday",
       "forever"
      ],
      "s": 20,
      "t": "Jesus Christ is the same…"
     },
     {
      "k": [
       "helper",
       "help"
      ],
      "s": 45,
      "t": "The Lord is my Helper"
     },
     {
      "k": [
       "fear",
       "afraid"
      ],
      "s": 55,
      "t": "I will not fear"
     },
     {
      "k": [
       "shepherd"
      ],
      "s": 60,
      "t": "the great Shepherd of the sheep"
     },
     {
      "k": [
       "peace"
      ],
      "s": 65,
      "t": "the God of peace"
     },
     {
      "k": [
       "grace",
       "heart"
      ],
      "s": 75,
      "t": "hearts established by grace"
     },
     {
      "k": [
       "covenant",
       "eternal"
      ],
      "s": 90,
      "t": "eternal covenant"
     },
     {
      "k": [
       "perfect",
       "equip"
      ],
      "s": 90,
      "t": "perfect you in every good work"
     }
    ]
   },
   {
    "q": "Name a group of people mentioned in Hebrews 13",
    "a": [
     {
      "k": [
       "brother",
       "brethren"
      ],
      "s": 15,
      "t": "brothers"
     },
     {
      "k": [
       "angel"
      ],
      "s": 30,
      "t": "angels"
     },
     {
      "k": [
       "stranger"
      ],
      "s": 35,
      "t": "strangers"
     },
     {
      "k": [
       "prisoner"
      ],
      "s": 45,
      "t": "prisoners"
     },
     {
      "k": [
       "leader"
      ],
      "s": 45,
      "t": "leaders"
     },
     {
      "k": [
       "saint"
      ],
      "s": 60,
      "t": "all the saints"
     },
     {
      "k": [
       "timothy"
      ],
      "s": 80,
      "t": "our brother Timothy"
     },
     {
      "k": [
       "ill-treated",
       "mistreated",
       "suffer"
      ],
      "s": 75,
      "t": "those who are ill-treated"
     },
     {
      "k": [
       "italy"
      ],
      "s": 100,
      "t": "those from Italy"
     }
    ]
   },
   {
    "q": "Name something from the altar & sacrifice verses (vv. 10-16)",
    "a": [
     {
      "k": [
       "altar"
      ],
      "s": 25,
      "t": "altar"
     },
     {
      "k": [
       "blood"
      ],
      "s": 30,
      "t": "blood"
     },
     {
      "k": [
       "praise"
      ],
      "s": 40,
      "t": "sacrifice of praise"
     },
     {
      "k": [
       "camp"
      ],
      "s": 50,
      "t": "outside the camp"
     },
     {
      "k": [
       "gate"
      ],
      "s": 65,
      "t": "suffered outside the gate"
     },
     {
      "k": [
       "high priest",
       "priest"
      ],
      "s": 65,
      "t": "the high priest"
     },
     {
      "k": [
       "lips"
      ],
      "s": 75,
      "t": "the fruit of lips"
     },
     {
      "k": [
       "holy of holies",
       "holies"
      ],
      "s": 80,
      "t": "the Holy of Holies"
     },
     {
      "k": [
       "city"
      ],
      "s": 85,
      "t": "no abiding city here"
     },
     {
      "k": [
       "bodies",
       "burned",
       "animals"
      ],
      "s": 95,
      "t": "bodies of animals burned"
     }
    ]
   },
   {
    "q": "Name a “don’t” from Hebrews 13",
    "a": [
     {
      "k": [
       "money"
      ],
      "s": 25,
      "t": "don’t love money"
     },
     {
      "k": [
       "forget",
       "hospitality"
      ],
      "s": 30,
      "t": "don’t forget hospitality"
     },
     {
      "k": [
       "fear"
      ],
      "s": 45,
      "t": "don’t fear what man can do"
     },
     {
      "k": [
       "marriage",
       "defile"
      ],
      "s": 60,
      "t": "don’t defile marriage"
     },
     {
      "k": [
       "strange",
       "teaching",
       "carried"
      ],
      "s": 80,
      "t": "don’t be carried away by strange teachings"
     },
     {
      "k": [
       "neglect",
       "sharing"
      ],
      "s": 85,
      "t": "don’t forget doing good and sharing"
     }
    ]
   }
  ]
 },
 "James 1": {
  "ladder": {
   "start": "DEAF",
   "target": "WORD",
   "path": [
    "DEAF",
    "LEAF",
    "LOAF",
    "LOAD",
    "LORD",
    "WORD"
   ],
   "verse": "James 1:22 — Be doers of the word and not hearers only."
  },
  "climb": [
   {
    "q": "Trials! Name something James 1 connects with trials",
    "a": [
     {
      "k": [
       "joy"
      ],
      "s": 10,
      "t": "count it all joy"
     },
     {
      "k": [
       "endur",
       "patien"
      ],
      "s": 25,
      "t": "endurance"
     },
     {
      "k": [
       "crown",
       "life"
      ],
      "s": 40,
      "t": "the crown of life"
     },
     {
      "k": [
       "faith"
      ],
      "s": 40,
      "t": "the proving of your faith"
     },
     {
      "k": [
       "perfect",
       "complete",
       "mature"
      ],
      "s": 55,
      "t": "that you may be perfect and complete"
     },
     {
      "k": [
       "lacking",
       "nothing"
      ],
      "s": 70,
      "t": "lacking in nothing"
     },
     {
      "k": [
       "approved"
      ],
      "s": 75,
      "t": "having become approved"
     },
     {
      "k": [
       "blessed"
      ],
      "s": 80,
      "t": "blessed is the man who endures"
     }
    ]
   },
   {
    "q": "James loves word-pictures. Name one image from chapter 1",
    "a": [
     {
      "k": [
       "mirror"
      ],
      "s": 20,
      "t": "a mirror"
     },
     {
      "k": [
       "wave",
       "sea"
      ],
      "s": 30,
      "t": "a wave of the sea"
     },
     {
      "k": [
       "wind"
      ],
      "s": 35,
      "t": "driven by the wind"
     },
     {
      "k": [
       "flower",
       "grass"
      ],
      "s": 45,
      "t": "flower of the grass"
     },
     {
      "k": [
       "sun",
       "heat"
      ],
      "s": 55,
      "t": "the sun with burning heat"
     },
     {
      "k": [
       "bridle",
       "tongue"
      ],
      "s": 60,
      "t": "bridle the tongue"
     },
     {
      "k": [
       "light"
      ],
      "s": 65,
      "t": "the Father of lights"
     },
     {
      "k": [
       "firstfruit"
      ],
      "s": 80,
      "t": "a kind of firstfruits"
     },
     {
      "k": [
       "shadow",
       "turning"
      ],
      "s": 90,
      "t": "no shadow cast by turning"
     },
     {
      "k": [
       "birth",
       "conceive"
      ],
      "s": 95,
      "t": "lust conceives & gives birth to sin"
     }
    ]
   },
   {
    "q": "Name something God gives or is in James 1",
    "a": [
     {
      "k": [
       "wisdom"
      ],
      "s": 15,
      "t": "wisdom"
     },
     {
      "k": [
       "gift",
       "giving",
       "good"
      ],
      "s": 35,
      "t": "every good giving & perfect gift"
     },
     {
      "k": [
       "crown",
       "life"
      ],
      "s": 40,
      "t": "the crown of life"
     },
     {
      "k": [
       "generous",
       "liberal"
      ],
      "s": 50,
      "t": "gives to all generously"
     },
     {
      "k": [
       "light"
      ],
      "s": 60,
      "t": "the Father of lights"
     },
     {
      "k": [
       "truth"
      ],
      "s": 70,
      "t": "brought us forth by the word of truth"
     },
     {
      "k": [
       "reproach",
       "scold"
      ],
      "s": 85,
      "t": "without reproaching"
     },
     {
      "k": [
       "variation",
       "change"
      ],
      "s": 90,
      "t": "no variation"
     }
    ]
   },
   {
    "q": "How do you become a doer of the word? (vv. 19-27)",
    "a": [
     {
      "k": [
       "hear",
       "listen"
      ],
      "s": 15,
      "t": "swift to hear"
     },
     {
      "k": [
       "speak"
      ],
      "s": 20,
      "t": "slow to speak"
     },
     {
      "k": [
       "wrath",
       "anger",
       "angry"
      ],
      "s": 25,
      "t": "slow to wrath"
     },
     {
      "k": [
       "orphan"
      ],
      "s": 45,
      "t": "visit orphans"
     },
     {
      "k": [
       "widow"
      ],
      "s": 45,
      "t": "visit widows"
     },
     {
      "k": [
       "implant",
       "meek"
      ],
      "s": 55,
      "t": "receive the implanted word"
     },
     {
      "k": [
       "tongue",
       "bridle"
      ],
      "s": 55,
      "t": "bridle your tongue"
     },
     {
      "k": [
       "unspotted",
       "spot",
       "world"
      ],
      "s": 65,
      "t": "unspotted from the world"
     },
     {
      "k": [
       "filth",
       "malice",
       "put away"
      ],
      "s": 70,
      "t": "put away filthiness"
     },
     {
      "k": [
       "freedom",
       "law",
       "liberty"
      ],
      "s": 80,
      "t": "the perfect law of freedom"
     }
    ]
   },
   {
    "q": "Name a warning sign from James 1",
    "a": [
     {
      "k": [
       "sin"
      ],
      "s": 15,
      "t": "sin"
     },
     {
      "k": [
       "doubt"
      ],
      "s": 30,
      "t": "doubting"
     },
     {
      "k": [
       "death",
       "die"
      ],
      "s": 35,
      "t": "death"
     },
     {
      "k": [
       "lust",
       "desire"
      ],
      "s": 40,
      "t": "lust"
     },
     {
      "k": [
       "anger",
       "wrath"
      ],
      "s": 40,
      "t": "man’s wrath"
     },
     {
      "k": [
       "deceiv"
      ],
      "s": 55,
      "t": "deceiving yourselves"
     },
     {
      "k": [
       "double"
      ],
      "s": 65,
      "t": "double-souled"
     },
     {
      "k": [
       "forget"
      ],
      "s": 70,
      "t": "a forgetful hearer"
     },
     {
      "k": [
       "vain",
       "worthless"
      ],
      "s": 85,
      "t": "vain religion"
     },
     {
      "k": [
       "unstable"
      ],
      "s": 85,
      "t": "unstable in all his ways"
     }
    ]
   }
  ]
 },
 "James 2": {
  "ladder": {
   "start": "DEAD",
   "target": "WORK",
   "path": [
    "DEAD",
    "LEAD",
    "LOAD",
    "LORD",
    "WORD",
    "WORK"
   ],
   "verse": "James 2:26 — Faith apart from works is dead."
  },
  "climb": [
   {
    "q": "Name a person or character in James 2",
    "a": [
     {
      "k": [
       "abraham"
      ],
      "s": 15,
      "t": "Abraham"
     },
     {
      "k": [
       "rich"
      ],
      "s": 30,
      "t": "the rich man"
     },
     {
      "k": [
       "poor"
      ],
      "s": 30,
      "t": "the poor man"
     },
     {
      "k": [
       "rahab"
      ],
      "s": 45,
      "t": "Rahab"
     },
     {
      "k": [
       "isaac"
      ],
      "s": 50,
      "t": "Isaac"
     },
     {
      "k": [
       "demon"
      ],
      "s": 60,
      "t": "the demons"
     },
     {
      "k": [
       "sister"
      ],
      "s": 75,
      "t": "a brother or sister"
     },
     {
      "k": [
       "messenger",
       "spies",
       "spy"
      ],
      "s": 90,
      "t": "the messengers Rahab received"
     }
    ]
   },
   {
    "q": "Name something from the rich man / poor man scene (vv. 1-7)",
    "a": [
     {
      "k": [
       "partial",
       "favorit",
       "respect"
      ],
      "s": 30,
      "t": "respect of persons"
     },
     {
      "k": [
       "ring",
       "gold"
      ],
      "s": 45,
      "t": "a gold ring"
     },
     {
      "k": [
       "cloth",
       "shabby",
       "splendid"
      ],
      "s": 45,
      "t": "splendid vs. shabby clothing"
     },
     {
      "k": [
       "seat",
       "sit"
      ],
      "s": 55,
      "t": "“sit here in a good place”"
     },
     {
      "k": [
       "synagogue"
      ],
      "s": 70,
      "t": "your synagogue"
     },
     {
      "k": [
       "heir",
       "kingdom"
      ],
      "s": 70,
      "t": "heirs of the kingdom"
     },
     {
      "k": [
       "rich in faith"
      ],
      "s": 75,
      "t": "poor yet rich in faith"
     },
     {
      "k": [
       "court"
      ],
      "s": 85,
      "t": "drag you into courts"
     },
     {
      "k": [
       "footstool"
      ],
      "s": 95,
      "t": "“under my footstool”"
     }
    ]
   },
   {
    "q": "Name a law or command mentioned in James 2",
    "a": [
     {
      "k": [
       "neighbor",
       "love"
      ],
      "s": 20,
      "t": "love your neighbor as yourself"
     },
     {
      "k": [
       "royal"
      ],
      "s": 50,
      "t": "the royal law"
     },
     {
      "k": [
       "murder",
       "kill"
      ],
      "s": 55,
      "t": "do not murder"
     },
     {
      "k": [
       "adulter"
      ],
      "s": 55,
      "t": "do not commit adultery"
     },
     {
      "k": [
       "freedom",
       "liberty"
      ],
      "s": 75,
      "t": "the law of freedom"
     },
     {
      "k": [
       "one point",
       "whole law"
      ],
      "s": 85,
      "t": "stumble in one point, guilty of all"
     },
     {
      "k": [
       "mercy"
      ],
      "s": 80,
      "t": "mercy boasts against judgment"
     }
    ]
   },
   {
    "q": "Name something from James’ examples in vv. 14-26",
    "a": [
     {
      "k": [
       "work"
      ],
      "s": 10,
      "t": "works"
     },
     {
      "k": [
       "dead"
      ],
      "s": 15,
      "t": "dead faith"
     },
     {
      "k": [
       "altar",
       "offer"
      ],
      "s": 40,
      "t": "Abraham offering Isaac"
     },
     {
      "k": [
       "body",
       "spirit"
      ],
      "s": 45,
      "t": "the body apart from the spirit"
     },
     {
      "k": [
       "friend"
      ],
      "s": 55,
      "t": "friend of God"
     },
     {
      "k": [
       "shudder",
       "tremble"
      ],
      "s": 60,
      "t": "the demons shudder"
     },
     {
      "k": [
       "food",
       "naked",
       "cloth"
      ],
      "s": 60,
      "t": "lacking food & clothing"
     },
     {
      "k": [
       "warm",
       "filled"
      ],
      "s": 75,
      "t": "“be warmed and filled”"
     },
     {
      "k": [
       "god is one",
       "is one"
      ],
      "s": 85,
      "t": "God is one"
     },
     {
      "k": [
       "another way",
       "sent"
      ],
      "s": 95,
      "t": "sent them out another way"
     }
    ]
   },
   {
    "q": "Faith + works: name a word James uses to connect them",
    "a": [
     {
      "k": [
       "justif"
      ],
      "s": 35,
      "t": "justified"
     },
     {
      "k": [
       "show"
      ],
      "s": 40,
      "t": "show me your faith"
     },
     {
      "k": [
       "perfect",
       "complete"
      ],
      "s": 55,
      "t": "faith was perfected"
     },
     {
      "k": [
       "righteous",
       "account",
       "credit"
      ],
      "s": 60,
      "t": "accounted as righteousness"
     },
     {
      "k": [
       "together"
      ],
      "s": 75,
      "t": "faith worked together with his works"
     },
     {
      "k": [
       "fulfill"
      ],
      "s": 85,
      "t": "the Scripture was fulfilled"
     },
     {
      "k": [
       "profit",
       "benefit"
      ],
      "s": 90,
      "t": "what is the profit?"
     }
    ]
   }
  ]
 }
};

// Used when the assigned chapter has no pack of its own yet. Rotates by day.
const FALLBACK_LADDERS = [
  { start: "LOST", target: "LIFE", path: ["LOST","LIST","LIFT","LIFE"], verse: "John 10:10 — Christ came that we may have life, and have it abundantly." },
  { start: "SAND", target: "ROCK", path: ["SAND","RAND","RANK","RACK","ROCK"], verse: "Matt. 7:24-25 — the wise man built his house upon the rock." },
  { start: "DARK", target: "LAMP", path: ["DARK","DARE","DAME","LAME","LAMP"], verse: "Rev. 21:23 — the Lamb is the lamp of the holy city." },
  { start: "BUSY", target: "REST", path: ["BUSY","BUST","RUST","REST"], verse: "Matt. 11:28 — come to the Lord, and He will give you rest." },
  { start: "DEBT", target: "GIFT", path: ["DEBT","DEFT","LEFT","LIFT","GIFT"], verse: "Rom. 6:23 — the gift of God is eternal life in Christ Jesus our Lord." },
  { start: "LONE", target: "BODY", path: ["LONE","BONE","BODE","BODY"], verse: "1 Cor. 12:12 — many members, yet one Body." },
  { start: "COLD", target: "FIRE", path: ["COLD","FOLD","FORD","FORE","FIRE"], verse: "Acts 2:3 — tongues as of fire rested on each of them." },
  { start: "TAME", target: "SALT", path: ["TAME","SAME","SALE","SALT"], verse: "Matt. 5:13 — you are the salt of the earth." },
  { start: "MUTE", target: "SING", path: ["MUTE","MITE","SITE","SINE","SING"], verse: "Eph. 5:19 — singing and psalming with your heart to the Lord." },
  { start: "LIES", target: "TRUE", path: ["LIES","TIES","TRES","TREE","TRUE"], verse: "John 15:1 — the Lord Jesus is the true vine." },
  { start: "POOL", target: "WELL", path: ["POOL","COOL","COLL","CELL","WELL"], verse: "John 4:14 — water springing up into eternal life." },
  { start: "BAIT", target: "FISH", path: ["BAIT","BAST","FAST","FIST","FISH"], verse: "Matt. 4:19 — follow Me, and I will make you fishers of men." },
  { start: "SINK", target: "RISE", path: ["SINK","RINK","RISK","RISE"], verse: "Matt. 14:30-31 — Peter began to sink, and the Lord stretched out His hand." },
  { start: "DUST", target: "GOLD", path: ["DUST","GUST","GIST","GILT","GILD","GOLD"], verse: "Rev. 21:18 — the city was pure gold." },
  { start: "HAWK", target: "DOVE", path: ["HAWK","HANK","HONK","HONE","DONE","DOVE"], verse: "Matt. 3:16 — the Spirit of God descending like a dove." },
  { start: "DUSK", target: "DAWN", path: ["DUSK","DISK","DIRK","DARK","DARN","DAWN"], verse: "2 Pet. 1:19 — until the day dawns and the morning star rises in your hearts." },
  { start: "FOOL", target: "KING", path: ["FOOL","FOOD","FOND","FIND","KIND","KING"], verse: "Rev. 19:16 — King of kings and Lord of lords." },
  { start: "DEAD", target: "VINE", path: ["DEAD","BEAD","BEND","BIND","BINE","VINE"], verse: "John 15:5 — I am the vine; you are the branches." }
];

const FALLBACK_CLIMBS = [
  { name: "Gospels mix", prompts: [
    { q: "Name one of the twelve apostles", a: [
      { k: ["peter", "cephas"], s: 10, t: "Peter" }, { k: ["john"], s: 15, t: "John" }, { k: ["james"], s: 25, t: "James" },
      { k: ["andrew"], s: 35, t: "Andrew" }, { k: ["matthew", "levi"], s: 40, t: "Matthew" }, { k: ["thomas"], s: 45, t: "Thomas" },
      { k: ["judas", "iscariot"], s: 50, t: "Judas Iscariot" }, { k: ["philip"], s: 55, t: "Philip" }, { k: ["simon"], s: 65, t: "Simon the Cananean" },
      { k: ["bartholomew", "nathanael"], s: 80, t: "Bartholomew" }, { k: ["alphaeus"], s: 85, t: "James son of Alphaeus" },
      { k: ["thaddaeus", "thaddeus"], s: 95, t: "Thaddaeus" } ] },
    { q: "Name a miracle the Lord Jesus did", a: [
      { k: ["feed", "5000", "five thousand", "loaves", "bread", "fish"], s: 15, t: "feeding the five thousand" },
      { k: ["walk", "water"], s: 25, t: "walking on the sea" }, { k: ["wine"], s: 30, t: "water into wine" },
      { k: ["lazarus"], s: 30, t: "raising Lazarus" }, { k: ["blind"], s: 30, t: "healing the blind" },
      { k: ["storm", "calm", "wind"], s: 45, t: "calming the storm" }, { k: ["leper"], s: 55, t: "cleansing a leper" },
      { k: ["mother-in-law", "mother in law"], s: 85, t: "Peter’s mother-in-law" }, { k: ["fig"], s: 85, t: "the fig tree" },
      { k: ["malchus", "ear"], s: 90, t: "healing Malchus’ ear" }, { k: ["coin", "stater"], s: 95, t: "coin in the fish’s mouth" } ] },
    { q: "Name a parable from the Gospels", a: [
      { k: ["prodigal", "lost son"], s: 15, t: "the prodigal son" }, { k: ["samaritan"], s: 15, t: "the good Samaritan" },
      { k: ["sower", "soil"], s: 30, t: "the sower" }, { k: ["sheep"], s: 30, t: "the lost sheep" },
      { k: ["mustard"], s: 45, t: "the mustard seed" }, { k: ["virgin"], s: 55, t: "the ten virgins" },
      { k: ["talent"], s: 55, t: "the talents" }, { k: ["wedding", "feast"], s: 65, t: "the wedding feast" },
      { k: ["coin", "drachma"], s: 70, t: "the lost coin" }, { k: ["pearl", "merchant"], s: 70, t: "the pearl of great price" },
      { k: ["tares", "wheat"], s: 75, t: "the wheat and the tares" }, { k: ["widow", "judge"], s: 85, t: "the persistent widow" },
      { k: ["steward"], s: 90, t: "the unrighteous steward" }, { k: ["debtor"], s: 95, t: "the two debtors" } ] },
    { q: "Name a place from the Gospels", a: [
      { k: ["jerusalem"], s: 10, t: "Jerusalem" }, { k: ["bethlehem"], s: 15, t: "Bethlehem" }, { k: ["nazareth"], s: 20, t: "Nazareth" },
      { k: ["galilee"], s: 25, t: "Galilee" }, { k: ["jordan"], s: 35, t: "the Jordan" }, { k: ["capernaum"], s: 50, t: "Capernaum" },
      { k: ["bethany"], s: 55, t: "Bethany" }, { k: ["gethsemane"], s: 55, t: "Gethsemane" }, { k: ["golgotha", "calvary"], s: 60, t: "Golgotha" },
      { k: ["samaria"], s: 60, t: "Samaria" }, { k: ["cana"], s: 65, t: "Cana" }, { k: ["jericho"], s: 70, t: "Jericho" },
      { k: ["emmaus"], s: 85, t: "Emmaus" }, { k: ["bethsaida"], s: 90, t: "Bethsaida" }, { k: ["sychar"], s: 100, t: "Sychar" } ] },
    { q: "The Lord said, “I am the…” — finish it", a: [
      { k: ["bread"], s: 15, t: "bread of life" }, { k: ["light"], s: 15, t: "light of the world" }, { k: ["life"], s: 15, t: "the life" },
      { k: ["shepherd"], s: 25, t: "good Shepherd" }, { k: ["way"], s: 35, t: "the way" }, { k: ["truth"], s: 40, t: "the truth" },
      { k: ["vine"], s: 40, t: "the true vine" }, { k: ["resurrection"], s: 50, t: "the resurrection" }, { k: ["door", "gate"], s: 60, t: "the door" },
      { k: ["alpha", "omega"], s: 85, t: "the Alpha and the Omega" }, { k: ["morning star", "root", "offspring"], s: 100, t: "the bright morning star" } ] }
  ]},
  { name: "Acts & Paul mix", prompts: [
    { q: "Name a person in the book of Acts", a: [
      { k: ["peter"], s: 10, t: "Peter" }, { k: ["paul", "saul"], s: 10, t: "Paul (Saul)" }, { k: ["stephen"], s: 25, t: "Stephen" },
      { k: ["barnabas"], s: 30, t: "Barnabas" }, { k: ["philip"], s: 40, t: "Philip" }, { k: ["silas"], s: 45, t: "Silas" },
      { k: ["timothy"], s: 50, t: "Timothy" }, { k: ["ananias"], s: 55, t: "Ananias" }, { k: ["cornelius"], s: 55, t: "Cornelius" },
      { k: ["lydia"], s: 65, t: "Lydia" }, { k: ["priscilla", "aquila"], s: 70, t: "Priscilla & Aquila" }, { k: ["apollos"], s: 70, t: "Apollos" },
      { k: ["sapphira"], s: 70, t: "Sapphira" }, { k: ["dorcas", "tabitha"], s: 80, t: "Dorcas" }, { k: ["matthias"], s: 85, t: "Matthias" },
      { k: ["gamaliel"], s: 85, t: "Gamaliel" }, { k: ["eutychus"], s: 95, t: "Eutychus" }, { k: ["rhoda"], s: 95, t: "Rhoda" } ] },
    { q: "Name a book the apostle Paul wrote", a: [
      { k: ["romans"], s: 15, t: "Romans" }, { k: ["corinth"], s: 15, t: "Corinthians" }, { k: ["galatians"], s: 25, t: "Galatians" },
      { k: ["ephesians"], s: 25, t: "Ephesians" }, { k: ["philippians"], s: 30, t: "Philippians" }, { k: ["colossians"], s: 40, t: "Colossians" },
      { k: ["timothy"], s: 45, t: "Timothy" }, { k: ["thessalonians"], s: 50, t: "Thessalonians" }, { k: ["titus"], s: 70, t: "Titus" },
      { k: ["philemon"], s: 85, t: "Philemon" } ] },
    { q: "Name a fruit of the Spirit (Gal. 5:22-23)", a: [
      { k: ["love"], s: 10, t: "love" }, { k: ["joy"], s: 15, t: "joy" }, { k: ["peace"], s: 15, t: "peace" },
      { k: ["kind"], s: 40, t: "kindness" }, { k: ["long", "patien"], s: 45, t: "long-suffering" }, { k: ["good"], s: 50, t: "goodness" },
      { k: ["faithful"], s: 55, t: "faithfulness" }, { k: ["self", "control"], s: 60, t: "self-control" }, { k: ["meek", "gentle"], s: 65, t: "meekness" } ] },
    { q: "Name a piece of the whole armor of God (Eph. 6)", a: [
      { k: ["sword"], s: 15, t: "sword of the Spirit" }, { k: ["shield"], s: 20, t: "shield of faith" }, { k: ["helmet"], s: 25, t: "helmet of salvation" },
      { k: ["breastplate"], s: 40, t: "breastplate of righteousness" }, { k: ["belt", "girdle", "gird", "loins", "truth"], s: 55, t: "loins girded with truth" },
      { k: ["shoe", "feet", "foot", "sandal", "gospel"], s: 60, t: "feet shod with the gospel of peace" }, { k: ["pray"], s: 85, t: "by means of all prayer" } ] },
    { q: "Name a place the apostle Paul went", a: [
      { k: ["jerusalem"], s: 10, t: "Jerusalem" }, { k: ["rome"], s: 15, t: "Rome" }, { k: ["corinth"], s: 30, t: "Corinth" },
      { k: ["ephesus"], s: 30, t: "Ephesus" }, { k: ["damascus"], s: 35, t: "Damascus" }, { k: ["antioch"], s: 40, t: "Antioch" },
      { k: ["athens"], s: 45, t: "Athens" }, { k: ["philippi"], s: 50, t: "Philippi" }, { k: ["tarsus"], s: 55, t: "Tarsus" },
      { k: ["thessalonica"], s: 60, t: "Thessalonica" }, { k: ["galatia"], s: 60, t: "Galatia" }, { k: ["cyprus"], s: 65, t: "Cyprus" },
      { k: ["crete"], s: 70, t: "Crete" }, { k: ["malta", "melita"], s: 75, t: "Malta" }, { k: ["berea", "beroea"], s: 75, t: "Berea" },
      { k: ["lystra"], s: 85, t: "Lystra" }, { k: ["troas"], s: 90, t: "Troas" }, { k: ["iconium"], s: 90, t: "Iconium" }, { k: ["derbe"], s: 95, t: "Derbe" } ] }
  ]},
  { name: "Epistles & Revelation mix", prompts: [
    { q: "Name one of the seven churches in Revelation 2–3", a: [
      { k: ["ephesus"], s: 20, t: "Ephesus" }, { k: ["laodicea"], s: 25, t: "Laodicea" }, { k: ["philadelphia"], s: 30, t: "Philadelphia" },
      { k: ["smyrna"], s: 40, t: "Smyrna" }, { k: ["pergam"], s: 55, t: "Pergamos" }, { k: ["thyatira"], s: 60, t: "Thyatira" }, { k: ["sardis"], s: 65, t: "Sardis" } ] },
    { q: "Name something in the New Jerusalem (Rev. 21–22)", a: [
      { k: ["gold", "street"], s: 15, t: "street of pure gold" }, { k: ["pearl", "gate"], s: 15, t: "gates of pearl" },
      { k: ["river"], s: 30, t: "river of water of life" }, { k: ["tree"], s: 30, t: "tree of life" }, { k: ["wall"], s: 35, t: "the wall" },
      { k: ["throne"], s: 40, t: "the throne of God and of the Lamb" }, { k: ["lamb", "lamp"], s: 45, t: "the Lamb as its lamp" },
      { k: ["night"], s: 60, t: "no night there" }, { k: ["stone", "foundation"], s: 65, t: "foundations of precious stones" },
      { k: ["jasper"], s: 70, t: "jasper" }, { k: ["glass"], s: 75, t: "transparent as glass" }, { k: ["temple"], s: 85, t: "no temple in it" } ] },
    { q: "Name something the New Testament calls “living”", a: [
      { k: ["water"], s: 15, t: "living water" }, { k: ["bread"], s: 25, t: "living bread" }, { k: ["stone"], s: 35, t: "living stones" },
      { k: ["god"], s: 40, t: "the living God" }, { k: ["sacrifice"], s: 45, t: "a living sacrifice" }, { k: ["word"], s: 50, t: "the living word" },
      { k: ["hope"], s: 55, t: "a living hope" }, { k: ["way"], s: 70, t: "a new and living way" }, { k: ["creature"], s: 75, t: "living creatures" } ] },
    { q: "Name a New Testament book with only ONE chapter", a: [
      { k: ["jude"], s: 30, t: "Jude" }, { k: ["philemon"], s: 35, t: "Philemon" },
      { k: ["2 john", "second john", "ii john"], s: 50, t: "2 John" }, { k: ["3 john", "third john", "iii john"], s: 60, t: "3 John" } ] },
    { q: "Name a big theme in 1 John", a: [
      { k: ["love"], s: 10, t: "love" }, { k: ["light"], s: 20, t: "light" }, { k: ["life"], s: 25, t: "eternal life" },
      { k: ["fellowship"], s: 30, t: "fellowship" }, { k: ["father"], s: 30, t: "the Father" }, { k: ["sin"], s: 35, t: "sin" },
      { k: ["world"], s: 40, t: "not loving the world" }, { k: ["abid"], s: 50, t: "abiding" }, { k: ["confess"], s: 55, t: "confessing" },
      { k: ["word"], s: 60, t: "the Word of life" }, { k: ["anoint"], s: 70, t: "the anointing" } ] }
  ]}
];

window.GAMEBANK = {
  CHAPTERS, FALLBACK_LADDERS, FALLBACK_CLIMBS,
  // ref like "Hebrews 11" (may be null); date like "2026-11-16"
  pick(ref, date) {
    const n = Math.floor(new Date(date + "T12:00:00").getTime() / 86400000);
    const own = ref && CHAPTERS[ref];
    return {
      ref, own: !!own,
      ladder: own ? own.ladder : FALLBACK_LADDERS[n % FALLBACK_LADDERS.length],
      climb: own ? own.climb : FALLBACK_CLIMBS[n % FALLBACK_CLIMBS.length].prompts,
      climbName: own ? ref : FALLBACK_CLIMBS[n % FALLBACK_CLIMBS.length].name
    };
  }
};
