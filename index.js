var arr=[]
function createOBJ(name,phase,gender){
    var ObjData={
      name : name,
      phase : phase,
      gender : gender
    }
    arr.push(ObjData)

}


createOBJ('akbar',1,'male')
createOBJ('icha',1,'female')
createOBJ('akbar',1,'male')
createOBJ('faldhi','final','male')

  console.log(arr);
