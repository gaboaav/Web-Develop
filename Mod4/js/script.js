var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
console.log(names);
for (var name in names) {
    var firstLetter=names[name].charAt(0);
    firstLetter=firstLetter.toLowerCase();
    if (firstLetter=='j') {
      byeSpeaker.speak(names[name]);
    }
    else{
      helloSpeaker.speak(names[name]);
    }
}