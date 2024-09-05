const showSideBar = ()=> {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex"
  }
  
  const hideSideBar = ()=> {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none"
  }
  
  
  const observer_1 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }else{
        entry.target.classList.remove("show");
      }
    });
  })
  
  const hidden_elements = document.querySelectorAll(".hidden");
  hidden_elements.forEach((ele)=>observer_1.observe(ele) )