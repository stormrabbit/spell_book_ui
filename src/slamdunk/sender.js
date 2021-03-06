import { getPageMetadata } from './utils/commonUtils';

const { default: factory } = require("./factory");

const Sender = factory(
    () => {
        function _makeXhrRequest (method, url, payload, headers) {
    
            return new Promise((resolve, reject) => {
              const xhr = new window.XMLHttpRequest()
              // xhr.withCredentials = true // 允许域名
              xhr['__apm_symbol__xhrIgnore'] = true
              xhr.open(method, url, true)
              xhr.timeout = 10000
        
              if (headers) {
                for (let header in headers) {
                  if (Object.prototype.hasOwnProperty.call(headers, header)) {
                    xhr.setRequestHeader(header, headers[header])
                  }
                }
              }
        
              xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                  const status = xhr.status
                  if (status === 0 || (status > 399 && status < 600)) {
                    // http 4xx/5xx error
                    const err = new Error(url + ' HTTP status: ' + status)
                    err.xhr = xhr
                    reject(err)
                  } else {
                    resolve(xhr.responseText)
                  }
                }
              }
        
              xhr.onerror = function (err) {
                reject(err)
              }
        
              xhr.send(payload);
            })
          }
          const send = (event) => _makeXhrRequest('POST', `${process.env.VUE_APP_ADMIN_API_SLAMDUCK}/v1/events`, JSON.stringify({eventStr: JSON.stringify({event, ...getPageMetadata()})}), {'Access-Control-Allow-Credentials':true, 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'})
          const sendBeacon = (event) => {
            const e  = {
              event,
              ...getPageMetadata()
            };
            const header = {
              type: 'application/x-www-form-urlencoded',
              // type: 'application/json'
            };
            const blob = new Blob([JSON.stringify(e)], header)
            navigator.sendBeacon(`${process.env.VUE_APP_ADMIN_API_SLAMDUCK}/v1/events/beacon`, blob)
          };
          return {
            send,
            sendBeacon
          }
    }
)

export default Sender;