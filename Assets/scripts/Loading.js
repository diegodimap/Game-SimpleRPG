var player : GameObject;
var startingScript1 : GameObject;
var startingScript2 : GameObject;
var startingScript3 : GameObject;
var startingScript4 : GameObject;
var cuboSalvar : GameObject;

var playerX : float =  50.00;
var playerY : float = -19.70;
var playerZ : float =  21.36;

var loadedCode : String;

var questStatus : GameObject;


function Start(){
	loadedCode = funcoesMenu.globalLoad;

	if(loadedCode == "bar"){
		player.transform.position = cuboSalvar.transform.position; //Vector3(50,200.70,21.36);
		startingScript1.SetActive(false);
		startingScript2.SetActive(false);
		startingScript3.SetActive(false);
		startingScript3.SetActive(false);
	}
}