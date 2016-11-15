module AngularMaterialApp {

  export interface IUserService {
    loadAllUsers(): ng.IPromise<User[]>;
    selectedUser: User;
  }

  export class UserService implements IUserService {
    static $inject = ['$q'];
    constructor(private $q: ng.IQService) {}

    public selectedUser: User = null;
    public loadAllUsers(): ng.IPromise<User[]> {
      return this.$q.when(this.users);
    }

    private users: User[] = [
      {
        name: 'test-name 1',
        avatar: 'test-avatar-1',
        bio: 'test-bio 1',
        notes: [
          {
            title: 'test 1',
            date: new Date('2016-11-11'),
          },
          {
            title: 'test 2',
            date: new Date('2016-12-12'),
          }
        ]
      },
      {
        name: 'test-name 2',
        avatar: 'test-avatar-2',
        bio: 'test-bio 2',
        notes: [
          {
            title: 'test 1',
            date: new Date('2016-11-11'),
          },
          {
            title: 'test 2',
            date: new Date('2016-12-12'),
          }
        ]
      }
    ];
  }
}
