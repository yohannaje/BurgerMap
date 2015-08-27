/*
 *   (\_/)   
 *   ('.')   @version: 0.1
 *  (")_(")  @author: Yohanna Etchemendy, Nicolás Lound
 *
 *  Inicializacion del mapa 
 *  Google Analytics
 *
 */



'use strict'
var capas;
var capaInfowindows;


/**
* @abstract     Instancio el mapa
*/      
var visualizacion = cartodb.createVis(mapa, 'https://0xbunny.cartodb.com/api/v2/viz/14e5e5d8-2fcc-11e5-b510-0e0c41326911/viz.json')
    .done(function(vis,layers) {
        capas = vis.map;
        capaInfowindows = layers[1];
    });


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
