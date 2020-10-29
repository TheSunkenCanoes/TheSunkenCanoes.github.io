/**
 * 
 */


/*clearMain() removes everything that is loaded within the main_stuff div*/
function clearMain(){
	document.getElementById("main_stuff").innerHTML = "";
}

function home(){
	  clearMain();
	  window.history.replaceState(null, null, "?page=home");
	  addParagraph("The Sunken Canoes is a band.");
}

function music(){
	clearMain();
	window.history.replaceState(null, null, "?page=music");

	addParagraph("THE SHARKENING\nThis spooky song is about sharks. It is still a work in progress");
	addSong("Shark Song.mp3");
	
	addParagraph("FALLING\nThis sad song is about falling. It is still a work in progress.");
	addSong("Falling.mp3");
}

function merch(){
	clearMain();
	window.history.replaceState(null, null, "?page=merch");
	addParagraph("We currently have no merch. If you would like to support us financially, please give me money");
	
	console.log()
}

function contact(){
	clearMain();	
	window.history.replaceState(null, null, "?page=contact");
	addParagraph("There is currently no way to contact us.");
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

//TODO: get page to detect if one of the things is open
function setup(){
	
	//get the parameters from the URL
	var queryString = window.location.search;
	addParagraph(queryString);
	var urlParams = new URLSearchParams(queryString);
	
	
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
			default:
				home();
				break;
		}
	}
	else home();//default to the home page
}
