import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const e={email:"",message:""},t=document.querySelector(".feedback-form"),m=t.querySelector('input[name="email"]'),l=t.querySelector('textarea[name="message"]');document.addEventListener("DOMContentLoaded",()=>{const a=localStorage.getItem("feedback-form-state");if(a){const s=JSON.parse(a);e.email=s.email||"",e.message=s.message||"",m.value=e.email,l.value=e.message}});t.addEventListener("input",a=>{a.target.name==="email"?e.email=a.target.value.trim():a.target.name==="message"&&(e.message=a.target.value.trim()),localStorage.setItem("feedback-form-state",JSON.stringify(e))});t.addEventListener("submit",a=>{a.preventDefault(),!e.email||!e.message?alert("Fill please all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",m.value="",l.value="")});
//# sourceMappingURL=2-form.js.map
