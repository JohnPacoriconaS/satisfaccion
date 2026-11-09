(function(){function e(e){if(document.getElementById(`satisfaccion-widget`))return;let t=document.createElement(`div`);t.id=`satisfaccion-widget`,t.innerHTML=`
    <style>
      #satisfaccion-widget {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 999999;
        font-family: Arial, sans-serif;
      }

      .sat-card {
        width: 320px;
        background: white;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 8px 35px rgba(0,0,0,.18);
        color: #222;
      }

      .sat-title {
        font-size: 19px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .sat-description {
        font-size: 14px;
        color: #666;
        margin-bottom: 20px;
      }

      .sat-stars {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin: 20px 0;
      }

      .sat-star {
        border: none;
        background: none;
        font-size: 32px;
        cursor: pointer;
        color: #ccc;
      }

      .sat-star.active {
        color: #f5b400;
      }

      .sat-comment {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 8px;
        resize: vertical;
      }

      .sat-button {
        width: 100%;
        padding: 12px;
        border: none;
        border-radius: 8px;
        background: #2563eb;
        color: white;
        cursor: pointer;
        margin-top: 12px;
      }

      .sat-button:disabled {
        opacity: .6;
        cursor: not-allowed;
      }

      .sat-skip {
        background: none;
        border: none;
        color: #666;
        cursor: pointer;
        width: 100%;
        margin-top: 10px;
      }
    </style>

    <div class="sat-card">
      <div class="sat-title">
        ¿Qué te parece nuestro sistema?
      </div>

      <div class="sat-description">
        Tu opinión nos ayuda a mejorar los servicios universitarios.
      </div>

      <div class="sat-stars">
        ${[1,2,3,4,5].map(e=>`
              <button class="sat-star" data-rating="${e}">
                ★
              </button>
            `).join(``)}
      </div>

      <textarea
        class="sat-comment"
        placeholder="Cuéntanos tu experiencia (opcional)"
        rows="3"
      ></textarea>

      <button class="sat-button">Enviar evaluación</button>

      <button class="sat-skip">Omitir</button>
    </div>
  `,document.body.appendChild(t),e.allowSkip===!1&&t.querySelector(`.sat-skip`)?.remove();let n=0,r=t.querySelectorAll(`.sat-star`);r.forEach(e=>{e.addEventListener(`click`,()=>{n=Number(e.dataset.rating),r.forEach(e=>{e.classList.toggle(`active`,Number(e.dataset.rating)<=n)})})});let i=t.querySelector(`.sat-button`);i?.addEventListener(`click`,async()=>{if(n===0){alert(`Selecciona una calificación`);return}let r=t.querySelector(`.sat-comment`);i.disabled=!0;try{let a=await fetch(`${e.apiUrl}/evaluations/submit`,{method:`POST`,headers:{Authorization:`Bearer ${e.token}`,"Content-Type":`application/json`},body:JSON.stringify({rating:n,comment:r?.value||void 0,trigger:e.trigger,sessionId:e.sessionId})});if(!a.ok){let e=await a.text();console.error(`Error al registrar:`,e),alert(`No se pudo registrar la evaluación`),i.disabled=!1;return}t.remove(),alert(`¡Gracias por compartir tu opinión!`)}catch(e){console.error(`Error de conexión:`,e),alert(`No se pudo conectar con el servidor`),i.disabled=!1}}),t.querySelector(`.sat-skip`)?.addEventListener(`click`,async()=>{if(e.allowSkip!==!1)try{if(!(await fetch(`${e.apiUrl}/evaluations/interaction`,{method:`POST`,headers:{Authorization:`Bearer ${e.token}`,"Content-Type":`application/json`},body:JSON.stringify({action:`SKIPPED`,trigger:e.trigger,sessionId:e.sessionId})})).ok){alert(`No se pudo registrar la omisión`);return}t.remove()}catch(e){console.error(`Error al omitir evaluación:`,e)}})}async function t(t){t={...t,sessionId:t.sessionId??crypto.randomUUID()};let n={Authorization:`Bearer ${t.token}`,"Content-Type":`application/json`};try{let r=await fetch(`${t.apiUrl}/evaluations/configuration`,{headers:{...n,"Cache-Control":`no-cache`},cache:`no-store`});if(!r.ok){console.error(`No se pudo obtener la configuración`);return}let i=await r.json(),a=i.configuration.promptDelayMinutes;a>0&&await new Promise(e=>setTimeout(e,a*60*1e3));let o=await fetch(`${t.apiUrl}/evaluations/eligibility?trigger=${t.trigger}`,{headers:{...n,"Cache-Control":`no-cache`},cache:`no-store`});if(!o.ok){console.error(`No se pudo comprobar la elegibilidad`);return}if(!(await o.json()).eligible){console.log(`El estudiante todavía no puede evaluar`);return}if(!(await fetch(`${t.apiUrl}/evaluations/interaction`,{method:`POST`,headers:n,body:JSON.stringify({action:`SHOWN`,trigger:t.trigger,sessionId:t.sessionId})})).ok){console.error(`No se pudo registrar la interacción SHOWN`);return}e({...t,allowSkip:i.configuration.allowSkip})}catch(e){console.error(`Error al inicializar widget:`,e)}}window.SatisfaccionWidget={init:t}})();