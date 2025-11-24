document.addEventListener("DOMContentLoaded", () => {
  // ================= SIDEBAR TOGGLE =================
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.querySelector(".list-icon"); // tombol kotak

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("minimized");
    });
  }

  // ================= CHATBOT =================
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const chatMessages = document.getElementById("chat-messages");

  // fungsi untuk nambah bubble chat ke layar
  function addMessage(text, role = "user") {
    if (!chatMessages) return;

    const bubble = document.createElement("div");
    bubble.classList.add(
      "bubble",
      role === "user" ? "bubble-user" : "bubble-bot"
    );
    bubble.textContent = text;
    chatMessages.appendChild(bubble);

    // auto scroll ke bawah
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // kalau elemen chat lengkap, baru pasang listener
  if (chatForm && chatInput && chatMessages) {
    chatForm.addEventListener("submit", async (e) => {
      e.preventDefault(); // biar halaman nggak reload

      const text = chatInput.value.trim();
      if (!text) return;

      // tampilkan pesan user
      addMessage(text, "user");
      chatInput.value = "";

      // BOT DUMMY DULU
      setTimeout(() => {
        const reply = `Kamu bilang: "${text}". Nanti di sini aku jawab pakai otak Learning Buddy 🙂`;
        addMessage(reply, "bot");
      }, 400);
    });
  } else {
    console.warn("Elemen chat belum lengkap (chat-form / chat-input / chat-messages tidak ditemukan).");
  }
});
