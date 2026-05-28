(() => {
  const timerEl = document.getElementById('timer');
  const endBtn = document.getElementById('endSession');
  const readBtn = document.getElementById('readBtn');
  const tcModal = document.getElementById('tcModal');
  const closeTc = document.getElementById('closeTc');
  const dob = document.getElementById('dob');
  const age = document.getElementById('age');

  // session timer (start at 117 seconds = 1:57)
  let remaining = 117;
  function fmt(s){const m=Math.floor(s/60);const sec=s%60;return m+':'+(sec<10?('0'+sec):sec)}
  timerEl.textContent = fmt(remaining);
  const tick = setInterval(()=>{
    remaining--;
    if(remaining<0){clearInterval(tick);alert('Session expired');timerEl.textContent='0:00';return}
    timerEl.textContent = fmt(remaining);
  },1000);
  endBtn.addEventListener('click',()=>{remaining=0;timerEl.textContent='0:00';alert('Session ended')});

  readBtn.addEventListener('click', ()=>{tcModal.style.display='flex'});
  closeTc.addEventListener('click', ()=>{tcModal.style.display='none'});
  tcModal.addEventListener('click',(e)=>{if(e.target===tcModal)tcModal.style.display='none'});

  // DOB -> age auto-calc
  if(dob && age){
    dob.addEventListener('change',()=>{
      const v = dob.value; if(!v) return;
      const diff = Date.now() - new Date(v).getTime();
      const years = Math.floor(diff / (365.25*24*3600*1000));
      age.value = years;
    });
  }

  // basic form submit
  const form = document.getElementById('regForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(!document.getElementById('agree').checked){alert('Please accept terms to continue');return}
    alert('Saved (mock). Use this file for UI testing.');
  });
})();
