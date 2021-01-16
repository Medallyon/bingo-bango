import * as Colyseus from "colyseus.js";
import Player from "./Player.js";

class ConnectionHandler
{
	constructor(game)
	{
		this.game = game;

		this.host = window.location.origin.replace("http", "ws");
		this.client = new Colyseus.Client(this.host);

		this.match = null;
		this.matchScene = null;

		try
		{
			console.log(JSON.parse(decodeURIComponent((name => // https://stackoverflow.com/a/15724300/4672263
			{
				const value = `; ${document.cookie}`;
				const parts = value.split(`; ${name}=`);
				if (parts.length === 2)
					return parts.pop().split(";").shift();
			})("user"))));

			this.player = new Player(JSON.parse(decodeURIComponent((name => // https://stackoverflow.com/a/15724300/4672263
			{
				const value = `; ${document.cookie}`;
				const parts = value.split(`; ${name}=`);
				if (parts.length === 2)
					return parts.pop().split(";").shift();
			})("user"))));
		}

		catch (err)
		{
			this.player = new Player();
		}
	}

	joinOrCreateMatch()
	{
		return new Promise((resolve, reject) =>
		{
			this.client.joinOrCreate("match", { userData: this.player.toJSON() })
				.then(match =>
				{
					this.match = match;

					match.onMessage("match-load", () =>
					{
						// load 'Scene_Match' here
						this.game.scene.stop("Scene_Menu_Lobby");
						this.game.scene.start("Scene_Match");
					});

					match.onMessage("match-score-update", msg =>
					{
						// this.matchScene.updateScores(msg.scores);
					});

					match.onMessage("match-ball", msg =>
					{
						if (this.matchScene)
							this.matchScene.playBall(msg.ball);
					});

					match.onMessage("match-start", () =>
					{
						this.matchScene.start();
					});

					match.onMessage("match-end", () =>
					{
						this.matchScene.end();
					});

					match.onLeave(code =>
					{
						window.alert("This match was abruptly ended due to a server failure. Sorry.");

						this.leaveMatch();
					});

					resolve(match);
				}).catch(reject);
		});
	}

	beginMatch()
	{
		if (!this.match)
			return;

		this.match.send("match-host-begin");
	}

	leaveMatch()
	{
		if (!this.match)
			return;

		this.match.removeAllListeners();
		this.match.leave();
		this.match = null;

		if (this.matchScene)
		{
			this.matchScene.scene.start("Scene_Menu_Main");
			this.matchScene = null;
		}
	}
}

export default ConnectionHandler;
