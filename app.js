 setInterval(()=>{
            document.getElementsByTagName('progress')[0].value
            = document.getElementsByTagName('progress')[0].value + 1;
            if(document.getElementsByTagName('progress')[0].value===10){
                document.getElementsByTagName('progress')[0].value =1;
            }
  
            
        },360);
setInterval(()=>{
const progress = document.querySelector('.progress-data');
        progress.style.width=progress.getAttribute('data-done')+"%";
        progress.style.opacity=1;
},360)
        