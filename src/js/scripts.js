Object.defineProperty(HTMLMediaElement.prototype, 'isPlaying', {
  get: function(){
      return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
})

$(document).ready(function() {
  var video = document.getElementById("video");

  video.addEventListener('click', function() {
    if (video.isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  });

  document.querySelector("#kingsbred-main-video svg").addEventListener('click', function(event) {
    event.stopImmediatePropagation();
    event.stopPropagation();
    event.preventDefault();
    this.style.display = 'none';
    video.muted = false;
    video.play();
  });
});