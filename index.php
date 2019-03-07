<?php
	$w = 20;
	$h = 20;

	$level = isset($_GET['level']) ? $_GET['level'] : 1;

	if ($level < 1 || $level > 85) {
		header('Location: /?level=1');
		die();
	}
?>
<!doctype HTML>
<html>
	<head>
		<title>SokobanTable</title>
		<script
			src="http://code.jquery.com/jquery-3.2.1.min.js"
			integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
			crossorigin="anonymous"></script>
		<script type="text/javascript" src="js/levels.js"></script>
		<script type="text/javascript" src="js/controller.js"></script>
		<script type="text/javascript" src="js/game.js"></script>
		<link href="assets/css/style.css" rel="stylesheet" />
	</head>
	<body>
		<div id="game-container" data-level="<?= $level ?>" data-w="<?= $w ?>" data-h="<?= $h ?>">
			<table id="hud" width="<?= $w * 32 ?>px">
				<thead>
					<tr>
						<th colspan="<?= $w ?>">
							<h1>SokobanTable</h1>
						</th>
					</tr>
					<tr>
						<th width="<?= ($w / 6) * 32 ?>px">LEVEL:</th>
						<th width="<?= ($w / 6) * 32 ?>px" id="level"><?= $level ?></th>
						<th width="<?= ($w / 6) * 32 ?>px">MOVES:</th>
						<th width="<?= ($w / 6) * 32 ?>px" id="moves">0</th>
						<th width="<?= ($w / 6) * 32 ?>px">PUSHES:</th>
						<th width="<?= ($w / 6) * 32 ?>px" id="pushes">0</th>
					</tr>
				</thead>
			</table>
			<table>
				<tbody id="board">
				<?php for ($y = 0; $y < $h; ++$y) { ?>
					<tr data-y="<?= $y ?>">
					<?php for ($x = 0; $x < $w; ++$x) { ?>
						<td id="<?= $x . '-'. $y ?>" data-y="<?= $y ?>" data-x="<?= $x ?>"></td>
					<?php } ?>
					</tr>
				<?php } ?>
				</tbody>
			</table>
			<div id="notice"></div>
		</div>
		<script type="text/javascript">
      (function() {
        Game();
      })();
    </script>
	</body>
</html>