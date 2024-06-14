var audio = $("#homepage-audio")[0]; // Convert to native DOM element
var range = $(".podcast-progress-bar-line-range");

$(document).ready(function(){
  var current = audio.currentTime;
  range.val(0);
  $('.podcast-progress-bar-line-timeline').css("width", 0);
  $('.podcast-progress-bar-p').html(formatTime(current));
  if (audio.paused) {
    $('.podcast-btn-container-play-pause').css("display", "block");
    $('.podcast-btn-container-play-start').css("display", "none");
  } else if (!audio.paused) {
    $('.podcast-btn-container-play-pause').css("display", "none");
    $('.podcast-btn-container-play-start').css("display", "block");
  }

  $(audio).on("timeupdate", function() {
    var current = audio.currentTime;
    var duration = audio.duration;
    var percent = current/duration;
    var widthLength = $('.podcast-progress-bar-line').width()-8;
    range.val(percent*100);
    $('.podcast-progress-bar-line-timeline').css("width", percent*widthLength+2);
    $('.podcast-progress-bar-p').html(formatTime(current));
  });
  
  range.on("input", function() {
    audio.currentTime = this.value;
  });
  
  function formatTime(seconds) {
    seconds = Math.floor(seconds);
    // 計算分鐘和秒數
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
  
    // 將秒數部分轉換為兩位數字的字串，不足兩位的補零
    var formattedSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
  
    // 將結果格式化為 "分:秒" 的形式
    var formattedTime = minutes + ":" + formattedSeconds;
  
    return formattedTime;
  }
  
  $(audio).on("pause", function() {
      $('.podcast-btn-container-play-pause').css("display", "block");
      $('.podcast-btn-container-play-start').css("display", "none");
    });
  
  $(audio).on("play", function() {
      $('.podcast-btn-container-play-pause').css("display", "none");
      $('.podcast-btn-container-play-start').css("display", "block");
    });
  
  $('.podcast-btn-container-play-start').on("click", function() {
      audio.pause();
    });
  
  $('.podcast-btn-container-play-pause').on("click", function() {
      audio.play();
    });
})
