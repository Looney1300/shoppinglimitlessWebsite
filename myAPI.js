let myAPI = {}; // API to load cards, 

// ----------------------------
//
// divId is the div ID in which to load_card into.
//
// product_obj_list must be a list of javascript objects that have the following format:
// product = {
//      imgsrc: 'assets/products/image.jpg',
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
        // cardButton.target = '_blank'; // To open in another tab
        if (product.hasOwnProperty('searchString')){
            let searchUrl = `http://www.amway.com/Shop/Search/SearchResults.aspx?searchkeyword=${product.searchString.replace(' ', '%20')}&includeLMS=False&viewall=Product&pwsID=Henrie`;
            cardButton.href = searchUrl;
        } 
        else if (product.hasOwnProperty('itemNo')){
            let productUrl = `http://www.amway.com/Henrie/Shop/Product/Product.aspx/?itemno=${product.itemNo}`;
            cardButton.href = productUrl;
        } else {
            cardButton.href = '#';
        }
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
};

myAPI.load_partners = function (divId, partner_obj_list) {

    let makeCard = function (partner) {
        let partnerStoreUrl = 'https://www.amwaypartnerstores.com/e/members/benefits.php?xid=';

        let card = document.createElement('div');
        card.classList.add('card', 'col-sm');
        
        let atag = document.createElement('a');
        atag.href = partnerStoreUrl + partner.xid;
        card.appendChild(atag);

        let cardImage = document.createElement('img');
        cardImage.classList.add('card-img-top');
        cardImage.src = partner.imgsrc;
        cardImage.alt = partner.company;
        atag.appendChild(cardImage);

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'mt-auto');
        atag.appendChild(cardBody);

        let cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerText = partner.description;
        cardBody.appendChild(cardText);
        
        // This is what has been constructed
        //'<div class="card col-sm"> 
        //  <a href= 'https://some.url.com'>
        //     <img class="card-img-top" src="" alt=""> 
        //     <div class="card-body d-flex flex-column mt-auto"> 
        //         <p class="card-text"></p> 
        //     </div> 
        //  <a>
        // </div>'
        return card;
    }

    let section_div = document.getElementById(divId);
    let row_div = document.createElement('div');
    row_div.classList.add('row');

    for (let i=0; i<partner_obj_list.length; ++i) {
        row_div.appendChild(makeCard(partner_obj_list[i]));
    }
    section_div.appendChild(row_div);
};
