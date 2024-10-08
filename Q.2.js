function forEachCustom(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}
let numbers = [1, 2, 3, 4, 5]
forEachCustom(numbers, function(element) {
    console.log(element)
})


