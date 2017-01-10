const applicationServerPublicKey = 'BPxrc2UmihX_78n74thMsqjXXzDm5_oJaXm1wWkIPO0nkL9hZdPHSGIRTBSsR6y1DPjbssLt-D3sBg7STLwaW5M';

function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
        console.log('Service Worker registered', registration);
        navigator.serviceWorker && navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
            console.log('Service Worker is ready!');
            serviceWorkerRegistration.pushManager.getSubscription().then(function(subscription) {
                if (subscription) {
                    console.info('Got existing', subscription);
                    // NOTE Run the following above to get json to use on https://web-push-codelab.appspot.com/ and test push
                    // copy(JSON.stringify(subscription))
                    return; // got one, yay
                } else {
                    console.log('Not subscribed');
                    serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true, applicationServerKey: urlB64ToUint8Array(applicationServerPublicKey)}).then(function(subscription) {
                        console.info('Newly subscribed to push!', subscription);
                    });
                }
            });
        });
    }).catch(function(err) {
        console.log('Service Worker registration failed: ', err);
    });
}
