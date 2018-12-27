var preto : GameObject;
var fade  : GameObject;
var mira  : GameObject;

var box1  : GameObject;
var box2  : GameObject;
var questbox  : GameObject;

function Start(){
	mira.SetActive(false); 
	box1.SetActive(false); 
	box2.SetActive(false); 
	questbox.SetActive(false); 

	preto.SetActive(true);
	fade.SetActive(true); 
    yield WaitForSeconds(1);
	fade.GetComponent("Animator").enabled=true;
	preto.SetActive(false);
	yield WaitForSeconds(2);
	fade.GetComponent("Animator").enabled=false;
	fade.SetActive(false); 

	mira.SetActive(true); 

}