export default class BmHomeController {
  constructor() {
    this.$ctrl = this;
  }

  $onInit() {
    this.greeting = this.first = 'hi';
    this.second = 'yay!';
  }

  toggleGreeting() {
    this.greeting = this.greeting === this.first
      ? this.second
      : this.first;
  }
}
