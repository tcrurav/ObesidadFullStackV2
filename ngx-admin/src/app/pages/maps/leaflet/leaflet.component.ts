import { Component } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// interface myOptions {
//   layers: Array({ L.TileLayer | L.ImageOverlay | L.Marker });
//   zoom: number;
//   center: L.LatLng;
// }

@Component({
  selector: 'ngx-leaflet',
  styleUrls: ['./leaflet.component.scss'],
  templateUrl: './leaflet.component.html',
  // template: `
  //   hola
  // `,
  // template: `
  //   <nb-card>
  //     <nb-card-header>Obesidad por distritos de Las Palmas de GC</nb-card-header>
  //     <nb-card-body>
  //       <div 
  //         leaflet 
  //         [leafletOptions]="options"
  //         [leafletLayersControl]="layersControl"></div>
  //     </nb-card-body>
  //   </nb-card>
  // `,
})
export class LeafletComponent {

  openStreetMap = L.tileLayer(
    "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    { maxZoom: 18, attribution: "..." }
  );

  // Use the image bounds to align the image properly
  imageUrl = "/assets/images/Las_Palmas_de_Gran_Canaria-Distritos_2004.svg";
  imageBounds: L.LatLngBoundsExpression = [
    [28.198981, -15.5390000],
    [28.002681, -15.3520006]
  ];
  imageOverlay = L.imageOverlay(this.imageUrl, this.imageBounds, { opacity: 0.8, interactive: true });

  icon = new L.Icon.Default();

  options = {
    layers: [
      this.openStreetMap,
      this.imageOverlay,
      L.marker([28.110081, -15.4467406], {icon: this.icon}).bindPopup("Algo"),
      L.marker([28.100081, -15.4967406], {icon: this.icon}).bindPopup("Otra cosa"),
      L.marker([28.120081, -15.4407406], {icon: this.icon}).bindPopup("Y otra...")
    ],
    zoom: 12,
    center: L.latLng({ lat: 28.110081, lng: -15.4467406 }),
  };

  layersControl = {
    baseLayers: {
      "Open Street Map": this.openStreetMap
    },
    overlays: {
      "Image Overlay": this.imageOverlay
    }
  };

  constructor() {

    this.icon.options.shadowSize = [0,0];

    // this.imageOverlay.on("click", function(d){
    //   console.log("hola");
    //   console.log(d)
    // })

    // this.options.layers.push(L.marker([28.110081, -15.4467406], {icon: this.icon}));
    // this.options.layers.push(L.marker([28.100081, -15.4967406], {icon: this.icon}));
    // this.options.layers.push(L.marker([28.120081, -15.4407406], {icon: this.icon}));

    // var xml = this.responseXML;
    // var importedNode = document.importNode(xml.documentElement, true);
    // var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    // g.appendChild(importedNode);
    // g.setAttribute('class', 'svglayer');

    // var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // svg.appendChild(g);
    // svg.addEventListener('click', function(e) {
    //     console.log(e.target.id, e.target.tagName)
    // })

    // map.getPane('overlayPane').appendChild(svg);
  }
}
