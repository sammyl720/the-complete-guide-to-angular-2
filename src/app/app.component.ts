import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(800))
    ]),
    trigger('wildState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange',     
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity:0,
          transform: 'translateX(-100px)'
        }),
        animate(500)
      ]),
      transition('* => void', [
        animate(300, style({
          opacity:0,
          transform: 'translateX(100px)'
        }))
      ])
    ]),
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translate(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: .8
          }),
          style({
            transform: 'translateX(0)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [   
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            opacity:0,
            transform: 'translateX(100px)'
          }))
        ])
      ])
    ])
  ]
})
export class AppComponent {
  state = 'normal'
  wildState = 'normal'
  list: string[] = ['Milk', 'Sugar', 'Bread'];

    onAdd(item:string) {
      this.list.push(item);
    }

    onDelete(item:string){
      this.list.splice(this.list.indexOf(item), 1)
    }

    onAnimate(){
      if(this.state === 'normal'){
        this.state = 'highlighted'
      } else {
        this.state = 'normal'
      }
      this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal'
    }

    onShrink(){
      this.wildState = 'shrunken'
    }

    animationStarted(event){
      console.log(event)
    }
    
    animationEnded(event){
      console.log(event)

    }
}
