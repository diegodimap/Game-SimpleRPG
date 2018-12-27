
var  slowdownFactor = 0.05f;
var  slowdownLength = 2;

function Update(){
	Time.timeScale += (1f / slowdownLength) *Time.unscaledDeltaTime; 
	Time.timeScale = Mathf.Clamp(Time.timeScale, 0f, 1f);
}

function OnMouseDown(){
	Time.timeScale = slowdownFactor;
	Time.fixedDeltaTime = Time.timeScale * .02f;
}

function OnMouseUp(){
	//Time.timeScale = slowdownFactor;
	//Time.fixedDeltaTime = Time.timeScale * .02f;
}
