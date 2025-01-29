import './timestamp.css';

const mode = import.meta.env.MODE;

registerTimestamp()

export default function registerTimestamp() {
    if (!document) {
        return;
    }

    /**
     * если это "предпрод", то не выводим доп. инфо
     */
    if (mode !== 'development') {
        return;
    }

    document.addEventListener('DOMContentLoaded', () => {
        const now = new Date();
        const nowString = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
        /**
         * @type {HTMLElement}
         */
        const e = document.createElement('aside');
        e.classList.add('app-stamp');

        e.insertAdjacentHTML('beforeend', `
            <p>${nowString}</p>
        `);
        e.setAttribute('aria-hidden', true);
        document.body.append(e);
    });

    const head = document.querySelector('head');
    if (head == null) {
        return;
    }
}