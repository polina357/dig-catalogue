import { Subchapter } from './subchapter.model';

export class Chapter {
  id: string;
  title: string;
  description: string;
  subchapters?: Array<Subchapter> = [];
}
