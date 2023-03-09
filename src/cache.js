import { Remembered } from 'remembered';

let cache;

export function getMemoryCache() {
  if (!cache) {
    cache = new Remembered({
      ttl: 5000,
      nonBlocking: true,
    });
  }

  return cache;
}
