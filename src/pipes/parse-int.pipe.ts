import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    console.log(value, 'pipevalue');
    console.log(metadata, 'pipemetadata');
    return value;
  }
}
