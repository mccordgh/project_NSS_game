requirejs.config({
	"baseURL":"js",
	"paths":{
		"Class":"libs/class",
		"Jquery":"libs/jquery",
		//Classes
		"Animation":"app/classes/gfx/Animation",
		"Assets":"app/classes/gfx/Assets",
		"Bat":"app/classes/entities/creatures/monsters/Bat",
		"Castle":"app/classes/entities/statics/Castle",
		"Creature":"app/classes/entities/creatures/Creature",
		"Display":"app/classes/display/Display",
		"DirtTile":"app/classes/tiles/DirtTile",
		"Entity":"app/classes/entities/Entity",
		"EntityManager":"app/classes/entities/EntityManager",
		"Game":"app/classes/Game",
		"GameCamera":"app/classes/gfx/GameCamera",
		"GameOverState":"app/classes/states/GameOverState",
		"GameState":"app/classes/states/GameState",
		"GrassTile":"app/classes/tiles/GrassTile",
		"Handler":"app/classes/Handler",
		"HealthBar":"app/classes/entities/helpers/HealthBar",
		"Helper":"app/classes/entities/helpers/Helper",
		"HUD":"app/classes/entities/helpers/HUD",
		"ImageLoader":"app/classes/gfx/ImageLoader",
		"KeyManager":"app/classes/input/KeyManager",
		"Launcher":"app/classes/Launcher",
		"MainMenu":"app/classes/display/menus/MainMenu",
		"MenuState":"app/classes/states/MenuState",
		"Player":"app/classes/entities/creatures/Player",
		"Portal":"app/classes/entities/statics/Portal",
		"Rectangle":"app/classes/gfx/shapes/Rectangle",
		"SoundManager":"app/classes/sounds/SoundManager",
		"SpatialGrid":"app/classes/utils/SpatialGrid",
		"SpriteSheet":"app/classes/gfx/SpriteSheet",
		"State":"app/classes/states/State",
		"StaticEntity":"app/classes/entities/statics/StaticEntity",
		"StoneTile":"app/classes/tiles/StoneTile",
		"Tile":"app/classes/tiles/Tile",
		"TileLoader":"app/classes/tiles/TileLoader",
		"Tree":"app/classes/entities/statics/Tree",
		"Utils":"app/classes/utils/Utils",
		"WaterTile":"app/classes/tiles/WaterTile",
		"World":"app/classes/worlds/World"
	}
});

require(['app/main']);