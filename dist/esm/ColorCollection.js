export default class ColorCollection {
  list = {};

  constructor(list) {
    if (list) {
      this.setCollection(list);
    }
  }

  set(name, value) {
    this.list[name] = value;
    return this;
  }

  setCollection(colors) {
    Object.keys(colors).forEach(name => {
      this.set(name, colors[name]);
    });
    return this;
  }

  get(name) {
    return name ? this.list[name] : undefined;
  }

  remove(name) {
    delete this.list[name];
    return this;
  }

}
//# sourceMappingURL=ColorCollection.js.map