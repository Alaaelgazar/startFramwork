import { Component } from '@angular/core';

@Component({
  selector: 'app-portofillio',
  templateUrl: './portofillio.component.html',
  styleUrls: ['./portofillio.component.css']
})
export class PortofillioComponent {
  urlImages:string[]=['../../assets/images/poert1.png',
  '../../assets/images/port2.png',
  '../../assets/images/port3.png',
  '../../assets/images/poert1.png',
  '../../assets/images/port2.png',
  '../../assets/images/port3.png'];
  SrcImage:string='';
  isClicked:boolean=false;
  imgIndexAlt: string = ''
  showModal(src: string, index: number) {
    this.SrcImage = src
    this.imgIndexAlt = `portImgModal${++index}`
    console.log(this.SrcImage);
  }
  nextModal() {
    const currentIndex = this.urlImages.indexOf(this.SrcImage);
    const nextIndex = (currentIndex + 1) % this.urlImages.length;
    this.SrcImage = this.urlImages[nextIndex];
  }
  prevModal() {
    const currentIndex = this.urlImages.indexOf(this.SrcImage);
    const prevIndex = (currentIndex - 1 + this.urlImages.length) % this.urlImages.length;
    this.SrcImage = this.urlImages[prevIndex];
  }
}
