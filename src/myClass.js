import { getMemoryCache } from './cache.js';

export class MyClass{
  #cache
  #externalAPIClient

  constructor( externalAPIClient ){
    this.#cache = getMemoryCache();
    this.#externalAPIClient = externalAPIClient;

    this.myMethod = this.#cache.wrap(
      this.myMethod.bind(this),
      () => 'method key'
    )
  }

  async myMethod(){    
    const result = await this.#externalAPIClient.getSomething();

    return result;
  }
}