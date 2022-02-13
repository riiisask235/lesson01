var i;
var j;
var b;

for(var i=1;i<=9;i++){
    b  = '';
    for(var j=1;j<=9;j++){
        b += `${i*j} `;
    }
    console.log(b);
}