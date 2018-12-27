import UnityEngine.UI;

var textBoxOnCheck : int = 0 ;

var messageBox : GameObject;

var textBox : GameObject;

var textMessage : String;

var questBox : GameObject;

var questText : GameObject;

var questName: String; 

var questItemToShow : GameObject;

function OnMouseDown(){
	if(textBoxOnCheck == 0){
		questItemToShow.SetActive(true);
		textBoxOnCheck = 1;
		messageBox.SetActive(true); 

		textBox.GetComponent.<Text>().text = "Bom dia forasteiro... eu sei que está perdido mas aqui não costumamos dar informações de graça...";
		yield WaitForSeconds(3);
		textBox.GetComponent.<Text>().text = "Posso lhe dizer algumas coisas mas para isso você precisará recuperar uma coisa para mim...";
		yield WaitForSeconds(3);
		textBox.GetComponent.<Text>().text = "Há um saco com conteúdo muito importante no final de uma ponte, preciso que o traga para mim...";
		yield WaitForSeconds(3);
		textBox.GetComponent.<Text>().text = "Quando você voltar com o saco eu lhe direi que lugar é este e como veio parar aqui. Agora vaza!";
		yield WaitForSeconds(3);

		questName = "MISSÃO: Vai pegar o saco!";
		questText.GetComponent.<Text>().text = questName;
		messageBox.SetActive(false);

		NPC002.ativo = 1;
	}else{ 
		textBoxOnCheck = 0;
		messageBox.SetActive(false); 
		textMessage = "Villager: continue your question";
	} 
}

function Update(){
	if(Input.GetButtonDown("Submit")){
		if(textBoxOnCheck == 1){
			messageBox.SetActive(false);
			textBoxOnCheck = 0;
			textMessage = "Continue your mission!";
		}
	}
}

 