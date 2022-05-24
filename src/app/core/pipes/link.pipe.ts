import { Pipe, PipeTransform } from '@angular/core';
import { RoutePaths } from '@constants/routes';

@Pipe({ name: 'link' })
export class LinkPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(segs: RoutePaths | any[]): string[] {
    if (Array.isArray(segs)) {
      return ['/', ...segs];
    } else {
      return ['/', segs];
    }
  }
}
