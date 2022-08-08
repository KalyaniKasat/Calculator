function del(calc) {                                            
    len = calc.display.value.length;
        calc.display.value = calc.display.value.substring(0, len-1);
    }

function equalsTo(calc) {
    if(calc.display.value.includes("!")) {
             
        size = calc.display.value.length;
        n = Number(calc.display.value.substring(0, size-1));
        fact = 1;
             
        for(i = 2; i <= n; i++)
             fact = fact*i;
        calc.display.value = fact;
        }
         
    else if(calc.display.value.includes("%")) {
             
        len = calc.display.value.length;
        n = Number(calc.display.value.substring(0, len-1));
        calc.display.value = n/100;
        }

    else   
        calc.display.value = eval(calc.display.value);
    }
