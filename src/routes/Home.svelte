<script lang="ts">
  import NavBar from '../lib/components/NavBar.svelte';
  import SocialMedia from '../lib/components/SocialMedia.svelte';
  import profile from '../lib/assets/profile.webp';
</script>

<svelte:head>
  <link rel="preload" href="{profile}" as="image">
</svelte:head>

<NavBar isFixed={true} />

  <div class="music-player">
            <audio controls id="audio-player">
              <source src="ssstik.io_1721576340003.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
          </audio>
            <div class="controls">
                <button onclick="togglePlayPause()" id="play-pause-button">
                  <i class="fas fa-play"></i>
              </button>
                <div class="progress-bar">
                    <input type="range" min="0" max="100" value="0" step="0.1" id="progress-bar">
                </div>
            </div>
            <div id="duration-info">
                <span id="current-time">0:00</span> / <span id="total-duration">0:00</span>
            </div>
        </div>
    </div>

<div class="flex flex-col items-center justify-center h-screen flex-wrap">
  <img class="w-40 h-40 rounded-full" src={profile} alt="" loading="lazy" />
  <h1 class="mt-5 text-4xl text-white font-bold">Chyper Bot</h1>
  <SocialMedia />
</div>
