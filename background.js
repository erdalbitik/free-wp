(function() {
	'use strict';

	chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
		if (details.url.includes('wikipedia.org') && !details.url.includes('0wikipedia.org')) {
			var newUrl = details.url.replace('wikipedia.org', '0wikipedia.org');
			chrome.tabs.update(details.tabId, { url: newUrl });
		}
	});

})();
