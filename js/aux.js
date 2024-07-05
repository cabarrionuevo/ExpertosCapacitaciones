const logUrl = (event) => {
    const href = event.currentTarget.href;
    const id = event.currentTarget.id;
    const previousUrl = window.location.href;
    localStorage.setItem('url-data', JSON.stringify({
        id,
        href,
        previousUrl
    }));
}

const getLastUrl = () => {    
    let lastUrl = localStorage.getItem('url-data');    

    if (lastUrl) {
        const { href } = JSON.parse(lastUrl);
        const urlActual = window.location.href;
        localStorage.setItem('url-actual', JSON.stringify({urlActual}));        
        window.location.assign(href);
        localStorage.removeItem('url-data');
    }
}