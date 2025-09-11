// Tracking WhatsApp Simples - Apenas adiciona eventos ao Google Analytics
// Não altera nada visual, apenas rastreia cliques

(function() {
    'use strict';
    
    // Função para enviar eventos para Google Analytics
    function enviarEventoGA(categoria, acao, rotulo, valor) {
        // Google Analytics 4 (gtag)
        if (typeof gtag !== 'undefined') {
            gtag('event', acao, {
                event_category: categoria,
                event_label: rotulo,
                value: valor || 0
            });
        }

        // Google Tag Manager (dataLayer)
        if (typeof dataLayer !== 'undefined') {
            dataLayer.push({
                'event': 'whatsapp_click',
                'event_category': categoria,
                'event_action': acao,
                'event_label': rotulo,
                'event_value': valor || 0
            });
        }

        // Google Analytics Universal (ga)
        if (typeof ga !== 'undefined') {
            ga('send', 'event', categoria, acao, rotulo, valor);
        }

        console.log('Evento WhatsApp enviado:', {categoria, acao, rotulo, valor});
    }

    // Adiciona tracking quando a página carregar
    document.addEventListener('DOMContentLoaded', function() {
        // Rastreia botão flutuante WhatsApp
        const whatsappFloat = document.querySelector('.whatsapp-float');
        if (whatsappFloat) {
            whatsappFloat.addEventListener('click', function() {
                enviarEventoGA('WhatsApp', 'float_button_click', 'whatsapp_float', 1);
            });
        }

        // Rastreia links WhatsApp
        const linksWhatsApp = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]');
        linksWhatsApp.forEach(function(link) {
            link.addEventListener('click', function() {
                const texto = this.textContent || this.innerText;
                let tipo = 'link_whatsapp';
                
                if (texto.toLowerCase().includes('pedido')) tipo = 'pedido_rapido';
                else if (texto.toLowerCase().includes('orçamento')) tipo = 'orcamento_rapido';
                else if (texto.toLowerCase().includes('dúvida')) tipo = 'duvida_rapida';
                else if (texto.toLowerCase().includes('mensagem')) tipo = 'mensagem_contato';
                
                enviarEventoGA('WhatsApp', 'link_click', tipo, 1);
            });
        });

        // Rastreia botões do popup
        const popupButtons = document.querySelectorAll('.popup-btn.whatsapp');
        popupButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                enviarEventoGA('WhatsApp', 'popup_button_click', 'popup_desconto', 1);
            });
        });

        console.log('✅ Tracking WhatsApp ativado - ' + linksWhatsApp.length + ' elementos rastreados');
    });
})();
