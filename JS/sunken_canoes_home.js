/**
 * 
 */

/*clearMain() removes everything that is loaded within the main_stuff div*/
function clearMain(){
	document.getElementById("main_stuff").innerHTML = "";
	document.getElementById("form").hidden = true;
	document.getElementById("paypal").hidden = true;
}


function route(destination){
	switch(destination){
	case "home":
		home();
		break;
	case "music":
		music();
		break;
	case "contact":
		contact();
		break;
	case "download":
		download();
		break;
	case "practice":
		practice();
		break;
	}
}

function home(){
	  clearMain();
	  window.history.replaceState(null, null, "?page=home");
	  addParagraph("The Sunken Canoes started in Ottawa Ontario in the summer of 2020. We wrote some songs, recorded them, and eventually released an album.");
	  var albumArt = document.createElement('img');
	  albumArt.src = "TheSunkenCanoesAlbum.jpg";
	  albumArt.style.maxInlineSize="50%";
	  albumArt.style.paddingLeft="10px";
	  document.getElementById("main_stuff").appendChild(albumArt);

}

function music(){
	clearMain();
	window.history.replaceState(null, null, "?page=music");

	addParagraph("Space Drugs\nA song about drugs from space");
	addSong("Space Drugs.mp3");

	addParagraph("The Sunken Canoes\nHey! That's the name of the band!");
	addSong("The Sunken Canoes.mp3");

	addParagraph("Shark Song\nA scary (not really) song about sharks");
	addSong("Shark Song.mp3");
	
	addParagraph("Think I Love You\nIs this a love song? Perhaps.");
	addSong("Think I Love You.mp3");
	
	addParagraph("This Song Was Not Written To Launder Money\nA song that contains only true facts.");
	addSong("This Song Was Not Written To Launder Money.mp3");

	addParagraph("Goodbye\nAll good things must someday end.");
	addSong("Goodbye.mp3");
}

function download(){
	clearMain();
	window.history.replaceState(null, null, "?page=download");
	addParagraph("Get our first album here:");
	var download = document.createElement('a');
	download.href = "songs/The Sunken Canoes.zip";
	download.innerText = "Download";
	download.setAttribute("download","");
	download.setAttribute("class","btn btn-primary btn-lg")
	download.style.marginLeft = "10px";
	document.getElementById("main_stuff").appendChild(download);

	addParagraph("Our music is available for free. If you like it, consider leaving a donation.");
	
	document.getElementById("paypal").removeAttribute("hidden");	
}

function contact(){
	clearMain();	
	window.history.replaceState(null, null, "?page=contact");
	addParagraph("If you would like to contact us, leave a message.");	
	document.getElementById("form").removeAttribute("hidden");	
}

function practice(){
	window.location.href = 'practice.html'
}


function addSong(name){
	var song = document.createElement('audio');
	song.controls = "controls";
	song.src = "songs/"+name;
	song.id = name;
	song.type = "audio/mpeg";
	document.getElementById("main_stuff").appendChild(song);
}

function addParagraph(text){
	var para = document.createElement("P");
	  para.innerText = text;
	  document.getElementById("main_stuff").appendChild(para);	  
}

//Checks variables in URL and sets page up appropriately
function setup(){
	
	//get the parameters from the URL
	var queryString = window.location.search;
	addParagraph(queryString);
	var urlParams = new URLSearchParams(queryString);
	
	//calls set up for appropriate page
	if (urlParams.has('page')){
		var page = urlParams.get('page');
		switch(page){
			case "home":
				home();
				break;
			case "music":
				music();
				break;
			case "merch":
				merch();
				break;
			case "contact":
				contact();
				break;
			case "download":
				download();
				break;
			default:
				home();
				break;
		}
	}
	else home();//default to the home page
}
