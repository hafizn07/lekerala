fetch('https://wefixz.com/le_kerala_api/packages_api.php')
.then(Response=>Response.json())
.then(data=>{
    console.log(data[0]['meta_title'])
    $('#meta_title').append(`${data[0]['meta_title']}`)
    $('#meta_description').attr('content',${data[0]['meta_description']})
    $('#description_val').append(`${data[0]['wellness']}`)
})