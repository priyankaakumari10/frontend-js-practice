function showNotification(msg, delay) {
    const notification  = document.createElement('DIV');
    notification.innerHTML=msg;
    notification.className='notification';
    document.body.appendChild(notification);

    setTimeout(()=>{
        document.body.removeChild(notification);
    },delay)
}