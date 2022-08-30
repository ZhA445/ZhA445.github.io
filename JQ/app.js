
var valueList = $('#valueList');

var text = '<span> you have selected : </span>';
var listArray = [];

var checkboxes = $('.checkbox');


for (var checkbox of checkboxes){
    $('.checkbox').on('click',function(){
    // checkbox.addEventListener('click',function(){
        if('.checkbox'.checked == true){
            console.log(checkboxes.val())
            
        }else{
            console.log('unchecked')
        }
    })
    }
