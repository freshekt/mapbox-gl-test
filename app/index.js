/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        mapboxgl.accessToken = 'pk.eyJ1IjoiYXBwc2F0bWFwYm94Y29tIiwiYSI6ImNqZ3IxZTZkcTAwdHoyemszYzc5cmRjeXoifQ.DHG1DfpJR_6oSUcYZRzW5Q';

       

        
        navigator.geolocation.getCurrentPosition((position)=>{
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v9',
                center:[position.coords.longitude, position.coords.latitude],
                zoom: 8
            });
            map.panTo({ lng:position.coords.longitude, lat:position.coords.latitude});
            var el = document.createElement('div');
            el.style.backgroundImage = 'url(img/my_location.png)';
             el.className = 'marker ' + 'grown'
             new mapboxgl.Marker(el,{
                offset: [0, -40]
             }).setLngLat([position.coords.longitude, position.coords.latitude]).addTo(map);
             
            // map.zoomTo(15);
            console.log(position);
            },(err)=>console.error(err));
        

    }
};

app.initialize();