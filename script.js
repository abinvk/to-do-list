const todoname = [{
    name: 'readig',
    date: '2024-06-10'
},{
    name: 'writing',
    date: '2024-06-11'
}]
rendername();

function rendername() {
    let nameHTML = '';
    for (let i = 0; i < todoname.length; i++) {
        const todonameobject = todoname[i];
        const{name, date} = todonameobject;
        const html =`
        <div>${name}</div>
        <div>${date}</div>
        <button onclick="
        todoname.splice(${i}, 1);
        rendername();
        "class="remove-btn">Remove</button>
        `;
        nameHTML += html;
    }
    document.querySelector('.js-name-list')
    .innerHTML = nameHTML;
}
        function addList() {
            const dateElement = document.querySelector('.js-date');
            const date = dateElement.value;
            const nameElement = document.querySelector('.js-name');
            const nameInput = nameElement.value;
            todoname.push({
                name: nameInput,
                date: date
        });
        nameElement.value = '';
        rendername();

    }

    

    



