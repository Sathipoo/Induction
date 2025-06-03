const products = [
    {
        name: 'Sugar-Free Kaju Katli',
        weight: '250g',
        price: '₹499',
        description: 'Our signature kaju katli made with premium cashews and natural stevia',
        image: 'https://www.parsidairyfarm.com/cdn/shop/files/KajuKatli.jpg?v=1699528323',
        tags: ['Sugar-Free', 'Diabetic-Friendly']
    },
    {
        name: 'Honey Date Ladoo',
        weight: '200g',
        price: '₹399',
        description: 'Wholesome ladoos made with organic dates and pure honey',
        image: 'https://www.meethi.in/cdn/shop/files/honey-dry-fruits-laddoo.webp?v=1684819505',
        tags: ['No Added Sugar', 'Rich in Iron']
    },
    {
        name: 'Almond Rose Barfi',
        weight: '300g',
        price: '₹599',
        description: 'Aromatic barfi with crushed almonds and natural rose essence',
        image: 'https://lonumedhu.com/sites/default/files/rose-barfi-fb-post.jpg',
        tags: ['Gluten-Free', 'Natural Colors']
    },
    {
        name: 'Mixed Dry Fruit Roll',
        weight: '200g',
        price: '₹449',
        description: 'Energy-packed rolls with assorted dry fruits and honey',
        image: 'https://mithaicana.com/cdn/shop/files/anjeer-dry-fruit-roll.jpg?v=1740029819',
        tags: ['High Protein', 'Natural Energy']
    },
    {
        name: 'Stevia Mysore Pak',
        weight: '250g',
        price: '₹549',
        description: 'Classic Mysore pak made with pure ghee and stevia',
        image: 'https://www.sugarfree-india.com/images/uploads/recipe-images/sugar-free-mysore-pak.jpg',
        tags: ['Sugar-Free', 'Traditional Recipe']
    },
    {
        name: 'Coconut Jaggery Ladoo',
        weight: '200g',
        price: '₹399',
        description: 'Nutritious ladoos made with fresh coconut and organic jaggery',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2r0yoSUGqQsj3s7O4mvNqgmJ1VbMwDQZgMA&s',
        tags: ['Iron-Rich', 'Natural Sweetener']
    }
];


function createProductCard(product) {
    const tags = product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('');
    
    return `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-overlay">
                    <p class="product-description">${product.description}</p>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-tags">${tags}</div>
                <p class="product-weight">${product.weight}</p>
                <div class="product-price">${product.price}</div>
                <button class="cta-button add-to-cart-btn">
                    <i class="fas fa-shopping-basket"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
}


function initializeProductGrid() {
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        productGrid.innerHTML = products.map(product => createProductCard(product)).join('');
    }
}


function smoothScroll(target) {
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}


document.addEventListener('DOMContentLoaded', () => {
    initializeProductGrid();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                smoothScroll(target);
            }
        });
    });


    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('add-to-cart-btn')) {
                const productCard = this.closest('.product-card');
                const productName = productCard.querySelector('h3').textContent;
                showNotification(`Added ${productName} to your cart!`);
            } else if (this.textContent.trim() === 'Shop Now') {
                smoothScroll(document.querySelector('.products'));
            } else if (this.textContent.includes('Sweet Journey')) {
                showNotification('Thank you for your interest! We\'ll contact you about subscription details.');
            } else if (this.textContent.includes('Gift Box')) {
                showNotification('Our team will reach out to discuss your corporate gifting needs.');
            }
        });
    });
});


function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <p>${message}</p>
    `;
    document.body.appendChild(notification);

    
    setTimeout(() => notification.classList.add('show'), 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
} 