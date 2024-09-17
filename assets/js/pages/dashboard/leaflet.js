var KTLeaflet = function () {

    // Private functions
    var demo6 = function () {
        // add sample location data
        var data = [
            { "loc": [3.848000, 11.502100], "title": "Siège Social - Yaoundé", "number": "+237 222 22 33 44" },
            { "loc": [3.872800, 11.515200], "title": "Agence Yaoundé Bastos", "number": "+237 222 22 55 66" },
            { "loc": [3.863200, 11.526500], "title": "Agence Yaoundé Ekounou", "number": "+237 222 22 77 88" },
            { "loc": [3.864800, 11.514200], "title": "Agence Yaoundé Mimboman", "number": "+237 222 22 99 00" },
            { "loc": [3.865700, 11.486300], "title": "Agence Yaoundé Obili", "number": "+237 222 11 22 33" },
            { "loc": [3.875000, 11.532500], "title": "Agence Yaoundé Essos", "number": "+237 222 33 44 55" },
            { "loc": [3.859600, 11.499700], "title": "Agence Yaoundé Tsinga", "number": "+237 222 55 66 77" },
            { "loc": [3.845600, 11.504500], "title": "Agence Yaoundé Mvog-Mbi", "number": "+237 222 77 88 99" },
            { "loc": [3.884200, 11.519300], "title": "Agence Yaoundé Ngousso", "number": "+237 222 88 99 11" },
            { "loc": [3.868900, 11.512400], "title": "Agence Yaoundé Nlongkak", "number": "+237 222 99 11 22" },
            { "loc": [3.860400, 11.510700], "title": "Agence Yaoundé Mokolo", "number": "+237 223 11 22 33" },
            { "loc": [3.846500, 11.486800], "title": "Agence Yaoundé Mendong", "number": "+237 223 33 44 55" },

            { "loc": [4.047200, 9.685800], "title": "Agence Douala Bonanjo", "number": "+237 334 22 33 44" },
            { "loc": [4.048300, 9.701000], "title": "Agence Douala Akwa", "number": "+237 334 55 66 77" },
            { "loc": [4.063600, 9.737500], "title": "Agence Douala Bépanda", "number": "+237 334 77 88 99" },
            { "loc": [4.041400, 9.708200], "title": "Agence Douala Bali", "number": "+237 334 99 11 22" },
            { "loc": [4.049800, 9.746600], "title": "Agence Douala Bonamoussadi", "number": "+237 334 11 22 33" },
            { "loc": [4.049600, 9.751800], "title": "Agence Douala Makepe", "number": "+237 334 33 44 55" },
            { "loc": [4.052300, 9.762100], "title": "Agence Douala Ndokoti", "number": "+237 334 55 66 77" },
            { "loc": [4.084800, 9.748500], "title": "Agence Douala PK 8", "number": "+237 334 77 88 99" },

            { "loc": [5.484600, 10.411400], "title": "Agence Bafoussam Centre-ville", "number": "+237 442 22 33 44" },
            { "loc": [5.470500, 10.423200], "title": "Agence Bafoussam Marché B", "number": "+237 442 55 66 77" },

            { "loc": [5.959700, 10.151500], "title": "Agence Bamenda Commercial Avenue", "number": "+237 552 77 88 99" },
            { "loc": [6.001200, 10.171400], "title": "Agence Bamenda Up Station", "number": "+237 552 99 11 22" },

            { "loc": [4.016700, 9.216000], "title": "Agence Limbé Centre-ville", "number": "+237 663 11 22 33" },

            { "loc": [2.940200, 9.910600], "title": "Agence Kribi Centre-ville", "number": "+237 663 33 44 55" },

            { "loc": [4.577300, 13.678500], "title": "Agence Bertoua Centre-ville", "number": "+237 774 22 33 44" },

            { "loc": [9.307700, 13.393600], "title": "Agence Garoua Centre-ville", "number": "+237 774 55 66 77" },

            { "loc": [10.591700, 14.324500], "title": "Agence Maroua Centre-ville", "number": "+237 885 77 88 99" },

            { "loc": [7.326400, 13.581300], "title": "Agence Ngaoundéré Centre-ville", "number": "+237 885 99 11 22" },

            { "loc": [2.930200, 11.150200], "title": "Agence Ebolowa Centre-ville", "number": "+237 996 11 22 33" },

            { "loc": [4.639000, 9.447300], "title": "Agence Kumba Centre-ville", "number": "+237 996 33 44 55" },

            { "loc": [5.455700, 10.067900], "title": "Agence Dschang Centre-ville", "number": "+237 774 55 66 77" }
        ];

        // init leaflet map
        var leaflet = new L.Map('kt_leaflet_6', { zoom: 5, center: new L.latLng(data[0].loc) });

        leaflet.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));

        // add scale layer
        L.control.scale().addTo(leaflet);

        // set custom SVG icon marker
        var leafletIcon = L.divIcon({
            html: `<span class="svg-icon svg-icon-danger svg-icon-3x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="24" width="24" height="0"/><path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#000000" fill-rule="nonzero"/></g></svg></span>`,
            bgPos: [10, 10],
            iconAnchor: [20, 37],
            popupAnchor: [0, -37],
            className: 'leaflet-marker'
        });

        // set markers
        data.forEach(function (item) {
            var marker = L.marker(item.loc, { icon: leafletIcon }).addTo(leaflet);
            marker.bindPopup(item.title + "<br>Phone: " + item.number, { closeButton: false });
        })
    }

    return {
        // public functions
        init: function () {
            // default charts
            demo6();
        }
    };
}();

jQuery(document).ready(function () {
    KTLeaflet.init();
});
