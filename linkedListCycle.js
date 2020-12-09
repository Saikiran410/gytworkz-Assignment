var Node = function (value) {
    return {
      value : value,
      next  : null
    };
  };
  
  var hasCycle = function (startNode) {
    // create two 'runners' who start at the same startNode
    var slow = startNode;
    var fast = startNode;
  
    while ( true ) {
      // check if the next slow or fast nodes are null
      if ( fast.next === null || fast.next.next === null ) return false;
  
      // slow will go 'slower' than fast
      slow = slow.next;
      fast = fast.next.next;
  
      // if there is a cycle, there eventually both of these runners will cross
      if ( slow === fast ) return true;
    }
  };