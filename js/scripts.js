Object.defineProperty(HTMLMediaElement.prototype,"isPlaying",{get:function(){return!!(0<this.currentTime&&!this.paused&&!this.ended&&2<this.readyState)}}),$(document).ready(function(){var e=document.getElementById("video");e.isPlaying&&e.play(),e.addEventListener("click",function(){e.isPlaying?e.pause():e.play()})});