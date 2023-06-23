var prev = document.getElementsByClassName('preview')[0];
const boxElList = document.querySelectorAll('.block');

const options = {
    rootMargin: '0px',
    threshold: 1.0
  };
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio == 1) {
        var targ = entry.target;
        var toArray = Array.from(boxElList);
        let index = toArray.indexOf(targ);
        prev.innerHTML=`<img src="https://github.com/nanhimang/udemy-nanhimang/blob/main/%ED%94%84%EB%A1%9C%ED%95%84/2-assignment-3.${index}.png?raw=true" alt="none"/>`
        console.log(entry.intersectionRatio, index); 
        }
    })
      console.log("---------------------------");
},options);
  
  // 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
  boxElList.forEach((el) => {
    io.observe(el);
  })