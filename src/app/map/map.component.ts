import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  markers: Marker[] = [
    {
      lat: 31.554923,
      lng: -97.138177,
      name: 'Aspire',
      draggable: false,
    },
  ];
  // initial position for map - Waco, Tx
  lat = 31.554923;
  lng = -97.138177;
  // google maps zoom level
  zoom = 13;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}

// an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  name: string;
  draggable: boolean;
}
