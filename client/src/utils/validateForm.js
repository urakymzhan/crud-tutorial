
export const validateForm = (errors, employee) => {
    let valid = true;
    for(let key in employee){
          if(employee[key] === ''){
              valid = false;
          }
    }
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }