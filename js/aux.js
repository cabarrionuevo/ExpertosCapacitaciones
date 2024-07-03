const logUrl = (event) => {
    const href = event.currentTarget.href;
    const id = event.currentTarget.id;
    localStorage.setItem('url-data', JSON.stringify({
        id,
        href,
    }));
}