importScripts('./wll8d/xbbm2.js')

const { _2jdgko } = _ak7qpu()
const proxySw = new _2jdgko()

self.addEventListener('install', () => {
  void self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})
// TY WAVES + CHATGPT ILY
const OPEN_TAB_INJECT_SCRIPT = `
<script>
(function(){
  const isHttpLikeUrl=(candidate)=>{
    if(!candidate) return false;
    try{
      const parsed=new URL(candidate, window.location.href);
      return parsed.protocol==='http:'||parsed.protocol==='https:';
    }catch(e){
      return false;
    }
  };

  const decodeEmbedUrl=(href)=>{
    if(!href) return href;
    try{
      const current=new URL(href, window.location.href);
      const marker='/2ag4j/';
      let candidate=current.href;
      for(let i=0;i<8;i+=1){
        const parsed=new URL(candidate, window.location.href);
        const markerIndex=parsed.pathname.indexOf(marker);
        if(markerIndex===-1){
          return parsed.href;
        }
        const encoded=parsed.pathname.slice(markerIndex + marker.length) + parsed.search + parsed.hash;
        try{
          candidate=decodeURIComponent(encoded);
        }catch(e){
          candidate=encoded;
        }
      }
      return candidate;
    }catch(e){
      return href;
    }
  };

  const normalizeTargetUrl=(rawUrl)=>{
    try{
      const resolved=new URL(rawUrl, window.location.href).href;
      const decoded=decodeEmbedUrl(resolved) || resolved;
      return isHttpLikeUrl(decoded) ? decoded : null;
    }catch(e){
      return null;
    }
  };

  const sendOpenTabRequest=(rawUrl,cause)=>{
    const normalized=normalizeTargetUrl(rawUrl);
    if(!normalized) return false;

    const payload={
      type:'open-new-tab',
      url: normalized,
      decodedUrl: normalized,
      cause: cause || null
    };

    let posted=false;

    try{
      if(window.top && window.top!==window && typeof window.top.postMessage==='function'){
        window.top.postMessage(payload,'*');
        posted=true;
      }
    }catch(e){}

    if(!posted){
      try{
        if(navigator.serviceWorker){
          const postToController=(controller)=>{
            if(controller && typeof controller.postMessage==='function'){
              try{controller.postMessage(payload);posted=true;}catch(e){}
            }
          };

          if(navigator.serviceWorker.controller){
            postToController(navigator.serviceWorker.controller);
          }else if(navigator.serviceWorker.ready){
            navigator.serviceWorker.ready.then((reg)=>{
              const controller=reg.active||navigator.serviceWorker.controller;
              postToController(controller);
            }).catch(()=>{});
          }
        }
      }catch(e){}
    }

    return posted;
  };

  const findInEventPath=(event,predicate)=>{
    try{
      const path=event.composedPath?event.composedPath():[];
      for(const node of path){
        if(predicate(node)) return node;
      }
      let current=event.target;
      while(current){
        if(predicate(current)) return current;
        current=current.parentElement;
      }
    }catch(e){}
    return null;
  };

  try{
    const originalOpen=window.open;
    if(!window.open.__lucideIntercepted){
      window.open=function(url,target){
        const resolved=url&&url.href?url.href:url;
        const tgt=(target||'').toLowerCase();
        const shouldIntercept=!target||tgt===''||tgt==='_blank'||tgt==='blank'||tgt==='_new'||!(tgt==='_self'||tgt==='_top'||tgt==='_parent');
        if(shouldIntercept&&typeof resolved==='string'){
          const posted=sendOpenTabRequest(resolved,'window.open');
          if(posted) return null;
        }
        return originalOpen.apply(this,arguments);
      };
      window.open.__lucideIntercepted=true;
    }
  }catch(e){}

  const clickHandler=(event)=>{
    try{
      const anchor=findInEventPath(event,(node)=>node&&node.tagName==='A'&&node.href);
      if(!anchor||anchor.hasAttribute('download')) return;
      const href=anchor.href||anchor.getAttribute('href');
      if(!href) return;
      const targetAttr=anchor.getAttribute('target');
      const target=(targetAttr||'').toLowerCase();
      const hasExplicitTarget=anchor.hasAttribute('target');
      const isNewTabTarget=hasExplicitTarget && !(target===''||target==='_self'||target==='_top'||target==='_parent');
      const modifierRequested=event.ctrlKey||event.metaKey||event.button===1;
      if(!isNewTabTarget && !modifierRequested) return;
      const posted=sendOpenTabRequest(href, isNewTabTarget ? 'anchor-target-blank' : 'anchor-modifier');
      if(posted){
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }catch(e){}
  };

  document.addEventListener('click',clickHandler,true);
  document.addEventListener('auxclick',clickHandler,true);

  document.addEventListener('submit',(event)=>{
    try{
      const path=event.composedPath?event.composedPath():[];
      const form=path.find((node)=>node&&node.tagName==='FORM'&&node.hasAttribute&&node.hasAttribute('target'));
      if(!form) return;
      const target=(form.getAttribute('target')||'').toLowerCase();
      if(!target||target==='_self'||target==='_top'||target==='_parent') return;
      const action=form.getAttribute('action')||window.location.href;
      const posted=sendOpenTabRequest(action,'form-target-blank');
      if(posted){
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }catch(e){}
  },true);
})();
</script>`

async function injectProxyEnhancements(response) {
  const contentType = response.headers.get('content-type') || ''
  if (!contentType.includes('text/html') || !response.body) {
    return response
  }

  try {
    const body = await response.clone().text()
    const headMatch = body.match(/<head[^>]*>/i)
    const injected = headMatch
      ? `${body.slice(0, headMatch.index + headMatch[0].length)}${OPEN_TAB_INJECT_SCRIPT}${body.slice(headMatch.index + headMatch[0].length)}`
      : `${OPEN_TAB_INJECT_SCRIPT}${body}`

    return new Response(injected, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    })
  } catch {
    return response
  }
}

async function handleRequest(event) {
  await proxySw.loadConfig()

  if (!proxySw.route(event)) {
    try {
      return await fetch(event.request)
    } catch {
      return new Response('Network error', { status: 503, statusText: 'Service Unavailable' })
    }
  }

  const response = await proxySw.fetch(event)
  return injectProxyEnhancements(response)
}

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url)
  if (requestUrl.origin !== self.location.origin) {
    return
  }

  event.respondWith(handleRequest(event))
})

self.addEventListener('message', (event) => {
  const { data } = event
  if (!data || data.type !== 'open-new-tab' || !data.url) {
    return
  }

  const payload = {
    type: 'open-new-tab',
    url: typeof data.url === 'string' ? data.url : null,
    decodedUrl: typeof data.decodedUrl === 'string' ? data.decodedUrl : typeof data.url === 'string' ? data.url : null,
    cause: data.cause || null,
  }

  if (!payload.url) {
    return
  }

  event.waitUntil(
    (async () => {
      const clients = await self.clients.matchAll({ includeUncontrolled: true, type: 'window' })
      for (const client of clients) {
        client.postMessage(payload)
      }
    })(),
  )
})
