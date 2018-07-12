import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allData : any, myfilter: any): any {
    
    if (myfilter === undefined || myfilter === "all") {
      return allData;
    }

    return allData.filter(function (allData) {
      console.log(allData.name);
      console.log(myfilter);

      console.log(allData.name.toLowerCase().includes(myfilter.toLowerCase()));
      return allData.name.toLowerCase().includes(myfilter.toLowerCase());
    });
  }

}
