/**
 * @param {string} s
 * @return {boolean}
 */

map = {
    '(':')',
    '{':'}',
    '[':']'
}
var isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++){
        let el = s[i];
        if(map[el]){
            stack.push(el);
        }
        else{
            if(map[stack.pop()] !== el){
                return false
            }
        }
        debugger;
    }
    
    return stack.length === 0;
};

console.log(isValid('()'))