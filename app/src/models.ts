module AngularMaterialApp {

  export class Note {
    constructor(public title: string,
                public date: Date) {};
  }

  export class User {
    constructor(public name: string,
                public avatar: string,
                public bio: string,
                public notes: Note[]) {};
  }
}
