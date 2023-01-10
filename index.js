/*let slideIndex = [1,1]; 
let slideId = ["mySlides1", "mySlide2", "mySlide3", "mySlide4"]
showSlides(1,0,0,0); 
showSlides(1,1,0,0);
showSlides(1,1,1,0);
showSlides(1,1,1,1);


function showSlides(n, no, no, no){
    let i; 
    let slides = document.getElementsByClassName(slideId[no]); 

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"; 
    }   
    slideIndex++;

 if (n > slides.length){
        slideIndex[no] = 1; 
    }

    if (n < 1){
        slideIndex[no] = x.length;
    }
    
     


    slides[slideIndex[no]-1].style.display = "block"; 

    setTimeout(showSlides,2000); 
}
*/

    let slideIndex = 0; 
    showSlides(); 

    function showSlides(){
        let i; 
        let slide1 = document.getElementsByClassName("mySlides1"); 
        let slide2 = document.getElementsByClassName("mySlide2"); 
        let slide3 = document.getElementsByClassName("mySlide3"); 
        let slide4 = document.getElementsByClassName("mySlide4"); 

        for(i = 0; i < slide1.length; i++){
            slide1[i].style.display = "none"; 
        } 

        for(i = 0; i < slide2.length; i++){
            slide2[i].style.display = "none"; 
        } 
        for(i = 0; i < slide3.length; i++){
            slide3[i].style.display = "none"; 
        } 
        for(i = 0; i < slide4.length; i++){
            slide4[i].style.display = "none"; 
        } 

        slideIndex++; 
        if (slideIndex > slide1.length){
            slideIndex = 1; 
        }

        slide1[slideIndex - 1].style.display = "block"; 
        slide2[slideIndex - 1].style.display = "block"; 
        slide3[slideIndex - 1].style.display = "block"; 
        slide4[slideIndex - 1].style.display = "block"; 

        setTimeout(showSlides,2000); 
                                                                                                                              


    }




