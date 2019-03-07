function Game() {
	let gameContainer = jQuery('#game-container');
	let notice = gameContainer.find('#notice');
	let hud = gameContainer.find('#hud');
	let boardElement = gameContainer.find('#board');
	let movesHud = jQuery('#moves');
	let pushesHud = jQuery('#pushes');
	let board = {};
	let targets = [];
	let w = gameContainer.attr('data-w')|0;
	let h = gameContainer.attr('data-h')|0;

	for (let y = 0; y < gameContainer.attr('data-h')|0; ++y) {
		for (let x = 0; x < gameContainer.attr('data-w')|0; ++x) {
			let cellName = x + '-' + y;
			board[cellName] = boardElement.find('#' + cellName);
		}
	}

	let level = gameContainer.attr('data-level')|0;

	let game = {};

	game.levelNum = gameContainer.attr('data-level')|0;
	game.level = Levels.get(game.levelNum);

	// use Controller
	Controller.setup();

	// init level
	let map = game.level.map;
	if (game.level.padLeft > 0) {
		for (let i in map) {
			map[i].unshift('');
		}
	}

	for (let y in map) {
		for (let x in map[y]) {
			let cell = map[y][x];
			let cellName = x + '-' + y;
			let cellVal = (cell === '*')
				? '$'
				: (cell === '-')
					? ''
					: cell;
			board[cellName].attr('data-cell', cellVal);
			let cellClass = '';
			switch (cell) {
				case '#':
					cellClass = 'wall';
					break;
				case '$':
					// cellClass = 'box';
					break;
				case '@':
					// cellClass = 'hero';
					break;
				case '.':
				case '*':
					targets.push(cellName);
					cellClass = 'target';
					break;
			}
			if (cellClass) {
				board[cellName].addClass(cellClass);
			}
		}
	}

	game.hero = {
		element: boardElement.find('[data-cell="@"]')
	};
	game.hero.x = game.hero.element.attr('data-x')|0;
	game.hero.y = game.hero.element.attr('data-y')|0;

	let getXY = function(strCoords) {
		let pieces = strCoords.split('-');
		let x = pieces[0]|0;
		let y = pieces[1]|0;
		return {
			x: x,
			y: y
		};
	};

	// flood pavement
	let floodPavement = function(x, y) {
		let target = board[x + '-' + y];
		if (target.is('.pavement') || target.is('.wall')) {
			return;
		}
		target.addClass('pavement');
		floodPavement(x, y - 1);
		floodPavement(x, y + 1);
		floodPavement(x - 1, y);
		floodPavement(x + 1, y);
	};
	floodPavement(game.hero.x, game.hero.y);

	game.moves = 0;
	game.pushes = 0;

	// game methods
	game.incMoves = function() {
		game.moves += 1;
		movesHud.text(game.moves);
	};
	game.incPushes = function() {
		game.pushes += 1;
		pushesHud.text(game.pushes);
	};
	game.canMove = function(x, y) {
		if (x < 0 || x >= w || y < 0 || y >= h) {
			return false;
		}
		let check = board[x + '-' + y].attr('data-cell');
		return check === '' || check === '.';
	};
	game.canPush = function(x, y, x2, y2) {
		return (board[x + '-' + y].attr('data-cell') === '$' && game.canMove(x2, y2));
	};
	game.moveCell = function(src, dest) {
		let coords = getXY(src);
		let orig = map[coords.y][coords.x];
		board[dest].attr('data-cell', board[src].attr('data-cell'));
		board[src].attr('data-cell', (orig === '.' ? '.' : ''));
	};
	game.updateHero = function(src, dest, dir) {
		game.moveCell(src, dest);
		let coords = getXY(dest);
		game.hero.element = board[dest];
		game.hero.x = coords.x|0;
		game.hero.y = coords.y|0;
		game.hero.element.removeClass('dir-right').removeClass('dir-left').removeClass('dir-up').removeClass('dir-down');
		game.hero.element.addClass('dir-' + dir);
		game.incMoves();
	};
	game.check = function() {
		for (let i in targets) {
			let target = targets[i];
			if (board[target].attr('data-cell') !== '$') {
				return false;
			}
		}
		return true;
	};
	game.win = function() {
		notice.html(
			'You Won!<br/><a href="?level=' + (level + 1) + '">Next level!</a>'
		).show();
	};
	// <x, y> is the hero destination cell
	// <x2, y2> is the eventual box destination cell
	// dir is used only to change the hero sprite direction
	game.move = function(x, y, x2, y2, dir) {
		let src = game.hero.x + '-' + game.hero.y;
		let dest = x + '-' + y;
		let pushDest = x2 + '-' + y2;
		// canMove check if the <x, y> cell is empty
		if (game.canMove(x, y)) {
			game.updateHero(src, dest, dir);
		// canPush check if the <x, y> cell is is a box and <x2, y2> is empty
		} else if (game.canPush(x, y, x2, y2)) {
			game.moveCell(dest, pushDest);
			game.updateHero(src, dest, dir);
			game.incPushes();
		}
		// check if the level is completed; Controller.off simply remove event
		// handlers so the hero doesn't go around
		if (game.check()) {
			Controller.off('up');
			Controller.off('down');
			Controller.off('right');
			Controller.off('left');
			setTimeout(function() {
				game.win();
			}, 100);
		}
	};
	game.moveUp = function() {
		game.move(game.hero.x, game.hero.y - 1, game.hero.x, game.hero.y - 2, 'up');
	};
	game.moveDown = function() {
		game.move(game.hero.x, game.hero.y + 1, game.hero.x, game.hero.y + 2, 'down');
	};
	game.moveLeft = function() {
		game.move(game.hero.x - 1, game.hero.y, game.hero.x - 2, game.hero.y, 'left');
	};
	game.moveRight = function() {
		game.move(game.hero.x + 1, game.hero.y, game.hero.x + 2, game.hero.y, 'right');
	};

	Controller.on('up', game.moveUp);
	Controller.on('down', game.moveDown);
	Controller.on('right', game.moveRight);
	Controller.on('left', game.moveLeft);

	return game;
};