/**
 * Created by HSO on 3/18/15.
 */

import {Component, Template, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'my-app'
})
@Template({
    url: 'malice.html'
})

// Component controller
class MyAppComponent {
    constructor() {
        this.name = 'Alice';
    }

    changeName(){
        this.name = "Robert"
    }
}

bootstrap(MyAppComponent);

