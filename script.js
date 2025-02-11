// complete the given function

function palindrome(str){
  let newStr = str.split(' ');
	if(newStr === str){
		console.log(`{str} is a pallindrome`);
	}
	else{
		console.log(`{str} is not a pallindrome`);
	}
}
module.exports = palindrome
