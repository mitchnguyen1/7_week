class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class linkedList{
    constructor(head = null){
    this.head = head;
    this.tail = null
    }
    size(){
        let count = 0;
        let head = this.head
        while(head != null){
            count++
            head = head.next
        }
        return count
    }
    isEmpty(){
        return this.head == null
    }
    getLast(){
        return this.tail
    }
    addToHead(node){
        //set the next of the new head first
        //reassign the head to new node
        node.next = this.head
        this.head = node
    }
    addToTail(node){
        //set tail next to new node
        //set the list tail to the new node
        this.tail.next = node
        this.tail = node
    }
    insertAt(index,node){
        let temp = this.head
        for(let i = 1; i<index-1;i++){
            temp = this.head.next
        }
        let next = temp.next
        temp.next = node
        node.next = next
    }
    removeAt(position){
        let node = this.head
        for(let i = 0; i<position-1;i++){
            node = node.next
        }
        let remove = node.next
        node.next = remove.next
    }
    removeFromBack(){
        let node = this.head
        while(node.next != this.tail){
            node = node.next
        }
        node.next = null
        this.tail = node
    }
    removeFromFront(){
        let newHead = this.head.next
        this.head.next = null
        this.head = newHead
    }
}

let list = new linkedList()
let vinson = new Node('vinson')


//tail point to itself since only one node
list.head = vinson
list.tail = vinson
//head -> vinson <- tail


let ben = new Node('ben')
vinson.next = ben
list.tail = ben
//head -> vinson -> ben <- tail

let latisha = new Node('latisha')
vinson.next.next = latisha
list.tail = latisha

let dionte = new Node('dionte')
vinson.next.next.next = dionte
list.tail = dionte

let mitch = new Node('Mitch')
list.addToHead(mitch)

let vex = new Node('Vector')
list.addToTail(vex)

let test = new Node('test')
list.insertAt(2,test)

list.removeFromBack()

console.log(list.head)