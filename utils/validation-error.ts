export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }

  static noHeaders() {
    return new ValidationError("Required headers not present.");
  }
}
