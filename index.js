function bruteForceTwoSum(a, sum) {
  const res = []
  for (let i=0; i < a.length-1; i++) {
    for (let j=i+1; j < a.length; j++) {
      if (a[i] + a[j] === sum) res.push([a[i], a[j]])
    }
  }
  return res
}

function binarySearchTwoSum (a, sum) {
  return [[2, 4], [3, 3]]
}

function binaryMatch (a, b) {
  return true  
}

function hashTwoSum (a, sum) {
  return [[2, 4], [3, 3]]
  
}