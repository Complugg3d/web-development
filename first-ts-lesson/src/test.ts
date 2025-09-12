class Queue<T> {
    private items: T[] = [];

    // Add an item to the end of the queue
    enqueue(item: T): void {
        this.items.push(item);
    }

    // Remove and return the first item from the queue
    dequeue(): T | undefined {
        return this.items.shift();
    }

    // Get the first item without removing it
    peek(): T | undefined {
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Get the number of items in the queue
    size(): number {
        return this.items.length;
    }

    // Get all items in the queue
    getItems(): T[] {
        return [...this.items];
    }
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const queue = new Queue<string>();
    const queueElement = document.getElementById('queue') as HTMLDivElement;
    const customerInput = document.getElementById('customerName') as HTMLInputElement;
    const addButton = document.getElementById('addCustomer');
    const nextButton = document.getElementById('nextCustomer');
    const statusElement = document.getElementById('status') as HTMLDivElement;

    if (!queueElement || !customerInput || !addButton || !nextButton || !statusElement) {
        console.error('Required elements not found');
        return;
    }

    // Update the queue display
    function updateQueueDisplay() {
        const items = queue.getItems();
        
        if (items.length === 0) {
            queueElement.innerHTML = '<p style="color: #999; margin: 0;">The queue is empty</p>';
            return;
        }

        queueElement.innerHTML = items.map((name, index) => 
            `<div class="customer${index === 0 ? ' serving' : ''}">
                ${name}
                <div style="font-size: 12px; margin-top: 5px;">${index === 0 ? 'Next!' : `#${index + 1} in line`}</div>
            </div>`
        ).join('');
    }

    // Show status message
    function showStatus(message: string, isError: boolean = false) {
        statusElement.textContent = message;
        statusElement.style.color = isError ? '#d32f2f' : '#2e7d32';
        
        // Clear status after 3 seconds
        setTimeout(() => {
            if (statusElement.textContent === message) {
                statusElement.textContent = '';
            }
        }, 3000);
    }

    // Add customer to queue
    addButton.addEventListener('click', () => {
        const name = customerInput.value.trim();
        
        if (!name) {
            showStatus('Please enter a customer name', true);
            return;
        }
        
        queue.enqueue(name);
        customerInput.value = '';
        updateQueueDisplay();
        showStatus(`Added ${name} to the queue`);
        
        // Focus the input for the next entry
        customerInput.focus();
    });

    // Handle Enter key in the input field
    customerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });

    // Serve next customer
    nextButton.addEventListener('click', () => {
        if (queue.isEmpty()) {
            showStatus('The queue is empty!', true);
            return;
        }
        
        const servedCustomer = queue.dequeue();
        updateQueueDisplay();
        showStatus(`Serving ${servedCustomer} next!`);
    });

    // Initial display
    updateQueueDisplay();
});
