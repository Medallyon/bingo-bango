import * as Phaser from "phaser";

import Scene from "../objects/Scene.js";
import SceneButton from "../objects/SceneButton.js";
import Leaderboard from "../objects/Leaderboard.js";
class Scene_Menu_Leaderboard extends Scene
{
	constructor()
	{
		super({
			key: "Scene_Menu_Leaderboard",
			wallpaper: true
		});
		this.anims = null;
	}
	_createConfetti()
	{
		this.anims.create({
			key: "Confetti",
			frames: this.anims.generateFrameNames("confetti", {start:0, end:59, zeroPad:2, prefix:"confetti_", suffix:".png"}),
			frameRate:30,
			repeat:0,
			hideOnComplete: true,
		});
		this.confetti=this.add.sprite(this.width / 2,this.height / 1,"confetti");
		this.confetti.play("Confetti");
	}
	_createBalloons()
	{
		this.anims.create({
			key: "Balloons",
			frames: this.anims.generateFrameNames("balloons", {start:0, end:59, zeroPad:2, prefix:"confetti_", suffix:"."}),
			frameRate:30,
			repeat:0,
			hideOnComplete: true,
		});
		this.confetti=this.add.sprite(this.width / 2,this.height / 1,"confetti");
		this.confetti.play("Confetti");
	}
	create(data = {})
	{
		super.create(data);

		/* Settings Panel SceneButtonground */
		this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.50, "panel_leaderboard")
			.setScale(1.3);

		this.make.text({
			x: this.width / 2.8,
			y: this.height / 4,
			text: "Name",
			style: {
				font: "30px monospace",
				fill: "#FFFFFF",
				align: "center"
			}
		}).setOrigin(.5);

		this.make.text({
			x: this.width / 1.6,
			y: this.height / 4,
			text: "Score",
			style: {
				font: "30px monospace",
				fill: "#FFFFFF",
				align: "center"
			}
		}).setOrigin(.5);

		/* Back Button */
		this.add.existing(new SceneButton("Scene_Menu_Main", {
			scene: this,
			x: this.width * .1,
			y: this.height * .075,
			defaultButtonEvents: true
		}).setScale(.5));
		//ANIMATION
<<<<<<< HEAD
		this._createConfetti();
=======
		this.anims.create({
			key:"Celebrate",
			frames:
			this.anims.generateFrameNames("confetti",
				{
					start: 0,
					end: 59,
					zeroPad:2,
					prefix:"confetti_",
					suffix:".png"
				}),
			frameRate:30,
			repeat:-1,
		});
		this.confetti= this.add.sprite(this.width / 2,this.height / 2,"confetti");
		this.confetti.play("Celebrate");
>>>>>>> 387274c8f2e0c8928cb7fab03e9656c76cbc109b
	}

	update()
	{

	}
}

export default Scene_Menu_Leaderboard;
