var video = {
  // variables come first
  videoPlayer : document.querySelector('video'),
  vidThumbs : document.querySelector('.vid-thumb'),
  volumeIndicator : document.querySelector('.vol-indicator'),
  // console.log('.vol-indicator');

  volOn() {
    video.videoPlayer.muted = false;
    video.volumeIndicator.classList.replace('fa-volume-off', 'fa-volume-up');
    // video.videoPlayer.play();
  },

  volOff() {
    video.videoPlayer.muted = true;
    video.volumeIndicator.classList.replace('fa-volume-up', 'fa-volume-off');
    // video.videoPlayer.pause();
  },

  popOverlay() {
    let overlay = document.querySelector('.vid-overlay');
    overlay.classList.add('show-overlay');

    overlay.querySelector('i').addEventListener('click', video.replayVideo, false);
  },

  replayVideo() {
    video.videoPlayer.currentTime = 0;
    video.videoPlayer.play();

    let overlay = document.querySelector('.vid-overlay');
    overlay.classList.remove('show-overlay');
  },

  fetchVideoThumbs(){
    const url = './includes/functions.php?getVideos=true';

    fetch(url)
      .then((resp) => resp.json())// convert result to json_encode
      .then((data) => {video.loadVideoThumbs(data);})
      .catch(function(error){
        console.log(error);
      });
  },

  loadVideoThumbs(data){
    // debugger;
    let thumbHolder = document.querySelector('.video-thumbs');

    data.forEach(thumb => {
      let docFrag = `<li class="vid-thumb" role="button" data-videopath="${thumb.path}">
                      <img src="images/${thumb.placeholder}" alt="mini commercial" class="responsive">
                     </li>`;
      thumbHolder.innerHTML += docFrag;
    });

    thumbHolder.querySelectorAll('li').forEach((thumb) => thumb.addEventListener('click', video.loadNewVideo));
  },

  loadNewVideo(){
    // debugger;
    let videoPath = "video/" + this.dataset.videopath;

    video.videoPlayer.src = videoPath;
    video.videoPlayer.load();
    video.videoPlayer.play();

    let overlay = document.querySelector('.vid-overlay');
    overlay.classList.remove('show-overlay');

    video.volOn();
  },

  init() {
    console.log('video module added');
    video.videoPlayer.addEventListener('mouseover', video.volOn, false);
    video.videoPlayer.addEventListener('mouseout', video.volOff, false);
    video.videoPlayer.addEventListener('ended', video.popOverlay, false);

    video.fetchVideoThumbs();
  }
}

video.init();
