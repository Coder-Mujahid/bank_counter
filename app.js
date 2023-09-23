document.getElementById('diposite_btn').addEventListener('click',function(){
    const diposite_data=document.getElementById('diposite')
    const dipositetext=diposite_data.innerText;
    const dipositeparse=parseFloat(dipositetext);
    

    const diposite_input_data=document.getElementById('diposite_input')
    const diposite_inputtext=diposite_input_data.value;
    const diposite_inputparse=parseFloat(diposite_inputtext);

    const Total_balance_data=document.getElementById('Total_balance')
    const Total_balanceparse=parseFloat(Total_balance_data.innerText);


    if(isNaN(diposite_inputparse)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Is not a number pleas inter the valid number',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    else{
        diposite_data.innerText=(dipositeparse+diposite_inputparse),
        Total_balance_data.innerText=(Total_balanceparse+diposite_inputparse)
        Swal.fire(
            'Diposite Success!',
            'You clicked the button!',
            'success'
          )
    }
    diposite_input_data.value = '';
})

document.getElementById('withdrow_btn').addEventListener('click',function(){
    const withdrow_data=document.getElementById('withdrow')
    const withdrowtext=withdrow_data.innerText;
    const withdrowparse=parseFloat(withdrowtext);

    const withdrowInput_data=document.getElementById('withdrowInput')
    const withdrowInputtext=withdrowInput_data.value;
    const withdrowInputtextparse=parseFloat(withdrowInputtext);

    const Total_balance_data=document.getElementById('Total_balance')
    const Total_balanceparse=parseFloat(Total_balance_data.innerText);

    if(isNaN(withdrowInputtextparse)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Is not a number pleas inter the valid number',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    else{
        Total_balance_data.innerText=(Total_balanceparse - withdrowInputtextparse),
        withdrow_data.innerText=(withdrowparse + withdrowInputtextparse)
        Swal.fire(
            'Diposite Success!',
            'You clicked the button!',
            'success'
          )
    }
    withdrowInput_data.value = '';

})
