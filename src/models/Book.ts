import { AbstractBook } from './AbstractBook';
import { Author } from './Author';

export class Book extends AbstractBook {
  private _author: Author;

  constructor(title: string, year: number, author: Author) {
    super(title, year);
    this._author = author;
    author.addBook(this);
  }

  get author(): Author {
    return this._author;
  }

  getDescription(): string {
    return `Physical book "${this.title}" by ${this._author.name} (${this.year})`;
  }
}
