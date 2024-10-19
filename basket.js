const localData =JSON.parse(localStorage.getItem("cartList"))
let cartList = []
const icecreams = document.querySelector(".icecreams")
if(localData){
    cartList = localData
}
domRender(cartList)
function domRender(list){
    list.forEach(item => {
      icecreams.innerHTML += ` <div class="icecream">
                <img src="${item.img}" alt="${item.name}" onerror="this.src='https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ='">
                <h3>${item.name}</h>
                  <div>
                    <p>${item.price} USD</p>
                    <Button onclick="addtoCard('${item.id}')">+</Button>
                  </div>
              </div>`;
    
    })
  }

