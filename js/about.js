fetch('https://wefixz.com/le_kerala_api/aboutus_api.php')
.then(Response=>Response.json())
.then(data=>{
    console.log(data)
    $('#meta_title').append(`${data[0]['meta_title']}`)
    $('#meta_description').attr('content',`${data[0]['meta_description']}`)
    $('#welcome_val').append(`${data[0]['welcome']}`)
    $('#welcome_val1').append(`${data[0]['welcome']}`)
    
    $('#our_vission').append(`${data[0]['vision']}`)
    $('#our_mission').append(`${data[0]['mission']}`)
    $('#our_vission1').append(`${data[0]['vision']}`)
    $('#our_mission1').append(`${data[0]['mission']}`)
    $('#banner_img').append(`<img src="https://wefixz.com/Admin/uploads/${data[0]['userfile1']}" class="pt-3" alt="Get back to nature for

        ultimate health">`)
        
    $('#why_us_img').append(`<img src="https://wefixz.com/Admin/uploads/${data[0]['userfile2']}" class="pt-3 " alt="Get back to nature for
        
                            ultimate health">`)
        
    $('#why_choose_des').append(`${data[0]['why_choose']}`)
    $('#box1').append(`${data[0]['box1']}`)
    $('#box2').append(`${data[0]['box2']}`)
    $('#box3').append(`${data[0]['box3']}`)
    $('#box4').append(`${data[0]['box4']}`)

})