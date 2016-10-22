export default class AppLifecycleController {
  constructor($log) {
    'ngInit';
    this.$ctrl = this;
    this.$log = $log;
  }

  $onInit() {
    this.$log.info('application-lifecycle component did mount');
  }

  $onChanges() {
    this.$log.info('application-lifecycle component did update');
  }

  $onDestroy() {
    this.$log.info('application-lifecycle component did unmount');
  }
}
