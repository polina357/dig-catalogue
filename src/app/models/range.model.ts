import { Item } from './item.model';

export class RangeModel {
  id: string;
  sectionId: string;
  title: string;
  description: string;
  items?: Array<Item> = [];
}
