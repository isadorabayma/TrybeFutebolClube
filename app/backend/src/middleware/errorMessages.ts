export default class ErrorMessages {
  constructor(
    public field: string,
    public length?: number,
  ) {}

  public static isRequired(): string {
    return 'All fields must be filled';
  }

  public isEmpty(): string {
    return `"${this.field}"  is not allowed to be empty`;
  }

  public minLength(): string {
    return `"${this.field}" length must be ${this.length} characters long`;
  }

  public minNumber(): string {
    return `"${this.field}"  length must be ${this.length} characters long`;
  }
}
