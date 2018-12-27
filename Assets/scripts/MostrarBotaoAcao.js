var textBox : GameObject;
var playerText : GameObject;
var questStatus : GameObject;

var teste : int = 0 ;

function OnTriggerEnter(col : Collider){
	if(teste == 0){
		teste+=1;
		textBox.SetActive(true);
		playerText.SetActive(true);

		playerText.GetComponent.<Text>().text = "Preciso abrir essa porta";
		questStatus.GetComponent.<Text>().text = "Aperte 'E' para abrir!";
		yield WaitForSeconds(3);
		textBox.SetActive(false);
		playerText.SetActive(false);
	}
}