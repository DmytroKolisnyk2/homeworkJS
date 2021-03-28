const textRef = document.querySelector('#text');
const fontSizeControlRef = document.querySelector('#font-size-control');
console.log(fontSizeControlRef);
const changeFontSize = () => { textRef.style.fontSize = `${+fontSizeControlRef.value / 2}px`; 
}
fontSizeControlRef.addEventListener('input', changeFontSize);