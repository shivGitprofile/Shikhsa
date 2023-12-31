window.addEventListener('scroll',()=>
{
document.querySelector('nav').classList.toggle
('window-scroll',window.scrollY > 0)
}
)

//show/hide faqs
const faqs=document.querySelectorAll('.faq');
faqs.forEach(faqs=>
{
 faqs.addEventListener('click',()=>{
    faqs.classList.toggle('open');
 

    //Change Icon
   const icon=faq.querySelector('.faq_icon i');
    if(icon.classname==='bi bi-plus-lg'){
        icon.classname='bi bi-dash-lg'
    }else
    {
        icon.classname='bi bi-plus-lg'
    }
 })
})

