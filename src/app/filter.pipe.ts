import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any, filterMetadata): any {
    console.log(filterMetadata)
    let data:any;
    let count1:number =1;
    if( value ){
     let all = value.map( ( items ) => {
        if( args === "1" && items.attend ){
          return {
            name : items.name,
            rollno : items.rollno,
            classs : items.classs,
            attend : items.attend
          }
        }else if( args === "2" && !items.attend  ){
          return {
            name : items.name,
            rollno : items.rollno,
            classs : items.classs,
            attend : items.attend
          }
        }else if( args === "all"  ){
          return {
            name : items.name,
            rollno : items.rollno,
            classs : items.classs,
            attend : items.attend
          }
        }
     } )
     data = all.filter((item) => item);
     console.log(data);
     filterMetadata.count1 = data.length;
     console.log(data);
     return data;
    }
    }
  }