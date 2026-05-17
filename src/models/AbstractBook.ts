export abstract class AbstractBook {
  private _title: string;
  private _year: number;

  constructor(title: string, year: number) {
    this._title = title;
    this._year = year;
  }

  get title(): string {
    return this._title;
  }

  get year(): number {
    return this._year;
  }

  abstract getDescription(): string;
}
