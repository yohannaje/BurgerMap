/*
 *  Inicializacion del mapa 
 *  Google Analytics
 *
 *  @version: 0.1
 *  @author: Yohanna Etchemendy, Nicolás Lound
 *
 *
 */

'use strict'

// Instancio el mapa
cartodb.createVis('mapa', 'https://burgermap.cartodb.com/api/v2/viz/b541a732-4d28-11e5-ab15-0e018d66dc29/viz.json')
  .done(function(vis, layers) {
    layers[1].setInteraction(true);
    layers[1].on('featureClick', function(e, latlng, pos, data) {
        //completo la barra lateral sin infowindows
        openJoint(data.hamburgueseria, data.direccion)
    });
  });

function openJoint(name, addr){
    document.getElementById("nombre").innerHTML = name;
    document.getElementById("direccion").innerHTML = addr;
    return false;
}


// Google Analytics
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-65625200-1', 'auto');
ga('send', 'pageview');
