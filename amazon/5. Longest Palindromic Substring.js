/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let palindrome;
    let longest = 0;
    let dp = [];

    var getSubstring = function(start, end){
        return s.substring(start, end);
    }

    for(var i = 0; i < s.length; i++){
        for(var j = 0; j < s.length; j++){
            dp[i][j] = false;
        }
    }

    // for len = 1
    for(var i = 0; i < s.length; i++){
        dp[i][i] = true;
        if(s[i].length > longest){
            palindrome = s[i];
            longest = palindrome.length;
        }
    }
    

    // for len = 2
    for(var i = 0; i < s.length - 1; i++){
        if(s[i] === s[j]){
            dp[i][j] = true;
            if(s.substring(i, i + 1).length > longest){
                palindrome = ssubstring(i, i + 1);
                longest = palindrome.length;
            }
        }   
    }

    // len = 3
    let j = 0;
    for(let k = 2; k < s.length; k++){
        for(let i = 0; i < s.length - k; i++){
            j = i + k;
            if(s[i] === s[j] && dp[i+1][j-1]){
                dp[i][j] = true;
                if(s.substring(i, j).length > longest){
                    palindrome = ssubstring(i, j);
                    longest = palindrome.length;
                }
            }
        }
    }

    return palindrome;
};