const input = document.getEmlenentById('notif');

function notification() {
    Notification.requestPermission().then(function(result) {
        if (result === 'granted') {
            popupNotif();
        } else {
            console.log('Premission denied');
        }
    });
}

 function popupNotif() {
    const notification = new Notification('New Notifcation', {
        body: input.value || 'This is a default notification message.'
    });
    }
    notification.onclick = function() {
        console.log('Notification Clicked');
    };
 