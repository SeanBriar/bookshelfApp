$(()=>{
  //
  // // keeps track of current image
  // let currentImgIndex = 0
  // // tracks how many images are in the carousel
  // const highestIndex = $('.carousel-images').children().length - 1
  //
  // // NEXT BUTTON //
  // //using class to call next button with jquery
  // $('.next').on('click', ()=>{
  //   //hide current image when next button is clickeds
  //   $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
  //
  //   //if the current image is less than the highest index, incriment + current image, else, keep currentImgIndex at 0
  //   if(currentImgIndex < highestIndex) {
  //    currentImgIndex++;
  //  } else {
  //    currentImgIndex = 0;
  //  }
  //   // to make next image show
  //   $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  // })
  //
  // // PREVIOUS BUTTON //
  // $('.previous').on('click', ()=>{
  //   //hide current image (same code as above)
  //   $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
  //
  //   //now do opposite as next button, decriment in if/else statement
  //   if(currentImgIndex > 0){
  //     currentImgIndex --
  //   } else {
  //     currentImgIndex = highestIndex
  //   }
  //
  //   // show previous image
  //   $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  // })

}) //end jquery document
