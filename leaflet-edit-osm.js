(function(e){if("function"==typeof bootstrap)bootstrap("leafleteditosm",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeLeafletEditOsm=e}else"undefined"!=typeof window?window.leafletEditOsm=e():global.leafletEditOsm=e()})(function(){var define,ses,bootstrap,module,exports;
return (function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
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

},{}]},{},[1])(1)
});
;