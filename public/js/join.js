const socket = io()

//Elements
//const roomInput = document.querySelector('#roomsList')
 
const joinTemplate = document.querySelector('#rooms').innerHTML



socket.on('roomsList', (users) => {
    // const html = mustache.render(joinTemplate, {
    //     users
    // })
  //  document.getElementById('rooms').innerHTML = html
    users.forEach((user) => {
        var w = document.createElement("OPTION"); 
        w.setAttribute("value", user.room); 
        document.getElementById("rooms").appendChild(w); 
    })
        
})