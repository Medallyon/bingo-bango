import Button from "./buttons/Button.js";
import ImageOverlay from "./buttons/overlays/ImageOverlay.js";
import TextOverlay from "./buttons/overlays/TextOverlay.js";

class CardTile extends Button
{
	static get BASE_SCORE()
	{
		return 50;
	}

	constructor(data)
	{
		super(Object.assign(data, {
			overlay: new TextOverlay(data.scene, data.number.toString(), {
				text: {
					fontSize: 80,
					fontStyle: "bold"
				}
			}),
			defaultButtonHoverEvents: true
		}));

		this.overlay.text.setStroke("#000", 6);

		this.card = data.card;
		this.number = data.number;
		this.completed = false;

		this.on("pointerup", () =>
		{
			console.log(`Clicked on ${this.overlay.text.text}`);
			this.overlay.wobble(.65);

			const bingos = this.card.play(this.number);
			if (bingos > 0)
				this.scene.bingo();
		});
	}

	complete()
	{
		this.completed = true;
		this.scene.game.audio.effects.play("audio_button_03");
		this.removeAllListeners();
		this.overlay = new ImageOverlay(this.scene, "star").setScale(.8);
		this.scene.score.tracker.score += CardTile.BASE_SCORE;
		// TODO: Play 'completed' animation on tile
		// TODO: Play 'completed' sound in "effects" channel
	}
}

export default CardTile;
