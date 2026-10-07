'use strict';
(() => {
  const money = value => new Intl.NumberFormat('en-US', {style:'currency',currency:'USD'}).format(value);
  const products = {notebook:{label:'Daily notebook',cents:2400},bag:{label:'Canvas carryall',cents:4800},cup:{label:'Studio cup',cents:3600}};
  const cart = [];
  const orders = [];
  const states = ['New','Processing','Dispatched'];
  const el = id => document.getElementById(id);
  function updateCart() {
    const total = cart.reduce((sum,key) => sum + products[key].cents, 0);
    el('cart-total').textContent = `Cart: ${cart.length} ${cart.length === 1 ? 'item' : 'items'} · ${money(total/100)}`;
    el('place-order').disabled = cart.length === 0;
  }
  document.querySelectorAll('[data-add]').forEach(button => button.addEventListener('click', () => {
    cart.push(button.dataset.add);
    updateCart();
  }));
  function renderOrders() {
    el('staff-orders').replaceChildren();
    orders.slice().reverse().forEach(order => {
      const row = document.createElement('div'); row.className = 'order-row';
      const label = document.createElement('span'); label.textContent = `${order.id} · ${order.items.length} items · ${money(order.total/100)} · ${states[order.stage]}`;
      const button = document.createElement('button'); button.type = 'button';
      button.textContent = order.stage < 2 ? `Mark ${states[order.stage+1].toLowerCase()}` : 'Dispatched';
      button.disabled = order.stage === 2;
      button.setAttribute('aria-label', `${button.textContent}: order ${order.id}`);
      button.addEventListener('click', () => {if(order.stage < 2) order.stage++;renderOrders();el('order-note').textContent = `Order ${order.id} is now ${states[order.stage].toLowerCase()}.`;});
      row.append(label,button); el('staff-orders').append(row);
    });
  }
  el('place-order').addEventListener('click', () => {
    if(!cart.length) return;
    orders.push({id:`DEMO-${1001+orders.length}`,items:[...cart],total:cart.reduce((sum,key) => sum+products[key].cents,0),stage:0});
    cart.length = 0; updateCart(); renderOrders();
    el('order-note').textContent = 'Demo order created. Update its status in the staff view.';
  });
  const initial = {
    north:[{name:'Harbour workspace',value:6400,stage:0},{name:'Gallery refresh',value:2800,stage:1}],
    coast:[{name:'Trail operator',value:5200,stage:0},{name:'Ceramics studio',value:1900,stage:1}]
  };
  let leads = JSON.parse(JSON.stringify(initial));
  function renderPipeline() {
    const workspace = el('workspace').value;
    const items = leads[workspace];
    const open = items.filter(item => item.stage < 2).reduce((sum,item) => sum+item.value,0);
    const won = items.filter(item => item.stage === 2).reduce((sum,item) => sum+item.value,0);
    el('pipeline-summary').textContent = `Open ${money(open)} · Won ${money(won)}`;
    el('pipeline').replaceChildren();
    ['New','Qualified','Won'].forEach((stage,index) => {
      const lane = document.createElement('section');lane.className = 'lane';
      const heading = document.createElement('h4');heading.textContent = stage;lane.append(heading);
      const matches = items.filter(item => item.stage === index);
      if(!matches.length){const empty = document.createElement('p');empty.className = 'empty';empty.textContent = 'No opportunities';lane.append(empty);}
      matches.forEach(item => {
        const card = document.createElement('div');card.className = 'lead';
        const name = document.createElement('strong');name.textContent = item.name;
        const amount = document.createElement('p');amount.textContent = money(item.value);card.append(name,amount);
        if(index < 2){const button = document.createElement('button');button.type='button';button.textContent=index===0?'Qualify':'Mark won';button.setAttribute('aria-label',`${button.textContent}: ${item.name}`);button.addEventListener('click',()=>{item.stage++;renderPipeline();});card.append(button);}
        lane.append(card);
      });
      el('pipeline').append(lane);
    });
  }
  el('workspace').addEventListener('change',renderPipeline);
  el('reset-crm').addEventListener('click',()=>{leads=JSON.parse(JSON.stringify(initial));renderPipeline();});
  renderPipeline();
  function tourView(small){el('tour-frame').classList.toggle('mobile',small);el('tour-small').setAttribute('aria-pressed',String(small));el('tour-wide').setAttribute('aria-pressed',String(!small));}
  el('tour-small').addEventListener('click',()=>tourView(true));el('tour-wide').addEventListener('click',()=>tourView(false));
  el('tour-form').addEventListener('submit',event=>{event.preventDefault();const date=el('tour-date').value;if(date)el('tour-message').textContent=`Enquiry preview for ${date}. Demo only — nothing was sent.`;});
  el('record-fee').addEventListener('click',()=>{el('ledger-balance').textContent=money(8070);el('recon-status').textContent='Reconciled in this sample: difference $0.00.';el('record-fee').disabled=true;el('record-fee').textContent='Sample fee applied';});
  function royalties(){
    const inputs=['royalty-gross','royalty-refunds','royalty-fees'].map(id=>el(id));
    const valid=inputs.every(input=>input.value!==''&&Number.isFinite(input.valueAsNumber)&&input.valueAsNumber>=0);
    const [gross,refunds,fees]=inputs.map(input=>Math.round(input.valueAsNumber*100));
    if(!valid||refunds+fees>gross){el('royalty-status').textContent='Enter non-negative amounts; refunds and fees cannot exceed sales in this sample.';['royalty-base','royalty-due','studio-share'].forEach(id=>el(id).textContent='—');return;}
    const base=gross-refunds-fees;const due=Math.round(base*.15);
    el('royalty-base').textContent=money(base/100);el('royalty-due').textContent=money(due/100);el('studio-share').textContent=money((base-due)/100);el('royalty-status').textContent='';
  }
  ['royalty-gross','royalty-refunds','royalty-fees'].forEach(id=>el(id).addEventListener('input',royalties));royalties();
})();
