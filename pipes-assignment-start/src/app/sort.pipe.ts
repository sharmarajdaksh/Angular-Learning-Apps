import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  comparator = (a, b) => {
	if (a.name > b.name) {
		return 1;
	} else {
		return -1;
	}
  }
  transform(value: any): any {
	return value.sort(this.comparator);
  }
}
