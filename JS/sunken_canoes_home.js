/**
 * 
 */

/*clearMain() removes everything that is loaded within the main_stuff div*/
function clearMain(){
	document.getElementById("main_stuff").innerHTML = "";
	document.getElementById("form").hidden = true;
	document.getElementById("paypal").hidden = true;
}

function home(){
	  clearMain();
	  window.history.replaceState(null, null, "?page=home");
	  addParagraph("The Sunken Canoes is a socially-distanced band based in Ottawa Ontario, started in the summer of 2020. We are currently working on creating our first album.");
}

function music(){
	clearMain();
	window.history.replaceState(null, null, "?page=music");

	addParagraph("THE SHARKENING\nThis spooky song is about sharks. It is still a work in progress");
	addSong("Shark Song.mp3");
	
	addParagraph("FALLING\nThis sad song is about falling. It is still a work in progress.");
	addSong("Falling.mp3");
	
	addParagraph("THINK I LOVE YOU\nThis is a sweet love song about love. It is still a work in progress, and the metronome will not be included in the final version.");
	addSong("think I love you.mp3");
}

function donate(){
	clearMain();
	window.history.replaceState(null, null, "?page=donate");
	
	
	addParagraph("All donations will go towards helping us create new music.");
	
	document.getElementById("paypal").removeAttribute("hidden");	
}

function contact(){
	clearMain();	
	window.history.replaceState(null, null, "?page=contact");
	addParagraph("If you would like to contact us, leave a message.");	
	document.getElementById("form").removeAttribute("hidden");	
}

function addSong(name){
	var song = document.createElement('audio');
	song.controls = "controls";
	song.src = name;
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
			case "donate":
				donate();
				break;
			default:
				home();
				break;
		}
	}
	else home();//default to the home page
}
