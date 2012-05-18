UI = {};

UI.createButton = function(props) {
	return Ti.UI.createButton(safe_merge(CurrentTheme.button, props));
}

UI.createWindow = function(props) {
	return Ti.UI.createWindow(safe_merge(CurrentTheme.win, props));
}

UI.createLabel = function(props) {
	return Ti.UI.createLabel(safe_merge(CurrentTheme.label, props));
}
