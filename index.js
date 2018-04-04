var array=[]
function createObj(name,phase,gender){
  var obj={}
  obj["name"]=name
  obj["phase"]=phase
  obj["gender"]=gender

  array.push(obj)
  return array
}
createObj("Angel",1,"Female")
createObj("Hana",0,"Female")
createObj("Lala",2,"Male")
createObj("Lulu",3,"Female")


function getData(name){
    for(var i=0; i<array.length; i++){
        if(name===array[i]["name"]){
            return array[i]
        }
    }
}
console.log(getData("Angel"))