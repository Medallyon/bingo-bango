import * as Phaser from "phaser";

import Button from "./buttons/Button.js";

class Back extends Button
{
	constructor(targetScene, data)
	{
		super(Object.assign({
			texture: "button_back",
			on: {
				pointerup: (pointer) =>
				{
					// left mouse button
					if (pointer.button !== 0)
						return;

					data.scene.scene.sleep();
					data.scene.scene.run(targetScene);
				}
			}
		}, data));
	}
}

export default Back;
