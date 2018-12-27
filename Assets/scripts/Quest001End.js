import UnityEngine.UI;

var textBoxOnCheck : int = 0 ;

var messageBox : GameObject;

var textBox : GameObject;

var textMessage : String;

var questBox : GameObject;

var questText : GameObject;

var questName: String; 

function OnMouseDown(){
	if(textBoxOnCheck == 0){
		textBoxOnCheck = 1;
		messageBox.SetActive(true); 

		textBox.GetComponent.<Text>().text = "Vejo que você não é um imprestável!";
		yield WaitForSeconds(5);
		textBox.GetComponent.<Text>().text = "Agora vamos as respotas. Você está no Brasil...";
		yield WaitForSeconds(5);
		textBox.GetComponent.<Text>().text = "O saco que você pegou tem 500 mil reais de propina...";
		yield WaitForSeconds(5);
		textBox.GetComponent.<Text>().text = "Meu nome é LULA e o seu é LARANJA...";
		yield WaitForSeconds(5);
		textBox.GetComponent.<Text>().text = "Agora você vai ser preso e 'EU NÃO SEI DE NADA'. FIM!";
		yield WaitForSeconds(5);

		questName = "QUEST: none now...";
		questText.GetComponent.<Text>().text = questName; 

		Application.LoadLevel(0); 
	}else{ 
		textBoxOnCheck = 0;
		messageBox.SetActive(false); 
		//textMessage = "Villager: continue your question";
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

 