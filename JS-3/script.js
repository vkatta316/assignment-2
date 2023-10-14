const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const bad = document.querySelector('#bad')

toggles.forEach(toggle => toggle.addEventListener('change',
(e) => updateToggle(e.target)))

function updateToggle(clickEvent){
    if(good.checked &&  bad.checked){
        if(good === clickEvent ){
            bad.checked = false;
        }
        if(bad === clickEvent){
            good.checked = false;
       
        }
        
    }
}
