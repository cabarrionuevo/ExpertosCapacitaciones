const logUrl = (event) => {
    const href = event.currentTarget.href;
    const id = event.currentTarget.id;
    localStorage.setItem('url-data', JSON.stringify({
        id,
        href,
    }));
}

const getLastUrl = () => {    
    let lastUrl = localStorage.getItem('url-data');
    console.log(`lastUrl: `, lastUrl);

    if (lastUrl) {
        const { href } = JSON.parse(lastUrl);
        console.log(`href: `, href);
        location.replace(href);
        localStorage.removeItem('url-data');
    }
}