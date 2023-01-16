import { Component } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DailyChallenge';
  focusEvt$!: Observable<any>
  blurEvt$!: Observable<any>

  getObservable(el: HTMLElement, evt: string): Observable<any> {
    if(evt == 'focus') {
      this.focusEvt$ = this.focusEvt$ ?? fromEvent(el, evt)
      return this.focusEvt$
    } else {
      this.blurEvt$ = this.blurEvt$ ?? fromEvent(el, evt)
      return this.blurEvt$
    }
  }

  handleFocus(el: HTMLElement) {
    const click = this.getObservable(el, 'focus')
    click.subscribe(() => console.log('You focused element!'))
  }
  
  handleBlur(el: HTMLElement) {
    const blur = this.getObservable(el, 'blur')
    blur.subscribe(() => console.log('You blured element!'))
  }
}
