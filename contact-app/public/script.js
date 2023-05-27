document.addEventListener('DOMContentLoaded', () => {
    const allContactBtn = document.getElementById('allContactBtn');
    const usContactBtn = document.getElementById('usContactBtn');
    
    allContactBtn.addEventListener('click', () => {    
      window.history.pushState({}, '', '/modal-a');
      showModalA();
    });    
    usContactBtn.addEventListener('click', () => {      
      window.history.pushState({}, '', '/modal-b');
      showModalB();
    }); 
    function showModalA() {      
    }    
       function showModalB() {
      
    }
  });
  