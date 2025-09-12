class Queue<T> {
  private items: T[] = [];

  // Add an item to the end of the queue
  enqueue(item: T): void {
    this.items.push(item);
  }

  // Remove and return the first item from the queue
  dequeue(): T | undefined {
    // TODO add code to implement dequeue
    return undefined;
  }

  // Get the first item without removing it
  peek(): T | undefined {
    // TODO implement peek
    return undefined;
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
    // TODO implement getItems
    return [];
  }
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const queue = new Queue<string>();
  const queueElement = document.getElementById("queue") as HTMLDivElement;
  const customerInput = document.getElementById(
    "customerName"
  ) as HTMLInputElement;
  const addButton = document.getElementById("addCustomer");
  const nextButton = document.getElementById("nextCustomer");
  const statusElement = document.getElementById("status") as HTMLDivElement;

  if (
    !queueElement ||
    !customerInput ||
    !addButton ||
    !nextButton ||
    !statusElement
  ) {
    console.error("Required elements not found");
    return;
  }

  // Update the queue display
  function updateQueueDisplay() {
    const items = queue.getItems();

    if (items.length === 0) {
      queueElement.innerHTML =
        '<p style="color: #999; margin: 0;">The queue is empty</p>';
      return;
    }

    queueElement.innerHTML = items
      .map(
        (name, index) =>
          `<div class="customer${index === 0 ? " serving" : ""}">
                ${name}
                <div style="font-size: 12px; margin-top: 5px;">${
                  index === 0 ? "Next!" : `#${index + 1} in line`
                }</div>
            </div>`
      )
      .join("");
  }

  // Show status message
  function showStatus(message: string, isError: boolean = false) {
    // TODO: style the status element with a background color and a padding
    // TODO: add a message in status element
    // TODO: add a message to show when the queue is empty
    // TODO: clear the status after 3 seconds by using setTimeout and clearTimeout
  }

  // Add customer to queue
  addButton.addEventListener("click", () => {
    // TODO: add code to implement add customer to queue
    // TODO: if there is no name in the customer input showStatus must be Please enter a customer name
    // TODO: clear inoute after adding name
  });

  // Handle Enter key in the input field
  customerInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addButton.click();
    }
  });

  // Serve next customer
  nextButton.addEventListener("click", () => {
    // TODO implement next serve
    // TODO if queue is empty showStatus must have The queue is empty!
    // TODO when serving a customer showStatus must have Serving [customer name] next!
    // TODO update queue display
  });

  // Initial display
  updateQueueDisplay();
});
