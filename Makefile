all: leaflet-edit-osm.js

leaflet-edit-osm.js: index.js package.json
	browserify -s leafletEditOsm index.js > leaflet-edit-osm.js
