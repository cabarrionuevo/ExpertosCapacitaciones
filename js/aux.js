const logUrl = (event) => {
    const href = event.currentTarget.href;
    const id = event.currentTarget.id;
    localStorage.setItem('url-data', JSON.stringify({
        id,
        href,
    }));
}

const getlastUrl = () => {
    let lastUrl = localStorage.getItem('url-data');
    if(lastUrl){			
        const { href } = JSON.parse(lastUrl);					
        location.replace(href);
        localStorage.removeItem('url-data');
    }
}