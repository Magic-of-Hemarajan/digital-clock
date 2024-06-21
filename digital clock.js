document.getElementById("demo6");
    setInterval(abc,1000);
    function abc(){
        const d=new Date();
        const h=d.getHours();
        const m=d.getMinutes();
        const s=d.getSeconds();
        if(h>12){
          demo6.innerHTML='PM';
        }
        else{
            demo6.innerHTML='AM';
        }
        function time(h){
            if(h>12){
                h=h-12;
                return h;
            }
        }
        document.getElementById("demo1").innerHTML=zero(d.getHours());
        document.getElementById("demo3").innerHTML=zero(d.getMinutes());
        document.getElementById("demo5").innerHTML=zero(d.getSeconds());
    }
    function zero(num){
        return num<10 ? "0"+num:num;
    }
   