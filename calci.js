(function() {
    let disply = document.querySelector('.disply');
    let buttons = document.querySelectorAll('.calbutton');
    let equal =  document.querySelector('.equalbutton');
    let clear = document.querySelector('.clearbtn');
    

    buttons.forEach(function (button) {
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            disply.value +=value;
        })
    }); 

     equal.addEventListener('click',function(e){
        if (disply.value ===''){
            disply.value= "please enter";
        } else {
         let answer = eval(disply.value);
         disply.value = answer;
        }
    })
 
    clear.addEventListener('click',function(e) {
        disply.value = "";
    })

    
 
})();