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
    let width = localStorage.getItem('current-width');
		
		if(!width){
			localStorage.setItem('current-width', window.innerWidth);
		}else{
			if(window.innerWidth != width){
				//la recarga del index se dio por una rotación de la pantalla
				let lastUrl = localStorage.getItem('url-data');

				if(lastUrl){
					const { href } = JSON.parse(lastUrl);
					window.location.assign(href);
					localStorage.setItem('current-width', window.innerWidth);					
				}
			}else{
				localStorage.setItem('current-width', window.innerWidth);
				localStorage.removeItem('url-data');
			}
		}		
}