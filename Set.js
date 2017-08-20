class Set{
  constructor(){
    this.items={};
  }
  has(value){
    return this.items.hasOwnProperty(value);
  }
  
  add(value){
     
    if(!this.has(value)){
      this.items[value]=value;
      return true;
    }
    return false;
  }
  
  delete(value){
    if(!this.has(value)){
      delete this.items[value];
      return true;
    }
    return false;
  }
   
  values(){
    
    return Object.keys(this.items);
  }
  
  display(){
    let values=this.values();
    
    for(let i in values){
      console.log(values[i]);
    }
  }
 
  union(otherSet){
    let union=new Set();
    let values=this.values();
    
    for(let i=0;i<=values.length-1;i++){
      union.add(values[i]);
    }
    
    values=otherSet.values();
    
    for(let i=0;i<=values.length-1;i++){
      union.add(values[i]);
    }
    console.log("--Union--");
    union.display();
  }
  
  intersection(otherSet){
   let intersection=new Set();
    let values=this.values();
    let otherValues=otherSet.values();
    
    for(let i=0;i<=values.length-1;i++){
      if(otherSet.has(values[i])){
          intersection.add(values[i]);
      }
    }
    console.log("--Intersection--");
    intersection.display();
  }//end intersection
  
  
  difference(otherSet){
    let values=this.values();
    let differenceSet=new Set();
    
    for(let i=0;i<=values.length-1;i++){
      if(!otherSet.has(values[i])){
        differenceSet.add(values[i]);
      }
    }
    console.log("--Difference--");
    differenceSet.display();
  }//end difference
  
  size(){
    return this.items.length;
  }
  isSubset(otherSet){
    
    if(this.size()<otherSet.size()){
        console.log("False");
      return;
    }
    
    let values=this.values();
    console.log("--Is Subset? --");
    
    for(let i=0;i<=values.length-1;i++){
      if(!otherSet.has(values[i])){
        console.log("False");
        return;
      }
    }
    console.log("True!");
   
  }//end isSubset
  
}//end Set

let s=new Set();
s.add(11);
s.add(12);
s.add(13);
s.add(33);
s.display();
let t=new Set();
t.add(22);
t.add(23);
t.add(24);
t.add(33);
t.display();


s.union(t);
s.intersection(t);
s.difference(t);
s.isSubset(t);



let w=new Set();
w.add(22);
w.add(23);
w.isSubset(t);
