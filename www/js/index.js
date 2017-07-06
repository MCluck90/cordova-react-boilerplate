const app = {
    init() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady() {
        const parentElement = document.getElementById('deviceready');
        const listeningElement = parentElement.querySelector('.listening');
        const receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    }
};
app.init();