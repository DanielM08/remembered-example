const TEN_SECONDS = 10000

export class ExternalApiClient {
  async getSomething(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('call finished')
      }, TEN_SECONDS)
    })
  }
}