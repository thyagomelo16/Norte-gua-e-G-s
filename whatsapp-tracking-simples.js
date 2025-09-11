// Sistema de Tracking WhatsApp Simples - Norte Água e Gás
// Apenas adiciona tracking do Google Analytics aos elementos WhatsApp existentes

class WhatsAppTracking {
    constructor() {
        this.config = {
            numero: '5581984595795',
            empresa: 'Norte Água e Gás'
        };
        
        this.init();
    }

    init() {
        this.inicializarGoogleTracking();
        this.adicionarTrackingElementosExistentes();
    }

    // Inicializa o tracking do Google Analytics
    inicializarGoogleTracking() {
        // Verifica se o Google Analytics está disponível
        if (typeof gtag !== 'undefined') {
            console.log('Google Analytics detectado - WhatsApp tracking ativado');
        } else if (typeof dataLayer !== 'undefined') {
            console.log('Google Tag Manager detectado - WhatsApp tracking ativado');
        } else {
            console.log('Google Analytics/GTM não detectado');
        }
    }

    // Função para enviar eventos para o Google Analytics
    enviarEventoGoogle(evento, categoria, acao, rotulo, valor) {
        const eventoData = {
            event_category: categoria,
            event_label: rotulo,
            value: valor || 0
        };

        // Google Analytics 4 (gtag)
        if (typeof gtag !== 'undefined') {
            gtag('event', acao, {
                event_category: categoria,
                event_label: rotulo,
                value: valor || 0,
                custom_parameter_whatsapp: true
            });
        }

        // Google Tag Manager (dataLayer)
        if (typeof dataLayer !== 'undefined') {
            dataLayer.push({
                'event': evento,
                'event_category': categoria,
                'event_action': acao,
                'event_label': rotulo,
                'event_value': valor || 0,
                'whatsapp_interaction': true,
                'whatsapp_type': categoria,
                'whatsapp_action': acao
            });
        }

        // Google Analytics Universal (ga)
        if (typeof ga !== 'undefined') {
            ga('send', 'event', categoria, acao, rotulo, valor);
        }

        console.log('Evento WhatsApp enviado para Google Analytics:', {
            evento,
            categoria,
            acao,
            rotulo,
            valor
        });
    }

    // Adiciona tracking aos elementos WhatsApp existentes
    adicionarTrackingElementosExistentes() {
        // Aguarda o DOM estar completamente carregado
        document.addEventListener('DOMContentLoaded', () => {
            this.trackearBotaoFlutuante();
            this.trackearLinksContato();
            this.trackearPopupDesconto();
            this.trackearLinksExistentes();
            
            console.log('✅ Tracking WhatsApp adicionado aos elementos existentes');
        });
    }

    // Rastreia o botão flutuante do WhatsApp
    trackearBotaoFlutuante() {
        const whatsappFloat = document.querySelector('.whatsapp-float');
        if (whatsappFloat) {
            whatsappFloat.addEventListener('click', (e) => {
                this.enviarEventoGoogle(
                    'whatsapp_float_click',
                    'WhatsApp',
                    'float_button_click',
                    'whatsapp_float',
                    1
                );
                
                console.log('Botão flutuante WhatsApp clicado');
            });
        }
    }

    // Rastreia os links de contato WhatsApp
    trackearLinksContato() {
        const linksContato = document.querySelectorAll('a[href*="wa.me"]');
        
        linksContato.forEach((link, index) => {
            link.addEventListener('click', (e) => {
                const url = e.currentTarget.href;
                const texto = e.currentTarget.textContent || e.currentTarget.innerText;
                
                // Determina o tipo de interação baseado no texto do link
                let tipoInteracao = 'link_whatsapp';
                if (texto.toLowerCase().includes('pedido') || texto.toLowerCase().includes('pedir')) {
                    tipoInteracao = 'pedido_rapido';
                } else if (texto.toLowerCase().includes('orçamento') || texto.toLowerCase().includes('orcamento')) {
                    tipoInteracao = 'orcamento_rapido';
                } else if (texto.toLowerCase().includes('dúvida') || texto.toLowerCase().includes('duvida')) {
                    tipoInteracao = 'duvida_rapida';
                } else if (texto.toLowerCase().includes('trabalho') || texto.toLowerCase().includes('vaga')) {
                    tipoInteracao = 'trabalho_rapido';
                } else if (texto.toLowerCase().includes('mensagem')) {
                    tipoInteracao = 'mensagem_contato';
                }

                // Envia evento para Google Analytics
                this.enviarEventoGoogle(
                    'whatsapp_click',
                    'WhatsApp',
                    'click_link',
                    tipoInteracao,
                    1
                );

                console.log('Link WhatsApp clicado:', {
                    url,
                    texto,
                    tipoInteracao
                });
            });
        });
    }

    // Rastreia o popup de desconto
    trackearPopupDesconto() {
        const popupButtons = document.querySelectorAll('.popup-btn.whatsapp');
        
        popupButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.enviarEventoGoogle(
                    'whatsapp_popup_click',
                    'WhatsApp',
                    'popup_button_click',
                    'desconto_popup',
                    1
                );
                
                console.log('Botão WhatsApp do popup clicado');
            });
        });
    }

    // Rastreia todos os links WhatsApp existentes
    trackearLinksExistentes() {
        const todosLinksWhatsApp = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]');
        
        todosLinksWhatsApp.forEach((link, index) => {
            // Adiciona atributo de tracking se não existir
            if (!link.hasAttribute('data-whatsapp-track')) {
                link.setAttribute('data-whatsapp-track', 'true');
            }
            
            // Adiciona event listener se não existir
            if (!link.hasAttribute('data-whatsapp-listener')) {
                link.setAttribute('data-whatsapp-listener', 'true');
                
                link.addEventListener('click', (e) => {
                    const url = e.currentTarget.href;
                    const texto = e.currentTarget.textContent || e.currentTarget.innerText;
                    const classe = e.currentTarget.className;
                    
                    // Determina o tipo baseado na classe e texto
                    let tipoInteracao = 'link_whatsapp';
                    if (classe.includes('whatsapp-float')) {
                        tipoInteracao = 'whatsapp_float';
                    } else if (classe.includes('popup-btn')) {
                        tipoInteracao = 'popup_desconto';
                    } else if (classe.includes('whatsapp-link')) {
                        tipoInteracao = 'link_contato';
                    } else if (texto.toLowerCase().includes('pedido') || texto.toLowerCase().includes('pedir')) {
                        tipoInteracao = 'pedido_rapido';
                    } else if (texto.toLowerCase().includes('orçamento') || texto.toLowerCase().includes('orcamento')) {
                        tipoInteracao = 'orcamento_rapido';
                    }

                    // Envia evento para Google Analytics
                    this.enviarEventoGoogle(
                        'whatsapp_click',
                        'WhatsApp',
                        'click_link',
                        tipoInteracao,
                        1
                    );

                    console.log('Link WhatsApp rastreado:', {
                        url,
                        texto,
                        classe,
                        tipoInteracao
                    });
                });
            }
        });
        
        console.log(`📊 ${todosLinksWhatsApp.length} links WhatsApp encontrados e rastreados`);
    }


    // Função para verificar se o Google Analytics está funcionando
    verificarGoogleAnalytics() {
        const status = {
            gtag: typeof gtag !== 'undefined',
            dataLayer: typeof dataLayer !== 'undefined',
            ga: typeof ga !== 'undefined'
        };
        
        console.log('Status do Google Analytics:', status);
        
        if (status.gtag || status.dataLayer || status.ga) {
            return true;
        } else {
            console.warn('Google Analytics não detectado. Tracking do WhatsApp pode não funcionar.');
            return false;
        }
    }
}

// Inicializa o sistema quando o DOM estiver carregado
let whatsappTracking;
document.addEventListener('DOMContentLoaded', function() {
    whatsappTracking = new WhatsAppTracking();
    
    // Verifica se o Google Analytics está disponível
    setTimeout(() => {
        whatsappTracking.verificarGoogleAnalytics();
    }, 1000);
});

// Função global para tracking manual
function trackearWhatsAppEvento(acao, rotulo, valor) {
    if (whatsappTracking) {
        whatsappTracking.enviarEventoGoogle('whatsapp_manual', 'WhatsApp', acao, rotulo, valor);
    }
}

// Função para verificar quantos links WhatsApp foram encontrados
function verificarLinksWhatsApp() {
    const links = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]');
    console.log(`📱 ${links.length} links WhatsApp encontrados no site:`, links);
    return links.length;
}

