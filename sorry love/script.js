const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

if (localStorage.getItem("musicPlaying") === "true") {
  music.play().then(() => {
    btn.textContent = "⏸ Pause Song";
  }).catch(err => console.log("Autoplay blocked, wait for user click"));
}

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.textContent = "⏸ Pause Song";
    localStorage.setItem("musicPlaying", "true");
  } else {
    music.pause();
    btn.textContent = "🎵 Play Song";
    localStorage.setItem("musicPlaying", "false");
  }
});
