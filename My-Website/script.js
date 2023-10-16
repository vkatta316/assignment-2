const followers = document.querySelectorAll('.total');

followers.forEach((counter) =>{
    counter.innerText = '0';

    const updateFollowers= ()=>{
        const count = counter.getAttribute('data')
        const c = +counter.innerText
        const increment = count/1000
        if(c<count){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateFollowers, 10);
        }else{
            counter.innerText = count;
        }
    }
    updateFollowers();
})