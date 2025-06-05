let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('beforeinstallprompt event fired');
  e.preventDefault();  // Prevent Chrome from auto showing prompt
  deferredPrompt = e;   // Save the event for later
  installBtn.style.display = 'inline-block';  // Show install button
});

installBtn.addEventListener('click', async () => {
  if (!deferredPrompt) {
    console.log('No install prompt available');
    return;
  }
  installBtn.style.display = 'none';  // Hide the install button
  deferredPrompt.prompt();             // Show install prompt
  const choiceResult = await deferredPrompt.userChoice;
  console.log('User choice:', choiceResult.outcome);
  deferredPrompt = null;               // Clear saved prompt
});
