import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplayList]'
})
export class DisplayListDirective {

  @Input() set appDisplayList(condition:boolean) {
    if (condition) {
      this.vwRef.createEmbeddedView(this.tplRef);
    } else {
      this.vwRef.clear();
    }
  }

  constructor(private tplRef:TemplateRef<any>, private vwRef:ViewContainerRef) { }

}
