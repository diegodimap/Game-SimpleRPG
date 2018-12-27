var hitpoints : int = 10;

var totarget : float;

var range : float = 0.5;

function OnMouseDown(){
	var som : AudioSource = GetComponent.<AudioSource>();
	som.Play();
	GetComponent.<Animation>().Play("animacaoPorta");		
}