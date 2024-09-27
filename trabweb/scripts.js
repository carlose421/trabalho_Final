document.getElementById("doctor-btn").addEventListener("click", function() {
    alert("Você selecionou: Sou Médico");
    showMainContent();
});

document.getElementById("patient-btn").addEventListener("click", function() {
    alert("Você selecionou: Sou Paciente");
    showMainContent();
});

function showMainContent() {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}

const inventoryList = document.getElementById("inventory-list");
const inventoryForm = document.getElementById("inventory-form");

inventoryForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const itemName = document.getElementById("item-name").value;
    const itemQuantity = document.getElementById("item-quantity").value;
    
    const listItem = document.createElement("li");
    listItem.textContent = `${itemName} - Quantidade: ${itemQuantity}`;
    
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.style.marginLeft = "10px";
    
    removeButton.addEventListener("click", function() {
        inventoryList.removeChild(listItem);
    });
    
    listItem.appendChild(removeButton);
    inventoryList.appendChild(listItem);
    
    inventoryForm.reset();
});

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
    console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);
});
