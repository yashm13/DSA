// Rotaed duplicate arry with duplicate element 
// [1,2,2,2,3,4,5,6]
// [2,2,2,3,4,5,6]
// [3,4,5,6,1,2,3]
// [3,3,3,4,1,2]
// greater end
// [4,4,3,2,1]

while(start < end){
    let mid = start + end /2
    if(mid > mid + 1 ){
        return mid ;
    }

    if( mid < mid -1 ){
        return mid ;
    }

    // start and end are the duplicate 
    if( start === end ){
        if(start > start + 1){
            return start 
        }
        start++

        if(end > end -1){
            return end
        }
        end--
    }

   if(start < mid || start === mid && mid< end ){
    start = mid +1 ;

   }else{
    end = mid -1 
   }

}


// ROtation COunt 
