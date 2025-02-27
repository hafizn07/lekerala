$(document).ready(function () {
    fetch('https://wefixz.com/le_kerala_api/home_api.php')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let homedata = data.home;

            $('#meta_title').append(homedata[0]['meta_title']);
            $('#meta_description').attr('content', homedata[0]['meta_description']);
            $('.emailidfetch').append(homedata[0]['email']);
            $('#about_section').append(homedata[0]['about']);
            $('#description_val').append(homedata[0]['description']);

            let service_data=data.services;
            for(let x=0;x<service_data.length;x++){
                $('#fetch_service_list').append(`<div class="swiper-slide">

              <div class="ayur-why-box">
                <div class="service-padding">
                  <div class="ayur-why-boxicon ">
                    <div class="div-img">
                      <img src="https://wefixz.com/Admin/uploads/${service_data[x]['userfile1']}" alt="icon" class="p-3 w-100">
                    </div>
                  </div>
                </div>

                <div class="ayur-why-boxtext">

                  <h4 class="service-padding">${service_data[x]['treatment_name']}</h4>
                <p class="pt-2 font-size-14 sevice-con service-padding"> ${service_data[x]['meta_description']}</p>
                  
                  <p class="service-red text-center text-uppercase pc-color philosopher-bold font-size-13 bg-success text-white p-2"
                    style="margin-bottom: 0px;/*! border: solid; */border: solid #019269;border-radius: 8px;border-top-right-radius: 0px;border-top-left-radius: 0px;">
                    Read More </p>
                </div>

              </div>

            </div>`)
            }
            
            for(let x=0;x<service_data.length;x++){
                $('#fetch_service_list1').append(`<div class="col-md-3 pt-5 mt-2 mv-pb-50">

          <div class="ayur-why-box">
            <div class="service-padding1">
              <div class="ayur-why-boxicon ">
                <div class="div-img">
                  <img src="https://wefixz.com/Admin/uploads/${service_data[x]['userfile1']}" alt="icon" class="p-3 w-100">
                </div>
              </div>
            </div>

            <div class="ayur-why-boxtext">

              <h4 class="service-padding home-serv-head">${service_data[x]['treatment_name']}</h4>

              <p class="pt-2 font-size-14 sevice-con service-padding">${service_data[x]['meta_description']}</p>

              <p class="service-red text-center text-uppercase pc-color philosopher-bold font-size-13 bg-success text-white p-2"
                style="margin-bottom: 0px;/*! border: solid; */border: solid #019269;border-radius: 8px;border-top-right-radius: 0px;border-top-left-radius: 0px;">
                Read More </p>
            </div>

          </div>

        </div>`)
            }
            
            let testimonial_data = data.testimonial;
            let testimonialContainer = $('.testimonial_fetch');
            let thumbContainer = $('.client-images');

            // Append testimonials and images
            testimonial_data.forEach((testimonial, index) => {
                testimonialContainer.append(`
                    <div class="swiper-slide p-3">
                        <div class="testimonial-card p-4">
                            <p class="testimonial mulish-regular font-size-18 text-center">
                                ${testimonial.testimonial}
                            </p>
                            <div class="client-info">
                                <h3 class="philosopher-regular font-size-18">${testimonial.meta_title}</h3>
                                <p class="text-center mulish-regular">${testimonial.meta_description}</p>
                                <div class="stars">★★★★☆</div>
                            </div>
                        </div>
                    </div>
                `);

                thumbContainer.append(`
                    <img src="https://wefixz.com/Admin/uploads/${testimonial.image}" 
                         alt="Client ${index}" 
                         class="client-thumb" 
                         data-index="${index}">
                `);
            });

            // Initialize Swiper after appending elements
            let swiper = new Swiper(".ayur-testimonial-slider", {
                loop: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
                slidesPerView: 1,
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                on: {
                    slideChange: function () {
                        let activeIndex = swiper.realIndex;
                        updateActiveThumbnail(activeIndex);
                    }
                }
            });

            // Function to update active thumbnail
            function updateActiveThumbnail(index) {
                let thumbs = $(".client-thumb");

                // Remove active class from all thumbnails
                thumbs.removeClass("active");

                // Add active class to the current thumbnail
                thumbs.eq(index).addClass("active");
            }

            // Attach click event to dynamically loaded thumbnails
            $(document).on("click", ".client-thumb", function (e) {
                e.preventDefault();
                let index = $(this).data("index");
                swiper.slideToLoop(index);
                updateActiveThumbnail(index);
            });

            // Update active thumbnail after images are added
            updateActiveThumbnail(0);
        })
        .catch(error => console.error('Error fetching data:', error));
});

$('#book_now_btn').click(function(e){
    e.preventDefault();
    let validate=0;
   let name_val=$('#name_val').val();
   let location_val=$('#location_val').val();
   let phone_number=$('#phone_number').val();
   if(name_val==''){
       $('#name_error').text('Pleae enter name!')
       $('#name_error').css('color','red')
       validate+=1;
   }
   else{
        $('#name_error').text('')
   }
   if(location_val==''){
       $('#location_error').text('Pleae enter location!')
       $('#location_error').css('color','red')
       validate+=1;
   }
   else{
       $('#location_error').text('')
   }
   if(phone_number==''){
       $('#number_error').text('Pleae enter phone number!')
       $('#number_error').css('color','red')
       validate+=1;
   }
   else{
       $('#number_error').text('')
   }
   if(validate==0){
       $('#book_now_btn').text('Sending...')
       let postData = {
            name: name_val,
            location: location_val,
            phone: phone_number
        };
       fetch("https://wefixz.com/le_kerala_api/enquiry_api.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData)
        })
       .then(Response=>Response.json())
       .then(data=>{
           console.log(data)
           if (data.status === "success") {
                alert("Enquiry submitted successfully!");
                window.location.reload();
            } else {
                alert("Failed to submit: " + data.message);
            }
       })
   }
})