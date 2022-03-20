const data = [
    {
        name : 'Hamza hashmi',
        age : 18,
        skill : 'Web developer',
        languages : 'python javascript php',
        experience : '3 years in web development',
        image : 'https://randomuser.me/api/portraits/men/4.jpg'
    }, {
        name : 'Aftab khan',
        age : 20,
        skill : 'Web developer',
        languages : 'python javascript php',
        experience : '3 years in web development',
        image : 'https://randomuser.me/api/portraits/men/9.jpg'
    }, {
        name : 'Ayub ansari',
        age : 18,
        skill : 'Web developer',
        languages : 'python javascript php',
        experience : '3 years in web development',
        image : 'https://randomuser.me/api/portraits/men/10.jpg'
    }, {
        name : 'camello camali',
        age : 18,
        skill : 'Web developer',
        languages : 'python javascript php',
        experience : '3 years in web development',
        image : 'https://randomuser.me/api/portraits/women/11.jpg'
    }, {
        name : 'Jehtalal gada',
        age : 18,
        skill : 'Web developer',
        languages : 'python javascript php',
        experience : '3 years in web development',
        image : 'https://randomuser.me/api/portraits/men/15.jpg'
    },
];
// console.table(data);

function cvIterator(profile) {
    let nextindex = 0;
    return{
        next: function(){
            return nextindex<profile.length ?
            {value: profile[nextindex++] , done: false } :
            {done : true};
        }
    }
}


const candidates =  cvIterator(data);
nextcv();


let next = document.getElementById('next');
next.addEventListener("click", nextcv);

function nextcv() {
    const currentcandidates = candidates.next().value;
    console.log(currentcandidates);
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentcandidates != undefined){
    image.innerHTML = `<img src="${currentcandidates.image}">`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentcandidates.name}</li>
    <li class="list-group-item">${currentcandidates.age} years old</li>
    <li class="list-group-item">Lives in ${currentcandidates.city}</li>
    <li class="list-group-item">Primarily works on ${currentcandidates.languages}</li>
    <li class="list-group-item">Skills: ${currentcandidates.skill} </li>
  </ul>`;
    }
    else{
        alert('there is no more cv"s ')
        window.location.reload();
    }
    
}


