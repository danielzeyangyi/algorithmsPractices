/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const dict = {};
    for(email in emails){
        
    }
};

var cleanup = function(email){
    email = email.split('.').join('');
    if(email.indexOf('+') > 0){
        let pos = email.indexOf('+');
        email = email.split('').slice(0, pos).join('')
    }
    return email;
}