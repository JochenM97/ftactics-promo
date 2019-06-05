// Konva.showWarnings = false;

var stageWidth = 100;
var stageHeight = 150;

var stage = new Konva.Stage({
	container: 'container',
	width: stageWidth,
	height: stageHeight
});

var layer_1 = new Konva.Layer();
layer_1.name("layer_1");
stage.add(layer_1);

var amountBluePlayers = [5];
var availableBluePlayers = document.getElementById("available-blue-players");
var amountRedPlayers = [5];
var availableRedPlayers = document.getElementById("available-red-players");
var amountFootballs = [1];
var availableFootballs = document.getElementById("available-footballs");

var currentLayer = stage.find(".layer_1");

function fitStageIntoParentContainer() 
{
	var container = document.querySelector('#stage-parent');

	var containerWidth = container.offsetWidth;
	var containerHeight;
	if(container.offsetHeight == 0)
	{
		containerHeight = window.innerHeight-interfaceElementsHeight; // aanpassen op basis van toolbox height en nav height (berekenen)
	}
	else
	{
		containerHeight = container.offsetHeight-interfaceElementsHeight;
	}

	var scaleTest = containerHeight / stageHeight; 
	
	var scaleTestWidth = containerWidth / stageWidth;

	if(container.offsetWidth > (containerHeight/1.5))
	{
		// als canvas kleiner is als breedte scherm word de canvas op basis v height gescaled
		var scale = containerHeight / stageHeight;

		stage.width(stageWidth * scale);
		stage.height(stageHeight * scale);
		stage.scale({ x: scale, y: scale });
		stage.draw();
	}
	else
	{
		// als canvas even groot wordt als breedte scherm word de canvas op basis v width gescaled
		containerWidth= containerWidth*0.9;
		var scale = containerWidth / stageWidth;

		stage.width(stageWidth * scale);
		stage.height(stageHeight * scale);
		stage.scale({ x: scale, y: scale });
		stage.draw();
	}
}

var getScale = stage.getAttrs();


fitStageIntoParentContainer();
// adapt the stage on any window resize
window.addEventListener('resize', fitStageIntoParentContainer);

var bplayer = document.getElementById("blue-player");
var football = document.getElementById("ball");
var rplayer = document.getElementById("red-player");
var deleteBtn = document.getElementById("delete");
var toolBtn = document.getElementById("tool");
deleteBtn.style.display = "none";


football.addEventListener("click", function() {
	var currentLayerIndex = layersArray.indexOf(currentLayer[0].attrs.name);
	var currentAmountFootballs;

	if (currentLayerIndex !== -1) {
	    currentAmountFootballs = amountFootballs[currentLayerIndex];
	}

	if(currentAmountFootballs != 0)
	{
		var ball = new Konva.Rect(
		{
			x: 50,
			y: 75,
	        fill: '#FFF',
			draggable: true,
			name: 'canvas-object',
			opacity: 1,
			cornerRadius: 5,
			width: 8,
			height: 8,
			stroke: "rgba(185,194,210,0.5)",
			strokeEnabled: false,
			strokeWidth: 2,
			objectType: 'ball'
		});

	  	ball.selected = false;

		ball.dragBoundFunc(function(pos) 
		{
		  var newY = pos.y > stage.height()-((stage.height()/150)*ball.getAttr("height")) ? stage.height()-((stage.height()/150)*ball.getAttr("height")) : (pos.y < 0 ? 0 : pos.y);
		  var newX = pos.x > stage.width()-((stage.width()/100)*ball.getAttr("width")) ? stage.width()-((stage.width()/100)*ball.getAttr("width")) : (pos.x < 0 ? 0 : pos.x);
		  return {
		    x: newX,
		    y: newY
		  };
		});

		ball.on('click', function() 
		{
			onObjectClick(ball);
		});

		ball.on('tap', function() 
		{
			onObjectClick(ball);
		});

		ball.on('mouseenter', function() 
		{
			stage.container().style.cursor = 'move';
		});

		ball.on('mouseleave', function() 
		{
			stage.container().style.cursor = 'default';
		});

		currentLayer.add(ball);
		currentLayer.draw();
		
		amountFootballs[currentLayerIndex] -= 1;
		availableFootballs.innerHTML = amountFootballs[currentLayerIndex];
	}
});

bplayer.addEventListener("click", function() {
	var currentLayerIndex = layersArray.indexOf(currentLayer[0].attrs.name);
	var currentAmountBluePlayers;

	if (currentLayerIndex !== -1) {
	    currentAmountBluePlayers = amountBluePlayers[currentLayerIndex];
	}

	if(currentAmountBluePlayers != 0)
	{
		var playerNumberText = 6-currentAmountBluePlayers;

	  	var bluePlayer = new Konva.Rect({
	        fill: '#00E2DE',
			opacity: 1,
			cornerRadius: 2,
			width: 10,
			height: 10,
		});

		var playerNumber = new Konva.Text({
	        text:
	          playerNumberText,
	        fontSize: 8,
	        fontFamily: 'BebasNeue',
	        fill: '#FFF',
	        align: 'center',
	        verticalAlign: 'bottom',
	        width: 10,
	        height: 10,
	    });

	    var bPlayerGroup = new Konva.Group({
			x: 50,
			y: 75,
			draggable: true,
			name: 'canvas-object',
			stroke: "#00A5A2",
			strokeEnabled: false,
			strokeWidth: 1,
			objectType: 'blue-player',
		});

		bPlayerGroup.add(bluePlayer);
		bPlayerGroup.add(playerNumber);

	  	bPlayerGroup.selected = false;

		bPlayerGroup.dragBoundFunc(function(pos) {
		  var newY = pos.y > stage.height()-((stage.height()/150)*bluePlayer.getAttr("height")) ? stage.height()-((stage.height()/150)*bluePlayer.getAttr("height")) : (pos.y < 0 ? 0 : pos.y);
		  var newX = pos.x > stage.width()-((stage.width()/100)*bluePlayer.getAttr("width")) ? stage.width()-((stage.width()/100)*bluePlayer.getAttr("width")) : (pos.x < 0 ? 0 : pos.x);
		  return {
		    x: newX,
		    y: newY
		  };
		});

		bPlayerGroup.on('click', function() 
		{
			onObjectClick(bPlayerGroup);
		});

		bPlayerGroup.on('tap', function() 
		{
			onObjectClick(bPlayerGroup);
		});

		bPlayerGroup.on('mouseenter', function() 
		{
			stage.container().style.cursor = 'move';
		});

		bPlayerGroup.on('mouseleave', function() 
		{
			stage.container().style.cursor = 'default';
		});

		currentLayer.add(bPlayerGroup);
		currentLayer.draw();
		amountBluePlayers[currentLayerIndex] -= 1;
		availableBluePlayers.innerHTML = amountBluePlayers[currentLayerIndex];
	}
});

rplayer.addEventListener("click", function() {
	var currentLayerIndex = layersArray.indexOf(currentLayer[0].attrs.name);
	var currentAmountRedPlayers;

	if (currentLayerIndex !== -1) {
	    currentAmountRedPlayers = amountRedPlayers[currentLayerIndex];
	}

	if(currentAmountRedPlayers != 0)
	{
		var playerNumberText = 6-currentAmountRedPlayers;

	  	var redPlayer = new Konva.Rect({
	        fill: '#FFAA00',
			opacity: 1,
			cornerRadius: 2,
			width: 10,
			height: 10,
		});

		var playerNumber = new Konva.Text({
	        text:
	          playerNumberText,
	        fontSize: 8,
	        fontFamily: 'BebasNeue',
	        fill: '#FFF',
	        align: 'center',
	        verticalAlign: 'bottom',
	        width: 10,
	        height: 10,
	    });

	    var rPlayerGroup = new Konva.Group({
			x: 50,
			y: 75,
			draggable: true,
			name: 'canvas-object',
			stroke: "#BA7C00",
			strokeEnabled: false,
			strokeWidth: 1,
			objectType: 'red-player',
		});

		rPlayerGroup.add(redPlayer);
		rPlayerGroup.add(playerNumber);

		rPlayerGroup.strokeEnabled = false;

	  	rPlayerGroup.selected = false;

		rPlayerGroup.dragBoundFunc(function(pos) {
		  var newY = pos.y > stage.height()-((stage.height()/150)*redPlayer.getAttr("height")) ? stage.height()-((stage.height()/150)*redPlayer.getAttr("height")) : (pos.y < 0 ? 0 : pos.y);
		  var newX = pos.x > stage.width()-((stage.width()/100)*redPlayer.getAttr("width")) ? stage.width()-((stage.width()/100)*redPlayer.getAttr("width")) : (pos.x < 0 ? 0 : pos.x);
		  return {
		    x: newX,
		    y: newY
		  };
		});

		rPlayerGroup.on('click', function() 
		{
			onObjectClick(rPlayerGroup);
		});

		rPlayerGroup.on('tap', function() 
		{
			onObjectClick(rPlayerGroup);
		});

		rPlayerGroup.on('mouseenter', function() 
		{
			stage.container().style.cursor = 'move';
		});

		rPlayerGroup.on('mouseleave', function() 
		{
			stage.container().style.cursor = 'default';
		});

		currentLayer.add(rPlayerGroup);
		currentLayer.draw();
		amountRedPlayers[currentLayerIndex] -= 1;
		availableRedPlayers.innerHTML = amountRedPlayers[currentLayerIndex];
	}
});

function onObjectClick(clickedObject) 
{
	// kijken of clicked player op selected true
	// als dat zo is dan delete knop hidden

	// alle objecten behalve clickedObject op selected = false zetten

	// clicked player op selected.true zetten
	// delete knop laten zien
	if(clickedObject.selected == true)
	{
		clickedObject.selected = false;
		clickedObject.opacity(1);
		//clickedObject.strokeEnabled(false);
		deleteBtn.style.display = "none";
	}
	else
	{
		var allCanvasObjects = stage.find('.canvas-object');

		allCanvasObjects.each(function(canvasObject) 
		{
			if(canvasObject != clickedObject)
			{
				if(canvasObject.selected == true)
				{
					canvasObject.selected = false;
					canvasObject.opacity(1);
					//canvasObject.strokeEnabled(false);
				}
			}
			else
			{
				deleteBtn.style.display = "inline-block";
			}
	    });

		clickedObject.selected = true;
		clickedObject.opacity(0.8);
		//clickedObject.strokeEnabled(true);
	}	

	currentLayer.draw();
}

deleteBtn.addEventListener("click", function() 
{
	var allCanvasObjects = stage.find('.canvas-object');
	allCanvasObjects.each(function(canvasObject) {
		if(canvasObject.selected == true)
		{
			canvasObject.destroy();
			currentLayer.draw();
			deleteBtn.style.display = "none";

			var currentLayerIndex = layersArray.indexOf(currentLayer[0].attrs.name);

			switch(canvasObject.attrs.objectType) {
				case "ball":
					amountFootballs[currentLayerIndex] += 1;
					availableFootballs.innerHTML = amountFootballs[currentLayerIndex];
					break;
				case "blue-player":
					amountBluePlayers[currentLayerIndex] += 1;
					availableBluePlayers.innerHTML = amountBluePlayers[currentLayerIndex];
					break;
				case "red-player":
					amountRedPlayers[currentLayerIndex] += 1;
					availableRedPlayers.innerHTML = amountRedPlayers[currentLayerIndex];
					break;
			}
		}
	});
});

var saveButton = document.getElementById("save-btn");
saveButton.addEventListener("click", function() 
{
	var json = stage.toJSON();
	saveText(json, "file.json" );
	console.log(json);
});

function saveText(text, filename){
  var a = document.createElement('a');
  a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
  a.setAttribute('download', filename);
  a.click()
}