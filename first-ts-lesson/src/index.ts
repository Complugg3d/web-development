// Define a simple interface
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
}

// A function that uses the interface
function greetUser(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const greetingForm = document.getElementById('greetingForm') as HTMLFormElement;
  const greetingDialog = document.getElementById('greetingDialog') as HTMLDivElement;
  const greetingMessage = document.getElementById('greetingMessage') as HTMLHeadingElement;
  const additionalInfo = document.getElementById('additionalInfo') as HTMLParagraphElement;
  const closeBtn = document.querySelector('.close-btn') as HTMLSpanElement;

  if (!greetingForm || !greetingDialog || !greetingMessage || !additionalInfo || !closeBtn) {
    console.error('One or more required elements not found');
    return;
  }

  // Handle form submission
  greetingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const ageInput = document.getElementById('age') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    
    if (!nameInput || !ageInput || !emailInput) {
      console.error('Form inputs not found');
      return;
    }
    
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value, 10);
    const email = emailInput.value.trim();
    
    if (!name || isNaN(age)) {
      console.error('Invalid form data');
      return;
    }
    
    // Create user object
    const user: User = { name, age };
    if (email) user.email = email;
    
    // Generate greeting
    const greeting = greetUser(user);
    greetingMessage.textContent = greeting;
    
    // Add additional info if email is provided
    if (user.email) {
      additionalInfo.textContent = `We'll send a copy of this greeting to ${user.email}`;
    } else {
      additionalInfo.textContent = '';
    }
    
    // Show the dialog
    greetingDialog.style.display = 'flex';
    
    // Reset form
    greetingForm.reset();
  });

  // Close dialog when clicking the close button
  closeBtn.addEventListener('click', () => {
    greetingDialog.style.display = 'none';
  });

  // Close dialog when clicking outside the dialog content
  window.addEventListener('click', (e) => {
    if (e.target === greetingDialog) {
      greetingDialog.style.display = 'none';
    }
  });

  // Close dialog with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      greetingDialog.style.display = 'none';
    }
  });
});
