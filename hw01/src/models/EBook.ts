import { AbstractBook } from './AbstractBook';
import { Author } from './Author';

export class EBook extends AbstractBook {
  private _author: Author;
  private _url: string;

  constructor(title: string, year: number, author: Author, url: string) {
    super(title, year);
    this._author = author;
    this._url = url;
    author.addBook(this);
  }

  get author(): Author {
    return this._author;
  }

  get url(): string {
    return this._url;
  }

  getDescription(): string {
    return `E-book "${this.title}" by ${this._author.name} (${this.year}) - Available at: ${this._url}`;
  }
}
