import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTile]'
})
export class TileDirective {

  @Input() appTile: string = 'Back';

  private readonly imagePath: string = '/assets/images/tiles/';
  private readonly imageExtension: string = 'png';

  constructor(private el: ElementRef) {  
    // this.el.nativeElement.style.backgroundColor = 'yellow';
    // this.el.nativeElement.src = tileImgs[this.appTile ?? 'Back'];
  }

  ngOnInit() {
    this.el.nativeElement.src = `${this.imagePath}${this.appTile || 'Back'}.${this.imageExtension}`;
  }

}
