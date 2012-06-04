UI = {};

UI.createButton = function(props) {
	return Ti.UI.createButton(safe_merge(CurrentTheme.button, props));
}

UI.createWindow = function(props) {
	props = safe_merge(CurrentTheme.win, props);
	return Ti.UI.createWindow(props);
}

UI.createLabel = function(props) {
	return Ti.UI.createLabel(safe_merge(CurrentTheme.label, props));
}

// remove this once the studio team merges folders
UI.createImageView = function(props) {
	return Ti.UI.createImageView(props);
}

UI.createView = function(props) {
	return Ti.UI.createView(props);
}

UI.createTableViewRow = function(props) {
	return Ti.UI.createTableViewRow(props);
}
