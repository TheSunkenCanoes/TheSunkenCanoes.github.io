// modified from https://gist.github.com/literallylara/7ece1983fab47365108c47119afb51c7
// Reference:
// http://www-mmsp.ece.mcgill.ca/documents/audioformats/wave/wave.html
// https://de.wikipedia.org/wiki/RIFF_WAVE

// PCM Data
// --------------------------------------------
// Field           | Bytes | Content
// --------------------------------------------
// ckID            |     4 | "fmt "
// cksize          |     4 | 0x0000010 (16)
// wFormatTag      |     2 | 0x0001 (PCM)
// nChannels       |     2 | NCH
// nSamplesPerSec  |     4 | SPS
// nAvgBytesPerSec |     4 | NCH * BPS * SPS
// nBlockAlign     |     2 | NCH * BPS * NCH
// wBitsPerSample  |     2 | BPS * 8

// data_size = DUR * NCH * SPS * BPS
// file_size = 44 (Header) + data_size

var DUR = 1     // duration in seconds
var NCH = 1     // number of channels
var SPS = 44100 // samples per second
var BPS = 1     // bytes per sample

function dec2hex(n, l)
{
	n = n.toString(16);
	return new Array(l*2-n.length+1).join("0") + n;
}

function hex2str(hex)
{
	var str = [];

	if (hex.length%2) { throw new Error("hex2str(\"" + hex + "\"): invalid input (# of digits must be divisible by 2)"); }

	for(var i = 0; i < hex.length; i += 2)
	{
		str.push(String.fromCharCode(parseInt(hex.substr(i,2),16)));
	}

	return str.reverse().join("");
}

function put(n, l)
{
	return hex2str(dec2hex(n,l));
}

function createChordWave(intervals){
    var data = "";
    for (var i = 0; i < DUR; i++)
    {		
        
	    for(var j = 0; j < SPS; j++)
	    {
            var current = 0;
            var size = intervals.length;
            for(var x in intervals){
                var currentInterval = intervals[x];
                var frequency = 440*Math.pow(2,currentInterval/12);//formula to calculate frequency: fn = f0*2^(interval in semitones/12)
                current += Math.floor((Math.sin(j/SPS * Math.PI * 2 * frequency) + 1) / 2 * Math.pow(2, BPS * 8));
            }
            current/=size;
            current = Math.floor(current);
    		data += put(current, BPS);
        }
    }
    return data;
}

function createChord(intervals){

    var size = DUR * NCH * SPS * BPS;
    var data = "RIFF" + put(44 + size, 4) + "WAVEfmt " + put(16, 4);

    data += put(1              , 2); // wFormatTag (pcm)
    data += put(NCH            , 2); // nChannels
    data += put(SPS            , 4); // nSamplesPerSec
    data += put(NCH * BPS * SPS, 4); // nAvgBytesPerSec
    data += put(NCH * BPS      , 2); // nBlockAlign
    data += put(BPS * 8        , 2); // wBitsPerSample

    data += "data" + put(size, 4);

    data += createChordWave(intervals);


    var WAV = new Audio("data:Audio/WAV;base64," + btoa(data));
    WAV.setAttribute("controls","controls");
 

    

    return WAV;
}

