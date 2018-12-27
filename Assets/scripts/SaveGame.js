import System.IO;

var textBox : GameObject;
var playerText : GameObject;

var fileName = "save.myass";

function OnTriggerEnter(col : Collider){
	var outputFile = File.CreateText(fileName);
	outputFile.WriteLine("bar");
	outputFile.Close();

	textBox.SetActive(true);
	playerText.SetActive(true);
	playerText.GetComponent.<Text>().text = "O jogo foi salvo com sucesso!";
	yield WaitForSeconds(3);
	textBox.SetActive(false);
	playerText.SetActive(false);

}
