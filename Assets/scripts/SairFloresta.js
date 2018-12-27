var textBox : GameObject;
var playerText : GameObject;
var questStatus : GameObject;
var questbox : GameObject;

var teste : int = 0 ;

function OnTriggerEnter(col : Collider){
	if(teste == 0){
		teste += 1;

		textBox.SetActive(true);
		playerText.SetActive(true);

		playerText.GetComponent.<Text>().text = "parece que tem um caminho por aqui...";
		questStatus.GetComponent.<Text>().text = "siga pelo caminho";
		yield WaitForSeconds(5);

		questbox.SetActive(true);

		textBox.SetActive(false);
		playerText.SetActive(false);
	}
}