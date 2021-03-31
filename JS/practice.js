
 let chords = {
    chords:[
        {name:"MAJOR", intervals:[0,4,7]},
        {name:"MINOR", intervals:[0,3,6]},
        {name:"Maj6",intervals:[0,4,7,9]},
        // {name:"min6",intervals:[0]},
        // {name:"maj7",intervals:[0]},
        // {name:"dominant7",intervals:[0]},
        // {name:"minor7",intervals:[0]},
        // {name:"halfDim7",intervals:[0]},
        // {name:"dim7",intervals:[0]},
        // {name:"minMaj7",intervals:[0]},
        // {name:"maj9",intervals:[0]},
        // {name:"min9",intervals:[0]},
        // {name:"dominant9",intervals:[0]},
        // {name:"7(b9)",intervals:[0]},
        // {name:"7(#9)",intervals:[0]},
    ]
 };
 var currentChord;
newChord();

function newChord(){
    //remove old chord
    document.getElementById("chord").innerHTML="";

    //add new chord
    currentChord = Math.floor(Math.random()* chords.chords.length);
    var WAV = createChord(chords.chords[currentChord].intervals);
    document.getElementById("chord").appendChild(WAV);
    WAV.play();   
}

function reveal(){
    alert(chords.chords[currentChord].name);
}