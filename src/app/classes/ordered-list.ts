

import { ListItem } from './list-item';

export class OrderedList {

  top: ListItem;
  count: number = 0;

  add(val: string) {

    let li = new ListItem(val);

    if (!this.top) {
      // first item
      this.top = li;
    } else {
      // append to appropriate place in list
      // start at top and work up the list thru next calls
      // go until we hit a value that comes after our value in the list
      // or we hit the end of the list
      let temp: ListItem = this.top;
      let itemToAddAfter: ListItem = null;
      while (temp.next && itemToAddAfter == null) {  // while there are more items in list and we haven't yet found the one
        if (temp.next.value.localeCompare(val) < 0) { // if this item's next comes before our new value
          temp = temp.next; // try next
        } else {
          itemToAddAfter = temp;
        }
      }
      if (itemToAddAfter == null)  { // we got to end of list and no items are > our new item
        temp.next = li;  // set to next of last item
      } else {
        li.next = itemToAddAfter.next;
        itemToAddAfter.next = li;
      }
    }
    this.count++;
  }

  pop() {
    // remove first item and return
    let temp = this.top;
    this.top = this.top.next;
    this.count--;
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

