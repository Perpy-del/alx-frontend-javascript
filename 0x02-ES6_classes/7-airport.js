export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw Error('Name must be a string');
    }

    if (typeof code !== 'string') {
      throw Error('Code must be a string');
    }

    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
