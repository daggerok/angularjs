export default {
  bindings: { bookmark: '<' },
  template: `
    <a href="#{{$ctrl.bookmark.url}}">{{$ctrl.bookmark.title}}</a>
    <code>{{$ctrl.bookmark.url}}</code>
  `
};
