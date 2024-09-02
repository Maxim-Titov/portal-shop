fetch('../../../../../html/site-elements/header.html')
    .then(response => response.text())
    .then(data => {
        const header = document.getElementById('header-block').innerHTML = data;

        const container = document.getElementById('header-block');
        container.innerHTML = header;

        const scripts = container.querySelectorAll('script');
        scripts.forEach((oldScript) => {
            const newScript = document.createElement('script');

            if (oldScript.src) {
                newScript.src = oldScript.src;
                newScript.onload = () => console.log(`Скрипт ${newScript.src} завантажено.`);
            } else {
                newScript.textContent = oldScript.textContent;
            }
            
            oldScript.remove();
            document.body.appendChild(newScript);
        });
    })
    .catch(error => console.log('Помилка завантаження:', error));

fetch('../../../../../html/site-elements/slider.html')
    .then(response => response.text())
    .then(data => {
        const slider = document.getElementById('slider-block').innerHTML = data;

        const container = document.getElementById('slider-block');
        container.innerHTML = slider;

        const scripts = container.querySelectorAll('script');
        scripts.forEach((oldScript) => {
            const newScript = document.createElement('script');

            if (oldScript.src) {
                newScript.src = oldScript.src;
                newScript.onload = () => console.log(`Скрипт ${newScript.src} завантажено.`);
            } else {
                newScript.textContent = oldScript.textContent;
            }
            
            oldScript.remove();
            document.body.appendChild(newScript);
        });
    })
    .catch(error => console.log('Помилка завантаження:', error));

fetch('../../../../../html/site-elements/desc-content.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('desc-content-block').innerHTML = data;
    })
    .catch(error => console.log('Помилка завантаження:', error));

fetch('../../../../../html/site-elements/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-block').innerHTML = data;
    })
    .catch(error => console.log('Помилка завантаження:', error));