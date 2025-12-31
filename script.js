const openBtn = document.getElementById('openBtn');
const cover = document.getElementById('cover');
const invitation = document.getElementById('invitation');
const video = document.getElementById('mainVideo');

openBtn.addEventListener('click', function() {
    // 1. 切換頁面顯示
    cover.classList.add('hidden');
    invitation.classList.remove('hidden');

    // 2. 核心：在點擊事件內立即執行播放
    if (video) {
        // 先重設影片進度到開頭
        video.currentTime = 0; 
        
        // 嘗試播放
        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error("Safari 播放失敗:", error);
                // 如果失敗，通常是編碼問題或沒設 muted
            });
        }
    }
});
