
const students = [
    {name: 'Ivan', homework: [{date: '14.08.2020', done: true}, {date: '18.08.2020', done: true}]},
    {name: 'Maryan', homework: [{date: '14.08.2020', done: true}]},
    {name: 'Mykhailo', homework: [{date: '14.08.2020', done: true}]},
    {name: 'Yaroslav', homework: [{date: '14.08.2020', done: true}]},
    {name: 'Liudmyla', homework: [{date: '14.08.2020', done: true}]},
    {name: 'Taras', homework: [{date: '14.08.2020', done: true}]},
    {name: 'Volodymyr', homework: [{date: '14.08.2020', done: true}]},
    {name: 'Oleksii', homework: [{date: '14.08.2020', done: true}]},
]

const list = document.querySelector('.students-list')

// const buildStudentsHomeworkTable = (arr)=>{
//     return arr.map((item)=>{
//         return `<span class="lesson cell">${item.done}</span>`
//     })
// }

// students.map((item)=>{
//     const homework = buildStudentsHomeworkTable(item.homework);
//     const li = document.createElement('li');
//     li.innerHTML = `<span class="column-name cell">${item.name}</span>${homework}`
//     list.appendChild(li)
// })


// students.map((item)=>{
//     const homework = buildStudentsHomeworkTable(item.homework);
//     list.insertAdjacentHTML('beforeend', 
//     `<li><span class="column-name cell">${item.name}</span>${homework}</li>`)
// })


// list.insertAdjacentHTML(
//     'afterbegin', 
//     students.reduce((acc, item)=>{
//     const homework = buildStudentsHomeworkTable(item.homework);
//     return acc + `<li><span class="column-name cell">${item.name}</span>${homework}</li>`
// }, ''))



// change above
const buildStudentsHomeworkTable = (arr, type, extraClass)=>{
    return arr.map((item)=>{
        return `<span class="lesson cell ${extraClass}">${item[type]}</span>`
    })
}

const renderTableHeader = (arr)=>{
const homework = buildStudentsHomeworkTable(arr[0].homework, 'date', 'header-col')
return `<li><span class="column-name cell">Name</span>${homework}</li>`
}

list.insertAdjacentHTML(
    'afterbegin', 
    students.reduce((acc, item)=>{
    const homework = buildStudentsHomeworkTable(item.homework, 'done');
    return acc + `<li><span class="column-name cell">${item.name}</span>${homework}</li>`
}, renderTableHeader(students) ))