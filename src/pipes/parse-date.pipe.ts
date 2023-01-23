import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseDatePipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    // DateString
    const targetDate = new Date(value);
    const formattedDate = `${targetDate.getDate()}-${
      1 + targetDate.getMonth()
    }-${targetDate.getFullYear()}`;
    return formattedDate;
    // dd-mm-yyyy
  }
}
