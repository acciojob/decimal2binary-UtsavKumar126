function decimalToBinary(num) {
  //Write you code here 
	let ans=[];
	while(num>0){
		ans.push(num%2);
		num=Math.floor(num/2)
	}
  let ansnum=0;
  for(i=ans.length-1;i>=0;i--){
	  ansnum=ansnum*10+ans[i];
  }	

return num;	
}

window.decimalToBinary = decimalToBinary;
