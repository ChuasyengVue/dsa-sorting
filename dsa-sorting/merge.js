function merge(left, right) {
    let sortedArray = [];
    let i = 0;
    let j = 0;
    
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        }
        else{
            sortedArray.push(right[j]);
            j++;
        }
    }

    while( i < left.length) {
        sortedArray.push(left[i]);
        i++;
    }

    while( j < right.length) {
        sortedArray.push(right[i]);
        j++;
    }

    return sortedArray;
}

function mergeSort(arr) {
    let mid = (arr.length / 2 );
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
   
}

module.exports = { merge, mergeSort};