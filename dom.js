let myform = document.getElementById('addForm');
let itemlist=document.getElementById('items')
let filter=document.getElementById('filter')


myform.addEventListener('submit',addItem)

itemlist.addEventListener('click',deleteItem)

filter.addEventListener('keyup', filterItems)

function addItem(e){

    e.preventDefault()

    let newitem=document.getElementById('item').value
    let newitemdesc=document.getElementById('itemdesc').value

    let newli=document.createElement('li')
    newli.className='list-group-item'
    newli.appendChild(document.createTextNode(newitem+' '+newitemdesc))

    itemlist.appendChild(newli)

    // Adding Delete Button
    let delbtn=document.createElement('button')
    delbtn.className='btn btn-danger btn-sm float-right delete';
    delbtn.appendChild(document.createTextNode('X'))
    newli.appendChild(delbtn)

    // Adding Edit Button
     let edbtn=document.createElement('button')
     edbtn.className='btn btn-sm float-right delete'
     edbtn.appendChild(document.createTextNode('Edit'))
     newli.appendChild(edbtn)
}
function deleteItem(e){
 if (e.target.classList.contains('delete')){
    if (confirm('Are You sure?')){
         let li=e.target.parentElement;
         itemlist.removeChild(li)
    }
 }
}
function filterItems(e){
   let searchtext=e.target.value.toLowerCase();
   let items=itemlist.getElementsByTagName('li')
   Array.from(items).forEach(function(item){

   let itemName=item.firstChild.textContent;
   if (itemName.toLowerCase().indexOf(searchtext)!=-1){
      item.style.display='block'
   }
   else{
      item.style.display='none'
   }
   })
}