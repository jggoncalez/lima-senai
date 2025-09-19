const modal = document.getElementById("modal");

// Toast

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.className = "show";

  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 2000); // desaparece depois de 2 segundos
}

// Shopping Cart
function addCart(id, name){
    showToast(`Item ${id} adicionado ao carrinho com sucesso!`)
    localStorage.setItem(String(id), String(name));
}

function cleanCart(){
    localStorage.clear();
    openModal();
}

// MODAL

function openModal(){
    modal.style.display = "flex";

    const keys = Object.keys(localStorage);
    const tbody = document.getElementById("modal-prods");

    if (!tbody) return;

    tbody.innerHTML = "";

    keys.forEach(key => {
        const value = localStorage.getItem(key);

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${key}</td>
            <td>${value}</td>
        `;
        
        tbody.appendChild(tr);
    });
}

function closeModal(){
    modal.style.display = "none";
}

