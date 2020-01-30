import { Component } from '@angular/core';

import { FifoList } from './classes/fifo-list';
import { LifoList } from './classes/lifo-list';
import { OrderedList } from './classes/ordered-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fl: FifoList;
  ll: LifoList;
  ol: OrderedList;

  itemInput;

  ngOnInit() {

    this.fl = new FifoList;
    this.fl.add('a');
    this.fl.add('b');
    this.fl.add('c');

    this.ll = new LifoList;
    this.ll.add('a');
    this.ll.add('b');
    this.ll.add('c');

    this.ol = new OrderedList;
    this.ol.add('a');
    this.ol.add('b');
    this.ol.add('c');


  }


  lifoPop() {
    let li = this.ll.pop();
    console.log(li);
  }

  fifoPop() {
    let li = this.fl.pop();
    console.log(li);
  }

  addLifo() {
    this.ll.add(this.itemInput);
  }

  addFifo() {
    this.fl.add(this.itemInput);
  }


}
