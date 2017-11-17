'use strict'


function ajax(method, url, callback) {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            let recievedData = JSON.parse(xhr.responseText)
            callback(recievedData)
        }
    }
    xhr.send()
}
