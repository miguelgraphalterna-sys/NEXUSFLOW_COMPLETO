import React, { useState } from 'react';

export default function App() {
  const [logged, setLogged] = useState(false);

  if (!logged) {
    return (
      <div style={{minHeight:'100vh', background:'linear-gradient(135deg, #667eea, #764ba2)', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div style={{background:'white', borderRadius:'12px', padding:'40px', maxWidth:'400px', boxShadow:'0 10px 40px rgba(0,0,0,0.2)'}}>
          <h1 style={{fontSize:'32px', fontWeight:'bold', color:'#667eea', textAlign:'center'}}>NexusFlow</h1>
          <p style={{textAlign:'center', color:'#666', marginBottom:'30px'}}>Omnichannel Communication Platform</p>
          <input type="email" placeholder="Email" style={{width:'100%', padding:'12px', border:'1px solid #ddd', borderRadius:'6px', marginBottom:'12px'}} />
          <input type="password" placeholder="Password" style={{width:'100%', padding:'12px', border:'1px solid #ddd', borderRadius:'6px', marginBottom:'20px'}} />
          <button onClick={() => setLogged(true)} style={{width:'100%', padding:'12px', background:'#667eea', color:'white', border:'none', borderRadius:'6px', fontWeight:'bold', cursor:'pointer'}}>Sign In</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{display:'flex', minHeight:'100vh', background:'#f5f5f5'}}>
      <div style={{width:'250px', background:'white', padding:'20px', borderRight:'1px solid #ddd'}}>
        <h2 style={{fontSize:'24px', fontWeight:'bold', marginBottom:'20px'}}>NexusFlow</h2>
        <p style={{fontSize:'12px', color:'#999', marginBottom:'20px'}}>USA • EST • USD</p>
        {['Dashboard', 'Contacts', 'Sales'].map(item => (
          <button key={item} style={{width:'100%', padding:'10px', background:'#f0f0f0', border:'none', borderRadius:'6px', cursor:'pointer', marginBottom:'8px', fontSize:'14px'}}>{item}</button>
        ))}
      </div>
      <div style={{flex:1, padding:'40px'}}>
        <h1 style={{fontSize:'32px', fontWeight:'bold', marginBottom:'30px'}}>Dashboard</h1>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'20px'}}>
          {[{label:'Messages', val:'0'}, {label:'Contacts', val:'0'}, {label:'Pipeline', val:'\$0'}, {label:'Conversion', val:'0%'}].map((s,i) => (
            <div key={i} style={{background:'white', borderRadius:'8px', padding:'20px'}}>
              <p style={{color:'#999', fontSize:'12px', margin:'0 0 8px'}}>{s.label}</p>
              <p style={{fontSize:'28px', fontWeight:'bold', margin:'0'}}>{s.val}</p>
            </div>
          ))}
        </div>
        <button onClick={() => setLogged(false)} style={{marginTop:'40px', padding:'10px 20px', background:'#ef4444', color:'white', border:'none', borderRadius:'6px', cursor:'pointer'}}>Logout</button>
      </div>
    </div>
  );
}