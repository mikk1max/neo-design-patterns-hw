import { Author } from './Author';
import { AbstractBook } from './AbstractBook';
import { Copy } from './Copy';
import { Reader } from './Reader';

export class Library {
  private _authors: Author[] = [];
  private _books: AbstractBook[] = [];
  private _copies: Copy[] = [];
  private _readers: Reader[] = [];

  addAuthor(author: Author): void {
    this._authors.push(author);
  }

  addBook(book: AbstractBook): void {
    this._books.push(book);
  }

  addCopy(copy: Copy): void {
    this._copies.push(copy);
  }

  addReader(reader: Reader): void {
    this._readers.push(reader);
  }

  getAvailableCopies(): Copy[] {
    return this._copies.filter((copy) => copy.isCopyAvailable());
  }

  getBooksByAuthor(author: Author): AbstractBook[] {
    return author.books;
  }
}
