import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild, ElementRef } from '@angular/core';
import { timeout } from 'rxjs/operators';

/**
 * Generated class for the CanvasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


var colors = ["#f86521", "#21cef8", "#f86521", "#21cef8","#f86521", "#21cef8","#f86521", "#21cef8","#f86521", "#21cef8","#f86521", "#21cef8"];
var restaraunts = ["Wendy's", "McDonalds", "Chick-fil-a", "Five Guys",
  "Gold Star", "La Mexicana", "Chipotle", "Tazza Mia",
  "Panera", "Just Crepes", "Arby's", "Indian","Indian"];

var startAngle = 0;
var jobs = 10;
var jobsArc = Math.PI*2 / jobs;
var spinTimeout = null;
var randomSpin=0;
var canvas;
var ctx;
var easeOut=1;
var flatmates;
var listOfFlatmates = [["John","#6666ff"],["Alex","#00cc00"],["James","#ff4d4d"],["James","#c206a0"]];

@IonicPage()


@Component({
  selector: 'page-canvas',
  templateUrl: 'canvas.html',
})

export class CanvasPage {
  
  private _CANVAS  : any;
  private _CONTEXT : any;
  @ViewChild('canvas') canvasEl : ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    flatmates=listOfFlatmates.length;
  }

  ionViewDidLoad()
{
   this._CANVAS 	    = this.canvasEl.nativeElement;
   if(window.innerWidth<window.innerHeight){
    this._CANVAS.width  	=  window.innerWidth*0.9;
    this._CANVAS.height 	= window.innerWidth*1;
   }
   else{
    this._CANVAS.width  	=  window.innerHeight*0.9;
    this._CANVAS.height 	= window.innerHeight*1;
   }
   this.initialiseCanvas();
   this.drawRouletteWheel();
}

initialiseCanvas()
{
   if(this._CANVAS.getContext)
   {
      this.setupCanvas();
   }
}

setupCanvas()
{
   this._CONTEXT = this._CANVAS.getContext('2d');
   this._CONTEXT.fillStyle = "#3e3e3e";
   this._CONTEXT.fillRect(0, 0, this._CANVAS.width, this._CANVAS.width);
}

spin(){
  randomSpin=Math.random()*20;
  this.spinRender();

}

spinRender(){
  if(randomSpin<=0){
    return;
  }
  startAngle=startAngle+randomSpin/2;
  randomSpin=randomSpin-randomSpin/20;
  this.drawRouletteWheel();
  window.requestAnimationFrame(()=>{this.spinRender()})
}

stopRotateWheel() {
  clearTimeout(spinTimeout);
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = jobsArc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.save();
  ctx.font = 'bold 30px Helvetica, Arial';
  var text = restaraunts[index]
  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
  ctx.restore();
}

drawRouletteWheel() {
  canvas = this._CANVAS;
  if (canvas.getContext) {
    var outsideRadius =  this._CANVAS.width*0.6*0.5;
    var textRadius =  this._CANVAS.width*0.19;
    var insideRadius = 5;
    var flatmateOutsideRadius =  this._CANVAS.width*0.9*0.5;
    var flatmateInsideRadius =  this._CANVAS.width*0.6*0.5;
    var flatemateTextRadius =  this._CANVAS.width*0.8*0.5;
    var flatmateArc = Math.PI*2 / flatmates;
    var jobsArc = Math.PI*2 / jobs;
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, this._CANVAS.width, this._CANVAS.width);
    ctx.font = '15px Helvetica, Arial';

    for (var j = 0; j < flatmates; j++) {
      var fixedAngle=0+j*flatmateArc;
      ctx.fillStyle = this.shadeColor1((listOfFlatmates[j])[1],20);

      ctx.beginPath();
      ctx.arc(this._CANVAS.width/2, this._CANVAS.width/2, flatmateOutsideRadius , fixedAngle, fixedAngle + flatmateArc, false);
      ctx.arc(this._CANVAS.width/2, this._CANVAS.width/2,flatmateInsideRadius, fixedAngle + flatmateArc, fixedAngle, true);
      ctx.fill();
      ctx.save();
      ctx.fillStyle = "black";
      ctx.translate(this._CANVAS.width/2 + Math.cos(fixedAngle + flatmateArc / 2) * flatemateTextRadius,
      this._CANVAS.width/2 + Math.sin(fixedAngle + flatmateArc/ 2) * flatemateTextRadius);
      ctx.rotate((fixedAngle + flatmateArc / 2 + Math.PI / 2));
      var text = restaraunts[j];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    }

    for (var i = 0; i < jobs; i++) {
      var angle = startAngle + i * jobsArc;
      ctx.beginPath();
      ctx.fillStyle = this.shadeColor1(colors[i],20);
      ctx.arc(this._CANVAS.width/2, this._CANVAS.width/2, outsideRadius , angle, angle + jobsArc, false);
      ctx.arc(this._CANVAS.width/2, this._CANVAS.width/2,insideRadius, angle + jobsArc, angle, true);
      ctx.fill();
      ctx.save();
      ctx.fillStyle = "black";
      ctx.translate(this._CANVAS.width/2 + Math.cos(angle + jobsArc / 2) * textRadius,
      this._CANVAS.width/2 + Math.sin(angle + jobsArc/ 2) * textRadius);
      ctx.rotate((angle + jobsArc / 2 + Math.PI / 2)+1.6);
      var text = restaraunts[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    }
  }
}

shadeColor1(color, percent) {  // deprecated. See below.
  var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}
 

}
