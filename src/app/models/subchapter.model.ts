export class Subchapter {
  id: string;
  chapterId: string;
  title: string;
  description: string;
  sections?: Array<string> = [];
}