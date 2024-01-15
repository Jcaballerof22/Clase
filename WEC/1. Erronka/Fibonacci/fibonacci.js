document.addEventListener("DOMContentLoaded", function() {
    function fibonacci(n){
        var array = [];
        for(var i = 0; i < n; i++){
            if (i <= 1){
                array.push(i);
            }else {
                array.push(array[i-1]+array[i-2]);
            }
        }
        return array;
    }

    function ateraFibonacci(n){
        var fibo = fibonacci(n);
        document.getElementById("fibo").textContent=fibo.join(', ');
    }

    var n = 10000;
    ateraFibonacci(n);
});
