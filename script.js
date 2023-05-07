
const  onConvert=()=>{
    const value = document.getElementById('userinput').value;
    const temptype = document.getElementById('type').value;
    let convertedValue;
    let resut="";
    if(temptype==="celsius"){
        convertedValue = value*1.8 +32;
        result=`${convertedValue}°F`;
    }
    else{
        convertedValue = 5/9.0*(value-32);
        result=`${convertedValue}°C`;
    }
    document.getElementById('res').innerHTML= result;
    console.log(result);

}

document.querySelector('#convert').addEventListener('click', onConvert);

