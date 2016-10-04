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
    
    document.write('число фібоначчі (3) =' + fib(3) + '<br>' ); 
    document.write('число фібоначчі (5) =' +  fib(5) + '<br>' ); 
    document.write('число фібоначчі (12) =' +  fib(12) + '<br>' );