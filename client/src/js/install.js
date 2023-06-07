const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // event.preventDefault();
    // buttonInstall.style.visibility = 'visible';
    // textHeader.textContent = 'Click the button to install!';
    // added the textHeader to the HTML. Don't know if i needed to do that 

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // event.prompt();
    // buttonInstall.setAttribute('disabled', true);
    // buttonInstall.textContent = 'Installed!'; 

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // textHeader.textContent = 'Successfully installed!';
    // console.log('👍', 'appinstalled', event);
});
