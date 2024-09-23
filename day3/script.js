var inputs=document.querySelectorAll('.labelpanel input');

function handleInput() {
    console.log(this.value);
    console.log(this.dataset.sizing);
    var suffix = this.dataset.sizing || '';
    if( this.name === 'spacing' ){
        document.documentElement.style.setProperty(`--${this.name}`, this.value+ '%');
    }
    else if( this.name === 'blur' ){
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
    else if( this.name === 'base' ){
        document.documentElement.style.setProperty(`--${this.name}`, this.value );
    }

}

inputs.forEach(input => input.addEventListener('change', handleInput));



