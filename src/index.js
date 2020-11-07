let p = "abcd", q = "ad"
function checkStr(source, target) {
  let temp = {}
  for (let i = 0; i < source.length; i++) {
    const item = source[i];
    temp[item] = 1
  }
  for (let j = 0; j < target.length; j++) {
    if (!temp[target[j]]) { return false }
  }
  return true
}
checkStr(p, q)