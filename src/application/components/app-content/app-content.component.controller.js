export default class ContentController {
  constructor($log, $stateParams) {
    'ngInject';
    this.$ctrl = this;
    this.$log = $log;
    this.$stateParams = $stateParams;
    this.bookmarks;
    this.onSelect;
  }

  $onChanges(chObj) {
    if (chObj) {
      // this.$log.info(chObj,this.bookmarks);
    }
  }
}
