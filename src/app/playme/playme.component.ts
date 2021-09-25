import { Component, OnInit } from '@angular/core';
import Konva from 'konva';
//import {*} from 'konva';
import Knova from 'konva/lib/Core';
import {Rect} from 'konva/lib/shapes/Rect';
import { Circle } from 'konva/lib/shapes/Circle';

@Component({
  selector: 'app-playme',
  templateUrl: './playme.component.html',
  styleUrls: ['./playme.component.css']
})
export class PlaymeComponent implements OnInit {

  static stage: Konva.Stage;
  static layer: Konva.Layer;
  static box: Konva.Rect;

  constructor() { 
    
    
  }

  ngOnInit(): void {
    PlaymeComponent.stage = new Knova.Stage({
      container: 'container',
      width: window.innerWidth,
      height: window.innerHeight,
    });

    PlaymeComponent.layer = new Knova.Layer();

    PlaymeComponent.box = new Rect({
      x: 50,
      y: 50,
      width: 100,
      height: 50,
      fill: '#00D2FF',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true,
    });
    
    PlaymeComponent.layer.add(PlaymeComponent.box);

    let circ = new Circle({
      x: 100,
      y: 100,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    });
    
    PlaymeComponent.layer.add(circ);

    PlaymeComponent.layer.draw();

    PlaymeComponent.stage.add(PlaymeComponent.layer);
    console.log(circ);
    console.log(PlaymeComponent.layer);
  }

}
