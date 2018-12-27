var textBox : GameObject;
var playerText : GameObject;
var questStatus : GameObject;

var teste : int = 0 ;

function OnTriggerEnter(col : Collider){
	if(teste == 0){
		teste+=1;
		textBox.SetActive(true);
		playerText.SetActive(true);

		playerText.GetComponent.<Text>().text = "Um vilarejo! Preciso ir até lá saber onde estou e como vim parar aqui.";
		questStatus.GetComponent.<Text>().text = "vá até o vilarejo";
		yield WaitForSeconds(5);
		textBox.SetActive(false);
		playerText.SetActive(false);
	}
}