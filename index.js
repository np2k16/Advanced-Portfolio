//template_016s4er
//service_nkimoa4
//aTw2n1gEB4NAVTnbM

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
        'service_nkimoa4',
        'template_016s4er',
        event.target,
        'K7mlq1iad9TFVmDgC'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable, please contact me directly at n.prajapati2016@gmail.com"
        )
    })
}