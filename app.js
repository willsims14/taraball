


var images = [
    new ImageItem('images/dad_mamou_chris.JPG'),
    new ImageItem('images/austin_wallace.JPG'),
    new ImageItem('images/gameday.JPG'),
    new ImageItem('images/graduation.JPG'),
    new ImageItem('images/informal_formal.JPG'),
    new ImageItem('images/lake.JPG'),
    new ImageItem('images/lake2.JPG'),
    new ImageItem('images/mamou.JPG'),
    new ImageItem('images/old_family_pic.JPG'),
    new ImageItem('images/parents_night.JPG'),
    new ImageItem('images/pool.JPG'),
    new ImageItem('images/prom.JPG'),
    new ImageItem('images/selfie.JPG'),
    new ImageItem('images/with_alli_and_dad.JPG'),
    new ImageItem('images/with_chris.JPG'),
    new ImageItem('images/young.JPG')
];



$("#love-btn").on('click', function(event){
    $("#heart-container").toggle()
});



var viewer = new Viewer(document.getElementById('image'), {
  inline: true,
  viewed: function() {
    viewer.zoomTo(1);
  }
});





function ImageItem(src) {
  this.image = new Image();
  this.path = src;
}




