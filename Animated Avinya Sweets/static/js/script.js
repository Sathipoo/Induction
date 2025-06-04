// Product data
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

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Benefit section emojis and messages
const benefitDetails = {
    'Natural Ingredients': { emoji: '🌿', message: 'Pure & Natural' },
    'Health Conscious': { emoji: '💚', message: 'Healthy Choice' },
    'Quality Assured': { emoji: '✨', message: 'Premium Quality' },
    'Artisanal Touch': { emoji: '🤲', message: 'Handcrafted' },
    'Festive Packs': { emoji: '🎁', message: 'Special Gifts' },
    'Fresh Delivery': { emoji: '🚚', message: 'Swift Delivery' }
};

// Button messages with emojis
const buttonMessages = {
    'shop-now': [
        { text: "Sweet Journey Begins! ✨", emoji: "🛍️" },
        { text: "Let's Explore Sweets! 🎁", emoji: "✨" },
        { text: "Welcome to Sweet Paradise! 🌟", emoji: "🍯" }
    ],
    'add-to-cart': [
        { text: "Added to Your Sweet Box! 🎀", emoji: "🛍️" },
        { text: "Great Choice! ✨", emoji: "🎁" },
        { text: "Sweet Treat Added! 🍪", emoji: "🎉" }
    ],
    'subscribe': [
        { text: "Welcome to Avinya Family! 💝", emoji: "🎊" },
        { text: "Sweet Updates Coming! ✉️", emoji: "🌺" },
        { text: "Thanks for Joining! 🌟", emoji: "💫" }
    ]
};

// Function to create product card
function createProductCard(product) {
    const tags = product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('');
    
    return `
        <div class="product-card" style="opacity: 0; transform: translateY(50px)">
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
                <button class="cta-button add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    `;
}

// Function to animate benefit icons
function animateBenefitIcons() {
    const cards = gsap.utils.toArray('.benefit-card');
    
    // Animate main section title with The Avinya Difference
    const mainTitle = document.querySelector('.benefits h2');
    if (mainTitle) {
        // Create wrapper for title text
        const titleWrapper = document.createElement('div');
        titleWrapper.style.cssText = `
            text-align: center;
            opacity: 0;
            transform: translateY(30px);
        `;
        mainTitle.parentNode.insertBefore(titleWrapper, mainTitle);
        titleWrapper.appendChild(mainTitle);

        // Animate title text
        gsap.to(titleWrapper, {
            scrollTrigger: {
                trigger: titleWrapper,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        });

        // Add hover effect for title section
        titleWrapper.style.cursor = 'pointer';
        
        titleWrapper.addEventListener('mouseenter', () => {
            gsap.to(mainTitle, {
                scale: 1.05,
                duration: 0.4,
                ease: "power2.out"
            });
            
            // Show special message for title
            const messageEl = document.createElement('div');
            messageEl.className = 'title-message';
            messageEl.style.cssText = `
                position: absolute;
                top: -40px;
                left: 50%;
                transform: translateX(-50%);
                background: #2C3E50;
                color: white;
                padding: 8px 15px;
                border-radius: 20px;
                font-size: 1.1em;
                opacity: 0;
                pointer-events: none;
                white-space: nowrap;
                z-index: 10;
            `;
            messageEl.textContent = "Experience the Magic of Avinya";
            titleWrapper.appendChild(messageEl);

            gsap.to(messageEl, {
                opacity: 1,
                y: -10,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        titleWrapper.addEventListener('mouseleave', () => {
            gsap.to(mainTitle, {
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            });

            const messageEl = titleWrapper.querySelector('.title-message');
            if (messageEl) {
                gsap.to(messageEl, {
                    opacity: 0,
                    y: 0,
                    duration: 0.2,
                    ease: "power2.in",
                    onComplete: () => messageEl.remove()
                });
            }
        });
    }
    
    cards.forEach((card, index) => {
        const heading = card.querySelector('h3');
        const text = card.querySelector('p');
        
        // Remove existing icon if present
        const existingIcon = card.querySelector('i');
        if (existingIcon) {
            existingIcon.remove();
        }
        
        // Add emoji as main visual element
        const emojiSpan = document.createElement('span');
        emojiSpan.className = 'benefit-emoji';
        emojiSpan.style.cssText = `
            font-size: 3rem;
            margin-bottom: 15px;
            display: block;
            opacity: 0;
            transform: scale(0);
            text-align: center;
        `;
        const cardTitle = heading.textContent;
        emojiSpan.textContent = benefitDetails[cardTitle]?.emoji || '✨';
        heading.parentNode.insertBefore(emojiSpan, heading);

        // Initial state
        gsap.set(emojiSpan, { 
            scale: 0,
            opacity: 0
        });
        gsap.set([heading, text], { 
            opacity: 0, 
            y: 30 
        });

        // Create scroll trigger animation
        ScrollTrigger.create({
            trigger: card,
            start: "top bottom-=100",
            onEnter: () => {
                // Card animation
                gsap.to(card, {
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out"
                });

                // Emoji animation
                gsap.to(emojiSpan, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: "back.out(1.7)"
                });

                // Text animations
                gsap.to([heading, text], {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    delay: 0.3,
                    ease: "power2.out"
                });

                // Continuous floating animation for emoji
                gsap.to(emojiSpan, {
                    y: -8,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut"
                });
            }
        });

        // Enhanced hover animations
        card.addEventListener('mouseenter', () => {
            // Emoji animation
            gsap.to(emojiSpan, {
                scale: 1.3,
                duration: 0.4,
                ease: "back.out(1.7)"
            });

            // Card animation
            gsap.to(card, {
                y: -5,
                backgroundColor: 'rgba(255,255,255,0.95)',
                boxShadow: '0 12px 25px rgba(0,0,0,0.15)',
                duration: 0.3,
                ease: "power2.out"
            });

            // Show message
            const message = benefitDetails[cardTitle]?.message;
            if (message) {
                const messageEl = document.createElement('div');
                messageEl.className = 'benefit-message';
                messageEl.style.cssText = `
                    position: absolute;
                    top: -40px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #2C3E50;
                    color: white;
                    padding: 8px 15px;
                    border-radius: 20px;
                    font-size: 0.9em;
                    opacity: 0;
                    pointer-events: none;
                    white-space: nowrap;
                    z-index: 10;
                `;
                messageEl.textContent = message;
                card.appendChild(messageEl);

                gsap.to(messageEl, {
                    opacity: 1,
                    y: -10,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });

        card.addEventListener('mouseleave', () => {
            // Reset emoji animation
            gsap.to(emojiSpan, {
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            });

            // Reset card animation
            gsap.to(card, {
                y: 0,
                backgroundColor: 'var(--light-color)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                duration: 0.3,
                ease: "power2.out"
            });

            // Remove message
            const messageEl = card.querySelector('.benefit-message');
            if (messageEl) {
                gsap.to(messageEl, {
                    opacity: 0,
                    y: 0,
                    duration: 0.2,
                    ease: "power2.in",
                    onComplete: () => messageEl.remove()
                });
            }
        });
    });
}

// Function to initialize the product grid
function initializeProductGrid() {
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        productGrid.innerHTML = products.map(product => createProductCard(product)).join('');
        
        // Animate product cards on scroll
        gsap.utils.toArray('.product-card').forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: "top bottom-=100",
                onEnter: () => {
                    gsap.fromTo(card,
                        {
                            opacity: 0,
                            y: 100,
                            rotation: 5,
                            scale: 0.8
                        },
                        {
                            opacity: 1,
                            y: 0,
                            rotation: 0,
                            scale: 1,
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: "power3.out"
                        }
                    );
                }
            });
        });
    }
}

// Function to handle smooth scrolling
function smoothScroll(target) {
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Function to show enhanced notification
function showEnhancedNotification(message, emoji) {
    const notification = document.createElement('div');
    notification.className = 'enhanced-notification';
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: white;
        padding: 15px 25px;
        border-radius: 15px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 12px;
        opacity: 0;
        min-width: 200px;
        justify-content: center;
    `;

    notification.innerHTML = `
        <span style="font-size: 1.5em;">${emoji}</span>
        <p style="margin: 0; color: #2C3E50; font-size: 1.1em;">${message}</p>
    `;
    document.body.appendChild(notification);

    // Random position offset for variety
    const randomOffset = (Math.random() - 0.5) * 40;

    const tl = gsap.timeline();
    tl.fromTo(notification,
        {
            opacity: 0,
            y: 50,
            scale: 0.8,
            x: `calc(-50% + ${randomOffset}px)`,
            rotation: -5
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "back.out(1.7)"
        }
    ).to(notification, {
        opacity: 0,
        y: -20,
        scale: 0.8,
        rotation: 5,
        duration: 0.4,
        ease: "power2.in",
        delay: 2,
        onComplete: () => notification.remove()
    });
}

// Function to style button
function styleButton(button) {
    button.style.cssText = `
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 12px 24px;
        border-radius: 25px;
        background: var(--primary-color, #FF6B6B);
        color: white;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 500;
        min-width: 140px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        position: relative;
        overflow: hidden;
        gap: 8px;
        text-align: center;
    `;

    // Add hover effect
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.05,
            boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
            duration: 0.3,
            ease: "power2.out"
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            duration: 0.3,
            ease: "power2.out"
        });
    });
}

// Function to get random message
function getRandomMessage(buttonType) {
    const messages = buttonMessages[buttonType];
    return messages[Math.floor(Math.random() * messages.length)];
}

// Function to create scroll animations
function createScrollAnimations() {
    // Animate sections on scroll with staggered effects
    gsap.utils.toArray('section').forEach((section, index) => {
        if (!section.classList.contains('hero')) {
            // Animate section background
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "top 20%",
                    toggleActions: "play none none reverse"
                },
                backgroundColor: "rgba(255,255,255,0)",
                duration: 1,
                ease: "power2.out"
            });

            // Animate section content
            const elements = section.querySelectorAll('h2, h3, p, .product-card, .benefit-card, img, .cta-button');
            elements.forEach((element, elementIndex) => {
                const delay = elementIndex * 0.2;
                let animation = {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        end: "top 15%",
                        toggleActions: "play none none reverse"
                    },
                    duration: 1,
                    ease: "back.out(1.2)"
                };

                // Different animations based on element type
                if (element.tagName.toLowerCase() === 'h2') {
                    Object.assign(animation, {
                        opacity: 0,
                        y: 50,
                        scale: 0.9,
                        delay: delay,
                        duration: 1.2
                    });
                } else if (element.tagName.toLowerCase() === 'h3') {
                    Object.assign(animation, {
                        opacity: 0,
                        x: -30,
                        delay: delay,
                        duration: 0.8
                    });
                } else if (element.tagName.toLowerCase() === 'p') {
                    Object.assign(animation, {
                        opacity: 0,
                        y: 30,
                        delay: delay,
                        duration: 0.8
                    });
                } else if (element.classList.contains('product-card')) {
                    Object.assign(animation, {
                        opacity: 0,
                        y: 100,
                        rotation: elementIndex % 2 === 0 ? 5 : -5,
                        delay: delay,
                        duration: 1
                    });
                } else if (element.classList.contains('benefit-card')) {
                    Object.assign(animation, {
                        opacity: 0,
                        scale: 0.8,
                        y: 50,
                        rotation: elementIndex % 2 === 0 ? 10 : -10,
                        delay: delay,
                        duration: 1
                    });
                } else if (element.tagName.toLowerCase() === 'img') {
                    Object.assign(animation, {
                        opacity: 0,
                        scale: 0.9,
                        rotation: elementIndex % 2 === 0 ? 5 : -5,
                        delay: delay,
                        duration: 1.2
                    });
                } else if (element.classList.contains('cta-button')) {
                    Object.assign(animation, {
                        opacity: 0,
                        scale: 0.8,
                        y: 20,
                        delay: delay,
                        duration: 0.8
                    });
                }

                // Create the animation
                gsap.from(element, animation);

                // Add hover effects for cards
                if (element.classList.contains('product-card') || element.classList.contains('benefit-card')) {
                    element.addEventListener('mouseenter', () => {
                        gsap.to(element, {
                            y: -10,
                            scale: 1.02,
                            boxShadow: '0 20px 30px rgba(0,0,0,0.15)',
                            rotation: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    });

                    element.addEventListener('mouseleave', () => {
                        gsap.to(element, {
                            y: 0,
                            scale: 1,
                            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                            rotation: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    });
                }
            });
        }
    });

    // Special animation for hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const heroElements = heroSection.querySelectorAll('h1, h2, p, .cta-button');
        
        gsap.from(heroSection, {
            opacity: 0,
            duration: 1.5,
            ease: "power2.out"
        });

        heroElements.forEach((element, index) => {
            gsap.from(element, {
                opacity: 0,
                y: 50,
                scale: 0.9,
                duration: 1,
                delay: index * 0.2,
                ease: "back.out(1.7)"
            });
        });

        // Parallax effect for hero section
        gsap.to(heroSection, {
            backgroundPosition: "50% 70%",
            ease: "none",
            scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }
}

// Function to enhance hero section
function enhanceHeroSection() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    // Basic hero section styling
    heroSection.style.cssText = `
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 40px 20px;
        background-size: cover;
        background-position: center;
    `;

    // Create notification container
    const notificationContainer = document.createElement('div');
    notificationContainer.style.cssText = `
        position: fixed;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        width: 100%;
        text-align: center;
        pointer-events: none;
    `;
    document.body.appendChild(notificationContainer);

    // Get hero content
    const heroContent = heroSection.querySelector('.hero-content');
    if (!heroContent) return;

    // Style hero content
    heroContent.style.cssText = `
        max-width: 800px;
        text-align: center;
        padding: 40px;
        position: relative;
        z-index: 2;
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    `;

    // Create simple overlay
    const overlay = document.createElement('div');
    overlay.className = 'hero-overlay';
    overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.6)
        );
        z-index: 1;
    `;
    heroSection.insertBefore(overlay, heroContent);

    // Function to show bottom text notification
    function showBottomText(text, duration = 3000) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 15px 30px;
            border-radius: 30px;
            font-size: 1.1em;
            display: inline-block;
            transform: translateY(20px);
            opacity: 0;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        `;
        
        notificationContainer.appendChild(notification);

        // Animate the text
        gsap.to(notification, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
        });

        typeWriter(notification, text, 20);

        setTimeout(() => {
            gsap.to(notification, {
                y: 20,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => notification.remove()
            });
        }, duration);
    }

    // Initialize animations
    async function animateHeroText(isFirstTime = true) {
        const elements = heroContent.querySelectorAll('h1, h2, p');
        
        // Add cursor style if first time
        if (isFirstTime) {
            const style = document.createElement('style');
            style.textContent = `
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .typing-cursor {
                    display: inline-block;
                    width: 2px;
                    height: 1em;
                    background-color: white;
                    margin-left: 4px;
                    animation: blink 0.7s infinite;
                    vertical-align: middle;
                }
            `;
            document.head.appendChild(style);

            // Initial hero entrance only on first time
            await gsap.from(heroContent, {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power2.out"
            }).then();
        }

        // Function to create cursor
        function createCursor() {
            const cursor = document.createElement('span');
            cursor.className = 'typing-cursor';
            return cursor;
        }

        // Function to type text
        function typeText(element, text) {
            return new Promise(resolve => {
                const cursor = createCursor();
                element.textContent = '';
                element.appendChild(cursor);
                
                let i = 0;
                function type() {
                    if (i < text.length) {
                        element.insertBefore(document.createTextNode(text[i]), cursor);
                        i++;
                        setTimeout(type, 30); // Adjust typing speed here
                    } else {
                        setTimeout(() => {
                            cursor.remove();
                            resolve();
                        }, 500);
                    }
                }
                type();
            });
        }

        // Store original texts if first time
        if (isFirstTime) {
            elements.forEach(element => {
                if (!element.textContent.includes("Experience the joy of traditional Indian")) {
                    element.setAttribute('data-original-text', element.textContent);
                }
            });
        }

        // Animate content elements
        for (const element of elements) {
            // Skip animation for specific text
            if (element.textContent.includes("Experience the joy of traditional Indian")) {
                element.style.opacity = '1';
                element.style.marginBottom = '20px';
                continue;
            }

            // Get original text
            const originalText = element.getAttribute('data-original-text');
            
            // Add text styles
            element.style.marginBottom = '20px';
            element.style.opacity = '0';

            // Fade in element
            await gsap.to(element, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            }).then();

            // Type text
            await typeText(element, originalText);

            // Small delay between elements
            await new Promise(resolve => setTimeout(resolve, 200));
        }

        // Start next iteration after a delay
        setTimeout(() => {
            animateHeroText(false);
        }, 1000);
    }

    // Start text animations
    animateHeroText(true);

    // Style and animate CTA button
    const ctaButton = heroContent.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.style.cssText = `
            margin-top: 30px;
            padding: 15px 40px;
            font-size: 1.2em;
            background: var(--primary-color, #FF6B6B);
            color: white;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            opacity: 0;
        `;

        // Show button
        gsap.to(ctaButton, {
            opacity: 1,
            duration: 0.5,
            delay: 0.5
        });

        // Simple hover effect
        ctaButton.addEventListener('mouseenter', () => {
            gsap.to(ctaButton, {
                scale: 1.05,
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
                duration: 0.3
            });
        });

        ctaButton.addEventListener('mouseleave', () => {
            gsap.to(ctaButton, {
                scale: 1,
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                duration: 0.3
            });
        });

        // Add click handler for scrolling
        ctaButton.addEventListener('click', function() {
            // Scroll to Crafted with Care section
            const craftedSection = document.querySelector('h2, h3').textContent.includes('Crafted with Care') 
                ? document.querySelector('h2, h3').closest('section') 
                : null;
                
            if (craftedSection) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: craftedSection,
                        offsetY: 80
                    },
                    ease: "power2.inOut"
                });
            }
        });
    }

    // Basic parallax effect
    gsap.to(heroContent, {
        y: 50,
        scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize scroll animations
    createScrollAnimations();

    // Initialize hero section
    enhanceHeroSection();

    // Initialize product grid and benefit icons
    initializeProductGrid();
    animateBenefitIcons();

    // Style all buttons
    document.querySelectorAll('.cta-button').forEach(button => {
        styleButton(button);
    });

    // Add click animations for buttons
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            // Click animation
            gsap.to(this, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.inOut",
                onComplete: () => {
                    if (this.classList.contains('add-to-cart-btn')) {
                        const messageType = 'add-to-cart';
                        const productCard = this.closest('.product-card');
                        const productName = productCard.querySelector('h3').textContent;
                        const message = getRandomMessage(messageType);
                        showEnhancedNotification(`${productName} ${message.text}`, message.emoji);
                    } else if (this.textContent.trim() === 'Shop Now') {
                        const productsSection = document.querySelector('.products');
                        if (productsSection) {
                            gsap.to(window, {
                                duration: 1,
                                scrollTo: productsSection,
                                ease: "power2.inOut"
                            });
                        }
                    } else if (this.textContent.includes('Sweet Journey')) {
                        const messageType = 'subscribe';
                        const message = getRandomMessage(messageType);
                        showEnhancedNotification(message.text, message.emoji);
                    }
                }
            });
        });
    });

    // Make hero section button more prominent
    const heroButton = document.querySelector('.hero .cta-button');
    if (heroButton) {
        gsap.to(heroButton, {
            scale: 1.05,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: target,
                    ease: "power2.inOut"
                });
            }
        });
    });
}); 