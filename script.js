document.addEventListener("DOMContentLoaded", () => {
    const logoContainer = document.querySelector(".logo-container");
    const mainContent = document.querySelector(".main-content");
    const message = document.querySelector(".message");

    setTimeout(() => {
        message.style.display = "block"; 
    }, 5000);

    setTimeout(() => {
        logoContainer.classList.add("hidden");
    }, 7000);

    // Sembunyikan logo dan tampilkan semua elemen di detik ke-7
    setTimeout(() => {
        logoContainer.style.display = "none"; // Sembunyikan logo
        mainContent.style.display = "block"; // Tampilkan konten utama
    }, 8000);

    const scrollingText = document.querySelector(".scrolling-text");
    const footer = document.querySelector(".footer");

    // Gandakan teks untuk menciptakan efek loop
    scrollingText.innerHTML += scrollingText.innerHTML;

    // Set posisi awal teks
    let position = 0;

    // Loop untuk menggerakkan teks
    function moveText() {
        position--; // Kurangi posisi untuk membuat teks bergerak ke kiri
        if (position <= -scrollingText.offsetWidth / 2) {
            // Jika teks sudah setengah keluar layar, reset ke posisi awal
            position = 0;
        }
        scrollingText.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveText); // Panggil fungsi ini lagi untuk loop
    }

    moveText(); // Mulai animasi

    const buttons = document.querySelectorAll(".question button"); // Semua tombol
    const modals = {
        satu: document.getElementById("modal1"),
        dua: document.getElementById("modal2"),
        tiga: document.getElementById("modal3"),
        empat: document.getElementById("modal4"),
    };

    const closeButtons = document.querySelectorAll(".close-modal");

    // Tampilkan modal saat tombol diklik
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.classList[0]; // Ambil class tombol (satu, dua, tiga)
            const modal = modals[modalId]; // Ambil modal yang sesuai
            if (modal) {
                modal.style.display = "flex"; // Tampilkan modal
            }
        });
    });

    // Sembunyikan modal saat tombol "Tutup" diklik
    closeButtons.forEach(closeButton => {
        closeButton.addEventListener("click", () => {
            closeButton.closest(".modal").style.display = "none"; // Sembunyikan modal
        });
    });

    // Sembunyikan modal saat area luar modal diklik
    document.querySelectorAll(".modal").forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none"; // Sembunyikan modal
            }
        });
    });
});