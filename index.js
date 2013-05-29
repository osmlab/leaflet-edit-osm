module.exports = window.L.Control.extend({
    options: { position: 'topleft' },

    _edit: function() {
        var center = this._map.getCenter();
        var z = this._map.getZoom();
        window.open('http://www.openstreetmap.org/edit?' + 'zoom=' + z +
            '&editor=id' + '&lat=' + center.lat + '&lon=' + center.lng);
    },

    onAdd: function(map) {
        var container = L.DomUtil.create('div', 'leaflet-edit-osm'),
            bar = L.DomUtil.create('div', 'leaflet-bar', container),
            link = L.DomUtil.create('a', '', bar);

        link.href = '#';
        link.innerHTML = 'osm';
        link.title = 'Edit in OpenStreetMap';
        link.style.cssText = 'width:26px;height:26px;display:block;background:#fff;' +
            'border-radius:4px;line-height:26px;text-decoration:none;text-align:center;color:#151;';

        L.DomEvent
            .on(link, 'click', L.DomEvent.stopPropagation)
            .on(link, 'mousedown', L.DomEvent.stopPropagation)
            .on(link, 'dblclick', L.DomEvent.stopPropagation)
            .on(link, 'click', L.DomEvent.preventDefault)
            .on(link, 'click', L.bind(this._edit, this), this);

        return container;
    }
});
