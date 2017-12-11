function done(){
	console.log("MEGHAN IS A BUTT");

}

//the parent function 
function increment(num, callBack){
	for(var i = 0; i <= num; i++){
  	console.log(i);
  }
  callBack();
}

//the callback function is passed to the increment function 
increment(13, done);