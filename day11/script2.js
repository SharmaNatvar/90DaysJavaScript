// make an array of object representng 
// item, filter the items based on a specific 
// condition (e.g , items with a certain property value)
// and transform the filtere data into a new format 

const NEWARRAY = [
    {id:1, firstName:"Sara", lastName:"Steele", email:"tubadef@faroj.is", countery:"Iran", isActive:true},
    {id:2, firstName:"Richard", lastName:"Bass", email:"sat@su.ps", countery:"Cook Islands", isActive:false},
    {id:3, firstName:"Carolyn", lastName:"Gardner", email:"hif@rarom.zm", countery:"Bhutan", isActive:true},
    {id:4, firstName:"Cynthia", lastName:"Greer", email:"cujav@ezi.sj", countery:"Macedonia", isActive:false},
    {id:5, firstName:"Sean", lastName:"Adkins", email:"wifse@of.ao", countery:"Bhutan", isActive:true},
]


let result = NEWARRAY.filter(item => item.isActive).map((item) => ({firstName:item.firstName, email:item.email}))
console.table(result);