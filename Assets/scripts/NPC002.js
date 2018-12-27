import UnityEngine.UI;

var textBoxOnCheck : int = 0 ;

var messageBox : GameObject;

var textBox : GameObject;

var textMessage : String;

var questBox : GameObject;

var questText : GameObject;

var questName: String; 

static var ativo : int = 0;

function OnMouseDown(){
	if(textBoxOnCheck == 0 && ativo == 0){
		textBoxOnCheck = 1;
		messageBox.SetActive(true); 

		textBox.GetComponent.<Text>().text = "Servente: Me deixe em paz!";
		yield WaitForSeconds(5);
		messageBox.SetActive(false); 

	}else{ 
		if(ativo == 2){
			messageBox.SetActive(true); 
			textBox.GetComponent.<Text>().text = "Servente: Parabéns, você achou mesmo o ouro né?";
			yield WaitForSeconds(5);
			MoedasScore.moedas += 50;
			textBox.GetComponent.<Text>().text = "Servente: Pegue a metade para você!";
			yield WaitForSeconds(5);
			messageBox.SetActive(false); 
		}else{
			messageBox.SetActive(true); 
			textBox.GetComponent.<Text>().text = "Servente: Quer ganhar um pouco de ouro?";
			yield WaitForSeconds(5);
			textBox.GetComponent.<Text>().text = "Servente: Pegue essa chave e recupere o ouro do baú que está na caverna!";
			yield WaitForSeconds(5);
			messageBox.SetActive(false); 
			ativo = 3;
		}
	} 
}

function Update(){
	if(Input.GetButtonDown("Submit")){
		if(textBoxOnCheck == 1){
			messageBox.SetActive(false);
			textBoxOnCheck = 0;
//			textMessage = "Continue your mission!";
		}
	}
}

 