import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Is Your Business Ready for AI Agents? Free Assessment | AI Skills Agents",
  description: "Take our free 5-minute AI readiness assessment and find out exactly which AI agents would save your business the most time and money right now.",
};
export default function AIReadinessPage() {
  const G = "#0066CC";
  const questions = [
    {q:"Do you respond to the same types of customer inquiries repeatedly?",impact:"High",area:"Customer Service Agent"},
    {q:"Do you spend more than 3 hours per week on scheduling and appointment management?",impact:"High",area:"Appointment Booking Agent"},
    {q:"Do you manually follow up with leads who did not convert immediately?",impact:"High",area:"Lead Nurture Agent"},
    {q:"Does your team create recurring reports, updates, or content on a fixed schedule?",impact:"Medium",area:"Automation Workflow"},
    {q:"Do you spend time moving data between systems (CRM, email, spreadsheets)?",impact:"Medium",area:"CRM Automation"},
  ];
  return (
    <div style={{minHeight:"100vh",background:"#F8FAFC",color:"#0D0D0D",fontFamily:"system-ui,sans-serif"}}>
      <nav style={{padding:"16px 5vw",borderBottom:"1px solid #E2E8F0",display:"flex",justifyContent:"space-between",alignItems:"center",background:"white"}}>
        <Link href="/" style={{fontWeight:900,fontSize:20,color:"#0D0D0D",textDecoration:"none"}}>AI Skills Agents</Link>
        <Link href="/blog" style={{color:"#666",textDecoration:"none",fontSize:14}}>← Back</Link>
      </nav>
      <div style={{maxWidth:760,margin:"0 auto",padding:"60px 5vw"}}>
        <div style={{fontSize:11,letterSpacing:"2px",color:G,marginBottom:16}}>FREE ASSESSMENT</div>
        <h1 style={{fontSize:"clamp(28px,4vw,46px)",fontWeight:900,lineHeight:1.1,marginBottom:16}}>Is Your Business Ready for AI Agents?</h1>
        <p style={{fontSize:18,color:"#444",lineHeight:1.7,marginBottom:48}}>Five questions that reveal exactly where AI would save you the most time and money. Takes 3 minutes.</p>
        {questions.map((item,i) => (
          <div key={i} style={{background:"white",border:"1px solid #E2E8F0",borderRadius:8,padding:"24px",marginBottom:16}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:16}}>
              <div style={{flex:1}}>
                <div style={{fontSize:11,color:"#999",marginBottom:8}}>QUESTION {i+1} OF {questions.length}</div>
                <p style={{fontSize:16,fontWeight:600,color:"#0D0D0D",margin:"0 0 12px"}}>{item.q}</p>
                <div style={{fontSize:12,color:G,background:`${G}10`,padding:"4px 10px",borderRadius:4,display:"inline-block"}}>→ {item.area}</div>
              </div>
              <div style={{textAlign:"center",flexShrink:0}}>
                <div style={{fontSize:10,color:"#999",marginBottom:4}}>IMPACT</div>
                <div style={{fontSize:12,fontWeight:700,color:item.impact==="High"?"#16A34A":"#D97706",background:item.impact==="High"?"#F0FDF4":"#FFFBEB",padding:"4px 10px",borderRadius:4}}>{item.impact}</div>
              </div>
            </div>
          </div>
        ))}
        <div style={{background:G,color:"white",padding:"40px",borderRadius:8,textAlign:"center",marginTop:32}}>
          <h2 style={{fontSize:24,fontWeight:900,marginBottom:12}}>Ready to See Your Full Assessment?</h2>
          <p style={{fontSize:16,opacity:0.9,marginBottom:24,lineHeight:1.6}}>Answer these questions on a call with us and we will map out the exact agents your business needs, with time savings estimates and ROI projections. Free. No pitch.</p>
          <Link href="/contact" style={{background:"white",color:G,fontWeight:800,fontSize:15,padding:"14px 32px",textDecoration:"none",borderRadius:4,display:"inline-block"}}>Book Free Assessment Call →</Link>
        </div>
        <div style={{marginTop:40,textAlign:"center"}}>
          <Link href="/blog" style={{color:G,fontWeight:700,textDecoration:"none",fontSize:14}}>← Read more about AI agents</Link>
        </div>
      </div>
    </div>
  );
}
