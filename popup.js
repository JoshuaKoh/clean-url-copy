function showError(error) {
    document.getElementById('error').innerText = 'Error! ' + error;
}

function getCleanUrl(url) {
    const i = url.indexOf('?');
    const cleanUrl = url.slice(0, i);
    const params = url.slice(i+1);
    console.log(cleanUrl);
    console.log(params);

    // Extract any "q=" params
    const queryList = params.match(/(q=[^&]*)/);
    var query = '';
    if (queryList != null) {
        query = '?' + queryList[0];
    }

    // Remove a trailing slash
    const lastChar = cleanUrl.slice(-1);
    if (lastChar == '/') {
        return cleanUrl.slice(0, -1) + query;
    } else {
        return cleanUrl + query;
    }
}

function copyToClipboard(url) {
    document.addEventListener('copy', event => {
        event.clipboardData.setData('text/plain', url);
        event.preventDefault();
    }, {once: true, capture: true});
    document.execCommand('copy', false);
    document.getElementById('copied').style.visibility = 'visible';
}

document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ currentWindow: true, active: true }, (results) => {
        const currentTab = results[0];
        let tabUrl = getCleanUrl(currentTab.url);
        document.getElementById('url').innerText = tabUrl;
        copyToClipboard(tabUrl);
    });
});