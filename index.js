var recipes = {'eggs': 2};
function updateObjectWithKeyAndValue(object, key, value){
  var newObj = {key: value};
  var retObject = Object.assign({}, object, newObj);
  return retObject;
}
