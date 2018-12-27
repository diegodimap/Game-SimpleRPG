import System.IO;
var fileName = "save.myass";
var loadCode : String;
var semJogoSalvo : GameObject;

static var globalLoad : String;

function Start(){
	var outputFile = new StreamReader(fileName);
	line = outputFile.ReadLine();

	while(line != null){
		loadCode += line;
		line = outputFile.ReadLine();
	}
	outputFile.Close();
	//Application.LoadLevel(1); 
}

function loadGame(){
	globalLoad = loadCode;

	if(loadCode == "bar"){
		Application.LoadLevel(1); 
	}else{
		semJogoSalvo.SetActive(true);
	}
}

function newGame(){
	Application.LoadLevel(1); 
}

function quitGame(){
	Application.Quit();
}