import { ListItem } from './list-item';

export class FifoList {

  top: ListItem;
  count: number = 0;

  add (val: string) {
    let li = new ListItem(val);
    if (!this.top) {
      // first item
      this.top = li;
    } else {
      // append as last item -- get last item; set its next to this item
      let temp = this.top;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = li;
    }
    this.count ++;
  }

  pop () {
    // remove first item and return
    let temp = this.top;
    this.top = this.top.next;
    this.count --;
    return temp;
  }

  get toString() {
    let temp = this.top;
    let str = temp.value;
    while (temp && temp.next) {
      temp = temp.next;
      str += '; ' + temp.value;
    }
    return str;
  }




}
