Object.defineProperty(HTMLMediaElement.prototype, 'isPlaying', {
  get: function(){
      return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
})

$(document).ready(function() {

  var video = document.getElementById("video");
  if (video.isPlaying) {
    video.play();
  }

  video.addEventListener('click', function() {
    if (video.isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  });
});