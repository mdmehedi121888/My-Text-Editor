document.getElementById('bold').addEventListener('click',function(){
    const textvalue = document.getElementById('text-area');
    if(textvalue.style.fontWeight!='bolder')
    document.getElementById('text-area').style.fontWeight="bolder";
    else
    document.getElementById('text-area').style.fontWeight="normal";
})

document.getElementById('italic').addEventListener('click',function(){
    const textvalue = document.getElementById('text-area');
    if(textvalue.style.fontStyle=='normal')
    document.getElementById('text-area').style.fontStyle="italic";
    else
    document.getElementById('text-area').style.fontStyle="normal";
})

document.getElementById('underline').addEventListener('click',function(){
    const textvalue = document.getElementById('text-area');
   // tounderline();
    if(textvalue.style.textDecoration!='underline')
    document.getElementById('text-area').style.textDecoration = "underline";
    else
    document.getElementById('text-area').style.textDecoration = "none";
})

document.getElementById('left-align').addEventListener('click',function(){
     document.getElementById('text-area').style.textAlign="left";
})
document.getElementById('right-align').addEventListener('click',function(){
     document.getElementById('text-area').style.textAlign="right";
})
document.getElementById('justify-align').addEventListener('click',function(){
     document.getElementById('text-area').style.textAlign="justify";
})
document.getElementById('format-align').addEventListener('click',function(){
     document.getElementById('text-area').style.textAlign="center";
})
document.getElementById('color-picker').addEventListener('click',function(){
    const value1 = document.getElementById('color-picker').value;
     document.getElementById('text-area').style.color=value1;
})




