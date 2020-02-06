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

  document.querySelector(".success-dialog svg").addEventListener('click', function() {
    document.querySelector(".mailchimp-success").classList.remove('fade-in');
  });

  document.getElementById("mailchimp-form").addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector(".mailchimp-success").classList.add('fade-in');
  })
});