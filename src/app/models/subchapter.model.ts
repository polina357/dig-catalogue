import { Section } from './section.model';

export class Subchapter {
  id: string;
  chapterId: string;
  title: string;
  description: string;
  sections?: Array<Section> = [];
}
