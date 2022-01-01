const inputs = document.querySelectorAll(".controls input");
function handelInputs(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}
inputs.forEach(input => {
    input.addEventListener('change',handelInputs);
});
inputs.forEach(input => {
    input.addEventListener('mousemove',handelInputs);
});
