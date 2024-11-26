import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyimage.component.html'
})
export class LazyimageComponent implements OnInit{

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.url) {
      throw new Error('This url is required');
    }
  }
  onLoad() {
    setTimeout(() => {this.hasLoaded = true;}, 5000);
    this.hasLoaded = true;
  }

}
