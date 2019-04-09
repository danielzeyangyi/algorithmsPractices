/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    if(tree == null || tree.length == 0 ){
        return 0;
    };
    let max = 1;
    let i = 0;
    let j = 0;
    let dict = {};
    
    while(j < tree.length){
        if(Object.keys(dict).length <= 2){
            dict[tree[j]] = j;
            j+= 1;
        } 
        
        if(Object.keys(dict).length > 2) {
        // if(Object.keys(dict).length > 2){
         let min =  tree.length - 1;
         for ( key in dict){
             min = Math.min(dict[key], min);
         }
         delete dict[tree[min]];
         i = min + 1;
        };
        
        max = Math.max((j - i), max);
    }
    
    return max;
};