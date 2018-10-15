import { Component, OnInit, OnChanges } from '@angular/core';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import Draw from 'ol/interaction/Draw.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import Interaction from 'ol/interaction/Interaction';

@Component({
  selector: 'app-map-interaction',
  templateUrl: './map-interaction.component.html',
  styleUrls: ['./map-interaction.component.css']
})
export class MapInteractionComponent implements OnInit {

  public typeSelect = document.getElementById('type');
  // public value = this.typeSelect.value;
  public draw: any;
  public typename;
  public raster = new TileLayer({
    source: new OSM()
  });
  public source = new VectorSource({wrapX: false});
  public vector = new VectorLayer({
    source: this.source
  });
  public Draw;
  public map;
  public maap;

  start() {
  this.map = new Map({
    layers: [this.raster, this.vector],
    target: 'map',
    view: new View({
      center: [-11000000, 4600000],
      zoom: 4
    })
  });
}

  addInteraction(value) {
    let pass = value;
    if (pass !== 'None') {
      this.draw = new Draw({
        source: this.source,
        type: pass
      });
      this.maap = this.map;
      this.maap.addInteraction(this.draw);
    }
  }

  click() {
  console.log('clicked');
  }

  changed() {
    console.log('change Detected');
  }

  mychange(val) {
  //  console.log(val);
   this.changed();
  //  console.log(val.target.value);
   this.typename = val.target.value;
  //  console.log(this.typename);
   this.maap.removeInteraction(this.draw);
   this.addInteraction(this.typename);
  }

  constructor() { }

  ngOnInit() {
    this.start();
    this.addInteraction(this.typename);
  }
}
