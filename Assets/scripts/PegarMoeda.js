function OnTriggerEnter(info : Collider){

	var som : AudioSource = GetComponent.<AudioSource>();
	som.Play();

	MoedasScore.moedas +=1 ;

	transform.position = Vector3(0,-1000,0);

	yield WaitForSeconds(2);

	Destroy(gameObject);
} 