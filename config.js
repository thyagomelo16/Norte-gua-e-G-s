// Configurações da Empresa - Norte Água e Gás
// Edite este arquivo para personalizar as informações da sua empresa

const CONFIG = {
    // Informações básicas da empresa
    empresa: {
        nome: "Norte Água e Gás",
        slogan: "Sua água e gás, com rapidez e confiança",
        descricao: "Entrega de água mineral e gás de cozinha na região. Qualidade, rapidez e confiança garantidas."
    },

    // Informações de contato
    contato: {
        telefone: "(81) 99999-9999",
        whatsapp: "5581999999999", // Apenas números, sem formatação
        email: "contato@norteaguagas.com.br",
        endereco: {
            rua: "Rua das Águas, 123",
            bairro: "Bairro Central",
            cidade: "Recife",
            estado: "PE",
            cep: "50000-000"
        },
        horario: {
            dias: "Segunda a Domingo",
            horario: "7h às 22h"
        }
    },

    // Redes sociais
    redesSociais: {
        facebook: "https://facebook.com/norteaguagas",
        instagram: "https://instagram.com/norteaguagas",
        whatsapp: "https://wa.me/5581999999999"
    },

    // Produtos e serviços
    produtos: {
        agua: {
            nome: "Água Mineral",
            descricao: "Água mineral natural de excelente qualidade, disponível em galões de 10L e 20L. Garantimos pureza e frescor em cada entrega.",
            tipos: ["Galão 10L", "Galão 20L"],
            caracteristicas: ["Qualidade garantida", "Pureza natural", "Frescor garantido"]
        },
        gas: {
            nome: "Gás de Cozinha",
            descricao: "Gás de cozinha de alta qualidade, disponível em botijões de 13kg e 45kg. Segurança e eficiência para suas refeições.",
            tipos: ["Botijão 13kg", "Botijão 45kg"],
            caracteristicas: ["Segurança total", "Alta eficiência", "Qualidade certificada"]
        },
        entrega: {
            nome: "Entrega Rápida",
            descricao: "Serviço de entrega ágil e pontual, garantindo que você nunca fique sem água ou gás. Atendimento todos os dias da semana.",
            tipos: ["Entrega em até 2h", "Atendimento 7 dias", "Rastreamento em tempo real"],
            caracteristicas: ["Agilidade", "Pontualidade", "Rastreamento"]
        }
    },

    // Benefícios da empresa
    beneficios: [
        {
            titulo: "Entrega Rápida",
            descricao: "Entregamos em até 2 horas após a confirmação do pedido, garantindo que você nunca fique sem.",
            icone: "fas fa-clock"
        },
        {
            titulo: "Pagamento Facilitado",
            descricao: "Aceitamos dinheiro, cartão de crédito/débito e PIX. Facilidade na hora de pagar.",
            icone: "fas fa-credit-card"
        },
        {
            titulo: "Atendimento Diário",
            descricao: "Funcionamos todos os dias da semana, incluindo finais de semana e feriados.",
            icone: "fas fa-calendar-check"
        },
        {
            titulo: "Qualidade Garantida",
            descricao: "Todos os nossos produtos passam por rigoroso controle de qualidade antes da entrega.",
            icone: "fas fa-shield-alt"
        }
    ],

    // Depoimentos de clientes
    depoimentos: [
        {
            nome: "Maria Silva",
            tempo: "Cliente há 3 anos",
            mensagem: "Excelente serviço! A entrega é sempre pontual e a água tem um sabor incrível. Recomendo para todos!"
        },
        {
            nome: "João Santos",
            tempo: "Cliente há 2 anos",
            mensagem: "Atendimento impecável e preços justos. O gás chega sempre no horário combinado. Muito satisfeito!"
        },
        {
            nome: "Ana Costa",
            tempo: "Cliente há 1 ano",
            mensagem: "A melhor empresa de entrega da região! Rapidez, qualidade e preços competitivos. Super recomendo!"
        }
    ],

    // Valores da empresa
    valores: [
        "Qualidade e segurança",
        "Pontualidade na entrega",
        "Atendimento personalizado",
        "Responsabilidade social"
    ],

    // Cores da marca (pode ser personalizado)
    cores: {
        primaria: "#007BFF",
        primariaEscura: "#0056b3",
        branco: "#ffffff",
        cinzaClaro: "#f8f9fa",
        cinza: "#6c757d",
        cinzaEscuro: "#343a40"
    },

    // Configurações do site
    site: {
        titulo: "Norte Água e Gás - Sua água e gás com rapidez e confiança",
        descricao: "Norte Água e Gás - Entrega de água mineral e gás de cozinha na região. Qualidade, rapidez e confiança garantidas.",
        palavrasChave: "água mineral, gás de cozinha, entrega, Recife, PE, qualidade, rapidez",
        autor: "Norte Água e Gás",
        idioma: "pt-BR"
    },

    // Configurações de WhatsApp
    whatsapp: {
        numero: "5581984595795", // Número correto
        mensagemPadrao: "Olá, estou no site da Norte Água e Gás e gostaria de fazer um pedido",
        mensagemInformacao: "Olá, estou no site da Norte Água e Gás e gostaria de fazer um pedido"
    },

    // Configurações de SEO
    seo: {
        googleAnalytics: "", // ID do Google Analytics
        googleSearchConsole: "", // Meta tag do Google Search Console
        facebookPixel: "", // ID do Facebook Pixel
        structuredData: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Norte Água e Gás",
            "description": "Entrega de água mineral e gás de cozinha na região de Recife-PE",
            "url": "https://norteaguagas.com.br",
            "telephone": "+5581984595795",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua das Águas, 123",
                "addressLocality": "Recife",
                "addressRegion": "PE",
                "postalCode": "50000-000",
                "addressCountry": "BR"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-8.0476",
                "longitude": "-34.8770"
            },
            "openingHours": "Mo-Su 07:00-22:00",
            "priceRange": "$$",
            "serviceType": ["Entrega de Água Mineral", "Entrega de Gás de Cozinha"]
        }
    }
};

// Função para obter configuração
function getConfig(key) {
    return key.split('.').reduce((obj, k) => obj && obj[k], CONFIG);
}

// Função para aplicar configurações automaticamente
function aplicarConfiguracoes() {
    // Aplica título da página
    if (document.title !== CONFIG.site.titulo) {
        document.title = CONFIG.site.titulo;
    }

    // Aplica meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = CONFIG.site.descricao;
    }

    // Aplica meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = CONFIG.site.palavrasChave;

    // Aplica meta author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
        metaAuthor = document.createElement('meta');
        metaAuthor.name = 'author';
        document.head.appendChild(metaAuthor);
    }
    metaAuthor.content = CONFIG.site.autor;

    // Aplica dados estruturados
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(CONFIG.seo.structuredData);
    document.head.appendChild(script);

    console.log('Configurações aplicadas com sucesso!');
}

// Aplica configurações quando o DOM estiver carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', aplicarConfiguracoes);
} else {
    aplicarConfiguracoes();
}

// Exporta para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
    window.getConfig = getConfig;
}
