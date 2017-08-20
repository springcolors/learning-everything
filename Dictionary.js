class Dictionary{
  constructor(){
    this.items={};
  }
  
  has(key){
    return key in this.items;
  }
  
  get(key){
    if(this.has(key)){
      return this.items[key];
    }
  }
  
  set(key,value){
    if(!this.has(key)){
      this.items[key]=value;
      return true;
    }
    return false;
  }
  
  remove(key){
    if(this.has(key)){
      delete this.items[key];
      return true;
    }
    return false;
  }
  
  size(){
    return Object.keys(this.items).length;
  }
  
  values(){
    return Object.values(this.items);
  }
  keys(){
    return Object.keys(this.items);
  }
  clear(){
    this.items={};
  }
}//end Dictionary


let dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.has('Gandalf'));
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));