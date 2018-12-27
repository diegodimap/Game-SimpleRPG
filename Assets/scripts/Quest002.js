var questUpdate : GameObject;
var playerText : GameObject;
var textDisplay : GameObject;
var inventoryPanel : GameObject;
var infoPanel : GameObject;

function Start(){

	//Cursor.visible = false;
	//Screen.lockCursor = true;

	inventoryPanel.SetActive(false);
	infoPanel.SetActive(false);

	transform.position = Vector3(0,-1000,0); 
	questUpdate.GetComponent.<Text>().text = "QUEST: saia da floresta...";
	yield WaitForSeconds(3);
	playerText.GetComponent.<Text>().text = "onde estou?";
	yield WaitForSeconds(1);
	playerText.GetComponent.<Text>().text = "eu preciso sair desta floresta...";
	yield WaitForSeconds(2);
	playerText.SetActive(false);
	textDisplay.SetActive(false);
	this.gameObject.SetActive(false);
}