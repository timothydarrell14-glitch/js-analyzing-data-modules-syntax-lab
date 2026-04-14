require('datejs')

// let arr = ["Alice", "Leo", "Maya", "Jordan", "Sam"]
// let arr2 = ["Elena", "Marcus", "Sasha", "Julian", "Zoe"]
// let arr3 = ["Felix", "Amara", "Dante", "Kiara", "Hugo"]

// let args = [arr, arr2, arr3]

// console.log(args)

function combineUsers(...args){

  let combinedObject = {
    users: [],
    merge_date: Date.today().toString("M/d/yyyy"),
  }

  args.forEach(function(arr){
    combinedObject.users = [...combinedObject.users, ...arr]
  })

  return combinedObject

}
combineUsers()

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

