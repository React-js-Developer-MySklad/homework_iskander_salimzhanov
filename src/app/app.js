import html from "./app.html";
import './app.css'

const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

document.addEventListener('DOMContentLoaded', () => {
        const addDataButton = document.querySelector('.add-data-button');
        addDataButton.addEventListener('click', () => {
                const popup = document.querySelector('.authentication-modal');
                const overlay = document.querySelector('.overlay');
                const closePopup = document.querySelector('.close-modal');
                popup.classList.remove('hidden');
                overlay.classList.remove('hidden');
                closePopup.addEventListener('click', () => {
                        popup.classList.add('hidden');
                        overlay.classList.add('hidden');
                    }
                );
            }
        );
    }
)