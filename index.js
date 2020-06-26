function bruteForceTwoSum(a, sum) {
  const res = []
  for (let i=0; i < a.length-1; i++) {
    for (let j=i+1; j < a.length; j++) {
      if (a[i] + a[j] === sum) res.push([a[i], a[j]])
    }
  }
  return res
}


function merge(arr1, arr2){
  let sorted = []
  let [i, j] = [0, 0]
  while (arr1.length > i && arr2.length > j){
    if (arr1[i] - arr2[j] < 0){
      sorted.push(arr1[i])
      i++
    }
    else{
      sorted.push(arr2[j])
      j++
    }
  }
  return sorted.concat(arr1.slice(i)).concat(arr2.slice(j))
}

function mergeSort(arr){
  if(arr.length<2) return arr
  let mid = Math.floor(arr.length / 2)
  let sorted = merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
  return sorted
}

function binarySearchTwoSum (a, sum) {
  const sortedArr = mergeSort(a)
  const res = []
  for (let i = 0; i < sortedArr.length; i++) {
    if (binaryMatch(sortedArr.slice(i+1), sum-sortedArr[i])) res.push([sortedArr[i], sum-sortedArr[i]])
  }
  return res
}

function binaryMatch (arr, num) {
  let left = 0
  let right = arr.length-1
  while (left <= right) {
    let mid = Math.floor((right+left) / 2)
    if (arr[mid] < num) left = mid+1
    if (arr[mid] > num) right = mid-1
    if (arr[mid] === num) return true
  }
  return false
}

function hashTwoSum (a, sum) {
  let res = []
  let hash = {}
  for (let i of a) {
    if (!hash[i]) hash[i] = 1
    else hash[i]++
  }
  for (let j of a) {
    if (hash[sum - j] && !!hash[sum-j]) {
      hash[sum-j]--
      hash[j]--
      res.push([j, sum-j])
    }
  }
  return res
}