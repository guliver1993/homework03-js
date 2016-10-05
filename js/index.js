var n = Number(prompt("Введіть шукане число Фібоначчі"));

function fib(n) {
      var a = 1,
        b = 1;
      for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
      }
      return b;
    }
    alert('Число Фібоначчі = ' + fib(n));
    
    
   