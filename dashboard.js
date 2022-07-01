window.onload = async function(){
    let buttonLogout = document.getElementById('button-logout');
    let div = document.getElementById('div');
    let tableError = document.getElementById("tableError");
    fetch('https://basic-server-one.vercel.app/users')
    .then(response => response.json())
    .then(res => {
        table = `
        <table>
            <tr>
                <th>Name</th>
                <th>City</th>
                <th>Company</th>
                <th>Email</th>
            </tr>    
        `
        for (let i = 0; i < res.data.length; i++) {
            table += '<tr>'
            table += `<td>${res.data[i].name}</td>\n`
            table += `<td>${res.data[i].address.city}</td>\n`
            table += `<td>${res.data[i].company.name}</td>\n`
            table += `<td>${res.data[i].email}</td>\n`
            table += '</tr>\n'
        }
        table += '</table>'
        div.innerHTML = table
    })
    .catch(err => {
        console.log('ERROR', err)
        tableError.classList.remove('hiddenError');
    })
    
    buttonLogout.addEventListener("click", function () {
        localStorage.removeItem('login')
        window.location.href='index.html'
    })
}

