window.onclick = function(e) {
	
	var el = e.target;
	if(el.tagName.toLowerCase() === 'a') {
		var linq = el.href;
		if(linq.includes('wikipedia.org') && !linq.includes('0wikipedia.org')) {
			console.log('wiki found');
			el.href = linq.replace('wikipedia.org', '0wikipedia.org');
		}
	}

};
