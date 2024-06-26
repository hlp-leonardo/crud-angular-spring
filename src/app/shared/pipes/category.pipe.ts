import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: String): String {
    switch(value) {
      case 'Front-end': return 'code';
      case 'Back-end': return 'computer';
    }
    return 'pending';
  }

}
