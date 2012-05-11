require('models/stat');
require('lib/date_formatter');

Titanium.UI.setBackgroundColor('#000');
isAndroid = Ti.Platform.osname == 'android';

Controllers = {};
Models = {};
Views = {};
Views.health = {};
Layouts = {};

require('layouts/application');
require('controllers/application');
require('controllers/health');
require('views/health/index');
require('views/health/show');
