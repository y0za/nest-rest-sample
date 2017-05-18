export class User {
  public id: number;
  public name: string;

  constructor(name: string, id = 0) {
    this.id = id;
    this.name = name;
  }
}
