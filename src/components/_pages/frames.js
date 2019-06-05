var addBtn = document.getElementById("add-frame");
var removeBtn = document.getElementById("remove-frame");
var keyframes = document.getElementById("keyframes");
var layersArray = [];
var count = 1;
var allFrames = document.getElementsByClassName("frame");
var activeFrame = 1;

allFrames[0].innerHTML = 1;
allFrames[0].addEventListener('click', onFrameClick.bind(this, allFrames[0]), false);
layersArray.push("layer_1");

addBtn.addEventListener("click", function() {
	count += 1;
	var pushLayer = "layer_" + count;
	layersArray.push(pushLayer);

	pushLayer = new Konva.Layer();
	pushLayer.visible(false);
	pushLayer.name("layer_" + count);
	stage.add(pushLayer);

	var frameElement = document.createElement('span');
	frameElement.className = "frame"; 
	frameElement.id = "frame_layer_" + count;

	var referenceNode = allFrames[activeFrame-1];
	referenceNode.parentNode.insertBefore(frameElement, referenceNode.nextSibling);

	allFrames[activeFrame].addEventListener('click', onFrameClick.bind(this, allFrames[activeFrame]), false);

	for (var i = 0; i < allFrames.length; i++) 
	{
	    allFrames[i].innerHTML = i+1;
	}

	amountBluePlayers.push(5); // 5 blauwe spelers toevoegen
	amountRedPlayers.push(5); // 5 rode spelers toevoegen
	amountFootballs.push(1); // 5 ballen toevoegen
});

removeBtn.addEventListener("click", function() {
	if(allFrames.length > 1) // zorgen dat als er maar 1 frame is deze niet gedelete kan worden
	{
		var frame_to_delete = allFrames[activeFrame-1].id;

		var layer_to_delete_string = frame_to_delete.substr(6);
		
		var index = layersArray.indexOf(layer_to_delete_string);
		if (index !== -1) {
		    layersArray.splice(index, 1);
		    amountBluePlayers.splice(index, 1);
		    amountRedPlayers.splice(index, 1);
		    amountFootballs.splice(index, 1);
		}
		
		// frame deleten
		document.getElementById(frame_to_delete).remove();

		for (var i = 0; i < allFrames.length; i++) 
		{
		    allFrames[i].innerHTML = i+1;
		}

		if(activeFrame-2 < 0)
		{
			onFrameClick(allFrames[0]);
		}
		else
		{
			onFrameClick(allFrames[activeFrame-2]);
		}

		layer_to_delete_string = "." + layer_to_delete_string;
		
		var layer_to_delete = stage.find(layer_to_delete_string)

		layer_to_delete.remove();
	}
});



function onFrameClick(clickedFrame) {
	// alle layers verborgen maken
	for(var y=0; y<layersArray.length; y++) {
		var layer_invisible_string = "." + layersArray[y];
		var layer_invisible = stage.find(layer_invisible_string);
		layer_invisible.visible(false);
	}

	for (var i = 0; i < allFrames.length; i++) {
		if(allFrames[i].classList.contains("selected-frame")) 
		{
			allFrames[i].classList.remove("selected-frame");
		}

		if(allFrames[i] == clickedFrame)
		{
			activeFrame = i+1;
		}
	}

	var frame_selected = clickedFrame.id;

	var layer_to_show_string = frame_selected.substr(6);

	// layer tonen
	layer_to_show_string = "." + layer_to_show_string;
	var layer_visible = stage.find(layer_to_show_string);
	layer_visible.visible(true);

	currentLayer = layer_visible;

	var currentLayerIndex = layersArray.indexOf(currentLayer[0].attrs.name);

	availableBluePlayers.innerHTML = amountBluePlayers[currentLayerIndex];
	availableRedPlayers.innerHTML = amountRedPlayers[currentLayerIndex];
	availableFootballs.innerHTML = amountFootballs[currentLayerIndex];

	clickedFrame.classList.toggle("selected-frame");
}