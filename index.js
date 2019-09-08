let hasTarget = false;
function locate(array, target) {
  hasTarget = false;
  for (let i = 0, n = array.length; i < n; i++){
    if (Array.isArray(array[i])){
      locate(array[i], target)
    }
    if (array[i] == target){
      hasTarget = true;
    }
  }
  return hasTarget;
}

module.exports = locate;