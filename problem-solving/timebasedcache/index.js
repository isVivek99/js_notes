// Problem Statement :
// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

// Requirements:
// User should be able to create multiple instances
// Test setup with different edge cases to be added

class MemoryCache {
  constructor() {
    this.memoryMap = new Map();
  }

  set(key, value, duration) {
    this.memoryMap.set(key, { value, date: Date.now() + duration });
  }

  getAll() {
    return this.memoryMap;
  }

  get(key) {
    if (this.memoryMap.has(key) && Date.now() <= this.memoryMap.get(key).date) {
      return this.memoryMap.get(key).value;
    }
    if (this.memoryMap.has(key) && Date.now() > this.memoryMap.get(key).date) {
      this.memoryMap.delete(key);
    }
    return -1;
  }

  count() {
    let countVal = 0;
    const currDate = Date.now();

    this.memoryMap.forEach((ele) => {
      if (ele.date > currDate) countVal += 1;
    });
    return countVal;
  }
}

const myCache = new MemoryCache();
myCache.set(1, 1, 10000);
myCache.set(2, 2, 2000);
myCache.set(3, 3, 10000);
//make the tests more descriptive

// class CacheKeys {

//     keys;
//     cache;

//     constructor() {
//       this.keys = {}
//       this.cache = {}
//     }

//     set(key, value, duration) {
//       let res = false;

//       if(this.keys[key]) {
//         clearTimeout(this.cache[key])
//         res = true
//       }

//       this.keys[key] = value

//       this.cache[key] = setTimeout(() => {
//         delete this.keys[key]
//         delete this.cache[key]
//       }, duration);

//       return res;
//     }

//     get(key) {
//       return this.keys[key] ?? -1
//     }

//     count() {
//       return Object.keys(this.keys).length
//     }
//   }

//   let ck = new CacheKeys()
//   ck.set("a", "b", 10000)

//   console.log(ck.get("a"))
