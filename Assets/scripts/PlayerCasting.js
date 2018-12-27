static var distanceFromTarget :float;

function Update () {
	var hit : RaycastHit;
	if(Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), hit)){
		distanceFromTarget = hit.distance;
	}
}
