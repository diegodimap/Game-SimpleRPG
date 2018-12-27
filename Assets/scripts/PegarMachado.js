var axe1 : GameObject;
var axe2 : GameObject;

var box     : GameObject;
var texto   : GameObject;
var item    : GameObject;

function OnTriggerEnter (col : Collider) {
	axe1.SetActive(false);
	axe2.SetActive(true);

	box.SetActive(true);
	texto.SetActive(true);

	texto.GetComponent.<Text>().text = "Você pegou o machado!!!";
	item.GetComponent.<Text>().text = "AXE";

	yield WaitForSeconds(5);

	box.SetActive(false);
	texto.SetActive(false);
}
