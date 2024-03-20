
//display content in calcScreen
const displayContent=(content)=>{
    calcScreen.value+=content

}

// clear content of calcScreen
const clearScreen=()=>{
    calcScreen.value=''
    calcScreen.placeholder='0'

}

// result display in calcScreen
const showResult=()=>{
   try{
    calcScreen.value=eval(calcScreen.value)
   }catch{
    calcScreen.value=''
     calcScreen.placeholder="Error!!!"
   }

}

const removeLast=()=>{
    calcScreen.value = calcScreen.value.slice(0,-1)
}
