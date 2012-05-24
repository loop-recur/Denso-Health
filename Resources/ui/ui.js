UI = {};

UI.createButton = function(props) {
	if(props) props = safe_merge(props, {backgroundImage: replaceImagePath(props.backgroundImage), backgroundSelectedImage: replaceImagePath(props.backgroundSelectedImage)});
	return Ti.UI.createButton(safe_merge(CurrentTheme.button, props));
}

UI.createWindow = function(props) {
	props = safe_merge(CurrentTheme.win, props);
	props = safe_merge(props, {backgroundImage: replaceImagePath(props.backgroundImage)});
	return Ti.UI.createWindow(props);
}

UI.createLabel = function(props) {
	return Ti.UI.createLabel(safe_merge(CurrentTheme.label, props));
}


// remove this once the studio team merges folders
UI.createImageView = function(props) {
	return Ti.UI.createImageView(safe_merge(props, {image: replaceImagePath(props.image)}));
}

UI.createView = function(props) {
	return Ti.UI.createView(safe_merge(props, {backgroundImage: replaceImagePath(props.backgroundImage)}));
}

UI.createTableViewRow = function(props) {
	return Ti.UI.createTableViewRow(safe_merge(props, {backgroundImage: replaceImagePath(props.backgroundImage)}));
}

function replaceImagePath(img) {
	if(!img) return;
	return replace(/images\/(.*)/, ThemeName+'/images/$1', img);
}
