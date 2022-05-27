const temperaturCacl = function(temp){
    let max = temp[0];
    for(let i = 0; i < temp.length; i++){
        if(temp[i]>max){
            
            max=temp[i];
        }
    }

    console.log(max);
}
temperaturCacl([1, 3, 6]);
