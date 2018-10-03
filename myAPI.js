let myAPI = {}; // API to load cards, 

// ----------------------------
//
// divId is the div ID in which to load_card into.
//
// product_obj_list must be a list of javascript objects that have the following format:
// product = {
//      imgsrc: 'assets/image.jpg',
//      title: 'title',
//      price: '$6.00',
//      description: 'Description here.',
//      href: 'https://www.amway.com/Shop/Henrie/productlink'
// }
//
// ----------------------------
myAPI.load_cards = function (divId, product_obj_list){

    let makeCard = function (product) {
        let card = document.createElement('div');
        card.classList.add('card', 'col-sm');

        let cardImage = document.createElement('img');
        cardImage.classList.add('card-img-top');
        cardImage.src = product.imgsrc;
        cardImage.alt = product.title;
        card.appendChild(cardImage);

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'mt-auto');
        card.appendChild(cardBody);

        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = product.title;
        cardBody.appendChild(cardTitle);

        let cardPrice = document.createElement('p');
        cardPrice.classList.add('price');
        cardPrice.innerText = product.price;
        cardBody.appendChild(cardPrice);

        let cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerText = product.description;
        cardBody.appendChild(cardText);

        let cardButton = document.createElement('a');
        cardButton.target = '_blank';
        cardButton.href = product.href;
        cardButton.classList.add('btn', 'btn-primary');
        cardButton.innerText = 'View Details';
        cardBody.appendChild(cardButton);
        
        // This is what has been constructed
        // '<div class="card col-sm"> \
        //     <img class="card-img-top" src="" alt=""> \
        //     <div class="card-body d-flex flex-column mt-auto"> \
        //         <h5 class="card-title"></h5> \
        //         <p class="price"></p> \
        //         <p class="card-text"></p> \
        //         <a target="_blank" href="#" class="btn btn-primary">View Details</a> \
        //     </div> \
        // </div>';
        return card;
    }

    let section_div = document.getElementById(divId);
    let row_div = document.createElement('div');
    row_div.classList.add('row');

    for (let i=0; i<product_obj_list.length; ++i) {
        row_div.appendChild(makeCard(product_obj_list[i]));
    }
    section_div.appendChild(row_div);
}

