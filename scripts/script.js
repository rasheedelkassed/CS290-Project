window.setTimeout(startCarousel, 0)
function startCarousel(){
  
  var carouselImage1 = "http://panamacityliving.com/media/2017/10/Banner2-1.jpg";
  var carouselImage2 = "https://www.skinnygreenco.com/wp-content/uploads/2018/03/cropped-180208_SkinnyGreen15260.jpg";
  var carouselImage3 = "http://anjomantea.com/wp-content/uploads/2016/10/anjoman-tea-website-1.jpg";

  function cycleCarouselImage(){
    if(document.getElementById("carousel-image").src == carouselImage1){
      document.getElementById("carousel-image").src = carouselImage2;
    }else if(document.getElementById("carousel-image").src == carouselImage2){
      document.getElementById("carousel-image").src = carouselImage3;
    }else if(document.getElementById("carousel-image").src == carouselImage3){
      document.getElementById("carousel-image").src = carouselImage1;
    }
  }
setInterval(cycleCarouselImage, 3000);
}