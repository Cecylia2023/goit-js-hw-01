function getElementWidth(content, padding, border) {
    let conTent = Number.parseFloat(content);
    let padDing = Number.parseFloat(padding);
    let borDer = Number.parseFloat(border);
    return conTent + 2 * padDing + 2 * borDer;
}
console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px"));