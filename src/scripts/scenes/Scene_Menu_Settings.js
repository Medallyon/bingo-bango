import * as Phaser from "phaser";

import Scene from "../objects/Scene.js";
import Slider from "../objects/settings/variations/Slider.js";
import Dropdown from "../objects/settings/variations/Dropdown.js";

class Scene_Menu_Settings extends Scene
{
	constructor()
	{
		super({
			key: "Scene_Menu_Settings",
			wallpaper: true
		});
	}

	create(data = {})
	{
		super.create(data);

		/* Setting Panel Background */
		this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.50, "panel_settings")
			.setScale(0.7);

		/* Dropdown Menus */

		this.add.existing(new Dropdown({
			scene: this,
			x: this.width * .6,
			y: this.height * .35,
			key: "voicepack",
			title: "Announcer Pack",
			choices: [{
				name: "deyan"
			}]
		}));

		/* Volume Sliders */

		const DEFAULTS_SLIDER = {
			scene: this,
			element: {
				width: this.width * .4, // length
				height: 20, // thiccness
			}
		};

		// volume-master slider
		this.add.existing(new Slider(Object.assign(DEFAULTS_SLIDER, {
			x: this.width * .5,
			y: this.height * .5,
			key: "volumes.master",
			title: "Master",
		})));

		// volume-music slider
		this.add.existing(new Slider(Object.assign(DEFAULTS_SLIDER, {
			x: this.width * .5,
			y: this.height * .6,
			key: "volumes.music",
			title: "Music",
		})));

		// volume-voice slider
		this.add.existing(new Slider(Object.assign(DEFAULTS_SLIDER, {
			x: this.width * .5,
			y: this.height * .7,
			key: "volumes.voice",
			title: "Announcers",
		})));

		// volume-effects slider
		this.add.existing(new Slider(Object.assign(DEFAULTS_SLIDER, {
			x: this.width * .5,
			y: this.height * .8,
			key: "volumes.effects",
			title: "Effects",
		})));
	}
}

export default Scene_Menu_Settings;
