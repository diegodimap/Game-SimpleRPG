var inventoryStatus : int;

var inventoryPanel : GameObject; 
var infoPanel : GameObject;

function Update () {
	if(Input.GetButtonDown("Inventario")){
		if(inventoryStatus == 0){
			inventoryStatus = 1;
			Screen.lockCursor = false;
			Cursor.visible = true;
			//Screen.showCursor = true;
			inventoryPanel.SetActive(true);
		}else{
			inventoryStatus = 0;
			Screen.lockCursor = true;
			Cursor.visible = false;
			//Screen.showCursor = false;
			inventoryPanel.SetActive(false);
			infoPanel.SetActive(false);
		}
	} 
}
