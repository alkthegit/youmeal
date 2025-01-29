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

    const tsStyle = document.createElement('style');
    tsStyle.setAttribute('type', 'text/css')
    tsStyle.textContent = `
        .app-stamp {
            position: absolute !important;
            right: 0 !important;
            top: 0 !important;
            font-family: Arial, Helvetica, sans-serif !important;
            backdrop-filter: brightness(10%);
            // background-color: rgb(56, 56, 56) !important;
            font-size: 11px !important;
            font-weight: bold;
            height: 1.5em;
            width: 10em;

            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2px;

            z-index: 999;

            p {
                color: #FFFFFFC0;
                line-height: 0;
            }
        }
    `;

    head.appendChild(tsStyle);
}