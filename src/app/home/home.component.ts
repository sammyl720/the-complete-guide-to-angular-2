import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs'
import { map, filter } from 'rxjs/operators'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription
  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count)
    // })
    const customIntervalObservable = Observable.create((obsever) => {
      let count = 0
      setInterval(() => {
        obsever.next(count)
        if(count === 5){
          obsever.complete()
        }
        if(count > 3){
          obsever.error(new Error('Count is greater 3!'))
        }
        count++
      }, 1000)
    })

    // you can customize the data comining in from an observable by piping it (pipe) with operators
    this.firstObsSubscription = customIntervalObservable.pipe(filter((data: number) => {
      return data > 0
    }), map((data: number) => {
      return `Round ${data + 1}`
    })).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
      alert(error.message)
    }, () => {
      console.log('Completed')
    })
  }
  ngOnDestroy(): void{
    this.firstObsSubscription.unsubscribe()
  }
}
