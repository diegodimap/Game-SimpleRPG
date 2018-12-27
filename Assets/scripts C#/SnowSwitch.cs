using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityStandardAssets.Characters.FirstPerson;

public class SnowSwitch : MonoBehaviour {
	void OnTriggerEnter(){
		if (PassosNeve.onSnow == 1) {
			PassosNeve.onSnow = 0;
			FirstPersonController.isNeve = 0;
		} else {
			PassosNeve.onSnow = 1;
			FirstPersonController.isNeve = 1;
		}
	}
}
