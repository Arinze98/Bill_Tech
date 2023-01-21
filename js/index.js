const nav_container = document.querySelector('.nav_container')
const ul = document.querySelector('ul')
const fa_bars = document.querySelector('.fa-bars')

// --------dianamic nav--------
fa_bars.addEventListener('click', function() {

    const nav_container_height = nav_container.getBoundingClientRect().height
    const nav_height = ul.getBoundingClientRect().height

    if(nav_container_height === 0){
        nav_container.style.height = `${nav_height}px`
    }else{
        nav_container.style.height = 0

    }
})

// -----scrole for to_top and header-----
const header = this.document.querySelector('header')
const to_top = this.document.querySelector('.to_top')

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset
    const headerHeight = header.getBoundingClientRect().height

    // -----header position-----
    if(scrollHeight > headerHeight){
        header.classList.add('headerheight')
        header.style.backgroundColor = 'white'
    }else{
        header.classList.remove('headerheight')
        header.style.background = 'transparent'

    }

    // ------back to top------
    if(scrollHeight > 500){
        to_top.classList.add('show_to_top')
    }else{
        to_top.classList.remove('show_to_top')
    }
})

// -------dynamic bodyhight------
const listEl = document.querySelectorAll('.list')
listEl.forEach(function(list) {
    list.addEventListener('click', function(L) {
        nav_container.style.height = 0

        L.preventDefault()

        const id = L.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)

        const heightHeader = header.getBoundingClientRect().height
        const heightNav = nav_container.getBoundingClientRect().height
        const fixedHeader = header.classList.contains('headerheight')
        let position = element.offsetTop - heightHeader

        // if(!fixedHeader) {
        //     position = position - heightHeader
        // }
        // if(heightHeader > 82) {
        //     position = position + heightNav
        // }

        window.scrollTo({
            left: 0,
            top: position,
        })
    })
})

// --------footer date --------
const dateEl = document.getElementById('date')
const curDate = new Date()
 dateEl.innerHTML = curDate.toLocaleString('eng',{
    year: 'numeric'
})


// -------partners loaded---------
const profile = [
    {
        id: 1,
        image: '/image/people/man2.png',
        name: 'andrew kenneth',
        position: 'ceo',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque culpa laudantium beatae esse cupiditate quaerat eos suscipit nobis vitae.',
        alt: 'image'
    },
    {
        id: 2,
        image: '/image/people/man3.png',
        name: 'Ellie Alizza',
        position: 'Manager',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque culpa laudantium beatae esse cupiditate quaerat eos suscipit nobis vitae.',
        alt: 'image'
    },
    {
        id: 3,
        image: '/image/people/woman.jpg',
        name: 'Nithya Rori',
        position: 'President',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, enim. Molestias repellat voluptates tempora, eveniet dolores doloremque nisi error labore.',
        alt: 'image'
    },
    {
        id: 4,
        image: '/image/people/woman2.jpg',
        name: 'Ezabelle Jennyfer',
        position: 'Vice President',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque culpa laudantium beatae esse cupiditate quaerat eos suscipit nobis vitae.',
        alt: 'image'
    },
]

window.addEventListener('DOMContentLoaded', function() {
    content(profile)
    elementEl()
})
const container = document.querySelector('.inner_container')
function content(con){
    let mapCon = con.map(function(item) {
        // console.log(item);
        
        return ` <div class="content">
        <!-- img_box  -->
        <div class="img_box">
            <img src="${item.image}" alt=" ${item.image}">
        </div>
        <!-- content box -->
        <div class="content_box">
            <h2 class="name">${item.name}</h2>
            <h2 class="position">${item.position}</h2>
            <p>
               ${item.text}
            </p>
        </div>
    </div>`

    })

    mapCon = mapCon.join('')
    container.innerHTML = mapCon
}

// -----testimonial slider------
const namearray = [
    "Anderson Carl", "Ashwoon Ben", "Dan Aikin", "David Bateman", "Bongard Edward", "Fred Bowers", "Frank Boyd", "George Cannon", "Cast Hal", "Hank Deitz", "Dewalt Ike", "John Ebner" ,
]
const text = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cumque dolor impedit repellat fuga dolorum rerum consequuntur natus in? Fugiat?',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, qui deserunt? At molestias voluptate commodi expedita excepturi?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit magni eos officia!',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque tempora fugiat minima esse porro! Minima eligendi harum alias ab quod veritatis, quisquam est rerum repellendus!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis?',

]

const name = document.querySelector('.name1')
const testText = document.querySelector('.text')
const leftBtn = document.querySelector('.fa-arrow-left')
const rightBtn = document.querySelector('.fa-arrow-right')

let num = 0
// button controls 
function elementEl() {
    const item = namearray[num]

    name.innerHTML = item
}
// right btn 
rightBtn.addEventListener('click', function() {
    num++ 
    testText.textContent = text[random()]
    
    if(num > namearray.length -1){
        num = 0
    }
    elementEl()
})
// left btn 
leftBtn.addEventListener('click', function() {
    num--
    testText.textContent = text[random()]
    if(num <= 0) {
        num = namearray.length -1
    }
    elementEl()
})
// random text 
function random() {
    return Math.floor(Math.random()*text.length)
}

// --------form validation------- 
function validate() {
    const email = document.getElementById('email')
    const number = document.getElementById('number')

    if(email.value.trim() == '' || number.value.trim() == '') {
        alert('please fill your details correctly')
        return false
    }
    else if(number.value.trim().length < 11) {
        alert('number must be 11 digite')
        return false
    }else if(number.value.trim().length > 11) {
        alert('number is not corret')
        return false
    }
    
    else{
      return  true
    }

}

const eyeEl = document.getElementById('show_password')
const passwordField = document.getElementById('password')

eyeEl.addEventListener('click', function() {
    this.classList.toggle('fa-eye-slash')

    const type  = passwordField.getAttribute('type') === 'password'? 'text' : 'password'
    passwordField.setAttribute('type', type)

    // console.log(eyeEl);
})