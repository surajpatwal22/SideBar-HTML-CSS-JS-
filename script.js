const body = document.querySelector("body"),
      sidebar = document.querySelector(".sidebar"),
      toggle = document.querySelector(".toggle"),
      searchBtn = document.querySelector(".search-box"),
      modeSwitch = document.querySelector(".toggle-switch"),
      modeText = document.querySelector(".mode-text");


      toggle.addEventListener('click',()=>{
        sidebar.classList.toggle("close");
        // console.log(toggle);
      });

      searchBtn.addEventListener('click',()=>{
        sidebar.classList.remove("close");
        // console.log(toggle);
      });

      modeSwitch.addEventListener('click',()=>{
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
          modeText.innerHTML="Light Mode";
        } else {
          modeText.innerHTML="Dark Mode";
        }
      });