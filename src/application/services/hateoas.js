export default class HateoasService {
  embed(resp) {
    return resp.data._embedded || {};
  }

  posts(resp) {
    return this.embed(resp).posts || [];
  }

  users(resp) {
    return this.embed(resp).users || [];
  }

  categories(resp) {
    return this.embed(resp).categories || [];
  }
}
