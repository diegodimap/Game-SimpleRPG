function OnGUI(){
	if(GUI.Button (Rect(Screen.width/2-150, Screen.height/2,100,30), "Jogar Saporra?" )){
		Application.LoadLevel(1); 
		//Application.SceneManager.LoadScene(1);
	}
	if(GUI.Button (Rect(Screen.width/2-150, Screen.height/2+40,100,30), "Eu já Desisti!" )){
		Application.Quit();
	} 
}