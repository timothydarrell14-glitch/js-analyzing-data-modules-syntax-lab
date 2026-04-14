function combineUsers(placeHolder){
let combinedObject = {
  users: [],
  merge_date: Date.today().toString("MM/dd/yyyy"),
}
(placeHolder).forEach(() => {
  combinedObject.users = [...placeHolder]
})
return combinedObject
}
combineUsers(...args)