import { useState } from "react";
const A=[{id:1,island:"Oahu",area:"Ewa Beach",type:"Phishing Text",severity:"high",title:"Fake Utility Disconnection Text",description:"Residents receiving texts claiming power will be cut unless they pay via gift card. Do NOT click links.",time:"2 hours ago",reports:14},{id:2,island:"Maui",area:"Kahului",type:"Email Scam",severity:"medium",title:"Bank Credential Phishing Email",description:"Spoofed bank email asking users to verify accounts. Check the sender URL carefully.",time:"5 hours ago",reports:7},{id:3,island:"Hawaii Island",area:"Hilo",type:"Phone Scam",severity:"medium",title:"IRS Impersonation Calls",description:"Callers threatening arrest unless payment via wire transfer. Hang up immediately.",time:"1 day ago",reports:22},{id:4,island:"Kauai",area:"Lihue",type:"Social Media Scam",severity:"low",title:"Fake Rental Listings on Facebook",description:"Fake vacation rentals asking deposits via Zelle or Venmo. Verify with owners first.",time:"2 days ago",reports:5}];
const G=[{id:1,icon:"🔐",title:"MFA: Your Digital Door Lock",level:"Beginner",summary:"Multi-factor authentication adds a second lock. Even if someone steals your password, they cannot get in without your phone.",steps:["Go to account Settings then Security","Look for Two-Factor Authentication","Choose Authenticator App over SMS","Download Google Authenticator or Authy","Save your backup codes safely"]},{id:2,icon:"🛡️",title:"Stop the Password Domino Effect",level:"Beginner",summary:"Using the same password everywhere means one breach exposes everything. A password manager fixes this.",steps:["Download Bitwarden free or 1Password","Create one strong master passphrase","Let the manager generate unique passwords","Enable MFA on your password manager","Never share passwords via text"]},{id:3,icon:"📡",title:"Secure Your Home Network",level:"Intermediate",summary:"Your home WiFi is the front door to every device. Most people never change factory settings and scammers know this.",steps:["Log into your router at 192.168.1.1","Change the default admin password","Rename your WiFi to remove your name","Enable WPA3 or WPA2 encryption","Create a Guest network for visitors"]},{id:4,icon:"🎣",title:"Spotting a Phishing Message",level:"Beginner",summary:"Phishing is the number one way hackers get in. They fake trusted sources to steal your credentials.",steps:["Check the actual sender email address","Hover over links to see the real URL","Watch for urgency like Act now","Never enter passwords from email links","Type website addresses directly"]}];
const R=[{name:"FBI Internet Crime Complaint Center",desc:"Report online fraud and cybercrime.",url:"https://ic3.gov",tag:"Federal"},{name:"FTC Report Fraud",desc:"Report identity theft and scams.",url:"https://reportfraud.ftc.gov",tag:"Federal"},{name:"Hawaii Office of Consumer Protection",desc:"Report consumer fraud in Hawaii.",url:"https://cca.hawaii.gov/ocp",tag:"State"},{name:"CyberHawaii",desc:"Hawaii statewide cybersecurity initiative.",url:"https://cyberhawaii.org",tag:"Local"},{name:"Hawaii Public Libraries",desc:"Free digital literacy classes statewide.",url:"https://librarieshawaii.org",tag:"Local"},{name:"HACBED",desc:"Hawaii Alliance for Community-Based Economic Development.",url:"https://hacbed.org",tag:"Nonprofit"}];
const sc={high:{c:"#b91c1c",bg:"#fef2f2",b:"#fca5a5",d:"#ef4444",l:"HIGH"},medium:{c:"#b45309",bg:"#fffbeb",b:"#fcd34d",d:"#f59e0b",l:"MED"},low:{c:"#166534",bg:"#f0fdf4",b:"#86efac",d:"#22c55e",l:"LOW"}};
const tc={Federal:{bg:"#eff6ff",c:"#1d4ed8",b:"#bfdbfe"},State:{bg:"#fdf4ff",c:"#7e22ce",b:"#e9d5ff"},Local:{bg:"#f0fdf4",c:"#166534",b:"#86efac"},Nonprofit:{bg:"#fff7ed",c:"#c2410c",b:"#fed7aa"}};
export default function App(){
const[tab,setTab]=useState("alerts");
const[isle,setIsle]=useState("All");
const[og,setOg]=useState(null);
const[oa,setOa]=useState(null);
const[modal,setModal]=useState(false);
const[done,setDone]=useState(false);
const[form,setForm]=useState({island:"",type:"",title:"",desc:""});
const islands=["All","Oahu","Maui","Hawaii Island","Kauai"];
const fa=isle==="All"?A:A.filter(a=>a.island===isle);
const sub=()=>{if(form.island&&form.type&&form.title){setDone(true);setTimeout(()=>{setModal(false);setDone(false);setForm({island:"",type:"",title:"",desc:""});},2500);}};
const inp={width:"100%",padding:"9px 12px",border:"2px solid #e0dbd2",borderRadius:6,fontFamily:"Georgia,serif",fontSize:13,color:"#0d1f0d",background:"#fff",boxSizing:"border-box"};
return(<div style={{fontFamily:"Georgia,serif",background:"#f7f4ef",minHeight:"100vh"}}>
<header style={{background:"#0d1f0d",position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 20px rgba(0,0,0,0.5)"}}>
<div style={{maxWidth:1080,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
<div style={{display:"flex",alignItems:"center",gap:12}}><span style={{fontSize:28}}>🦉</span><div><div style={{fontSize:17,fontWeight:700,color:"#e8f5e8"}}>PueoWatch</div><div style={{fontSize:9,color:"#4ade80",letterSpacing:"2px",textTransform:"uppercase",fontFamily:"monospace"}}>Hawaii</div></div></div>
<div style={{display:"flex",gap:8,alignItems:"center"}}>
<div style={{display:"flex",alignItems:"center",gap:5,background:"rgba(74,222,128,0.1)",border:"1px solid rgba(74,222,128,0.25)",borderRadius:20,padding:"4px 10px"}}><div style={{width:6,height:6,borderRadius:"50%",background:"#4ade80"}}/><span style={{fontSize:10,color:"#4ade80",fontFamily:"monospace"}}>LIVE</span></div>
<button onClick={()=>setModal(true)} style={{background:"#4ade80",color:"#0d1f0d",border:"none",borderRadius:6,padding:"8px 16px",fontWeight:700,fontSize:12,cursor:"pointer"}}>+ Report Scam</button>
</div></div></header>
<div style={{background:"linear-gradient(160deg,#0d1f0d,#163016,#0d1f0d)",padding:"48px 24px 40px",textAlign:"center"}}>
<div style={{maxWidth:600,margin:"0 auto"}}>
<h1 style={{fontSize:"clamp(24px,5vw,40px)",fontWeight:700,color:"#e8f5e8",margin:"0 0 12px"}}>Digital Safety for the<br/><span style={{color:"#4ade80"}}>Hawaiian Ohana</span></h1>
<p style={{fontSize:14,color:"#86efac",lineHeight:1.7,margin:"0 0 24px",fontStyle:"italic"}}>Protecting our community from cyber threats with aloha.</p>
<div style={{display:"flex",gap:24,justifyContent:"center"}}>{[{n:A.reduce((a,b)=>a+b.reports,0),l:"Reports"},{n:G.length,l:"Guides"},{n:R.length,l:"Resources"}].map(s=>(<div key={s.l}><div style={{fontSize:26,fontWeight:700,color:"#4ade80",fontFamily:"monospace"}}>{s.n}</div><div style={{fontSize:10,color:"#86efac"}}>{s.l}</div></div>))}</div>
</div></div>
<div style={{background:"#fff",borderBottom:"2px solid #e0dbd2",position:"sticky",top:64,zIndex:90}}>
<div style={{maxWidth:1080,margin:"0 auto",padding:"0 24px",display:"flex"}}>
{[{id:"alerts",l:"Scam Alerts"},{id:"guides",l:"Safety Guides"},{id:"resources",l:"Get Help"}].map(t=>(
<button key={t.id} onClick={()=>setTab(t.id)} style={{padding:"14px 20px",border:"none",borderBottom:tab===t.id?"3px solid #0d1f0d":"3px solid transparent",background:"none",cursor:"pointer",fontFamily:"Georgia,serif",fontSize:13,fontWeight:tab===t.id?700:400,color:tab===t.id?"#0d1f0d":"#6b7280",marginBottom:-2}}>{t.l}</button>
))}</div></div>
<main style={{maxWidth:1080,margin:"0 auto",padding:"32px 24px 60px"}}>
{tab==="alerts"&&<div>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20,flexWrap:"wrap",gap:10}}>
<h2 style={{fontFamily:"Georgia,serif",fontSize:20,fontWeight:700,margin:0,color:"#0d1f0d"}}>Community Scam Alerts</h2>
<select value={isle} onChange={e=>setIsle(e.target.value)} style={{padding:"8px 12px",border:"2px solid #0d1f0d",borderRadius:6,fontFamily:"Georgia,serif",fontSize:12,background:"#fff",fontWeight:600,color:"#0d1f0d"}}>{islands.map(i=><option key={i}>{i}</option>)}</select>
</div>
<div style={{display:"flex",flexDirection:"column",gap:12}}>
{fa.map(a=>{const s=sc[a.severity];const op=oa===a.id;return(
<div key={a.id} onClick={()=>setOa(op?null:a.id)} style={{background:"#fff",border:"1px solid "+(op?"#0d1f0d":"#e0dbd2"),borderLeft:"5px solid "+s.c,borderRadius:10,padding:"18px 22px",cursor:"pointer",boxShadow:op?"0 4px 20px rgba(0,0,0,0.1)":"0 1px 3px rgba(0,0,0,0.05)"}}>
<div style={{display:"flex",justifyContent:"space-between",gap:10}}>
<div style={{flex:1}}>
<div style={{display:"flex",gap:6,marginBottom:8,flexWrap:"wrap",alignItems:"center"}}>
<span style={{display:"flex",alignItems:"center",gap:4,background:s.bg,color:s.c,border:"1px solid "+s.b,borderRadius:4,padding:"2px 7px",fontSize:10,fontWeight:700,fontFamily:"monospace"}}><span style={{width:5,height:5,borderRadius:"50%",background:s.d,display:"inline-block"}}/>{s.l}</span>
<span style={{background:"#f3f4f6",color:"#374151",borderRadius:4,padding:"2px 7px",fontSize:10,fontFamily:"monospace"}}>{a.type}</span>
<span style={{background:"#0d1f0d",color:"#4ade80",borderRadius:4,padding:"2px 7px",fontSize:10,fontFamily:"monospace"}}>📍 {a.island}</span>
</div>
<div style={{fontSize:14,fontWeight:700,color:"#0d1f0d",fontFamily:"Georgia,serif"}}>{a.title}</div>
{op&&<div style={{marginTop:10,paddingTop:10,borderTop:"1px solid #f3f4f6"}}>
<p style={{fontSize:12,color:"#374151",lineHeight:1.7,margin:"0 0 10px"}}>{a.description}</p>
<div style={{padding:"10px 14px",background:"#f0fdf4",border:"1px solid #86efac",borderRadius:6}}>
<div style={{fontSize:10,fontWeight:700,color:"#166534",marginBottom:3,fontFamily:"monospace"}}>WHAT TO DO</div>
<div style={{fontSize:12,color:"#166534"}}>Do not click links. Report to IC3.gov and the FTC. Alert your ohana.</div>
</div></div>}
</div>
<div style={{textAlign:"right",flexShrink:0}}>
<div style={{fontSize:10,color:"#9ca3af",fontFamily:"monospace",marginBottom:4}}>{a.time}</div>
<div style={{fontSize:11,fontWeight:700,color:"#374151"}}>{a.reports} reports</div>
<div style={{fontSize:10,color:"#9ca3af",marginTop:4}}>{op?"▲":"▼"}</div>
</div></div></div>);})}
</div></div>}
{tab==="guides"&&<div>
<h2 style={{fontFamily:"Georgia,serif",fontSize:20,fontWeight:700,margin:"0 0 20px",color:"#0d1f0d"}}>Digital Safety Guides</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:16}}>
{G.map(g=>{const op=og===g.id;return(
<div key={g.id} style={{background:"#fff",border:"1px solid "+(op?"#0d1f0d":"#e0dbd2"),borderRadius:12,overflow:"hidden"}}>
<div style={{background:op?"#0d1f0d":"#f7f4ef",padding:"18px 20px"}}>
<div style={{display:"flex",justifyContent:"space-between"}}><span style={{fontSize:28}}>{g.icon}</span><span style={{background:op?"rgba(74,222,128,0.15)":"#e5e7eb",color:op?"#4ade80":"#6b7280",borderRadius:4,padding:"2px 7px",fontSize:9,fontFamily:"monospace",fontWeight:700}}>{g.level.toUpperCase()}</span></div>
<div style={{fontFamily:"Georgia,serif",fontSize:14,fontWeight:700,marginTop:10,color:op?"#e8f5e8":"#0d1f0d"}}>{g.title}</div>
</div>
<div style={{padding:"14px 20px"}}>
<p style={{fontSize:12,color:"#4b5563",lineHeight:1.65,margin:"0 0 12px"}}>{g.summary}</p>
{op&&<div style={{marginBottom:12}}>{g.steps.map((s,i)=>(
<div key={i} style={{display:"flex",gap:8,marginBottom:6,alignItems:"flex-start"}}>
<div style={{width:18,height:18,borderRadius:"50%",background:"#0d1f0d",color:"#4ade80",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,flexShrink:0,fontFamily:"monospace"}}>{i+1}</div>
<div style={{fontSize:11,color:"#374151",lineHeight:1.5,paddingTop:2}}>{s}</div>
</div>))}</div>}
<button onClick={()=>setOg(op?null:g.id)} style={{background:op?"#0d1f0d":"transparent",color:op?"#4ade80":"#0d1f0d",border:"2px solid #0d1f0d",borderRadius:6,padding:"8px 14px",fontSize:11,fontWeight:700,cursor:"pointer",width:"100%"}}>{op?"Close":"Read Guide"}</button>
</div></div>);})}
</div></div>}
{tab==="resources"&&<div>
<h2 style={{fontFamily:"Georgia,serif",fontSize:20,fontWeight:700,margin:"0 0 20px",color:"#0d1f0d"}}>Get Help</h2>
<div style={{background:"#0d1f0d",borderRadius:12,padding:"22px 26px",marginBottom:24,display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"}}>
<span style={{fontSize:34}}>🦉</span>
<div style={{flex:1,minWidth:180}}><div style={{fontFamily:"Georgia,serif",fontSize:15,fontWeight:700,color:"#e8f5e8",marginBottom:4}}>Need cybersecurity help?</div><div style={{fontSize:11,color:"#86efac",lineHeight:1.6}}>CyberGuru Academy offers free classes. Islands CyberSecure serves SMBs professionally.</div></div>
<div style={{display:"flex",gap:8}}>
<a href="https://cyberguruacademy.org" target="_blank" rel="noopener noreferrer" style={{background:"#4ade80",color:"#0d1f0d",borderRadius:6,padding:"9px 16px",fontWeight:700,fontSize:11,textDecoration:"none"}}>Free Classes</a>
<a href="https://islandcybersecure.com" target="_blank" rel="noopener noreferrer" style={{background:"transparent",color:"#4ade80",border:"2px solid #4ade80",borderRadius:6,padding:"9px 16px",fontWeight:700,fontSize:11,textDecoration:"none"}}>SMB Consult</a>
</div></div>
<div style={{display:"flex",flexDirection:"column",gap:10}}>
{R.map((r,i)=>{const t=tc[r.tag]||tc.Local;return(
<div key={i} style={{background:"#fff",border:"1px solid #e0dbd2",borderRadius:10,padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:14,flexWrap:"wrap"}}>
<div style={{flex:1}}><div style={{display:"flex",gap:6,marginBottom:5}}><span style={{background:t.bg,color:t.c,border:"1px solid "+t.b,borderRadius:4,padding:"1px 7px",fontSize:9,fontWeight:700,fontFamily:"monospace"}}>{r.tag}</span></div><div style={{fontFamily:"Georgia,serif",fontWeight:700,fontSize:13,color:"#0d1f0d",marginBottom:2}}>{r.name}</div><div style={{fontSize:11,color:"#6b7280"}}>{r.desc}</div></div>
<a href={r.url} target="_blank" rel="noopener noreferrer" style={{background:"#0d1f0d",color:"#4ade80",borderRadius:6,padding:"8px 14px",fontWeight:700,fontSize:11,fontFamily:"monospace",textDecoration:"none",whiteSpace:"nowrap"}}>Visit</a>
</div>);})}
</div></div>}
</main>
{modal&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
<div style={{background:"#fff",borderRadius:14,padding:"28px 26px",maxWidth:440,width:"100%"}}>
{done?(<div style={{textAlign:"center",padding:"20px 0"}}><div style={{fontSize:48,marginBottom:12}}>🦉</div><div style={{fontFamily:"Georgia,serif",fontSize:19,fontWeight:700,color:"#0d1f0d",marginBottom:6}}>Mahalo nui loa!</div><div style={{fontSize:12,color:"#6b7280"}}>Your report has been submitted to our CyberGuru team.</div></div>):(
<><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
<div><div style={{fontFamily:"Georgia,serif",fontSize:17,fontWeight:700,color:"#0d1f0d"}}>Report a Scam</div><div style={{fontSize:10,color:"#6b7280"}}>Help protect your community</div></div>
<button onClick={()=>setModal(false)} style={{background:"#f3f4f6",border:"none",borderRadius:"50%",width:28,height:28,cursor:"pointer",fontSize:14}}>X</button>
</div>
<div style={{display:"flex",flexDirection:"column",gap:11}}>
{[{l:"Island",f:"island",t:"select",o:["Oahu","Maui","Hawaii Island","Kauai"]},{l:"Scam Type",f:"type",t:"select",o:["Phishing Text","Email Scam","Phone Scam","Social Media","Other"]},{l:"Title",f:"title",t:"text",p:"e.g. Fake utility text"},{l:"Description",f:"desc",t:"textarea",p:"What happened?"}].map(f=>(
<div key={f.f}><label style={{fontSize:10,fontWeight:700,color:"#0d1f0d",display:"block",marginBottom:4,fontFamily:"monospace",textTransform:"uppercase"}}>{f.l}</label>
{f.t==="select"?<select value={form[f.f]} onChange={e=>setForm({...form,[f.f]:e.target.value})} style={inp}><option value="">Select</option>{f.o.map(o=><option key={o}>{o}</option>)}</select>:f.t==="textarea"?<textarea value={form[f.f]} onChange={e=>setForm({...form,[f.f]:e.target.value})} placeholder={f.p} rows={3} style={{...inp,resize:"vertical"}}/>:<input value={form[f.f]} onChange={e=>setForm({...form,[f.f]:e.target.value})} placeholder={f.p} style={inp}/>}
</div>))}
<button onClick={sub} style={{background:"#0d1f0d",color:"#4ade80",border:"none",borderRadius:8,padding:"12px",fontWeight:700,fontSize:13,cursor:"pointer"}}>Submit Report</button>
</div></>)}
</div></div>}
<footer style={{background:"#0d1f0d",padding:"26px 24px",textAlign:"center"}}>
<div style={{fontSize:24,marginBottom:6}}>🦉</div>
<div style={{fontFamily:"Georgia,serif",fontSize:12,color:"#e8f5e8",fontWeight:600,marginBottom:2}}>PueoWatch Hawaii</div>
<div style={{fontSize:10,color:"#4a6a4a",marginBottom:8}}>A free community service by Hawaiian Islands CyberGuru Academy</div>
<div style={{fontSize:9,color:"#4a6a4a",fontFamily:"monospace"}}>&copy; 2025 Hawaiian Islands CyberGuru Academy. All Rights Reserved.</div>
</footer>
</div>);}
