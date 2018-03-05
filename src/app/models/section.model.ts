import { RangeModel } from './range.model';

export class Section {
  id: string;
  subchapterId: string;
  title: string;
  description: string;
  ranges?: Array<RangeModel> = [];
}
