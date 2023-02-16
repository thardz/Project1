var main_img=document.getElementById('main-img')
var small_img=document.getElementsByClassName('small-img')
// cara ez
// small_img[0].onclick=function() {
//     main_img.src=small_img[0].src
// }
// small_img[1].onclick=function() {
//     main_img.src=small_img[1].src
// }
// small_img[2].onclick=function() {
//     main_img.src=small_img[2].src
// }
// small_img[3].onclick=function() {
//     main_img.src=small_img[3].src
// }

// cara make for cara pro
for (let i = 0; i < small_img.length; i++) {
    small_img[i].onclick=function() {
    main_img.src=small_img[i].src   
    }
}
