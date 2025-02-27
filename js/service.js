
let url = location.href.split('=')[1];


fetch('https://wefixz.com/le_kerala_api/inner_treatement_api.php?id='+url)
.then(Response=>Response.json())
.then(data=>{
    console.log(data)
    $('#meta_title').append(`${data[0]['meta_title']}`)
    $('#meta_description').attr('content',`${data[0]['meta_description']}`)
    let treatment_name=data[0]['treatment_name'];
    let parts = treatment_name.split(' '); 
    let firstPart = parts[0]; 
    let secondPart = parts[1]; 
    $('#treathead1').append(`${firstPart}`)
    $('#treathead2').append(`${secondPart}`)
    $('#sub_heading_val').append(`What is ${firstPart} <br>${secondPart}?`)
    $('#about_treatment').append(`${data[0]['description']}`)
    
    console.log(data[0]['benefits1'])

    $('#benefits1img').append(`<img src="https://wefixz.com/Admin/uploads/${data[0]['userfile3']}" class="benefit-icon w-auto "
                                        style="padding-right: 102px;width: 197px !important;" alt="Boosts Circulation">`)
     $('#benefits1img1').append(`<img src="https://wefixz.com/Admin/uploads/${data[0]['userfile3']}" class="benefit-icon w-auto "
                                        style="padding-right: 102px;width: 197px !important;" alt="Boosts Circulation">`)                                   
    $('#benefits1val').append(`${data[0]['benefits1']}`)
    $('#benefits1val1').append(`${data[0]['benefits1']}`)
    
     $('#benefits2img').append(`<img src="https://wefixz.com/Admin/uploads/${data[0]['userfile4']}" class="benefit-icon w-auto "
                                        style="padding-right: 102px;width: 197px !important;" alt="Boosts Circulation">`)
      $('#benefits2img2').append(`<img src="https://wefixz.com/Admin/uploads/${data[0]['userfile4']}" class="benefit-icon w-auto "
                                        style="padding-right: 102px;width: 197px !important;" alt="Boosts Circulation">`)
                                        
     $('#benefits2val').append(`${data[0]['benefits2']}`)          
     $('#benefits2val2').append(`${data[0]['benefits2']}`)  
     
      $('#benefits3img').append(`<img src="https://wefixz.com/Admin/uploads/${data[0]['userfile5']}" class="benefit-icon w-auto "
                                        style="padding-right: 102px;width: 197px !important;" alt="Boosts Circulation">`) 
      $('#benefits3img3').append(`<img src="https://wefixz.com/Admin/uploads/${data[0]['userfile5']}" class="benefit-icon w-auto "
                                        style="padding-right: 102px;width: 197px !important;" alt="Boosts Circulation">`)                                  
  $('#benefits3val').append(`${data[0]['benefits3']}`) 
  $('#benefits3val3').append(`${data[0]['benefits3']}`) 
        
    $('#why_choose_des').append(`${data[0]['why_choose']}`)
    $('#box1').append(`${data[0]['box1']}`)
    $('#box2').append(`${data[0]['box2']}`)
    $('#box3').append(`${data[0]['box3']}`)
    $('#box4').append(`${data[0]['box4']}`)

})