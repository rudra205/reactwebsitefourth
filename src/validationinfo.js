import useForm from './useForm'

export default function validation (values){
    let errors={}
    if(!values.Username){
        errors.Username='user name required'
    }
    
    //email

    if(!values.email){
        errors.email='email required'
    }
    else if(!/^[A-Za-z]+/.test(values.name)){
        errors.email='email address is invalid'
    }
    //pas

    if(!values.pasword){
        errors.pasword='pasword required'
    }
    else if(values.pasword.length < 6){
        errors.pasword='password needs to be atleast 6 character'
    }
    //pas2
    
   if(!values.pasword2){
       errors.pasword2='pasword is required'
   }
   else if(values.pasword2 !== values.pasword){
       errors.pasword2='pasword does not match'
   }
   return errors;
}