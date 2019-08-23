console.log(document.getElementsByClassName('list')[0].lastElementChild);
document.getElementsByClassName('list')[0].lastElementChild.innerHTML = 'JavaScript';
document.body.firstElementChild.style.color = 'lime';
document.getElementsByTagName('div')[0].style.color = 'red';
document.querySelector('div').style.color = 'gold';
document.getElementsByClassName('list')[0].previousElementSibling.style.color = 'blue';
document.getElementsByTagName('li')[0].parentElement.previousElementSibling.style.color = 'purple';