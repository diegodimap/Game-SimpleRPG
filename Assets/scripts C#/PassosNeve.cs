using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PassosNeve : MonoBehaviour {

	public static int onSnow = 0;
	public int internalSnow = 0;

	void Update(){
		internalSnow = onSnow;
	}

}
