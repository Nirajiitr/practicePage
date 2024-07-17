  const cursorEffect = ()=>{
    const page1Content = document.querySelector(".page1-content");
    const mouseMover = document.querySelector(".mouseMover");
  
    page1Content.addEventListener("mousemove", (e) => {
     
        gsap.to(mouseMover,{
           x:e.x,
           y:e.y
    })
    
    });
    page1Content.addEventListener("mouseenter", ()=>{
        gsap.to(mouseMover, {
            scale:1,
          
            
        })

    })
    page1Content.addEventListener("mouseleave", ()=>{
        gsap.to(mouseMover, {
            scale:0,
     
        })
    })
    

  };
   cursorEffect()
  