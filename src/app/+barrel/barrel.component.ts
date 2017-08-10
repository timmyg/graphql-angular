import {
  Component,
  OnInit,
} from '@angular/core';
  import { AppState } from '../app.service';
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Barrel` component loaded asynchronously');

@Component({
  selector: 'barrel',
  template: `
    <h1>Households via GraphQL</h1>
    <span>
      <pre class="app-state">mockArray = {{ mockArray | json }}</pre>
    </span>
    <router-outlet></router-outlet>
  `,
})
export class BarrelComponent implements OnInit {
  private mockArray: any;
  public ngOnInit() {
    this.mockArray = [
      {id: 1, name: 'Roi'},
      {id: 2, name: 'Jane'},
    ]
  }

}
