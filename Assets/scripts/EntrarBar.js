var textBox : GameObject;
var playerText : GameObject;
var questStatus : GameObject;

var teste : int = 0 ;

function OnTriggerEnter(col : Collider){
	if(teste == 0){
		teste+=1;
		textBox.SetActive(true);
		playerText.SetActive(true);

		playerText.GetComponent.<Text>().text = "Um bar, melhor lugar para pedir informações, como nos filmes...";
		questStatus.GetComponent.<Text>().text = "entre no bar!";
		yield WaitForSeconds(5);
		textBox.SetActive(false);
		playerText.SetActive(false);
	}
}