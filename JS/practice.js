
 let music = {
    chords:[
       // {name:"MAJOR", intervals:[0,4,7]},
       // {name:"MINOR", intervals:[0,3,6]},
        {name:"Maj6",intervals:[0,4,7,9]},
        {name:"min6  ",intervals:[0,3,7,9]},
        {name:"Maj7  ",intervals:[0,4,7,11]},
        {name:"minmaj7 ",intervals:[0,3,7,11]},
        {name:"dom7  ",intervals:[0,4,7,10]},
        {name:"min7 ",intervals:[0,3,7,10]},
        {name:"halfdim ",intervals:[0,3,6,10]},
        {name:"fulldim ",intervals:[0,3,6,9]},
        {name:"maj9 ",intervals:[0,4,7,11,14]},
        {name:"min9 ",intervals:[0,3,7,10,14]},
        {name:"dom9 ",intervals:[0,4,7,10,14]},
        {name:"b9",intervals:[0,4,7,10,13]},
        {name:"#9",intervals:[0,4,7,10,15]}
    ],
    notes:[
        {name:"C", frequency:440}
    ]
 };
 var currentChord;
newChord();

function newChord(){
    //remove old chord
    document.getElementById("chord").innerHTML="";
    document.getElementById("answer").innerHTML = "";

    //add new chord
    currentChord = Math.floor(Math.random()* music.chords.length);
    var WAV = createChord(music.chords[currentChord].intervals);
    document.getElementById("chord").appendChild(WAV);
    WAV.play();   
}

function reveal(){
    document.getElementById("answer").innerHTML = "";
    document.getElementById("answer").innerHTML="<p>Answer: " + music.chords[currentChord].name + "</p>";
}