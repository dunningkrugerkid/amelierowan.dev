async function o(){try{const e=await(await fetch("/api/now-playing")).json(),r=document.getElementById("now-playing-container");if(!r)return;if(e.error){r.innerHTML=`
          <div class="bg-pink-50 border border-pink-200 rounded-lg p-6 text-center">
            <p class="text-gray-600">couldn't load music data</p>
            <p class="text-gray-500 text-sm mt-2">make sure you've connected your music player to last.fm</p>
          </div>
        `;return}if(e.source==="none"){r.innerHTML=`
          <div class="bg-pink-50 border border-pink-200 rounded-lg p-6 text-center">
            <p class="text-gray-600">no music playing recently</p>
            <p class="text-gray-500 text-sm mt-2">start listening to something!</p>
          </div>
        `;return}r.innerHTML=`
        <div class="bg-white border border-pink-100 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center shadow-sm">
          ${e.artwork?`<img src="${e.artwork}" alt="${e.title}" class="w-32 h-32 rounded object-cover flex-shrink-0 shadow-sm" loading="lazy" />`:'<div class="w-32 h-32 bg-pink-100 rounded flex items-center justify-center flex-shrink-0"><span class="text-pink-300 text-sm">no art</span></div>'}
          <div class="flex-1 text-center md:text-left">
            <h3 class="text-xl font-semibold mb-1 text-gray-800">
              <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="hover:text-pink-500 transition-colors">${e.title}</a>
            </h3>
            <p class="text-gray-600">${e.artist}</p>
            ${e.album?`<p class="text-gray-500 text-sm">${e.album}</p>`:""}
            ${e.isPlaying?'<span class="inline-flex items-center gap-1 mt-2 text-sm text-white bg-pink-400 px-2 py-1 rounded"><span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>now playing</span>':""}
          </div>
        </div>
      `}catch(n){console.error("Error fetching now playing:",n)}}async function i(){try{const e=await(await fetch("/api/top-tracks?limit=12&period=7day")).json(),r=document.getElementById("top-tracks-container");if(!r||!Array.isArray(e))return;if(e.length===0){r.innerHTML=`
          <div class="bg-pink-50 border border-pink-200 rounded-lg p-8 text-center col-span-full">
            <p class="text-gray-600">no tracks yet</p>
            <p class="text-gray-500 text-sm mt-2">listen to some music and it'll show up here!</p>
          </div>
        `;return}r.innerHTML=e.map(t=>{const s=t.image[2]?.["#text"]||t.image[1]?.["#text"]||"",a=t.playcount?parseInt(t.playcount).toLocaleString():"";return`
            <a href="${t.url}" target="_blank" rel="noopener noreferrer" class="block bg-white border border-pink-100 rounded-lg overflow-hidden hover:border-pink-300 hover:shadow-md transition-all group">
              ${s?`<img src="${s}" alt="${t.name}" class="w-full aspect-square object-cover group-hover:scale-105 transition-transform" loading="lazy" />`:'<div class="w-full aspect-square bg-pink-100 flex items-center justify-center"><span class="text-pink-300 text-4xl">♪</span></div>'}
              <div class="p-4">
                <h3 class="font-semibold truncate text-gray-800 lowercase">${t.name}</h3>
                <p class="text-gray-600 text-sm truncate lowercase">${t.artist["#text"]}</p>
                ${a?`<p class="text-pink-400 text-xs mt-1">${a} plays</p>`:""}
              </div>
            </a>
          `}).join("")}catch(n){console.error("Error fetching top tracks:",n)}}async function l(){try{const e=await(await fetch("/api/top-artists?limit=12&period=7day")).json(),r=document.getElementById("top-artists-container");if(!r||!Array.isArray(e))return;if(e.length===0){r.innerHTML=`
          <div class="bg-pink-50 border border-pink-200 rounded-lg p-8 text-center col-span-full">
            <p class="text-gray-600">no artists yet</p>
            <p class="text-gray-500 text-sm mt-2">listen to some music and artists will appear here!</p>
          </div>
        `;return}r.innerHTML=e.map(t=>{const s=t.image[2]?.["#text"]||t.image[1]?.["#text"]||"",a=parseInt(t.playcount).toLocaleString();return`
            <a href="${t.url}" target="_blank" rel="noopener noreferrer" class="block bg-white border border-pink-100 rounded-lg overflow-hidden hover:border-pink-300 hover:shadow-md transition-all group">
              ${s?`<img src="${s}" alt="${t.name}" class="w-full aspect-square object-cover group-hover:scale-105 transition-transform" loading="lazy" />`:'<div class="w-full aspect-square bg-pink-100 flex items-center justify-center"><span class="text-pink-300 text-4xl">♪</span></div>'}
              <div class="p-4">
                <h3 class="font-semibold truncate text-gray-800 lowercase">${t.name}</h3>
                <p class="text-pink-400 text-xs mt-1">${a} plays</p>
              </div>
            </a>
          `}).join("")}catch(n){console.error("Error fetching top artists:",n)}}o();i();l();setInterval(o,3e4);
