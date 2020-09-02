
const students = [
    {name: 'Ivan', homework: [{date: '14.08.2020', done: true}]},
    {name: 'Maryan', homework: [{date: '14.08.2020', done: true}]},
    {name: 'Mykhailo', homework: [{date: '14.08.2020', done: true}]},
    {name: 'Yaroslav', homework: [{date: '14.08.2020', done: true}]},
    {name: 'Liudmyla', homework: [{date: '14.08.2020', done: true}]},
    {name: 'Taras', homework: [{date: '14.08.2020', done: true}]},
    {name: 'Volodymyr', homework: [{date: '14.08.2020', done: true}]},
    {name: 'Oleksii', homework: [{date: '14.08.2020', done: true}]},
]

const list = document.querySelector('.students-list')

list.addEventListener('click', function(event){
    if(event.target.classList.contains('highlighted')){
          return  event.target.classList.remove('highlighted'); 
    }
    event.target.classList.add('highlighted');
})

const buildStudentsHomeworkTable = (arr, type, extraClass)=>{
    return arr.map((item)=>{
        return `<span class="lesson cell ${extraClass}">${item[type]}</span>`
    })
}

const renderTableHeader = (arr)=>{
const homework = buildStudentsHomeworkTable(arr[0].homework, 'date', 'header-col')
return `<li><span class="column-name cell">Name</span>${homework}</li>`
}


const renderList = (arr, list)=>{
    arr.forEach((item)=>{
        const homework = buildStudentsHomeworkTable(item.homework, 'done');
        const li = document.createElement('li');
        const nameCell = document.createElement('span');
        nameCell.classList.add("column-name", "cell");
        nameCell.insertAdjacentText('afterbegin', item.name)
        // li.addEventListener('click', function(){
        //     console.log('---------', this);
        //     this.classList.add('highlighted');
        // })

        // li.addEventListener('click', (event)=>{
        //     event.target.parentNode.classList.add('highlighted');
        // })

        //  li.addEventListener('click', function(){
        //      if(this.classList.contains('highlighted')){
        //       return  this.classList.remove('highlighted'); 
        //      }
        //     this.classList.add('highlighted');
        // })
        li.append(nameCell)
        li.insertAdjacentHTML('beforeend', homework);
        list.insertAdjacentElement('beforeend', li);
    })
}

renderList(students, list);


list.insertAdjacentHTML('afterbegin', renderTableHeader(students))
console.log('list: ', list.clientWidth);