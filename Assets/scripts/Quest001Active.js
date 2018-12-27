var textBoxOnCheck : int = 0;

var messageBox : GameObject;

var textBox : GameObject;

var questItemToClose : GameObject;

var questItemToShow : GameObject; 

var questText : String;

var questName : String;

function OnMouseDown(){
	if(textBoxOnCheck == 0){
		textBoxOnCheck = 1;
		messageBox.SetActive(true); 
		textBox.GetComponent.<Text>().text = "Você pegou o saco, agora vá devolver no bar!";
		questName = "MISSÃO: Devolva o saco!";
		yield WaitForSeconds(2);
		gameObject.SetActive(false);
		questItemToClose.SetActive(false);
		questItemToShow.SetActive(true);
		messageBox.SetActive(false); 
	}else{ 
		textBoxOnCheck = 0;
		messageBox.SetActive(false); 
		//textMessage = "Villager: continue your question";
	} 
}
