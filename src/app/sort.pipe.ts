import {PipeTransform, Pipe} from '@angular/core'
import { Server } from './server.interface'

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform{
  transform(value: Server[]){
    return value.sort((a, b) => {
      return a.name > b.name ? 1:-1
    })
  }
}