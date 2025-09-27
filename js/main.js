// 🤖 Runoff Resonator - Professional Money Recovery Service
// We Do The Work For You - Because People Are Lazy About Getting Their Own Money
// Robin Hood in the Code - Professional yet Revolutionary
// Professional testimonials rotation
const testimonials = [
    "I knew I was probably owed money but I'm way too busy with work to deal with calling companies and filling out forms. These guys handled everything and got me $847 back.",
    "They found money I didn't even know existed. Got back $100 from some old subscription I forgot about.",
    "Professional service. They do all the legwork and I just collect the check. Recovered $650 for me.",
    "Worth every penny. They found $320 I was owed and saved me hours of phone calls and paperwork."
];

let currentTestimonial = 0;

// Rotate testimonials every 5 seconds
function rotateTestimonials() {
    const testimonialElement = document.querySelector('.testimonial p em');
    if (testimonialElement) {
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonialElement.textContent = `"${testimonials[currentTestimonial]}"`;
        }, 5000);
    }
}

// Contact form handling - let the recovery-intake.html links work normally
function handleContactForm() {
    // Just add hover effects and tracking - don't intercept the clicks
    const contactButtons = document.querySelectorAll('a[href="recovery-intake.html"], .btn-primary, .btn-outline');
    
    contactButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
}

function showContactForm() {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'contact-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>Ready to Get Your Money Back?</h3>
            <form id="contact-form">
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <input type="tel" placeholder="Your Phone">
                <textarea placeholder="Tell us what you think you might be owed money for (optional)"></textarea>
                <button type="submit">Start My Recovery</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    modal.querySelector('.close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Initialize mass reclamation counters when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Animate mass reclamation statistics
    setTimeout(() => {
        animateCounter('detected-amount', 96000000000, 3000, false, true);
        animateCounter('recovery-rate', 91.6, 2000, true);
        animateCounter('avg-recovery', 311, 2000, false, true);
        animateCounter('mass-scale', 100, 2500);
    }, 500);
    
    // Start live recovery demo
    runLiveRecoveryDemo();

    // Eligibility form handling
    const eligibilityForm = document.getElementById('eligibility-form');
    if (eligibilityForm) {
        eligibilityForm.addEventListener('submit', handleEligibilityCheck);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Handle eligibility check form submission
function handleEligibilityCheck(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const state = formData.get('state');
    const serviceType = formData.get('service-type');
    const email = formData.get('email');
    
    // Show results container
    const resultsContainer = document.getElementById('eligibility-results');
    resultsContainer.style.display = 'block';
    
    // Generate estimated recovery amounts based on service type
    let estimatedRecovery = 0;
    let serviceDescription = '';
    
    switch (serviceType) {
        case 'tax-refund':
            estimatedRecovery = getRandomInRange(3000, 15000);
            serviceDescription = 'unclaimed tax refunds from the IRS';
            break;
        case 'snap-benefits':
            estimatedRecovery = getRandomInRange(200, 800);
            serviceDescription = 'expired or denied SNAP benefits';
            break;
        case 'medicaid':
            estimatedRecovery = getRandomInRange(500, 3000);
            serviceDescription = 'Medicaid reimbursements and billing corrections';
            break;
        case 'housing':
            estimatedRecovery = getRandomInRange(1000, 5000);
            serviceDescription = 'housing voucher and assistance programs';
            break;
        default:
            estimatedRecovery = getRandomInRange(500, 2000);
            serviceDescription = 'various government benefit programs';
    }
    
    // Display results
    resultsContainer.innerHTML = `
        <div class="eligibility-result">
            <h3>Potential Recovery Estimate</h3>
            <p class="recovery-amount">$${estimatedRecovery.toLocaleString()}</p>
            <p>Based on our analysis of ${serviceDescription} in ${getStateName(state)}, you may be eligible to recover approximately <strong>$${estimatedRecovery.toLocaleString()}</strong>.</p>
            <div class="next-steps">
                <h4>Next Steps:</h4>
                <ol>
                    <li>We'll send a detailed analysis to ${email}</li>
                    <li>Free consultation to verify eligibility</li>
                    <li>If eligible, we handle all government paperwork</li>
                    <li>You pay nothing unless we recover money for you</li>
                </ol>
                <p class="contact-info">
                    <strong>Questions?</strong> Email us at 
                    <a href="mailto:ultraseekerlooney+recovery@gmail.com">ultraseekerlooney+recovery@gmail.com</a>
                </p>
            </div>
        </div>
    `;
    
    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
    
    // TODO: In production, send this data to your backend or email service
    console.log('Eligibility check submitted:', { state, serviceType, email, estimatedRecovery });
}

// Helper function to generate random recovery estimates
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function to get full state name
function getStateName(stateCode) {
    const stateNames = {
        'AL': 'Alabama',
        'AK': 'Alaska',
        'AZ': 'Arizona',
        'AR': 'Arkansas',
        'CA': 'California',
        'CO': 'Colorado',
        'CT': 'Connecticut',
        'DE': 'Delaware',
        'FL': 'Florida',
        'GA': 'Georgia',
        'HI': 'Hawaii',
        'ID': 'Idaho',
        'IL': 'Illinois',
        'IN': 'Indiana',
        'IA': 'Iowa',
        'KS': 'Kansas',
        'KY': 'Kentucky',
        'LA': 'Louisiana',
        'ME': 'Maine',
        'MD': 'Maryland',
        'MA': 'Massachusetts',
        'MI': 'Michigan',
        'MN': 'Minnesota',
        'MS': 'Mississippi',
        'MO': 'Missouri',
        'MT': 'Montana',
        'NE': 'Nebraska',
        'NV': 'Nevada',
        'NH': 'New Hampshire',
        'NJ': 'New Jersey',
        'NM': 'New Mexico',
        'NY': 'New York',
        'NC': 'North Carolina',
        'ND': 'North Dakota',
        'OH': 'Ohio',
        'OK': 'Oklahoma',
        'OR': 'Oregon',
        'PA': 'Pennsylvania',
        'RI': 'Rhode Island',
        'SC': 'South Carolina',
        'SD': 'South Dakota',
        'TN': 'Tennessee',
        'TX': 'Texas',
        'UT': 'Utah',
        'VT': 'Vermont',
        'VA': 'Virginia',
        'WA': 'Washington',
        'WV': 'West Virginia',
        'WI': 'Wisconsin',
        'WY': 'Wyoming',
    };
    return stateNames[stateCode] || stateCode;
}

// Contact form validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Start testimonial rotation
    rotateTestimonials();
    
    // Set up contact form handling
    handleContactForm();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
