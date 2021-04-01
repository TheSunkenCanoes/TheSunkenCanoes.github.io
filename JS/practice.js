
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
        {name:"A", frequency:440},
        {name:"B", frequency:493.88},
        {name:"C", frequency:523.25},
        {name:"D", frequency:587.33},
        {name:"E", frequency:659.25},
        {name:"F", frequency:698.46},
        {name:"G", frequency:783.99},
    ]
 };
 var currentChord;
 var currentNote;


newChord();

function newChord(){
    //remove old chord
    document.getElementById("chord").innerHTML="";
    document.getElementById("answer").innerHTML = "";

    //add new chord
    currentChord = Math.floor(Math.random()* music.chords.length);
    currentNote = randomNote() ? Math.floor(Math.random()* music.notes.length) : 0;
    console.log(currentNote);
    var WAV = createChord(music.chords[currentChord].intervals,music.notes[currentNote].frequency);
    document.getElementById("chord").appendChild(WAV);
    WAV.play();   
}

function reveal(){
    document.getElementById("answer").innerHTML = "";
    
    if(randomNote()){
        document.getElementById("answer").innerHTML="<p>Answer: " +music.notes[currentNote].name+ music.chords[currentChord].name + "</p>";
    }
    else{
        document.getElementById("answer").innerHTML="<p>Answer: " + music.chords[currentChord].name + "</p>";
    }
    
}

function randomNote(){
    return document.getElementById('randomNotes').checked;

}