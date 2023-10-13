const followers = document.querySelectorAll('.counter');

followers.forEach((counter) =>{
    counter.innerText = '0';

    const updateFollowers= ()=>{
        const count = counter.getAttribute('data-target')
        const c = +counter.innerText
        const increment = count/1000
        if(c<count){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateFollowers, 3);
        }else{
            counter.innerText = count;
        }
    }
    updateFollowers();
})