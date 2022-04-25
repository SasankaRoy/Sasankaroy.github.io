const header = document.querySelector('header');

 window.addEventListener("scroll", () => {
 	
      header.classList.toggle('scrolled',window.pageYOffset > 0)
 	
 });

const sr = ScrollReveal({
      duration: 2500,
      distance: "60px",
    });
    sr.reveal(".container", {  delay: 600 });
    sr.reveal(".show_text", {origin:"bottom",  delay: 600 });
    sr.reveal(".show_img", { origin:"top",  delay: 600 });


 const first_skill = document.querySelector(".skill:first-child");
    const counter = document.querySelectorAll(".counter span ");
    const progress_bars = document.querySelectorAll(".skill svg circle ");

    const count = (num1,num2) => {
      let currnum = +num1.innerText;
      if(currnum<num2){
        num1.innerText = currnum+1
        setTimeout(() =>{
          count(num1,num2)
        },10)
      }
      ;
    }
    

    window.addEventListener("scroll", () =>{
       //1548
      const pos = Math.round(window.pageYOffset);
      
      if(pos >= 1548 && pos <= 1925){
        counter.forEach((counter, i) =>{
          let target = +counter.dataset.target;          
          let value = 427-427*(target/100);
          progress_bars[i].style.setProperty("--target-", value);
           console.log(value);
           console.log("its over")
          setTimeout(()=>{
            count(counter, target)
          },500)
        })
        progress_bars.forEach((e)=>{
          e.style.animation = 'progress 2.1s ease-in-out forwards';
        })
        // console.log("hello yo")
      }
    })
  	