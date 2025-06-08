import {LinkedList} from "./index.js"

let list = new LinkedList();


list.append("dog");
list.append("dotti");
list.append("me");
list.prepend("mom");
console.log(list.head());
console.log(list.size());
console.log(list.toString());
console.log(list.contains("bleehadhaw"));
console.log(list.find("mom"));
console.log(list.at(3));
list.pop();
console.log(list.toString());
console.log(list.tail());
