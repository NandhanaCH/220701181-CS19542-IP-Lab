const form = document.querySelector('#form')
const username = document.querySelector('#usn');
const rollno = document.querySelector('#rgn');
const gender = document.querySelector('#gnd');
const year = document.querySelector('#year');
const dept = document.querySelector('#dept');
const sec = document.querySelector('#sec');
const mob = document.querySelector('#mob');
const email = document.querySelector('#email');
const add = document.querySelector('#add');
const city = document.querySelector('#city');
const con = document.querySelector('#con');
const pin = document.querySelector('#pin');

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
const usernameVal = username.value.trim()
const rollnoVal = rollno.value.trim();
const genderVal = gender.value.trim();
const yearVal = year.value.trim();
const deptVal = dept.value.trim();
const secVal = sec.value.trim();
const mobVal = mob.value.trim();
const emailVal =email.value.trim();
const addVal = add.value.trim();
const cityVal = city.value.trim();
const conVal = con.value.trim();
const pinVal = pin.value.trim();
    let success = true

    if(usernameVal===''){
        success=false;
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(rollnoVal===''){
        success=false;
        setError(rollno,'Register number is required')
    }
    else{
        setSuccess(rollno)
    }
    
    if(mobVal==='')
        {
            success=false;
            setError(mob,'Mobile number is required')
        }
        else if(mobVal.length<10 || mobVal.length>10)
        {
            success=false;
            setError(mob,'Please enter a valid Mobile number')
        }
        else{
            setSuccess(mob)
        }
  
    if(emailVal===''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please enter a valid Email')
    }
    else{
        setSuccess(email)
    }

    if(addVal==='')
        {
            success=false;
            setError(add,'Address is required')
        }
        else
        {
            setSuccess(add)
        }

        if(cityVal==='')
            {
                success=false;
                setError(city,'City is required')
            }
            else
            {
                setSuccess(city)
            }

            if(conVal==='')
                {
                    success=false;
                    setError(con,'Country is required')
                }
                else
                {
                    setSuccess(con)
                }

                if(pinVal==='')
                    {
                        success=false;
                        setError(pin,'Pincode is required')
                    }
                    else if(pinVal.length<6||pinVal.length>6)
                    {
                        success=false;
                        setError(pin,'Please enter a valid Pincode')
                    }
                    else
                    {
                        setSuccess(pin)
                    }
                    
    return success;

}
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };