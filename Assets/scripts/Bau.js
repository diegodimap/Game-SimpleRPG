var messageBox : GameObject;

var textBox : GameObject;

function OnMouseDown () {
	if(	NPC002.ativo == 3){
		NPC002.ativo = 2;
		messageBox.SetActive(true); 

		textBox.GetComponent.<Text>().text = "Você pegou o ouro do baú!";
		yield WaitForSeconds(5);
		messageBox.SetActive(false);
	}else{
		messageBox.SetActive(true); 

		textBox.GetComponent.<Text>().text = "Você precisa da chave do baú!";
		yield WaitForSeconds(5);
		messageBox.SetActive(false);
	}
}
