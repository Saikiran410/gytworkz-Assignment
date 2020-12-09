class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    
    }

}
class BinarySearchTreeFind {

    constructor(){
      this.root = null
    }
 
  find(val){
      if(!this.root) return false
      
      let current = this.root
      let found = false
      while(current && !found){
            if(val < current.val){
              current = current.left
             } else if(val > current.val){
                current = current.right
             } else {
                  found = current
             } 
            
            }
    
        if(!found) return undefined;
        return found
      
  
  }
}