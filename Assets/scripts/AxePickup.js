var distance : float = PlayerCasting.distanceFromTarget;
var textDisplay : GameObject;
var fakeAxe : GameObject;
var realAxe : GameObject;

var item222 : GameObject;

function Update(){
	distance = PlayerCasting.distanceFromTarget;
}

function OnMouseOver(){
	if(distance <= 3){
		textDisplay.SetActive(true);
		textDisplay.GetComponent.<Text>().text = "pegar machado...";
	}
}

function OnMouseExit(){
	textDisplay.SetActive(false);
	textDisplay.GetComponent.<Text>().text = "";
}

function OnMouseDown(){
	if(distance <= 3){
		realAxe.SetActive(true);
		fakeAxe.SetActive(false);
        //item222.SetActive(true);
	}
}