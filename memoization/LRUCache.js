class LRU {
  constructor(limit = 3) {
    this.cache = new Map();
    this.max = limit;
  }

  get(key) {
    let item = this.cache.get(key);
    if (item) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }

  set(key, value) {
    // if (this.cache.has(key)) this.cache.delete(key);

    if (this.max === this.cache.size) {
      this.cache.delete(this.first());
      this.cache.set(key, value);
      return;
    }
    this.cache.set(key, value);
  }

  first() {
    return this.cache.keys().next().value;
  }
}

/* KEY:VALUE pairs */
//name:'vivek'
//age:24
//occupation:SWE

const myCacheLRU = new LRU(3);
myCacheLRU.set("name", "vivek");
myCacheLRU.set("age", 24);
myCacheLRU.set("occupation", "swe");

console.log(myCacheLRU);
console.log(myCacheLRU.get("name"));
console.log(myCacheLRU);
myCacheLRU.set("locn", "pune");
console.log(myCacheLRU);
