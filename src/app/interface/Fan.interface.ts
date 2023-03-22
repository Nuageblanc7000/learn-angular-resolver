import { Serie } from './Serie';

export interface Fan {
  id: string;
  name: string;
  birth_day?: Date;
  series: Serie[];
}
