export interface Cast {
  person: Person;
  character: Character;
}

export interface Character {
  id: number;
  url: string;
  name: string;
  image: Image;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Person {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday: Date;
  deathday: null;
  gender: string;
  image: Image;
  updated: number;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}
