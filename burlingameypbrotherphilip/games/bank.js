// ============================================================
//  GAME CONTENT BANK
//  The games look up today's assigned reading (set on the Serving Ones site).
//  Packs are ready for every chapter from Hebrews 11 through Revelation 22, so the
//  auto-filled weekly readings always get their own games.
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
 },
 "James 3": {"ladder": {"start": "FIRE", "target": "TAME", "path": ["FIRE", "TIRE", "TIME", "TAME"], "verse": "James 3:8 — But the tongue no one among men is able to tame."}, "climb": [{"q": "Name something James compares the tongue to", "a": [{"k": ["fire"], "s": 10, "t": "a fire"}, {"k": ["bit", "bridle", "horse"], "s": 30, "t": "a horse's bit"}, {"k": ["rudder", "ship"], "s": 30, "t": "a ship's rudder"}, {"k": ["spark", "forest"], "s": 45, "t": "a little fire setting a great forest ablaze"}, {"k": ["poison"], "s": 50, "t": "full of deadly poison"}, {"k": ["member"], "s": 55, "t": "a little member"}, {"k": ["spring", "fountain"], "s": 60, "t": "a spring of sweet and bitter water"}, {"k": ["evil"], "s": 70, "t": "a restless evil"}]}, {"q": "Name a creature that mankind has tamed (v. 7)", "a": [{"k": ["beast", "animal"], "s": 20, "t": "beasts"}, {"k": ["bird"], "s": 25, "t": "birds"}, {"k": ["reptile", "snake", "creeping"], "s": 50, "t": "creeping things"}, {"k": ["sea", "fish", "marine"], "s": 55, "t": "creatures of the sea"}]}, {"q": "Name a plant or tree James uses as an example (v. 12)", "a": [{"k": ["fig"], "s": 25, "t": "a fig tree"}, {"k": ["olive"], "s": 35, "t": "olives"}, {"k": ["vine", "grape"], "s": 35, "t": "a vine and figs"}]}, {"q": "Name a quality of the wisdom from above (v. 17)", "a": [{"k": ["pure"], "s": 15, "t": "pure"}, {"k": ["peace"], "s": 20, "t": "peaceable"}, {"k": ["mercy"], "s": 35, "t": "full of mercy"}, {"k": ["fruit"], "s": 40, "t": "good fruit"}, {"k": ["gentle", "forbear"], "s": 55, "t": "forbearing"}, {"k": ["complian", "reasonable"], "s": 70, "t": "compliant"}, {"k": ["impartial"], "s": 75, "t": "impartial"}, {"k": ["hypocri"], "s": 80, "t": "without hypocrisy"}]}, {"q": "Name something that comes with jealousy and selfish ambition (vv. 14-16)", "a": [{"k": ["disorder", "confusion"], "s": 40, "t": "disorder"}, {"k": ["evil", "vile"], "s": 40, "t": "every evil thing"}, {"k": ["earth"], "s": 55, "t": "earthly"}, {"k": ["soul"], "s": 65, "t": "soulish"}, {"k": ["demon"], "s": 70, "t": "demonic"}, {"k": ["lie", "lying"], "s": 50, "t": "lying against the truth"}, {"k": ["boast"], "s": 55, "t": "boasting"}]}]},
 "James 4": {"ladder": {"start": "COLD", "target": "NEAR", "path": ["COLD", "HOLD", "HELD", "HEAD", "HEAR", "NEAR"], "verse": "James 4:8 — Draw near to God, and He will draw near to you."}, "climb": [{"q": "Name something James tells us to do toward God (vv. 7-10)", "a": [{"k": ["draw near", "near"], "s": 10, "t": "draw near to God"}, {"k": ["submit", "subject"], "s": 25, "t": "be subject to God"}, {"k": ["resist"], "s": 30, "t": "resist the devil"}, {"k": ["humble"], "s": 30, "t": "humble yourselves"}, {"k": ["cleanse", "wash", "hands"], "s": 45, "t": "cleanse your hands"}, {"k": ["purify", "heart"], "s": 45, "t": "purify your hearts"}, {"k": ["mourn", "weep"], "s": 60, "t": "mourn and weep"}, {"k": ["laugh"], "s": 75, "t": "let your laughter be turned into mourning"}]}, {"q": "Where do fights and quarrels come from? Name a cause (vv. 1-3)", "a": [{"k": ["pleasure", "lust"], "s": 30, "t": "your pleasures"}, {"k": ["desire", "covet"], "s": 35, "t": "desire"}, {"k": ["envy", "jealous"], "s": 45, "t": "envy"}, {"k": ["ask"], "s": 40, "t": "you do not ask"}, {"k": ["wrong", "amiss", "badly"], "s": 60, "t": "asking wrongly"}, {"k": ["war"], "s": 55, "t": "pleasures that war in your members"}]}, {"q": "Who or what does God oppose or resist, and who gets grace? (v. 6)", "a": [{"k": ["proud"], "s": 15, "t": "God resists the proud"}, {"k": ["humble"], "s": 15, "t": "grace to the humble"}, {"k": ["grace"], "s": 25, "t": "He gives greater grace"}]}, {"q": "Name something about planning \"today or tomorrow\" (vv. 13-16)", "a": [{"k": ["vapor", "mist"], "s": 20, "t": "a vapor"}, {"k": ["tomorrow"], "s": 25, "t": "you do not know tomorrow"}, {"k": ["city"], "s": 45, "t": "going into a city"}, {"k": ["year"], "s": 50, "t": "spending a year"}, {"k": ["trade", "business", "profit"], "s": 50, "t": "doing business and making a profit"}, {"k": ["lord wills", "will"], "s": 40, "t": "\"If the Lord wills\""}, {"k": ["boast"], "s": 65, "t": "boasting in arrogance"}]}, {"q": "Name a phrase about the world or friendship in James 4", "a": [{"k": ["friend"], "s": 20, "t": "friendship with the world"}, {"k": ["enemy"], "s": 30, "t": "an enemy of God"}, {"k": ["adulter"], "s": 50, "t": "adulteresses"}, {"k": ["spirit"], "s": 55, "t": "the spirit that He caused to dwell in us"}, {"k": ["jealous"], "s": 70, "t": "longs with jealousy"}]}]},
 "James 5": {"ladder": {"start": "SICK", "target": "HEAL", "path": ["SICK", "PICK", "PECK", "PEAK", "PEAL", "HEAL"], "verse": "James 5:16 — Therefore confess your sins to one another and pray for one another that you may be healed."}, "climb": [{"q": "Name someone mentioned in James 5", "a": [{"k": ["job"], "s": 15, "t": "Job"}, {"k": ["elijah"], "s": 20, "t": "Elijah"}, {"k": ["prophet"], "s": 40, "t": "the prophets"}, {"k": ["elder"], "s": 40, "t": "the elders"}, {"k": ["rich"], "s": 30, "t": "the rich"}, {"k": ["farmer", "husbandman"], "s": 50, "t": "the farmer"}, {"k": ["lord"], "s": 20, "t": "the Lord"}, {"k": ["worker", "laborer"], "s": 60, "t": "the workers"}]}, {"q": "Name something that happened to the rich people's wealth (vv. 1-6)", "a": [{"k": ["rot", "corrupt"], "s": 35, "t": "it is corrupted"}, {"k": ["moth"], "s": 45, "t": "moth-eaten garments"}, {"k": ["rust"], "s": 40, "t": "gold and silver rusted"}, {"k": ["wage", "withheld"], "s": 55, "t": "wages held back"}, {"k": ["fire"], "s": 60, "t": "eat your flesh like fire"}, {"k": ["slaughter"], "s": 80, "t": "a day of slaughter"}, {"k": ["luxur"], "s": 65, "t": "lived in luxury"}]}, {"q": "Name something about patience in James 5", "a": [{"k": ["farmer"], "s": 20, "t": "the farmer waiting for fruit"}, {"k": ["rain"], "s": 35, "t": "the early and late rain"}, {"k": ["job"], "s": 30, "t": "the endurance of Job"}, {"k": ["coming"], "s": 30, "t": "the coming of the Lord"}, {"k": ["heart"], "s": 50, "t": "establish your hearts"}, {"k": ["door"], "s": 60, "t": "the Judge stands before the doors"}, {"k": ["grumble", "complain"], "s": 65, "t": "do not murmur"}]}, {"q": "What should someone do when they are... (vv. 13-16)", "a": [{"k": ["pray"], "s": 10, "t": "pray"}, {"k": ["sing", "psalm"], "s": 35, "t": "sing psalms"}, {"k": ["elder"], "s": 45, "t": "call the elders"}, {"k": ["oil", "anoint"], "s": 55, "t": "anoint with oil"}, {"k": ["confess"], "s": 50, "t": "confess your sins"}]}, {"q": "Name something from Elijah's prayer (vv. 17-18)", "a": [{"k": ["rain"], "s": 15, "t": "it did not rain"}, {"k": ["pray"], "s": 20, "t": "he prayed earnestly"}, {"k": ["three", "3"], "s": 40, "t": "three years"}, {"k": ["six", "6"], "s": 55, "t": "and six months"}, {"k": ["fruit", "earth"], "s": 65, "t": "the earth produced fruit"}, {"k": ["heaven"], "s": 70, "t": "heaven gave rain"}]}]},
 "1 Peter 1": {"ladder": {"start": "GOLD", "target": "PURE", "path": ["GOLD", "HOLD", "HOLE", "POLE", "PORE", "PURE"], "verse": "1 Pet. 1:7 — The proving of your faith, much more precious than of gold which perishes."}, "climb": [{"q": "Name something Peter says we were regenerated, or born again, unto (vv. 3-5)", "a": [{"k": ["hope"], "s": 20, "t": "a living hope"}, {"k": ["inherit"], "s": 35, "t": "an inheritance"}, {"k": ["salvation", "saved"], "s": 40, "t": "salvation"}, {"k": ["resurrect"], "s": 40, "t": "through the resurrection of Jesus Christ"}, {"k": ["incorrupt"], "s": 60, "t": "incorruptible"}, {"k": ["undefiled"], "s": 70, "t": "undefiled"}, {"k": ["unfading", "fade"], "s": 75, "t": "unfading"}]}, {"q": "Name something precious in 1 Peter 1", "a": [{"k": ["blood"], "s": 15, "t": "the precious blood of Christ"}, {"k": ["faith"], "s": 25, "t": "your faith"}, {"k": ["gold"], "s": 30, "t": "gold"}, {"k": ["lamb"], "s": 40, "t": "a lamb without blemish"}, {"k": ["word"], "s": 45, "t": "the word of God"}, {"k": ["silver"], "s": 50, "t": "silver"}]}, {"q": "Name something about the word of God (vv. 23-25)", "a": [{"k": ["seed"], "s": 25, "t": "incorruptible seed"}, {"k": ["living"], "s": 35, "t": "living"}, {"k": ["abid"], "s": 45, "t": "abiding"}, {"k": ["grass"], "s": 40, "t": "all flesh is like grass"}, {"k": ["flower"], "s": 50, "t": "the flower falls off"}, {"k": ["forever"], "s": 55, "t": "remains forever"}]}, {"q": "Name a command Peter gives in 1 Peter 1", "a": [{"k": ["holy"], "s": 15, "t": "be holy"}, {"k": ["love"], "s": 25, "t": "love one another"}, {"k": ["hope"], "s": 35, "t": "set your hope"}, {"k": ["gird", "loins"], "s": 60, "t": "gird up the loins of your mind"}, {"k": ["sober"], "s": 55, "t": "be sober"}, {"k": ["fear"], "s": 60, "t": "pass the time of your sojourning in fear"}]}, {"q": "Name someone or something that searched or looked into salvation (vv. 10-12)", "a": [{"k": ["prophet"], "s": 25, "t": "the prophets"}, {"k": ["angel"], "s": 35, "t": "angels long to look into"}, {"k": ["spirit"], "s": 45, "t": "the Spirit of Christ in them"}]}]},
 "1 Peter 2": {"ladder": {"start": "MILK", "target": "FOOD", "path": ["MILK", "MILD", "MOLD", "MOOD", "FOOD"], "verse": "1 Pet. 2:2 — As newborn babes, long for the guileless milk of the word."}, "climb": [{"q": "Name something we are called in 1 Peter 2", "a": [{"k": ["stone"], "s": 20, "t": "living stones"}, {"k": ["house"], "s": 30, "t": "a spiritual house"}, {"k": ["priest"], "s": 25, "t": "a royal priesthood"}, {"k": ["race"], "s": 50, "t": "a chosen race"}, {"k": ["nation"], "s": 40, "t": "a holy nation"}, {"k": ["people"], "s": 45, "t": "a people acquired for a possession"}, {"k": ["sheep"], "s": 55, "t": "sheep going astray"}, {"k": ["sojourn", "stranger", "pilgrim"], "s": 70, "t": "sojourners and pilgrims"}]}, {"q": "Name something about the stone (vv. 4-8)", "a": [{"k": ["living"], "s": 20, "t": "a living stone"}, {"k": ["corner"], "s": 25, "t": "the cornerstone"}, {"k": ["reject"], "s": 35, "t": "rejected by men"}, {"k": ["zion"], "s": 55, "t": "laid in Zion"}, {"k": ["stumbl"], "s": 50, "t": "a stone of stumbling"}, {"k": ["precious"], "s": 50, "t": "precious"}, {"k": ["offense"], "s": 70, "t": "a rock of offense"}]}, {"q": "Name something we should put away (v. 1)", "a": [{"k": ["malice"], "s": 35, "t": "all malice"}, {"k": ["guile"], "s": 45, "t": "all guile"}, {"k": ["hypocri"], "s": 45, "t": "hypocrisies"}, {"k": ["envy"], "s": 45, "t": "envyings"}, {"k": ["slander", "evil speak"], "s": 55, "t": "all evil speakings"}]}, {"q": "Name something about Christ's suffering (vv. 21-25)", "a": [{"k": ["tree", "cross"], "s": 25, "t": "bore our sins on the tree"}, {"k": ["stripe", "wound"], "s": 35, "t": "by His bruise you were healed"}, {"k": ["example", "model"], "s": 45, "t": "leaving us a model"}, {"k": ["footstep", "step"], "s": 50, "t": "follow in His steps"}, {"k": ["shepherd"], "s": 50, "t": "Shepherd and Overseer of our souls"}, {"k": ["revil"], "s": 65, "t": "being reviled, He did not revile in return"}, {"k": ["guile"], "s": 75, "t": "no guile found in His mouth"}]}, {"q": "Name someone we should honor or submit to (vv. 13-18)", "a": [{"k": ["king"], "s": 25, "t": "the king"}, {"k": ["governor"], "s": 45, "t": "governors"}, {"k": ["master"], "s": 45, "t": "masters"}, {"k": ["all", "everyone"], "s": 35, "t": "honor all"}, {"k": ["brother"], "s": 40, "t": "love the brotherhood"}, {"k": ["god"], "s": 30, "t": "fear God"}]}]},
 "1 Peter 3": {"ladder": {"start": "WILD", "target": "MEEK", "path": ["WILD", "WELD", "WEED", "WEEK", "MEEK"], "verse": "1 Pet. 3:4 — The incorruptible adornment of a meek and quiet spirit."}, "climb": [{"q": "Name someone mentioned in 1 Peter 3", "a": [{"k": ["noah"], "s": 15, "t": "Noah"}, {"k": ["sarah"], "s": 30, "t": "Sarah"}, {"k": ["abraham"], "s": 40, "t": "Abraham"}, {"k": ["wife", "wives"], "s": 25, "t": "wives"}, {"k": ["husband"], "s": 25, "t": "husbands"}, {"k": ["angel"], "s": 55, "t": "angels"}, {"k": ["spirit"], "s": 60, "t": "spirits in prison"}]}, {"q": "Name something from the days of Noah (vv. 20-21)", "a": [{"k": ["ark"], "s": 15, "t": "the ark"}, {"k": ["water", "flood"], "s": 25, "t": "through water"}, {"k": ["eight", "8"], "s": 40, "t": "eight souls"}, {"k": ["baptism"], "s": 45, "t": "baptism"}, {"k": ["patience", "long"], "s": 65, "t": "God's longsuffering waited"}]}, {"q": "Name a kind of adornment Peter mentions (vv. 3-4)", "a": [{"k": ["gold"], "s": 30, "t": "gold"}, {"k": ["hair", "braid"], "s": 40, "t": "braiding of hair"}, {"k": ["cloth", "garment", "apparel"], "s": 45, "t": "putting on garments"}, {"k": ["meek", "quiet"], "s": 30, "t": "a meek and quiet spirit"}, {"k": ["heart"], "s": 55, "t": "the hidden man of the heart"}]}, {"q": "Name something we should be to one another (v. 8)", "a": [{"k": ["humble"], "s": 35, "t": "humble-minded"}, {"k": ["tender", "compassion"], "s": 40, "t": "tenderhearted"}, {"k": ["sympath"], "s": 45, "t": "sympathetic"}, {"k": ["brother"], "s": 45, "t": "loving the brothers"}, {"k": ["mind", "minded"], "s": 50, "t": "all of the same mind"}]}, {"q": "Name something about speaking and answering in 1 Peter 3", "a": [{"k": ["hope"], "s": 25, "t": "a reason for the hope in you"}, {"k": ["answer", "defense"], "s": 35, "t": "always ready to give an answer"}, {"k": ["meek"], "s": 50, "t": "with meekness"}, {"k": ["fear"], "s": 55, "t": "and fear"}, {"k": ["conscience"], "s": 60, "t": "a good conscience"}, {"k": ["tongue", "lips"], "s": 50, "t": "keep your tongue from evil"}, {"k": ["bless"], "s": 45, "t": "blessing instead of reviling"}]}]},
 "1 Peter 4": {"ladder": {"start": "FIRE", "target": "LOVE", "path": ["FIRE", "FIVE", "LIVE", "LOVE"], "verse": "1 Pet. 4:8 — Love covers a multitude of sins."}, "climb": [{"q": "Name something Peter says to do since the end is near (vv. 7-11)", "a": [{"k": ["pray"], "s": 15, "t": "be sober for prayers"}, {"k": ["love"], "s": 15, "t": "love one another fervently"}, {"k": ["hospital"], "s": 35, "t": "be hospitable"}, {"k": ["grumbl", "murmur"], "s": 50, "t": "without murmuring"}, {"k": ["serve", "minister"], "s": 35, "t": "minister to one another"}, {"k": ["gift"], "s": 40, "t": "as each has received a gift"}, {"k": ["steward"], "s": 60, "t": "good stewards"}, {"k": ["oracle", "speak"], "s": 60, "t": "speak as oracles of God"}]}, {"q": "Name something about suffering in 1 Peter 4", "a": [{"k": ["fire", "fiery"], "s": 20, "t": "the fiery ordeal"}, {"k": ["glory"], "s": 35, "t": "the Spirit of glory rests on you"}, {"k": ["rejoice"], "s": 35, "t": "rejoice"}, {"k": ["christian"], "s": 55, "t": "suffering as a Christian"}, {"k": ["name"], "s": 60, "t": "glorify God in this name"}, {"k": ["creator"], "s": 70, "t": "commit their souls to a faithful Creator"}]}, {"q": "Name something in the list of past behavior (v. 3)", "a": [{"k": ["drunk", "wine"], "s": 25, "t": "drunkenness"}, {"k": ["idol"], "s": 40, "t": "idolatries"}, {"k": ["lust"], "s": 35, "t": "lusts"}, {"k": ["carous", "party"], "s": 50, "t": "carousings"}, {"k": ["revel"], "s": 70, "t": "revelries"}]}, {"q": "Where does judgment begin? (v. 17)", "a": [{"k": ["house"], "s": 20, "t": "the house of God"}, {"k": ["us"], "s": 35, "t": "with us first"}]}, {"q": "Name something from vv. 1-2 about suffering in the flesh", "a": [{"k": ["mind"], "s": 30, "t": "arm yourselves with the same mind"}, {"k": ["flesh"], "s": 30, "t": "suffered in the flesh"}, {"k": ["sin"], "s": 35, "t": "has ceased from sins"}, {"k": ["will of god"], "s": 40, "t": "live for the will of God"}, {"k": ["lust"], "s": 45, "t": "no longer in the lusts of men"}]}]},
 "1 Peter 5": {"ladder": {"start": "FOLD", "target": "CARE", "path": ["FOLD", "COLD", "CORD", "CARD", "CARE"], "verse": "1 Pet. 5:7 — Casting all your anxiety on Him because it matters to Him concerning you."}, "climb": [{"q": "Name an animal or picture used in 1 Peter 5", "a": [{"k": ["lion"], "s": 10, "t": "a roaring lion"}, {"k": ["flock", "sheep"], "s": 20, "t": "the flock"}, {"k": ["shepherd"], "s": 25, "t": "the Chief Shepherd"}, {"k": ["crown"], "s": 40, "t": "the crown of glory"}, {"k": ["hand"], "s": 50, "t": "the mighty hand of God"}]}, {"q": "Name someone mentioned in 1 Peter 5", "a": [{"k": ["elder"], "s": 20, "t": "the elders"}, {"k": ["young"], "s": 35, "t": "younger ones"}, {"k": ["silvanus", "silas"], "s": 55, "t": "Silvanus"}, {"k": ["mark"], "s": 50, "t": "Mark my son"}, {"k": ["babylon"], "s": 60, "t": "she who is in Babylon"}, {"k": ["devil"], "s": 20, "t": "the devil"}]}, {"q": "How should the elders shepherd the flock? (vv. 2-3)", "a": [{"k": ["willing"], "s": 30, "t": "willingly"}, {"k": ["eager", "ready"], "s": 45, "t": "eagerly"}, {"k": ["example", "pattern"], "s": 45, "t": "becoming patterns"}, {"k": ["gain", "money"], "s": 60, "t": "not for shameful gain"}, {"k": ["lord"], "s": 60, "t": "not lording it over"}]}, {"q": "Name something we should do in 1 Peter 5", "a": [{"k": ["humble"], "s": 15, "t": "humble yourselves"}, {"k": ["cast", "anxiety"], "s": 20, "t": "cast your anxiety on Him"}, {"k": ["sober"], "s": 40, "t": "be sober"}, {"k": ["watch"], "s": 40, "t": "watch"}, {"k": ["resist"], "s": 35, "t": "resist the devil"}, {"k": ["firm", "faith"], "s": 50, "t": "firm in the faith"}, {"k": ["gird"], "s": 65, "t": "gird yourselves with humility"}]}, {"q": "Name something God will do after we suffer a little while (v. 10)", "a": [{"k": ["perfect"], "s": 45, "t": "perfect you"}, {"k": ["establish"], "s": 50, "t": "establish"}, {"k": ["strength"], "s": 55, "t": "strengthen"}, {"k": ["ground", "found"], "s": 65, "t": "ground you"}]}]},
 "2 Peter 1": {"ladder": {"start": "DARK", "target": "LAMP", "path": ["DARK", "DARE", "DAME", "DAMP", "LAMP"], "verse": "2 Pet. 1:19 — A lamp shining in a dark place, until the day dawns."}, "climb": [{"q": "Name a virtue we supply in our faith (vv. 5-7)", "a": [{"k": ["love"], "s": 10, "t": "love"}, {"k": ["virtue"], "s": 25, "t": "virtue"}, {"k": ["knowledge"], "s": 30, "t": "knowledge"}, {"k": ["self-control", "control"], "s": 40, "t": "self-control"}, {"k": ["endurance", "patience"], "s": 40, "t": "endurance"}, {"k": ["godli"], "s": 45, "t": "godliness"}, {"k": ["brother"], "s": 50, "t": "brotherly love"}]}, {"q": "Name something God has given us (vv. 3-4)", "a": [{"k": ["life"], "s": 20, "t": "all things relating to life"}, {"k": ["godli"], "s": 35, "t": "and godliness"}, {"k": ["promise"], "s": 35, "t": "precious and exceedingly great promises"}, {"k": ["nature"], "s": 30, "t": "the divine nature"}, {"k": ["glory"], "s": 50, "t": "His own glory and virtue"}]}, {"q": "Name something from the mount of transfiguration (vv. 16-18)", "a": [{"k": ["mount", "mountain"], "s": 25, "t": "the holy mountain"}, {"k": ["voice"], "s": 30, "t": "a voice from heaven"}, {"k": ["son"], "s": 25, "t": "\"This is My Son, My Beloved\""}, {"k": ["glory"], "s": 35, "t": "honor and glory"}, {"k": ["eyewitness", "saw"], "s": 45, "t": "eyewitnesses of His majesty"}, {"k": ["majest"], "s": 50, "t": "His majesty"}]}, {"q": "Name a picture of light in 2 Peter 1", "a": [{"k": ["lamp"], "s": 15, "t": "a lamp"}, {"k": ["star"], "s": 25, "t": "the morning star"}, {"k": ["dawn", "day"], "s": 30, "t": "until the day dawns"}, {"k": ["dark"], "s": 35, "t": "a dark place"}, {"k": ["heart"], "s": 50, "t": "rises in your hearts"}]}, {"q": "Name something about prophecy (vv. 20-21)", "a": [{"k": ["spirit"], "s": 25, "t": "moved by the Holy Spirit"}, {"k": ["men", "man"], "s": 40, "t": "men spoke from God"}, {"k": ["will"], "s": 50, "t": "not by the will of man"}, {"k": ["interpret"], "s": 60, "t": "not of one's own interpretation"}]}]},
 "2 Peter 2": {"ladder": {"start": "DOGS", "target": "WASH", "path": ["DOGS", "LOGS", "LOSS", "LASS", "LASH", "WASH"], "verse": "2 Pet. 2:22 — The washed sow to wallowing in the mud."}, "climb": [{"q": "Name someone from the Old Testament in 2 Peter 2", "a": [{"k": ["noah"], "s": 15, "t": "Noah"}, {"k": ["lot"], "s": 25, "t": "Lot"}, {"k": ["balaam"], "s": 35, "t": "Balaam"}, {"k": ["donkey"], "s": 50, "t": "a mute donkey"}, {"k": ["angel"], "s": 45, "t": "the angels who sinned"}, {"k": ["sodom"], "s": 30, "t": "Sodom"}, {"k": ["gomorrah"], "s": 40, "t": "Gomorrah"}]}, {"q": "Name an animal mentioned in 2 Peter 2", "a": [{"k": ["dog"], "s": 20, "t": "a dog"}, {"k": ["sow", "pig"], "s": 30, "t": "a sow"}, {"k": ["donkey", "ass"], "s": 35, "t": "a donkey"}, {"k": ["beast", "animal"], "s": 55, "t": "unreasoning animals"}]}, {"q": "Name something about the false teachers (vv. 1-3)", "a": [{"k": ["heresy", "heresies"], "s": 30, "t": "destructive heresies"}, {"k": ["deny", "denying"], "s": 40, "t": "denying the Master"}, {"k": ["greed", "covet"], "s": 40, "t": "covetousness"}, {"k": ["word", "made-up"], "s": 60, "t": "fabricated words"}, {"k": ["destruct"], "s": 45, "t": "swift destruction"}]}, {"q": "Name something they are compared to (v. 17)", "a": [{"k": ["spring", "well", "water"], "s": 40, "t": "springs without water"}, {"k": ["mist", "cloud"], "s": 45, "t": "mists driven by a storm"}, {"k": ["dark"], "s": 55, "t": "the blackness of darkness"}]}, {"q": "Who does the Lord know how to deliver? (v. 9)", "a": [{"k": ["godly"], "s": 25, "t": "the godly"}, {"k": ["lot"], "s": 40, "t": "righteous Lot"}, {"k": ["trial", "temptation"], "s": 55, "t": "out of trial"}]}]},
 "2 Peter 3": {"ladder": {"start": "SLOW", "target": "SOON", "path": ["SLOW", "SLOT", "SOOT", "SOON"], "verse": "2 Pet. 3:9 — The Lord does not delay regarding the promise, as some count delay."}, "climb": [{"q": "Name something about \"one day\" in 2 Peter 3", "a": [{"k": ["thousand"], "s": 10, "t": "a thousand years"}, {"k": ["day"], "s": 20, "t": "one day"}, {"k": ["lord"], "s": 35, "t": "with the Lord"}]}, {"q": "Name something that will happen on the day of the Lord (vv. 10-12)", "a": [{"k": ["thief"], "s": 20, "t": "come as a thief"}, {"k": ["heaven"], "s": 30, "t": "the heavens will pass away"}, {"k": ["fire"], "s": 30, "t": "burned with intense heat"}, {"k": ["element"], "s": 50, "t": "the elements will melt"}, {"k": ["noise"], "s": 60, "t": "with a rushing noise"}, {"k": ["earth"], "s": 45, "t": "the earth and the works in it"}]}, {"q": "What do we wait for? (v. 13)", "a": [{"k": ["new heaven"], "s": 25, "t": "new heavens"}, {"k": ["new earth"], "s": 25, "t": "and a new earth"}, {"k": ["righteous"], "s": 40, "t": "in which righteousness dwells"}, {"k": ["promise"], "s": 45, "t": "according to His promise"}]}, {"q": "Name something about the mockers (vv. 3-7)", "a": [{"k": ["mock"], "s": 20, "t": "mockers"}, {"k": ["lust"], "s": 35, "t": "walking according to their own lusts"}, {"k": ["coming"], "s": 35, "t": "\"Where is the promise of His coming?\""}, {"k": ["father"], "s": 60, "t": "since the fathers fell asleep"}, {"k": ["water", "flood"], "s": 50, "t": "the world was flooded with water"}]}, {"q": "Name someone or something mentioned near the end (vv. 14-18)", "a": [{"k": ["paul"], "s": 20, "t": "our beloved brother Paul"}, {"k": ["grow", "grace"], "s": 25, "t": "grow in grace"}, {"k": ["wisdom"], "s": 50, "t": "the wisdom given to him"}, {"k": ["scripture"], "s": 50, "t": "the rest of the Scriptures"}, {"k": ["spot", "blemish"], "s": 55, "t": "without spot and blemish"}, {"k": ["peace"], "s": 45, "t": "in peace"}]}]},
 "1 John 1": {"ladder": {"start": "WORD", "target": "LIFE", "path": ["WORD", "WORE", "WIRE", "WIFE", "LIFE"], "verse": "1 John 1:2 — And the life was manifested, and we have seen and testify and report to you the eternal life."}, "climb": [{"q": "Name a way John says they experienced the Word of life (v. 1)", "a": [{"k": ["heard", "hear"], "s": 15, "t": "heard"}, {"k": ["seen", "saw"], "s": 15, "t": "seen with our eyes"}, {"k": ["beheld", "behold"], "s": 40, "t": "beheld"}, {"k": ["touch", "handle"], "s": 35, "t": "our hands handled"}]}, {"q": "Name something about God in 1 John 1", "a": [{"k": ["light"], "s": 10, "t": "God is light"}, {"k": ["dark"], "s": 25, "t": "in Him is no darkness"}, {"k": ["faithful"], "s": 40, "t": "He is faithful"}, {"k": ["righteous"], "s": 45, "t": "and righteous"}, {"k": ["father"], "s": 35, "t": "the Father"}, {"k": ["son"], "s": 35, "t": "His Son Jesus Christ"}]}, {"q": "What is our fellowship with? (v. 3)", "a": [{"k": ["father"], "s": 20, "t": "with the Father"}, {"k": ["son", "jesus", "christ"], "s": 25, "t": "with His Son Jesus Christ"}, {"k": ["us", "one another"], "s": 40, "t": "with one another"}]}, {"q": "Name something about sin in 1 John 1", "a": [{"k": ["confess"], "s": 15, "t": "if we confess our sins"}, {"k": ["forgive"], "s": 25, "t": "He forgives us"}, {"k": ["cleanse"], "s": 30, "t": "cleanses us"}, {"k": ["blood"], "s": 30, "t": "the blood of Jesus"}, {"k": ["deceive"], "s": 50, "t": "we deceive ourselves"}, {"k": ["liar"], "s": 60, "t": "we make Him a liar"}, {"k": ["unrighteous"], "s": 60, "t": "from all unrighteousness"}]}, {"q": "Name a reason John writes, or a result of fellowship", "a": [{"k": ["joy"], "s": 20, "t": "that our joy may be made full"}, {"k": ["fellowship"], "s": 20, "t": "fellowship with us"}, {"k": ["full"], "s": 45, "t": "made full"}, {"k": ["walk"], "s": 40, "t": "walk in the light"}]}]},
 "1 John 2": {"ladder": {"start": "LUST", "target": "LOVE", "path": ["LUST", "LOST", "LOSE", "LOVE"], "verse": "1 John 2:15 — Do not love the world nor the things in the world."}, "climb": [{"q": "Name something of the world (v. 16)", "a": [{"k": ["flesh"], "s": 25, "t": "the lust of the flesh"}, {"k": ["eye"], "s": 30, "t": "the lust of the eyes"}, {"k": ["pride", "vain"], "s": 35, "t": "the vainglory of life"}, {"k": ["lust"], "s": 20, "t": "lusts"}]}, {"q": "Name a group John writes to (vv. 12-14)", "a": [{"k": ["child"], "s": 15, "t": "little children"}, {"k": ["young"], "s": 25, "t": "young men"}, {"k": ["father"], "s": 30, "t": "fathers"}]}, {"q": "Name a title or picture of Christ in 1 John 2", "a": [{"k": ["advocate"], "s": 30, "t": "an Advocate with the Father"}, {"k": ["righteous"], "s": 35, "t": "Jesus Christ the Righteous"}, {"k": ["propitiat"], "s": 50, "t": "the propitiation for our sins"}, {"k": ["christ"], "s": 20, "t": "the Christ"}, {"k": ["son"], "s": 25, "t": "the Son"}]}, {"q": "Name something about the anointing (vv. 20, 27)", "a": [{"k": ["teach"], "s": 30, "t": "teaches you concerning all things"}, {"k": ["abid"], "s": 35, "t": "abides in you"}, {"k": ["true"], "s": 50, "t": "is true and is not a lie"}, {"k": ["holy"], "s": 50, "t": "from the Holy One"}, {"k": ["know"], "s": 40, "t": "you know all things"}]}, {"q": "Name something else in 1 John 2", "a": [{"k": ["antichrist"], "s": 20, "t": "antichrists"}, {"k": ["light"], "s": 25, "t": "the true light is already shining"}, {"k": ["dark"], "s": 30, "t": "the darkness is passing"}, {"k": ["hour"], "s": 50, "t": "it is the last hour"}, {"k": ["command"], "s": 35, "t": "a new commandment"}, {"k": ["will of god"], "s": 45, "t": "he who does the will of God abides forever"}, {"k": ["brother"], "s": 35, "t": "loving his brother"}]}]},
 "1 John 3": {"ladder": {"start": "DEAD", "target": "LIFE", "path": ["DEAD", "LEAD", "LEND", "LENT", "LEFT", "LIFT", "LIFE"], "verse": "1 John 3:14 — We know that we have passed out of death into life because we love the brothers."}, "climb": [{"q": "Name something about being children of God (vv. 1-3)", "a": [{"k": ["love"], "s": 15, "t": "what manner of love"}, {"k": ["child"], "s": 15, "t": "children of God"}, {"k": ["like him"], "s": 35, "t": "we will be like Him"}, {"k": ["see him", "see"], "s": 40, "t": "we will see Him even as He is"}, {"k": ["pure"], "s": 45, "t": "purifies himself"}, {"k": ["hope"], "s": 45, "t": "everyone who has this hope"}]}, {"q": "Name someone or something mentioned in 1 John 3", "a": [{"k": ["cain"], "s": 20, "t": "Cain"}, {"k": ["abel"], "s": 35, "t": "his brother"}, {"k": ["devil"], "s": 25, "t": "the devil"}, {"k": ["world"], "s": 35, "t": "the world hates you"}, {"k": ["son"], "s": 30, "t": "the Son of God"}, {"k": ["spirit"], "s": 45, "t": "the Spirit He gave us"}]}, {"q": "Name something about love in 1 John 3", "a": [{"k": ["life"], "s": 25, "t": "He laid down His life for us"}, {"k": ["deed", "action"], "s": 35, "t": "in deed and truthfulness"}, {"k": ["word", "tongue"], "s": 40, "t": "not in word or tongue"}, {"k": ["brother"], "s": 30, "t": "love the brothers"}, {"k": ["need"], "s": 55, "t": "sees his brother having need"}, {"k": ["heart"], "s": 60, "t": "God is greater than our heart"}]}, {"q": "What did the Son of God come to do? (vv. 5, 8)", "a": [{"k": ["destroy"], "s": 25, "t": "destroy the works of the devil"}, {"k": ["sin"], "s": 25, "t": "take away sins"}]}, {"q": "Name something that is \"of God\" in 1 John 3", "a": [{"k": ["seed"], "s": 35, "t": "His seed abides in him"}, {"k": ["righteous"], "s": 40, "t": "practicing righteousness"}, {"k": ["command"], "s": 45, "t": "keeping His commandments"}]}]},
 "1 John 4": {"ladder": {"start": "FEAR", "target": "CAST", "path": ["FEAR", "FEAT", "FEST", "FAST", "CAST"], "verse": "1 John 4:18 — There is no fear in love, but perfect love casts out fear."}, "climb": [{"q": "Finish the thought: \"God is...\"", "a": [{"k": ["love"], "s": 10, "t": "love"}, {"k": ["greater"], "s": 50, "t": "greater than he who is in the world"}]}, {"q": "Name something about how God showed His love (vv. 9-10)", "a": [{"k": ["son"], "s": 15, "t": "sent His only begotten Son"}, {"k": ["life"], "s": 30, "t": "that we might have life"}, {"k": ["propitiat"], "s": 45, "t": "a propitiation for our sins"}, {"k": ["first"], "s": 40, "t": "He first loved us"}]}, {"q": "How do we test the spirits? (vv. 1-6)", "a": [{"k": ["confess"], "s": 30, "t": "confesses Jesus Christ"}, {"k": ["flesh"], "s": 45, "t": "come in the flesh"}, {"k": ["antichrist"], "s": 40, "t": "the spirit of the antichrist"}, {"k": ["prophet"], "s": 40, "t": "false prophets"}, {"k": ["world"], "s": 50, "t": "they are of the world"}]}, {"q": "Name something that comes with God's love (vv. 12-19)", "a": [{"k": ["abid"], "s": 25, "t": "we abide in Him"}, {"k": ["fear"], "s": 25, "t": "no fear"}, {"k": ["perfect"], "s": 30, "t": "perfected love"}, {"k": ["bold"], "s": 45, "t": "boldness in the day of judgment"}, {"k": ["spirit"], "s": 45, "t": "He has given us of His Spirit"}, {"k": ["punish"], "s": 65, "t": "fear has punishment"}]}, {"q": "Name something about seeing God or loving a brother (vv. 12, 20-21)", "a": [{"k": ["no one", "seen"], "s": 30, "t": "no one has ever beheld God"}, {"k": ["brother"], "s": 20, "t": "love his brother"}, {"k": ["liar"], "s": 40, "t": "he is a liar"}, {"k": ["command"], "s": 50, "t": "this commandment we have from Him"}]}]},
 "1 John 5": {"ladder": {"start": "BORN", "target": "WINS", "path": ["BORN", "BORE", "WORE", "WIRE", "WINE", "WINS"], "verse": "1 John 5:4 — For everything that has been begotten of God overcomes the world."}, "climb": [{"q": "Name one of the three that testify (vv. 6-8)", "a": [{"k": ["spirit"], "s": 15, "t": "the Spirit"}, {"k": ["water"], "s": 20, "t": "the water"}, {"k": ["blood"], "s": 20, "t": "the blood"}]}, {"q": "What overcomes the world? (vv. 4-5)", "a": [{"k": ["faith"], "s": 15, "t": "our faith"}, {"k": ["born", "begotten"], "s": 30, "t": "everything begotten of God"}, {"k": ["believ"], "s": 35, "t": "he who believes Jesus is the Son of God"}]}, {"q": "Name something about eternal life in 1 John 5", "a": [{"k": ["son"], "s": 15, "t": "this life is in His Son"}, {"k": ["life"], "s": 20, "t": "he who has the Son has the life"}, {"k": ["know"], "s": 35, "t": "that you may know"}, {"k": ["testimon", "witness"], "s": 40, "t": "the testimony of God"}, {"k": ["name"], "s": 55, "t": "believe into the name"}]}, {"q": "Name something about prayer in 1 John 5", "a": [{"k": ["ask"], "s": 20, "t": "whatever we ask"}, {"k": ["will"], "s": 30, "t": "according to His will"}, {"k": ["hear"], "s": 30, "t": "He hears us"}, {"k": ["bold", "confiden"], "s": 50, "t": "the boldness we have"}, {"k": ["brother"], "s": 50, "t": "ask for a brother sinning"}]}, {"q": "Name something from the last verses (vv. 18-21)", "a": [{"k": ["idol"], "s": 25, "t": "guard yourselves from idols"}, {"k": ["true", "real"], "s": 35, "t": "the true God"}, {"k": ["evil"], "s": 40, "t": "the whole world lies in the evil one"}, {"k": ["understand"], "s": 55, "t": "He has given us understanding"}, {"k": ["command"], "s": 45, "t": "His commandments are not heavy"}]}]},
 "2 John 1": {"ladder": {"start": "WALK", "target": "FULL", "path": ["WALK", "WALL", "FALL", "FULL"], "verse": "2 John 6 — And this is love, that we walk according to His commandments."}, "climb": [{"q": "Who is 2 John written to and from?", "a": [{"k": ["lady"], "s": 20, "t": "the chosen lady"}, {"k": ["child"], "s": 30, "t": "her children"}, {"k": ["elder"], "s": 30, "t": "the elder"}, {"k": ["sister"], "s": 60, "t": "your chosen sister"}]}, {"q": "Name something John rejoiced or asks about", "a": [{"k": ["truth"], "s": 10, "t": "walking in truth"}, {"k": ["love"], "s": 15, "t": "love one another"}, {"k": ["command"], "s": 30, "t": "the commandment from the beginning"}, {"k": ["joy"], "s": 45, "t": "that our joy may be full"}]}, {"q": "Name something about deceivers (vv. 7-11)", "a": [{"k": ["deceiver"], "s": 20, "t": "many deceivers"}, {"k": ["antichrist"], "s": 30, "t": "the antichrist"}, {"k": ["flesh"], "s": 40, "t": "not confessing Jesus Christ coming in the flesh"}, {"k": ["house", "home"], "s": 45, "t": "do not receive him into your house"}, {"k": ["greet"], "s": 55, "t": "do not greet him"}, {"k": ["reward"], "s": 60, "t": "receive a full reward"}]}, {"q": "Name something that comes with us (v. 3)", "a": [{"k": ["grace"], "s": 20, "t": "grace"}, {"k": ["mercy"], "s": 25, "t": "mercy"}, {"k": ["peace"], "s": 25, "t": "peace"}, {"k": ["truth"], "s": 40, "t": "in truth"}, {"k": ["love"], "s": 40, "t": "and love"}]}, {"q": "Name something about John's plan at the end (v. 12)", "a": [{"k": ["paper"], "s": 35, "t": "paper"}, {"k": ["ink"], "s": 35, "t": "ink"}, {"k": ["face"], "s": 30, "t": "face to face"}]}]},
 "3 John 1": {"ladder": {"start": "SICK", "target": "WELL", "path": ["SICK", "SILK", "SILL", "SELL", "WELL"], "verse": "3 John 2 — I wish that you may prosper and be in health, even as your soul prospers."}, "climb": [{"q": "Name someone in 3 John", "a": [{"k": ["gaius"], "s": 15, "t": "Gaius"}, {"k": ["diotrephes"], "s": 25, "t": "Diotrephes"}, {"k": ["demetrius"], "s": 35, "t": "Demetrius"}, {"k": ["elder"], "s": 30, "t": "the elder"}, {"k": ["brother"], "s": 45, "t": "the brothers"}, {"k": ["friend"], "s": 55, "t": "the friends"}]}, {"q": "Name something John prays for Gaius (v. 2)", "a": [{"k": ["prosper"], "s": 25, "t": "prosper"}, {"k": ["health"], "s": 25, "t": "be in health"}, {"k": ["soul"], "s": 35, "t": "as your soul prospers"}]}, {"q": "Name something Diotrephes did wrong (vv. 9-10)", "a": [{"k": ["first"], "s": 25, "t": "loves to be first"}, {"k": ["receive"], "s": 35, "t": "does not receive us"}, {"k": ["word", "babbl"], "s": 50, "t": "babbling with evil words"}, {"k": ["cast", "church"], "s": 45, "t": "casts them out of the church"}]}, {"q": "Name something good in 3 John", "a": [{"k": ["truth"], "s": 15, "t": "walking in truth"}, {"k": ["joy"], "s": 35, "t": "no greater joy"}, {"k": ["faithful"], "s": 40, "t": "you do faithfully"}, {"k": ["worthy"], "s": 55, "t": "in a way worthy of God"}, {"k": ["good"], "s": 35, "t": "imitate what is good"}, {"k": ["name"], "s": 60, "t": "for the sake of the Name"}]}, {"q": "Name something at the end of the letter", "a": [{"k": ["face"], "s": 25, "t": "speak face to face"}, {"k": ["peace"], "s": 30, "t": "peace be to you"}, {"k": ["ink", "pen"], "s": 40, "t": "pen and ink"}, {"k": ["greet"], "s": 50, "t": "greet the friends by name"}]}]},
 "Jude 1": {"ladder": {"start": "FALL", "target": "SAFE", "path": ["FALL", "TALL", "TALE", "SALE", "SAFE"], "verse": "Jude 24 — Him who is able to guard you from stumbling."}, "climb": [{"q": "Name someone mentioned in Jude", "a": [{"k": ["michael"], "s": 20, "t": "Michael the archangel"}, {"k": ["moses"], "s": 25, "t": "Moses"}, {"k": ["enoch"], "s": 30, "t": "Enoch"}, {"k": ["cain"], "s": 30, "t": "Cain"}, {"k": ["balaam"], "s": 35, "t": "Balaam"}, {"k": ["korah"], "s": 45, "t": "Korah"}, {"k": ["adam"], "s": 55, "t": "seventh from Adam"}, {"k": ["james"], "s": 50, "t": "James"}]}, {"q": "Name a place or group mentioned in Jude", "a": [{"k": ["sodom"], "s": 25, "t": "Sodom"}, {"k": ["gomorrah"], "s": 35, "t": "Gomorrah"}, {"k": ["egypt"], "s": 40, "t": "out of the land of Egypt"}, {"k": ["angel"], "s": 35, "t": "angels"}]}, {"q": "What are these men compared to? (vv. 12-13)", "a": [{"k": ["cloud"], "s": 30, "t": "waterless clouds"}, {"k": ["tree"], "s": 40, "t": "autumn trees without fruit"}, {"k": ["wave"], "s": 45, "t": "wild waves of the sea"}, {"k": ["star"], "s": 50, "t": "wandering stars"}, {"k": ["reef", "rock", "spot"], "s": 65, "t": "hidden reefs"}]}, {"q": "Name something Jude tells us to do (vv. 20-23)", "a": [{"k": ["build"], "s": 30, "t": "build yourselves up"}, {"k": ["faith"], "s": 20, "t": "your most holy faith"}, {"k": ["pray"], "s": 25, "t": "praying in the Holy Spirit"}, {"k": ["love"], "s": 25, "t": "keep yourselves in the love of God"}, {"k": ["mercy"], "s": 40, "t": "await the mercy of our Lord"}, {"k": ["fire"], "s": 60, "t": "snatching them out of the fire"}]}, {"q": "Name something in the closing praise (vv. 24-25)", "a": [{"k": ["glory"], "s": 20, "t": "glory"}, {"k": ["majest"], "s": 40, "t": "majesty"}, {"k": ["might"], "s": 40, "t": "might"}, {"k": ["author", "power"], "s": 45, "t": "authority"}, {"k": ["joy"], "s": 45, "t": "with exultation"}, {"k": ["blameless"], "s": 50, "t": "without blemish"}]}]},
 "Revelation 1": {"ladder": {"start": "GOLD", "target": "LAMP", "path": ["GOLD", "SOLD", "SOLE", "SALE", "SAME", "LAME", "LAMP"], "verse": "Rev. 1:20 — The seven lampstands are the seven churches."}, "climb": [{"q": "Name something John saw about the Son of Man (vv. 13-16)", "a": [{"k": ["lampstand"], "s": 15, "t": "golden lampstands"}, {"k": ["star"], "s": 20, "t": "seven stars"}, {"k": ["sword"], "s": 25, "t": "a sharp two-edged sword"}, {"k": ["eye", "flame"], "s": 30, "t": "eyes like a flame of fire"}, {"k": ["hair", "white", "wool"], "s": 35, "t": "hair white like wool"}, {"k": ["feet", "bronze"], "s": 40, "t": "feet like shining bronze"}, {"k": ["sun"], "s": 45, "t": "face like the sun"}, {"k": ["girdle", "belt", "sash"], "s": 55, "t": "a golden girdle"}, {"k": ["voice", "water"], "s": 50, "t": "voice like many waters"}]}, {"q": "Name a title of the Lord in Revelation 1", "a": [{"k": ["alpha"], "s": 20, "t": "the Alpha and the Omega"}, {"k": ["omega"], "s": 20, "t": "the Alpha and the Omega"}, {"k": ["first"], "s": 30, "t": "the First and the Last"}, {"k": ["almighty"], "s": 40, "t": "the Almighty"}, {"k": ["witness"], "s": 50, "t": "the faithful Witness"}, {"k": ["firstborn"], "s": 55, "t": "the Firstborn of the dead"}, {"k": ["ruler", "king"], "s": 55, "t": "the Ruler of the kings of the earth"}, {"k": ["living"], "s": 50, "t": "the living One"}]}, {"q": "Name one of the seven churches (v. 11)", "a": [{"k": ["ephesus"], "s": 10, "t": "Ephesus"}, {"k": ["smyrna"], "s": 20, "t": "Smyrna"}, {"k": ["pergamos", "pergamum"], "s": 30, "t": "Pergamos"}, {"k": ["thyatira"], "s": 35, "t": "Thyatira"}, {"k": ["sardis"], "s": 35, "t": "Sardis"}, {"k": ["philadelphia"], "s": 25, "t": "Philadelphia"}, {"k": ["laodicea"], "s": 25, "t": "Laodicea"}]}, {"q": "Where was John, and what happened? (vv. 9-10)", "a": [{"k": ["patmos"], "s": 15, "t": "the island of Patmos"}, {"k": ["lords day", "day"], "s": 30, "t": "the Lord's Day"}, {"k": ["spirit"], "s": 30, "t": "in spirit"}, {"k": ["trumpet"], "s": 40, "t": "a loud voice like a trumpet"}]}, {"q": "Name something the Lord holds or has (vv. 16-18)", "a": [{"k": ["key"], "s": 25, "t": "the keys of death and Hades"}, {"k": ["star"], "s": 20, "t": "seven stars in His right hand"}, {"k": ["death"], "s": 35, "t": "death"}, {"k": ["hades"], "s": 50, "t": "Hades"}]}]},
 "Revelation 2": {"ladder": {"start": "LEFT", "target": "LOVE", "path": ["LEFT", "LIFT", "LIFE", "LIVE", "LOVE"], "verse": "Rev. 2:4 — You have left your first love."}, "climb": [{"q": "Name one of the four churches in Revelation 2", "a": [{"k": ["ephesus"], "s": 10, "t": "Ephesus"}, {"k": ["smyrna"], "s": 20, "t": "Smyrna"}, {"k": ["pergamos", "pergamum"], "s": 30, "t": "Pergamos"}, {"k": ["thyatira"], "s": 35, "t": "Thyatira"}]}, {"q": "Name a promise to the one who overcomes in Revelation 2", "a": [{"k": ["tree", "life"], "s": 15, "t": "eat of the tree of life"}, {"k": ["crown"], "s": 25, "t": "the crown of life"}, {"k": ["manna"], "s": 35, "t": "the hidden manna"}, {"k": ["stone"], "s": 45, "t": "a white stone"}, {"k": ["name"], "s": 55, "t": "a new name"}, {"k": ["author", "nation"], "s": 55, "t": "authority over the nations"}, {"k": ["star"], "s": 50, "t": "the morning star"}, {"k": ["death"], "s": 55, "t": "not hurt by the second death"}]}, {"q": "Name a person or teaching rebuked in Revelation 2", "a": [{"k": ["jezebel"], "s": 20, "t": "Jezebel"}, {"k": ["balaam"], "s": 30, "t": "Balaam"}, {"k": ["nicolait"], "s": 35, "t": "the Nicolaitans"}, {"k": ["balak"], "s": 60, "t": "Balak"}, {"k": ["satan"], "s": 35, "t": "Satan's throne"}]}, {"q": "Name something the Lord commends in Revelation 2", "a": [{"k": ["work"], "s": 20, "t": "your works"}, {"k": ["endur", "patience"], "s": 30, "t": "endurance"}, {"k": ["labor"], "s": 40, "t": "labor"}, {"k": ["love"], "s": 25, "t": "love"}, {"k": ["faith"], "s": 35, "t": "faith"}, {"k": ["service", "serve"], "s": 50, "t": "service"}, {"k": ["poor"], "s": 50, "t": "your poverty (but you are rich)"}]}, {"q": "Name something from the letter to Smyrna (vv. 8-11)", "a": [{"k": ["death", "unto death"], "s": 30, "t": "be faithful unto death"}, {"k": ["prison"], "s": 35, "t": "throw some of you into prison"}, {"k": ["ten", "10"], "s": 50, "t": "tribulation ten days"}, {"k": ["rich"], "s": 45, "t": "but you are rich"}, {"k": ["crown"], "s": 25, "t": "the crown of life"}]}]},
 "Revelation 3": {"ladder": {"start": "COLD", "target": "WARM", "path": ["COLD", "CORD", "WORD", "WARD", "WARM"], "verse": "Rev. 3:16 — Because you are lukewarm and neither hot nor cold, I am about to spew you out of My mouth."}, "climb": [{"q": "Name one of the three churches in Revelation 3", "a": [{"k": ["sardis"], "s": 20, "t": "Sardis"}, {"k": ["philadelphia"], "s": 15, "t": "Philadelphia"}, {"k": ["laodicea"], "s": 15, "t": "Laodicea"}]}, {"q": "Name something the Lord stands at or holds in Revelation 3", "a": [{"k": ["door"], "s": 10, "t": "the door"}, {"k": ["key"], "s": 30, "t": "the key of David"}, {"k": ["star"], "s": 45, "t": "seven stars"}, {"k": ["spirit"], "s": 45, "t": "the seven Spirits of God"}]}, {"q": "Name a promise to the overcomer in Revelation 3", "a": [{"k": ["white"], "s": 20, "t": "clothed in white garments"}, {"k": ["pillar"], "s": 30, "t": "a pillar in the temple of My God"}, {"k": ["throne"], "s": 25, "t": "sit with Me on My throne"}, {"k": ["name"], "s": 35, "t": "My new name"}, {"k": ["book of life", "book"], "s": 40, "t": "not erased from the book of life"}, {"k": ["jerusalem"], "s": 50, "t": "the name of the New Jerusalem"}, {"k": ["dine", "eat", "supper"], "s": 45, "t": "dine with him"}]}, {"q": "Name something the Lord counsels Laodicea to buy (v. 18)", "a": [{"k": ["gold"], "s": 20, "t": "gold refined by fire"}, {"k": ["garment", "white"], "s": 30, "t": "white garments"}, {"k": ["eye", "salve"], "s": 40, "t": "eyesalve"}]}, {"q": "Name a word that describes Laodicea (vv. 15-17)", "a": [{"k": ["lukewarm"], "s": 15, "t": "lukewarm"}, {"k": ["rich", "wealth"], "s": 25, "t": "\"I am wealthy\""}, {"k": ["poor"], "s": 40, "t": "poor"}, {"k": ["blind"], "s": 40, "t": "blind"}, {"k": ["naked"], "s": 40, "t": "naked"}, {"k": ["wretch"], "s": 55, "t": "wretched"}, {"k": ["miser"], "s": 60, "t": "miserable"}]}]},
 "Revelation 4": {"ladder": {"start": "SEAT", "target": "HOLY", "path": ["SEAT", "HEAT", "HEAD", "HELD", "HOLD", "HOLY"], "verse": "Rev. 4:8 — Holy, holy, holy, Lord God the Almighty, who was and who is and who is coming."}, "climb": [{"q": "Name something John saw around the throne", "a": [{"k": ["elder"], "s": 20, "t": "twenty-four elders"}, {"k": ["rainbow"], "s": 25, "t": "a rainbow"}, {"k": ["creature"], "s": 25, "t": "four living creatures"}, {"k": ["lamp"], "s": 35, "t": "seven lamps of fire"}, {"k": ["sea", "glass"], "s": 35, "t": "a glassy sea"}, {"k": ["crown"], "s": 35, "t": "golden crowns"}, {"k": ["lightning"], "s": 45, "t": "lightnings"}, {"k": ["thunder"], "s": 45, "t": "thunders"}]}, {"q": "Name a face of the living creatures (v. 7)", "a": [{"k": ["lion"], "s": 15, "t": "a lion"}, {"k": ["calf", "ox"], "s": 30, "t": "a calf"}, {"k": ["man"], "s": 30, "t": "a man"}, {"k": ["eagle"], "s": 30, "t": "a flying eagle"}]}, {"q": "Name a stone the One on the throne was like (v. 3)", "a": [{"k": ["jasper"], "s": 30, "t": "jasper"}, {"k": ["sardius", "carnelian"], "s": 50, "t": "sardius"}, {"k": ["emerald"], "s": 35, "t": "an emerald (the rainbow)"}]}, {"q": "What do the elders say God is worthy to receive? (v. 11)", "a": [{"k": ["glory"], "s": 20, "t": "glory"}, {"k": ["honor"], "s": 25, "t": "honor"}, {"k": ["power"], "s": 30, "t": "power"}, {"k": ["create"], "s": 40, "t": "You created all things"}]}, {"q": "Name something the elders did (vv. 4, 10)", "a": [{"k": ["crown"], "s": 25, "t": "cast their crowns before the throne"}, {"k": ["fall", "worship"], "s": 25, "t": "fell down and worshipped"}, {"k": ["white"], "s": 35, "t": "clothed in white garments"}, {"k": ["throne"], "s": 40, "t": "sat on twenty-four thrones"}]}]},
 "Revelation 5": {"ladder": {"start": "SONG", "target": "LAMB", "path": ["SONG", "LONG", "LONE", "LANE", "LAME", "LAMB"], "verse": "Rev. 5:12 — Worthy is the Lamb who has been slain."}, "climb": [{"q": "Name something about the Lamb in Revelation 5", "a": [{"k": ["slain"], "s": 20, "t": "as having been slain"}, {"k": ["horn"], "s": 35, "t": "seven horns"}, {"k": ["eye"], "s": 35, "t": "seven eyes"}, {"k": ["spirit"], "s": 45, "t": "the seven Spirits of God"}, {"k": ["blood"], "s": 35, "t": "purchased with Your blood"}]}, {"q": "Name a title of Christ in Revelation 5", "a": [{"k": ["lion"], "s": 15, "t": "the Lion of the tribe of Judah"}, {"k": ["lamb"], "s": 10, "t": "the Lamb"}, {"k": ["root"], "s": 35, "t": "the Root of David"}, {"k": ["judah"], "s": 30, "t": "the tribe of Judah"}]}, {"q": "Name something about the scroll (vv. 1-5)", "a": [{"k": ["seal"], "s": 15, "t": "sealed with seven seals"}, {"k": ["open"], "s": 25, "t": "who is worthy to open it?"}, {"k": ["weep", "cry"], "s": 35, "t": "John wept much"}, {"k": ["hand"], "s": 50, "t": "in the right hand of Him on the throne"}, {"k": ["written"], "s": 60, "t": "written inside and on the back"}]}, {"q": "Name something the elders held (v. 8)", "a": [{"k": ["harp"], "s": 25, "t": "harps"}, {"k": ["bowl"], "s": 35, "t": "golden bowls"}, {"k": ["incense"], "s": 40, "t": "full of incense"}, {"k": ["prayer"], "s": 40, "t": "the prayers of the saints"}]}, {"q": "Name something from the praise in Revelation 5", "a": [{"k": ["worthy"], "s": 15, "t": "worthy"}, {"k": ["song"], "s": 25, "t": "a new song"}, {"k": ["king", "kingdom"], "s": 40, "t": "a kingdom and priests"}, {"k": ["priest"], "s": 40, "t": "priests"}, {"k": ["reign"], "s": 45, "t": "they will reign on the earth"}, {"k": ["tribe", "tongue", "nation"], "s": 45, "t": "every tribe and tongue"}, {"k": ["ten thousand", "thousand", "million"], "s": 55, "t": "myriads of myriads"}]}]},
 "Revelation 6": {"ladder": {"start": "SEAL", "target": "PALE", "path": ["SEAL", "SELL", "TELL", "TALL", "TALE", "PALE"], "verse": "Rev. 6:8 — Behold, a pale horse, and he who sits upon it, his name is Death."}, "climb": [{"q": "Name a horse from Revelation 6", "a": [{"k": ["white"], "s": 15, "t": "a white horse"}, {"k": ["red"], "s": 20, "t": "a red horse"}, {"k": ["black"], "s": 25, "t": "a black horse"}, {"k": ["pale"], "s": 30, "t": "a pale horse"}]}, {"q": "Name something the riders had or brought", "a": [{"k": ["bow"], "s": 30, "t": "a bow"}, {"k": ["crown"], "s": 35, "t": "a crown"}, {"k": ["sword"], "s": 30, "t": "a great sword"}, {"k": ["balance", "scale"], "s": 40, "t": "a balance"}, {"k": ["peace"], "s": 45, "t": "took peace from the earth"}, {"k": ["death"], "s": 30, "t": "Death"}, {"k": ["hades"], "s": 50, "t": "Hades followed"}, {"k": ["wheat", "barley"], "s": 55, "t": "wheat and barley"}]}, {"q": "Name something from the fifth seal (vv. 9-11)", "a": [{"k": ["altar"], "s": 30, "t": "under the altar"}, {"k": ["soul"], "s": 30, "t": "the souls of those slain"}, {"k": ["white", "robe"], "s": 40, "t": "a white robe"}, {"k": ["rest"], "s": 50, "t": "rest a little while"}]}, {"q": "Name something from the sixth seal (vv. 12-17)", "a": [{"k": ["earthquake"], "s": 20, "t": "a great earthquake"}, {"k": ["sun"], "s": 30, "t": "the sun became black"}, {"k": ["moon"], "s": 30, "t": "the moon became like blood"}, {"k": ["star"], "s": 35, "t": "the stars fell"}, {"k": ["fig"], "s": 50, "t": "a fig tree shaken by a great wind"}, {"k": ["scroll"], "s": 60, "t": "heaven rolled up like a scroll"}, {"k": ["mountain", "rock"], "s": 45, "t": "hide us from the face of Him"}, {"k": ["wrath"], "s": 40, "t": "the great day of their wrath"}]}, {"q": "Name someone who hid in the caves and rocks (v. 15)", "a": [{"k": ["king"], "s": 25, "t": "the kings of the earth"}, {"k": ["rich"], "s": 35, "t": "the rich"}, {"k": ["great"], "s": 40, "t": "the great men"}, {"k": ["strong"], "s": 45, "t": "the strong"}, {"k": ["command", "general"], "s": 55, "t": "the commanders"}, {"k": ["slave"], "s": 45, "t": "every slave"}, {"k": ["free"], "s": 50, "t": "every free man"}]}]},
 "Revelation 7": {"ladder": {"start": "PALM", "target": "ROBE", "path": ["PALM", "PALE", "POLE", "ROLE", "ROBE"], "verse": "Rev. 7:9 — Clothed in white robes and palm branches in their hands."}, "climb": [{"q": "Name something about the great multitude (vv. 9-17)", "a": [{"k": ["palm"], "s": 20, "t": "palm branches"}, {"k": ["robe", "white"], "s": 20, "t": "white robes"}, {"k": ["nation", "tribe"], "s": 35, "t": "out of every nation and tribe"}, {"k": ["blood"], "s": 35, "t": "washed in the blood of the Lamb"}, {"k": ["tribulation"], "s": 40, "t": "out of the great tribulation"}]}, {"q": "Name a promise in vv. 15-17", "a": [{"k": ["hunger"], "s": 30, "t": "they will not hunger"}, {"k": ["thirst"], "s": 30, "t": "nor thirst"}, {"k": ["tear"], "s": 30, "t": "God will wipe away every tear"}, {"k": ["water", "spring"], "s": 40, "t": "springs of waters of life"}, {"k": ["shepherd"], "s": 40, "t": "the Lamb will shepherd them"}, {"k": ["sun", "heat"], "s": 50, "t": "the sun will not strike them"}]}, {"q": "Name something about the four angels and the sealing (vv. 1-4)", "a": [{"k": ["wind"], "s": 25, "t": "four winds"}, {"k": ["seal"], "s": 25, "t": "the seal of the living God"}, {"k": ["forehead"], "s": 35, "t": "on their foreheads"}, {"k": ["corner"], "s": 50, "t": "four corners of the earth"}, {"k": ["east", "sun"], "s": 55, "t": "from the rising of the sun"}]}, {"q": "Name a number or tribe in Revelation 7", "a": [{"k": ["144", "thousand"], "s": 20, "t": "144,000"}, {"k": ["twelve", "12"], "s": 40, "t": "twelve thousand from each tribe"}, {"k": ["judah"], "s": 30, "t": "Judah"}, {"k": ["levi"], "s": 45, "t": "Levi"}, {"k": ["joseph"], "s": 50, "t": "Joseph"}, {"k": ["benjamin"], "s": 45, "t": "Benjamin"}, {"k": ["reuben"], "s": 50, "t": "Reuben"}, {"k": ["zebulun"], "s": 55, "t": "Zebulun"}, {"k": ["gad"], "s": 55, "t": "Gad"}, {"k": ["asher"], "s": 60, "t": "Asher"}, {"k": ["naphtali"], "s": 65, "t": "Naphtali"}, {"k": ["manasseh"], "s": 65, "t": "Manasseh"}, {"k": ["simeon"], "s": 55, "t": "Simeon"}, {"k": ["issachar"], "s": 70, "t": "Issachar"}]}, {"q": "Name something said in worship in Revelation 7", "a": [{"k": ["salvation"], "s": 30, "t": "Salvation to our God"}, {"k": ["amen"], "s": 25, "t": "Amen"}, {"k": ["bless"], "s": 35, "t": "blessing"}, {"k": ["wisdom"], "s": 40, "t": "wisdom"}, {"k": ["thank"], "s": 40, "t": "thanksgiving"}]}]},
 "Revelation 8": {"ladder": {"start": "WIND", "target": "HAIL", "path": ["WIND", "WILD", "WILL", "WALL", "WAIL", "HAIL"], "verse": "Rev. 8:7 — There was hail and fire mingled with blood."}, "climb": [{"q": "Name something from vv. 1-5", "a": [{"k": ["silence"], "s": 25, "t": "silence in heaven"}, {"k": ["half", "hour"], "s": 40, "t": "about half an hour"}, {"k": ["trumpet"], "s": 20, "t": "seven trumpets"}, {"k": ["censer"], "s": 35, "t": "a golden censer"}, {"k": ["incense"], "s": 30, "t": "incense"}, {"k": ["prayer"], "s": 30, "t": "the prayers of all the saints"}, {"k": ["altar"], "s": 35, "t": "the golden altar"}, {"k": ["fire"], "s": 40, "t": "filled it with fire of the altar"}]}, {"q": "Name something struck by the first four trumpets", "a": [{"k": ["earth"], "s": 25, "t": "a third of the earth"}, {"k": ["tree"], "s": 30, "t": "a third of the trees"}, {"k": ["grass"], "s": 35, "t": "all green grass"}, {"k": ["sea"], "s": 30, "t": "a third of the sea"}, {"k": ["ship"], "s": 40, "t": "a third of the ships"}, {"k": ["river"], "s": 40, "t": "a third of the rivers"}, {"k": ["sun"], "s": 35, "t": "a third of the sun"}, {"k": ["moon"], "s": 40, "t": "the moon"}, {"k": ["star"], "s": 40, "t": "the stars"}]}, {"q": "Name something that fell or was thrown in Revelation 8", "a": [{"k": ["hail"], "s": 20, "t": "hail"}, {"k": ["fire"], "s": 20, "t": "fire"}, {"k": ["blood"], "s": 30, "t": "mixed with blood"}, {"k": ["mountain"], "s": 35, "t": "a great mountain burning with fire"}, {"k": ["star"], "s": 35, "t": "a great star"}, {"k": ["wormwood"], "s": 50, "t": "named Wormwood"}]}, {"q": "What animal flew in midheaven crying \"Woe\"? (v. 13)", "a": [{"k": ["eagle"], "s": 20, "t": "an eagle"}, {"k": ["woe"], "s": 40, "t": "woe, woe, woe"}]}, {"q": "Name a result of the second or third trumpet (vv. 8-11)", "a": [{"k": ["blood"], "s": 30, "t": "a third of the sea became blood"}, {"k": ["bitter"], "s": 35, "t": "the waters became bitter"}, {"k": ["wormwood"], "s": 45, "t": "Wormwood"}, {"k": ["creature"], "s": 45, "t": "a third of the sea creatures died"}, {"k": ["die", "died"], "s": 40, "t": "many men died"}]}]},
 "Revelation 9": {"ladder": {"start": "WING", "target": "TAIL", "path": ["WING", "SING", "SANG", "SAND", "SAID", "SAIL", "TAIL"], "verse": "Rev. 9:10 — They have tails like scorpions, and stings."}, "climb": [{"q": "Name something the locusts looked like (vv. 7-10)", "a": [{"k": ["horse"], "s": 25, "t": "horses prepared for war"}, {"k": ["crown"], "s": 35, "t": "crowns like gold"}, {"k": ["face", "man"], "s": 35, "t": "faces like men's faces"}, {"k": ["hair", "women"], "s": 40, "t": "hair like women's hair"}, {"k": ["teeth", "lion"], "s": 40, "t": "teeth like the teeth of lions"}, {"k": ["breastplate", "iron"], "s": 50, "t": "breastplates of iron"}, {"k": ["wing"], "s": 40, "t": "the sound of their wings"}, {"k": ["tail", "scorpion"], "s": 30, "t": "tails like scorpions"}]}, {"q": "Name something from the bottomless pit (vv. 1-3)", "a": [{"k": ["star"], "s": 30, "t": "a star fallen from heaven"}, {"k": ["key"], "s": 25, "t": "the key of the pit"}, {"k": ["smoke"], "s": 25, "t": "smoke like a great furnace"}, {"k": ["dark", "sun"], "s": 40, "t": "the sun and air darkened"}, {"k": ["locust"], "s": 15, "t": "locusts"}]}, {"q": "Name a name of the angel of the abyss (v. 11)", "a": [{"k": ["abaddon"], "s": 30, "t": "Abaddon"}, {"k": ["apollyon"], "s": 35, "t": "Apollyon"}, {"k": ["destroy"], "s": 50, "t": "\"Destroyer\""}]}, {"q": "Name something from the sixth trumpet (vv. 13-19)", "a": [{"k": ["euphrates"], "s": 30, "t": "the great river Euphrates"}, {"k": ["angel"], "s": 30, "t": "four angels released"}, {"k": ["horse"], "s": 30, "t": "horses"}, {"k": ["fire"], "s": 35, "t": "fire, smoke, and sulfur"}, {"k": ["lion"], "s": 45, "t": "heads like lions"}, {"k": ["two hundred", "million"], "s": 55, "t": "two hundred million"}]}, {"q": "Name something people did not repent of (vv. 20-21)", "a": [{"k": ["idol"], "s": 30, "t": "idols"}, {"k": ["demon"], "s": 40, "t": "worshipping demons"}, {"k": ["murder"], "s": 35, "t": "murders"}, {"k": ["sorcer", "magic"], "s": 45, "t": "sorceries"}, {"k": ["fornicat", "immoral"], "s": 45, "t": "fornication"}, {"k": ["theft", "steal"], "s": 40, "t": "thefts"}]}]},
 "Revelation 10": {"ladder": {"start": "MILD", "target": "ROAR", "path": ["MILD", "MOLD", "TOLD", "TOAD", "ROAD", "ROAR"], "verse": "Rev. 10:3 — He cried out with a loud voice just as a lion roars."}, "climb": [{"q": "Name something about the strong Angel (vv. 1-3)", "a": [{"k": ["cloud"], "s": 25, "t": "clothed with a cloud"}, {"k": ["rainbow"], "s": 30, "t": "the rainbow on His head"}, {"k": ["sun"], "s": 35, "t": "His face like the sun"}, {"k": ["pillar", "fire"], "s": 40, "t": "feet like pillars of fire"}, {"k": ["sea"], "s": 35, "t": "right foot on the sea"}, {"k": ["land", "earth"], "s": 35, "t": "left foot on the land"}, {"k": ["lion"], "s": 30, "t": "roared like a lion"}]}, {"q": "Name something about the little scroll (vv. 8-11)", "a": [{"k": ["eat"], "s": 20, "t": "take it and eat it"}, {"k": ["honey", "sweet"], "s": 25, "t": "sweet as honey in the mouth"}, {"k": ["bitter"], "s": 30, "t": "bitter in the stomach"}, {"k": ["open"], "s": 45, "t": "opened in His hand"}, {"k": ["prophesy"], "s": 45, "t": "you must prophesy again"}]}, {"q": "Name something else in Revelation 10", "a": [{"k": ["thunder"], "s": 25, "t": "seven thunders"}, {"k": ["seal"], "s": 40, "t": "seal up what the thunders spoke"}, {"k": ["swore", "oath"], "s": 50, "t": "he swore by Him who lives forever"}, {"k": ["time", "delay"], "s": 50, "t": "there will be delay no longer"}, {"k": ["mystery"], "s": 45, "t": "the mystery of God is finished"}, {"k": ["trumpet"], "s": 40, "t": "the seventh angel's trumpet"}]}, {"q": "What was John told to do? (vv. 4, 8-11)", "a": [{"k": ["seal"], "s": 35, "t": "seal up what the thunders spoke"}, {"k": ["take"], "s": 30, "t": "take the little scroll"}, {"k": ["eat"], "s": 25, "t": "eat it"}, {"k": ["prophesy"], "s": 35, "t": "prophesy again"}, {"k": ["nation", "people", "tongue", "king"], "s": 50, "t": "about peoples, nations, tongues, and kings"}]}, {"q": "By whom or what did the Angel swear? (vv. 5-6)", "a": [{"k": ["forever", "lives"], "s": 35, "t": "Him who lives forever and ever"}, {"k": ["create"], "s": 45, "t": "who created heaven"}, {"k": ["heaven"], "s": 25, "t": "heaven"}, {"k": ["earth"], "s": 25, "t": "the earth"}, {"k": ["sea"], "s": 30, "t": "the sea"}, {"k": ["hand"], "s": 40, "t": "He lifted His right hand"}]}]},
 "Revelation 11": {"ladder": {"start": "DEAD", "target": "KING", "path": ["DEAD", "BEAD", "BEND", "BIND", "KIND", "KING"], "verse": "Rev. 11:15 — The kingdom of the world has become the kingdom of our Lord and of His Christ."}, "climb": [{"q": "Name something about the two witnesses", "a": [{"k": ["olive"], "s": 25, "t": "two olive trees"}, {"k": ["lampstand"], "s": 30, "t": "two lampstands"}, {"k": ["fire"], "s": 35, "t": "fire comes out of their mouth"}, {"k": ["sackcloth"], "s": 40, "t": "clothed in sackcloth"}, {"k": ["rain"], "s": 45, "t": "shut the heaven so it does not rain"}, {"k": ["blood"], "s": 50, "t": "turn waters into blood"}, {"k": ["plague"], "s": 50, "t": "strike the earth with every plague"}]}, {"q": "What happened after the two witnesses were killed? (vv. 7-12)", "a": [{"k": ["street"], "s": 30, "t": "bodies lay in the street"}, {"k": ["three", "3"], "s": 40, "t": "three and a half days"}, {"k": ["gift"], "s": 55, "t": "people sent gifts to one another"}, {"k": ["breath", "spirit", "life"], "s": 40, "t": "the breath of life entered them"}, {"k": ["feet", "stood"], "s": 45, "t": "they stood on their feet"}, {"k": ["cloud"], "s": 40, "t": "went up into heaven in the cloud"}]}, {"q": "Name a city or place in Revelation 11", "a": [{"k": ["temple"], "s": 20, "t": "the temple of God"}, {"k": ["altar"], "s": 35, "t": "the altar"}, {"k": ["court"], "s": 45, "t": "the court outside the temple"}, {"k": ["sodom"], "s": 40, "t": "spiritually called Sodom"}, {"k": ["egypt"], "s": 45, "t": "and Egypt"}, {"k": ["jerusalem", "city"], "s": 35, "t": "the holy city"}]}, {"q": "Name something from the seventh trumpet (vv. 15-19)", "a": [{"k": ["kingdom"], "s": 20, "t": "the kingdom of the world"}, {"k": ["reign"], "s": 30, "t": "He will reign forever"}, {"k": ["elder"], "s": 35, "t": "twenty-four elders fell on their faces"}, {"k": ["ark"], "s": 35, "t": "the Ark of His covenant"}, {"k": ["hail"], "s": 50, "t": "great hail"}, {"k": ["earthquake"], "s": 45, "t": "an earthquake"}]}, {"q": "Name a number in Revelation 11", "a": [{"k": ["two", "2"], "s": 20, "t": "two witnesses"}, {"k": ["forty-two", "42"], "s": 50, "t": "forty-two months"}, {"k": ["1260", "thousand"], "s": 55, "t": "1,260 days"}, {"k": ["seven thousand", "7000"], "s": 60, "t": "seven thousand killed"}]}]},
 "Revelation 12": {"ladder": {"start": "LAMB", "target": "WINS", "path": ["LAMB", "LAME", "LIME", "LINE", "WINE", "WINS"], "verse": "Rev. 12:11 — They overcame him because of the blood of the Lamb."}, "climb": [{"q": "Name something about the woman (vv. 1-2)", "a": [{"k": ["sun"], "s": 15, "t": "clothed with the sun"}, {"k": ["moon"], "s": 20, "t": "the moon under her feet"}, {"k": ["star"], "s": 25, "t": "a crown of twelve stars"}, {"k": ["child", "son"], "s": 30, "t": "a man-child"}, {"k": ["wilderness"], "s": 40, "t": "fled into the wilderness"}, {"k": ["wing"], "s": 50, "t": "two wings of the great eagle"}]}, {"q": "Name something about the dragon", "a": [{"k": ["red"], "s": 25, "t": "a great red dragon"}, {"k": ["head"], "s": 30, "t": "seven heads"}, {"k": ["horn"], "s": 35, "t": "ten horns"}, {"k": ["tail"], "s": 40, "t": "his tail drew a third of the stars"}, {"k": ["serpent"], "s": 35, "t": "the ancient serpent"}, {"k": ["devil"], "s": 20, "t": "the Devil"}, {"k": ["satan"], "s": 20, "t": "Satan"}, {"k": ["accuser"], "s": 45, "t": "the accuser of our brothers"}]}, {"q": "How did they overcome the dragon? (v. 11)", "a": [{"k": ["blood"], "s": 15, "t": "the blood of the Lamb"}, {"k": ["word"], "s": 25, "t": "the word of their testimony"}, {"k": ["testimon"], "s": 30, "t": "their testimony"}, {"k": ["soul", "life", "death"], "s": 40, "t": "they did not love their soul-life even unto death"}]}, {"q": "Who fought the dragon? (vv. 7-9)", "a": [{"k": ["michael"], "s": 20, "t": "Michael"}, {"k": ["angel"], "s": 30, "t": "his angels"}]}, {"q": "Name something else in Revelation 12", "a": [{"k": ["throne"], "s": 35, "t": "the man-child caught up to God's throne"}, {"k": ["river", "water"], "s": 45, "t": "water like a river out of his mouth"}, {"k": ["earth"], "s": 50, "t": "the earth helped the woman"}, {"k": ["rest", "seed"], "s": 55, "t": "the rest of her seed"}, {"k": ["heaven"], "s": 35, "t": "war in heaven"}]}]},
 "Revelation 13": {"ladder": {"start": "NAME", "target": "MARK", "path": ["NAME", "CAME", "CARE", "MARE", "MARK"], "verse": "Rev. 13:17 — The mark, the name of the beast or the number of his name."}, "climb": [{"q": "Name something about the beast out of the sea (vv. 1-8)", "a": [{"k": ["horn"], "s": 20, "t": "ten horns"}, {"k": ["head"], "s": 25, "t": "seven heads"}, {"k": ["leopard"], "s": 35, "t": "like a leopard"}, {"k": ["bear"], "s": 40, "t": "feet like a bear's"}, {"k": ["lion"], "s": 40, "t": "mouth like a lion's"}, {"k": ["blasphem"], "s": 35, "t": "names of blasphemy"}, {"k": ["wound"], "s": 35, "t": "a deadly wound healed"}, {"k": ["dragon"], "s": 30, "t": "the dragon gave him his power"}]}, {"q": "Name something about the beast out of the earth (vv. 11-17)", "a": [{"k": ["lamb"], "s": 35, "t": "two horns like a lamb"}, {"k": ["dragon"], "s": 35, "t": "spoke like a dragon"}, {"k": ["fire"], "s": 40, "t": "makes fire come down from heaven"}, {"k": ["image"], "s": 30, "t": "the image of the beast"}, {"k": ["mark"], "s": 20, "t": "a mark"}, {"k": ["hand"], "s": 40, "t": "on their right hand"}, {"k": ["forehead"], "s": 40, "t": "or on their forehead"}, {"k": ["buy", "sell"], "s": 40, "t": "no one could buy or sell"}]}, {"q": "What number is the number of the beast? (v. 18)", "a": [{"k": ["666", "six hundred"], "s": 10, "t": "666"}, {"k": ["man"], "s": 40, "t": "the number of a man"}, {"k": ["wisdom"], "s": 50, "t": "here is wisdom"}]}, {"q": "Name something about the saints in Revelation 13", "a": [{"k": ["book of life", "book"], "s": 35, "t": "the book of life of the Lamb"}, {"k": ["endur", "patience"], "s": 40, "t": "the endurance of the saints"}, {"k": ["faith"], "s": 40, "t": "and the faith"}, {"k": ["captiv"], "s": 50, "t": "whoever is for captivity"}, {"k": ["sword"], "s": 50, "t": "killed with the sword"}]}, {"q": "Name something the beast was given (vv. 5-7)", "a": [{"k": ["mouth"], "s": 30, "t": "a mouth speaking great things"}, {"k": ["blasphem"], "s": 35, "t": "blasphemies"}, {"k": ["month", "42", "forty"], "s": 45, "t": "forty-two months"}, {"k": ["war"], "s": 35, "t": "make war with the saints"}, {"k": ["author", "power"], "s": 40, "t": "authority over every tribe"}]}]},
 "Revelation 14": {"ladder": {"start": "SEED", "target": "REAP", "path": ["SEED", "REED", "REEL", "REAL", "REAP"], "verse": "Rev. 14:15 — Send forth Your sickle and reap, for the hour to reap has come because the harvest of the earth is ripe."}, "climb": [{"q": "Name something about the 144,000 (vv. 1-5)", "a": [{"k": ["lamb"], "s": 15, "t": "with the Lamb"}, {"k": ["zion"], "s": 25, "t": "Mount Zion"}, {"k": ["name"], "s": 30, "t": "His name on their foreheads"}, {"k": ["song"], "s": 30, "t": "a new song"}, {"k": ["harp"], "s": 40, "t": "harpists harping"}, {"k": ["firstfruit"], "s": 35, "t": "firstfruits to God"}, {"k": ["virgin"], "s": 45, "t": "virgins"}, {"k": ["lie", "guile"], "s": 50, "t": "no lie found in their mouth"}]}, {"q": "Name a message from the three angels (vv. 6-11)", "a": [{"k": ["gospel"], "s": 25, "t": "the eternal gospel"}, {"k": ["fear"], "s": 30, "t": "fear God"}, {"k": ["glory"], "s": 35, "t": "give Him glory"}, {"k": ["babylon"], "s": 25, "t": "Babylon the great has fallen"}, {"k": ["wine"], "s": 40, "t": "the wine of her fornication"}, {"k": ["beast", "mark"], "s": 40, "t": "worships the beast and his image"}]}, {"q": "Name something about the harvest (vv. 14-20)", "a": [{"k": ["sickle"], "s": 20, "t": "a sharp sickle"}, {"k": ["cloud"], "s": 30, "t": "a white cloud"}, {"k": ["crown"], "s": 35, "t": "a golden crown"}, {"k": ["reap"], "s": 25, "t": "reap"}, {"k": ["grape", "vine"], "s": 35, "t": "clusters of the vine"}, {"k": ["winepress"], "s": 40, "t": "the winepress of God's wrath"}, {"k": ["ripe", "harvest"], "s": 30, "t": "the harvest of the earth is ripe"}]}, {"q": "Name something about the dead who die in the Lord (v. 13)", "a": [{"k": ["bless"], "s": 25, "t": "blessed"}, {"k": ["rest"], "s": 30, "t": "they may rest from their labors"}, {"k": ["work"], "s": 40, "t": "their works follow them"}]}, {"q": "Name a number in Revelation 14", "a": [{"k": ["144"], "s": 15, "t": "144,000"}, {"k": ["three", "3"], "s": 40, "t": "three angels"}, {"k": ["1600", "sixteen hundred"], "s": 60, "t": "1,600 stadia"}]}]},
 "Revelation 15": {"ladder": {"start": "HARP", "target": "SING", "path": ["HARP", "HARD", "HAND", "HANG", "SANG", "SING"], "verse": "Rev. 15:3 — They sing the song of Moses and the song of the Lamb."}, "climb": [{"q": "Name something about the overcomers on the sea of glass", "a": [{"k": ["harp"], "s": 25, "t": "harps of God"}, {"k": ["sea", "glass"], "s": 20, "t": "a glassy sea"}, {"k": ["fire"], "s": 40, "t": "mingled with fire"}, {"k": ["beast", "victor"], "s": 40, "t": "victorious from the beast"}, {"k": ["image"], "s": 50, "t": "and his image"}, {"k": ["number"], "s": 55, "t": "and the number of his name"}]}, {"q": "Whose songs did they sing? (v. 3)", "a": [{"k": ["moses"], "s": 15, "t": "the song of Moses"}, {"k": ["lamb"], "s": 15, "t": "the song of the Lamb"}]}, {"q": "Name something they sang about God (vv. 3-4)", "a": [{"k": ["great"], "s": 25, "t": "great and wonderful are Your works"}, {"k": ["righteous", "just"], "s": 35, "t": "righteous and true are Your ways"}, {"k": ["king"], "s": 35, "t": "King of the nations"}, {"k": ["holy"], "s": 30, "t": "You alone are holy"}, {"k": ["nation"], "s": 40, "t": "all the nations will come and worship"}]}, {"q": "Name something about the seven angels (vv. 5-8)", "a": [{"k": ["plague"], "s": 25, "t": "seven plagues"}, {"k": ["bowl"], "s": 25, "t": "seven golden bowls"}, {"k": ["linen"], "s": 40, "t": "clothed in clean bright linen"}, {"k": ["girdle", "belt", "sash"], "s": 50, "t": "golden girdles"}, {"k": ["smoke"], "s": 40, "t": "the temple filled with smoke"}, {"k": ["temple"], "s": 35, "t": "the temple of the tabernacle of the testimony"}, {"k": ["wrath", "fury"], "s": 40, "t": "the fury of God"}]}, {"q": "Who gave the seven bowls, and who received them? (v. 7)", "a": [{"k": ["creature"], "s": 30, "t": "one of the four living creatures"}, {"k": ["angel"], "s": 25, "t": "the seven angels"}, {"k": ["forever", "lives"], "s": 45, "t": "God who lives forever and ever"}]}]},
 "Revelation 16": {"ladder": {"start": "BOWL", "target": "POUR", "path": ["BOWL", "FOWL", "FOUL", "FOUR", "POUR"], "verse": "Rev. 16:1 — Go and pour out the seven bowls of the fury of God into the earth."}, "climb": [{"q": "Name something struck by one of the bowls", "a": [{"k": ["earth"], "s": 25, "t": "the earth"}, {"k": ["sea"], "s": 25, "t": "the sea"}, {"k": ["river", "water"], "s": 30, "t": "the rivers and springs"}, {"k": ["sun"], "s": 30, "t": "the sun"}, {"k": ["throne"], "s": 45, "t": "the throne of the beast"}, {"k": ["euphrates"], "s": 35, "t": "the river Euphrates"}, {"k": ["air"], "s": 50, "t": "the air"}]}, {"q": "Name a plague in Revelation 16", "a": [{"k": ["sore"], "s": 30, "t": "an evil and malignant sore"}, {"k": ["blood"], "s": 20, "t": "became blood"}, {"k": ["burn", "scorch", "heat"], "s": 30, "t": "scorched with fire"}, {"k": ["dark"], "s": 30, "t": "darkness"}, {"k": ["hail"], "s": 35, "t": "great hail"}, {"k": ["earthquake"], "s": 35, "t": "a great earthquake"}, {"k": ["frog"], "s": 35, "t": "unclean spirits as frogs"}]}, {"q": "Name something from the sixth bowl (vv. 12-16)", "a": [{"k": ["armageddon"], "s": 20, "t": "Armageddon"}, {"k": ["euphrates"], "s": 30, "t": "dried up"}, {"k": ["king"], "s": 35, "t": "the kings from the rising of the sun"}, {"k": ["frog"], "s": 35, "t": "three unclean spirits as frogs"}, {"k": ["thief"], "s": 35, "t": "\"I come as a thief\""}, {"k": ["garment"], "s": 45, "t": "keeps his garments"}]}, {"q": "Name something about the seventh bowl (vv. 17-21)", "a": [{"k": ["done"], "s": 35, "t": "\"It is done!\""}, {"k": ["babylon"], "s": 30, "t": "Babylon the great remembered"}, {"k": ["island"], "s": 45, "t": "every island fled away"}, {"k": ["mountain"], "s": 45, "t": "mountains were not found"}, {"k": ["talent", "hail"], "s": 50, "t": "hailstones about a talent"}, {"k": ["city"], "s": 45, "t": "the great city split into three parts"}]}, {"q": "Name something people did after the plagues", "a": [{"k": ["blasphem"], "s": 25, "t": "blasphemed the name of God"}, {"k": ["repent"], "s": 30, "t": "did not repent"}, {"k": ["glory"], "s": 45, "t": "did not give Him glory"}, {"k": ["tongue"], "s": 50, "t": "gnawed their tongues"}, {"k": ["work"], "s": 55, "t": "did not repent of their works"}]}]},
 "Revelation 17": {"ladder": {"start": "WINE", "target": "LAMB", "path": ["WINE", "LINE", "LANE", "LAME", "LAMB"], "verse": "Rev. 17:14 — The Lamb will overcome them, for He is Lord of lords and King of kings."}, "climb": [{"q": "Name something about the great harlot (vv. 1-6)", "a": [{"k": ["babylon"], "s": 15, "t": "Babylon the Great"}, {"k": ["purple"], "s": 35, "t": "clothed in purple"}, {"k": ["scarlet"], "s": 30, "t": "and scarlet"}, {"k": ["gold"], "s": 35, "t": "gilded with gold"}, {"k": ["pearl"], "s": 40, "t": "and pearls"}, {"k": ["cup"], "s": 35, "t": "a golden cup"}, {"k": ["water"], "s": 40, "t": "sits on many waters"}, {"k": ["drunk", "blood"], "s": 45, "t": "drunk with the blood of the saints"}, {"k": ["mystery"], "s": 40, "t": "\"Mystery\""}]}, {"q": "Name something about the beast in Revelation 17", "a": [{"k": ["scarlet"], "s": 25, "t": "a scarlet beast"}, {"k": ["head"], "s": 25, "t": "seven heads"}, {"k": ["horn"], "s": 30, "t": "ten horns"}, {"k": ["mountain"], "s": 45, "t": "seven mountains"}, {"k": ["king"], "s": 35, "t": "seven kings"}, {"k": ["abyss", "pit"], "s": 50, "t": "ascends out of the abyss"}]}, {"q": "Name a title of the Lamb or His people (v. 14)", "a": [{"k": ["lord of lords", "lord"], "s": 20, "t": "Lord of lords"}, {"k": ["king"], "s": 20, "t": "King of kings"}, {"k": ["called"], "s": 35, "t": "called"}, {"k": ["chosen"], "s": 35, "t": "chosen"}, {"k": ["faithful"], "s": 40, "t": "faithful"}]}, {"q": "Name something about the end of the harlot (v. 16)", "a": [{"k": ["hate"], "s": 40, "t": "the horns hate the harlot"}, {"k": ["desolate"], "s": 45, "t": "make her desolate"}, {"k": ["naked"], "s": 45, "t": "and naked"}, {"k": ["burn", "fire"], "s": 35, "t": "burn her with fire"}, {"k": ["flesh"], "s": 55, "t": "eat her flesh"}]}, {"q": "Name something about the ten kings (vv. 12-14)", "a": [{"k": ["hour"], "s": 35, "t": "for one hour"}, {"k": ["author", "power"], "s": 35, "t": "authority as kings"}, {"k": ["beast"], "s": 30, "t": "with the beast"}, {"k": ["one mind", "mind"], "s": 45, "t": "of one mind"}, {"k": ["war"], "s": 30, "t": "make war with the Lamb"}]}]},
 "Revelation 18": {"ladder": {"start": "GOLD", "target": "DUST", "path": ["GOLD", "GILD", "GILT", "GIST", "GUST", "DUST"], "verse": "Rev. 18:4 — Come out of her, My people."}, "climb": [{"q": "Name something the merchants of Babylon sold (vv. 11-13)", "a": [{"k": ["gold"], "s": 15, "t": "gold"}, {"k": ["silver"], "s": 20, "t": "silver"}, {"k": ["pearl"], "s": 25, "t": "pearls"}, {"k": ["stone"], "s": 35, "t": "precious stones"}, {"k": ["linen"], "s": 35, "t": "fine linen"}, {"k": ["purple"], "s": 40, "t": "purple"}, {"k": ["silk"], "s": 40, "t": "silk"}, {"k": ["ivory"], "s": 45, "t": "ivory"}, {"k": ["wine"], "s": 40, "t": "wine"}, {"k": ["oil"], "s": 45, "t": "oil"}, {"k": ["horse"], "s": 45, "t": "horses"}, {"k": ["incense"], "s": 45, "t": "incense"}, {"k": ["marble"], "s": 55, "t": "marble"}, {"k": ["iron"], "s": 50, "t": "iron"}, {"k": ["wheat"], "s": 45, "t": "wheat"}, {"k": ["sheep"], "s": 50, "t": "sheep"}, {"k": ["chariot"], "s": 55, "t": "chariots"}, {"k": ["cinnamon"], "s": 55, "t": "cinnamon"}]}, {"q": "Name a group who mourned over Babylon", "a": [{"k": ["king"], "s": 25, "t": "the kings of the earth"}, {"k": ["merchant"], "s": 25, "t": "the merchants"}, {"k": ["ship", "sailor"], "s": 40, "t": "shipmasters and sailors"}, {"k": ["sea"], "s": 50, "t": "all who work on the sea"}]}, {"q": "Name something said about Babylon's fall", "a": [{"k": ["fallen"], "s": 15, "t": "fallen, fallen"}, {"k": ["hour"], "s": 35, "t": "in one hour"}, {"k": ["fire"], "s": 30, "t": "burned with fire"}, {"k": ["millstone", "stone"], "s": 45, "t": "a great millstone thrown into the sea"}, {"k": ["demon"], "s": 45, "t": "a dwelling place of demons"}, {"k": ["plague"], "s": 40, "t": "her plagues"}]}, {"q": "Name something that will no longer be heard in Babylon (vv. 22-23)", "a": [{"k": ["harp"], "s": 30, "t": "harpists"}, {"k": ["music"], "s": 35, "t": "musicians"}, {"k": ["flute"], "s": 40, "t": "flute players"}, {"k": ["trumpet"], "s": 40, "t": "trumpeters"}, {"k": ["lamp"], "s": 45, "t": "the light of a lamp"}, {"k": ["bride"], "s": 45, "t": "the voice of bridegroom and bride"}, {"k": ["mill"], "s": 55, "t": "the sound of a millstone"}]}, {"q": "What does the voice from heaven say to God's people? (v. 4)", "a": [{"k": ["come out"], "s": 20, "t": "come out of her, My people"}, {"k": ["sin"], "s": 35, "t": "do not participate in her sins"}, {"k": ["plague"], "s": 40, "t": "so you do not receive her plagues"}]}]},
 "Revelation 19": {"ladder": {"start": "LAMB", "target": "WIFE", "path": ["LAMB", "LAME", "LIME", "LIFE", "WIFE"], "verse": "Rev. 19:7 — The marriage of the Lamb has come, and His wife has made herself ready."}, "climb": [{"q": "Name something about the marriage of the Lamb (vv. 6-9)", "a": [{"k": ["wife", "bride"], "s": 15, "t": "His wife"}, {"k": ["ready"], "s": 25, "t": "made herself ready"}, {"k": ["linen"], "s": 30, "t": "fine linen"}, {"k": ["bright"], "s": 40, "t": "bright and clean"}, {"k": ["righteous"], "s": 40, "t": "the righteousnesses of the saints"}, {"k": ["dinner", "supper", "feast"], "s": 35, "t": "the marriage dinner of the Lamb"}, {"k": ["bless"], "s": 45, "t": "blessed are those called"}]}, {"q": "Name a title of the Rider on the white horse", "a": [{"k": ["faithful"], "s": 25, "t": "Faithful"}, {"k": ["true"], "s": 25, "t": "and True"}, {"k": ["word"], "s": 30, "t": "the Word of God"}, {"k": ["king of kings", "king"], "s": 20, "t": "King of kings"}, {"k": ["lord of lords", "lord"], "s": 25, "t": "Lord of lords"}]}, {"q": "Name something about the Rider (vv. 11-16)", "a": [{"k": ["horse"], "s": 15, "t": "a white horse"}, {"k": ["eye", "flame"], "s": 30, "t": "eyes like a flame of fire"}, {"k": ["crown", "diadem"], "s": 35, "t": "many diadems"}, {"k": ["blood"], "s": 40, "t": "a garment dipped in blood"}, {"k": ["sword"], "s": 30, "t": "a sharp sword out of His mouth"}, {"k": ["rod", "iron"], "s": 45, "t": "shepherd them with an iron rod"}, {"k": ["army", "armies"], "s": 40, "t": "the armies in heaven"}, {"k": ["thigh"], "s": 55, "t": "written on His thigh"}]}, {"q": "Name something from the praises in Revelation 19", "a": [{"k": ["hallelujah"], "s": 10, "t": "Hallelujah"}, {"k": ["salvation"], "s": 35, "t": "salvation"}, {"k": ["glory"], "s": 30, "t": "glory"}, {"k": ["power"], "s": 35, "t": "power"}, {"k": ["amen"], "s": 35, "t": "Amen"}, {"k": ["almighty"], "s": 40, "t": "the Lord our God the Almighty"}]}, {"q": "Name something about the end of the beast (vv. 19-21)", "a": [{"k": ["false prophet", "prophet"], "s": 30, "t": "the false prophet"}, {"k": ["lake"], "s": 25, "t": "the lake of fire"}, {"k": ["sulfur", "brimstone"], "s": 45, "t": "burning with sulfur"}, {"k": ["bird"], "s": 40, "t": "the birds were filled"}]}]},
 "Revelation 20": {"ladder": {"start": "LAKE", "target": "FIRE", "path": ["LAKE", "FAKE", "FARE", "FIRE"], "verse": "Rev. 20:15 — And if anyone was not found written in the book of life, he was cast into the lake of fire."}, "climb": [{"q": "Name something about Satan being bound (vv. 1-3)", "a": [{"k": ["chain"], "s": 25, "t": "a great chain"}, {"k": ["key"], "s": 30, "t": "the key of the abyss"}, {"k": ["abyss", "pit"], "s": 30, "t": "the abyss"}, {"k": ["thousand"], "s": 20, "t": "a thousand years"}, {"k": ["seal"], "s": 45, "t": "sealed it over him"}]}, {"q": "Name something about the thousand years (vv. 4-6)", "a": [{"k": ["reign"], "s": 20, "t": "they reigned with Christ"}, {"k": ["throne"], "s": 30, "t": "thrones"}, {"k": ["resurrect"], "s": 35, "t": "the first resurrection"}, {"k": ["priest"], "s": 40, "t": "priests of God and of Christ"}, {"k": ["bless"], "s": 45, "t": "blessed and holy"}, {"k": ["death"], "s": 45, "t": "the second death has no authority"}, {"k": ["behead"], "s": 55, "t": "beheaded for the testimony of Jesus"}]}, {"q": "Name something after the thousand years (vv. 7-10)", "a": [{"k": ["gog"], "s": 30, "t": "Gog"}, {"k": ["magog"], "s": 35, "t": "and Magog"}, {"k": ["sand"], "s": 45, "t": "as the sand of the sea"}, {"k": ["camp"], "s": 50, "t": "the camp of the saints"}, {"k": ["fire"], "s": 35, "t": "fire came down out of heaven"}]}, {"q": "Name something from the great white throne (vv. 11-15)", "a": [{"k": ["throne"], "s": 15, "t": "a great white throne"}, {"k": ["book"], "s": 20, "t": "the books were opened"}, {"k": ["book of life"], "s": 25, "t": "the book of life"}, {"k": ["dead"], "s": 30, "t": "the dead small and great"}, {"k": ["sea"], "s": 40, "t": "the sea gave up the dead"}, {"k": ["hades"], "s": 45, "t": "death and Hades"}, {"k": ["work"], "s": 40, "t": "judged according to their works"}]}, {"q": "Name something the reigning ones did not do, or kept (v. 4)", "a": [{"k": ["worship"], "s": 35, "t": "did not worship the beast"}, {"k": ["image"], "s": 40, "t": "nor his image"}, {"k": ["mark"], "s": 35, "t": "did not receive the mark"}, {"k": ["testimon"], "s": 40, "t": "the testimony of Jesus"}, {"k": ["word"], "s": 45, "t": "the word of God"}]}]},
 "Revelation 21": {"ladder": {"start": "WALL", "target": "GOLD", "path": ["WALL", "TALL", "TOLL", "TOLD", "GOLD"], "verse": "Rev. 21:18 — And the city was pure gold, like clear glass."}, "climb": [{"q": "Name something about the New Jerusalem", "a": [{"k": ["gold"], "s": 15, "t": "pure gold"}, {"k": ["pearl"], "s": 20, "t": "gates of pearl"}, {"k": ["wall"], "s": 25, "t": "a great and high wall"}, {"k": ["jasper"], "s": 35, "t": "built of jasper"}, {"k": ["street"], "s": 30, "t": "the street of the city"}, {"k": ["gate"], "s": 25, "t": "twelve gates"}, {"k": ["foundation"], "s": 35, "t": "twelve foundations"}, {"k": ["light"], "s": 35, "t": "the Lamb is its lamp"}, {"k": ["square", "cube"], "s": 50, "t": "lies square"}, {"k": ["bride"], "s": 30, "t": "prepared as a bride"}]}, {"q": "Name something God says will be no more (v. 4)", "a": [{"k": ["tear"], "s": 20, "t": "every tear wiped away"}, {"k": ["death"], "s": 20, "t": "no more death"}, {"k": ["sorrow", "mourn"], "s": 35, "t": "sorrow"}, {"k": ["cry"], "s": 35, "t": "crying"}, {"k": ["pain"], "s": 30, "t": "pain"}, {"k": ["sea"], "s": 50, "t": "the sea is no more (v. 1)"}, {"k": ["night"], "s": 40, "t": "no night there (v. 25)"}]}, {"q": "Name a precious stone on the foundations (vv. 19-20)", "a": [{"k": ["jasper"], "s": 25, "t": "jasper"}, {"k": ["sapphire"], "s": 30, "t": "sapphire"}, {"k": ["emerald"], "s": 30, "t": "emerald"}, {"k": ["topaz"], "s": 40, "t": "topaz"}, {"k": ["amethyst"], "s": 40, "t": "amethyst"}, {"k": ["chalcedony"], "s": 55, "t": "chalcedony"}, {"k": ["sardonyx"], "s": 60, "t": "sardonyx"}, {"k": ["sardius"], "s": 60, "t": "sardius"}, {"k": ["chrysolite"], "s": 65, "t": "chrysolite"}, {"k": ["beryl"], "s": 60, "t": "beryl"}, {"k": ["chrysoprase"], "s": 70, "t": "chrysoprase"}, {"k": ["jacinth"], "s": 75, "t": "jacinth"}]}, {"q": "Whose names are written on the gates and foundations? (vv. 12-14)", "a": [{"k": ["israel", "tribe"], "s": 25, "t": "the twelve tribes of Israel"}, {"k": ["apostle"], "s": 25, "t": "the twelve apostles of the Lamb"}, {"k": ["angel"], "s": 45, "t": "twelve angels at the gates"}]}, {"q": "Name something God gives or promises in Revelation 21", "a": [{"k": ["water", "spring"], "s": 30, "t": "the spring of the water of life"}, {"k": ["free"], "s": 40, "t": "freely"}, {"k": ["tabernacle"], "s": 35, "t": "the tabernacle of God with men"}, {"k": ["new"], "s": 20, "t": "\"I make all things new\""}, {"k": ["alpha"], "s": 35, "t": "the Alpha and the Omega"}, {"k": ["inherit"], "s": 45, "t": "the overcomer will inherit"}]}]},
 "Revelation 22": {"ladder": {"start": "DARK", "target": "COME", "path": ["DARK", "DARE", "CARE", "CAME", "COME"], "verse": "Rev. 22:20 — Yes, I come quickly. Amen. Come, Lord Jesus!"}, "climb": [{"q": "Name something about the river of water of life (vv. 1-2)", "a": [{"k": ["river"], "s": 15, "t": "a river of water of life"}, {"k": ["throne"], "s": 25, "t": "out of the throne of God"}, {"k": ["crystal"], "s": 40, "t": "bright as crystal"}, {"k": ["street"], "s": 40, "t": "in the middle of the street"}]}, {"q": "Name something about the tree of life (v. 2)", "a": [{"k": ["tree"], "s": 15, "t": "the tree of life"}, {"k": ["fruit"], "s": 25, "t": "twelve fruits"}, {"k": ["month"], "s": 40, "t": "yielding its fruit each month"}, {"k": ["leaves", "leaf"], "s": 35, "t": "the leaves"}, {"k": ["heal"], "s": 40, "t": "for the healing of the nations"}]}, {"q": "Name something the Lord calls Himself in Revelation 22", "a": [{"k": ["alpha"], "s": 20, "t": "the Alpha and the Omega"}, {"k": ["first"], "s": 30, "t": "the First and the Last"}, {"k": ["root"], "s": 35, "t": "the Root of David"}, {"k": ["offspring"], "s": 50, "t": "the Offspring of David"}, {"k": ["star"], "s": 35, "t": "the bright morning star"}, {"k": ["beginning"], "s": 40, "t": "the Beginning and the End"}]}, {"q": "Who says \"Come\"? (v. 17)", "a": [{"k": ["spirit"], "s": 15, "t": "the Spirit"}, {"k": ["bride"], "s": 15, "t": "the bride"}, {"k": ["hear"], "s": 35, "t": "he who hears"}, {"k": ["thirst"], "s": 35, "t": "he who is thirsty"}, {"k": ["free"], "s": 50, "t": "take the water of life freely"}]}, {"q": "Name something else in Revelation 22", "a": [{"k": ["face"], "s": 30, "t": "they will see His face"}, {"k": ["name"], "s": 35, "t": "His name on their foreheads"}, {"k": ["reign"], "s": 35, "t": "they will reign forever"}, {"k": ["light", "lamp"], "s": 35, "t": "no need of the light of a lamp"}, {"k": ["wash", "robe"], "s": 40, "t": "blessed are those who wash their robes"}, {"k": ["soon", "quickly"], "s": 25, "t": "I come quickly"}, {"k": ["amen"], "s": 30, "t": "Amen"}, {"k": ["grace"], "s": 40, "t": "the grace of the Lord Jesus"}]}]}
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
    const own = ref && (CHAPTERS[ref] || CHAPTERS[ref + " 1"]);   // "Jude" = "Jude 1"
    return {
      ref, own: !!own,
      ladder: own ? own.ladder : FALLBACK_LADDERS[n % FALLBACK_LADDERS.length],
      climb: own ? own.climb : FALLBACK_CLIMBS[n % FALLBACK_CLIMBS.length].prompts,
      climbName: own ? ref : FALLBACK_CLIMBS[n % FALLBACK_CLIMBS.length].name
    };
  }
};
