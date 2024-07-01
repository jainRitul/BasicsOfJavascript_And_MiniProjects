const insert = document.querySelector('.insert')
// console.log(insert.innerHTML)
window.addEventListener('keydown',function(e){
   insert.innerHTML = `
     <div class='color'>
       <table>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Keycode</th>
        </tr>
        <tr>
            <td>${e.key === " " ? "space":e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
         </tr>
     
       </table>
     </div>
   `;
});