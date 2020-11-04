/**
 * 
 */

/*clearMain() removes everything that is loaded within the main_stuff div*/
function clearMain(){
	document.getElementById("main_stuff").innerHTML = "";
	document.getElementById("form").hidden = true;
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

function merch(){
	clearMain();
	window.history.replaceState(null, null, "?page=merch");
	addParagraph("We currently have no merch. If you would like to support us financially, please give me money");
	
	console.log()
}

function contact(){
	clearMain();	
	window.history.replaceState(null, null, "?page=contact");
	addParagraph("If you would like to contact us, leave a message.");
	
	document.getElementById("form").removeAttribute("hidden");
	
	/*var form = document.createElement('form');
	form.innerText = '<form'+
	  'action="https://formspree.io/f/mqkgbwwo"' +
		  'method="POST"' +
		'>' +
		  '<label>' +
		    'Your contact info (optional):' +
		    '<input type="text" name="_replyto">' +
		  '</label>' +
		  '<label>' +
		    'Your message:'+
		    '<textarea name="message"></textarea>'+
		  '</label>'+
		  '<button type="submit">Send</button>' +
		'</form>';
	
	document.getElementById("main_stuff").innerHTML = form;*/
	
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
