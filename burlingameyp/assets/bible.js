// Bible books + links into the Recovery Version site
(() => {
  const BASE = "https://text.recoveryversion.bible/";
  const B = [
    ["Genesis","gen",50],["Exodus","exo",40],["Leviticus","lev",27],["Numbers","num",36],["Deuteronomy","deu",34],
    ["Joshua","jos",24],["Judges","jdg",21],["Ruth","rut",4],["1 Samuel","1sa",31],["2 Samuel","2sa",24],["1 Kings","1ki",22],
    ["2 Kings","2ki",25],["1 Chronicles","1ch",29],["2 Chronicles","2ch",36],["Ezra","ezr",10],["Nehemiah","neh",13],["Esther","est",10],
    ["Job","job",42],["Psalms","psa",150],["Proverbs","prv",31],["Ecclesiastes","ecc",12],["Song of Songs","sos",8],
    ["Isaiah","isa",66],["Jeremiah","jer",52],["Lamentations","lam",5],["Ezekiel","ezk",48],["Daniel","dan",12],
    ["Hosea","hos",14],["Joel","joe",3],["Amos","amo",9],["Obadiah","oba",1],["Jonah","jon",4],["Micah","mic",7],["Nahum","nah",3],
    ["Habakkuk","hab",3],["Zephaniah","zep",3],["Haggai","hag",2],["Zechariah","zec",14],["Malachi","mal",4],
    ["Matthew","mat",28],["Mark","mrk",16],["Luke","luk",24],["John","joh",21],["Acts","act",28],["Romans","rom",16],
    ["1 Corinthians","1co",16],["2 Corinthians","2co",13],["Galatians","gal",6],["Ephesians","eph",6],["Philippians","phi",4],
    ["Colossians","col",4],["1 Thessalonians","1th",5],["2 Thessalonians","2th",3],["1 Timothy","1ti",6],["2 Timothy","2ti",4],
    ["Titus","tit",3],["Philemon","phm",1],["Hebrews","heb",13],["James","jam",5],["1 Peter","1pe",5],["2 Peter","2pe",3],
    ["1 John","1jo",5],["2 John","2jo",1],["3 John","3jo",1],["Jude","jud",1],["Revelation","rev",22]
  ];
  const byName = {}; B.forEach((b, i) => byName[b[0].toLowerCase()] = i);
  window.BIBLE = {
    BASE, books: B, NT_START: 39,
    index: name => byName[String(name || "").toLowerCase()],
    // e.g. https://text.recoveryversion.bible/58_Hebrews_11.htm
    link(book, ch) {
      const i = byName[String(book || "").toLowerCase()];
      if (i === undefined) return BASE;
      return BASE + String(i + 1).padStart(2, "0") + "_" + B[i][0].replace(/ /g, "") + "_" + (parseInt(ch, 10) || 1) + ".htm";
    },
    // next chapter after book/ch, rolling into the next book
    next(book, ch) { let i = byName[book.toLowerCase()], c = parseInt(ch, 10) + 1; if (c > B[i][2]) { i = (i + 1) % B.length; c = 1; } return [B[i][0], c]; }
  };
})();
