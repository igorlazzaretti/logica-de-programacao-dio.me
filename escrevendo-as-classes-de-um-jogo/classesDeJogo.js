class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou expeliarmus";
                break;
            case "guerreiro":
                ataque = "usou espada de kurgala";
                break;
            case "monge":
                ataque = "usou artes marciais e sua psicologia";
                break;
            case "ninja":
                ataque = "usou ataque com o talismã do tigre";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }

        const mensagem = `O ${this.tipo} atacou usando ${ataque}.`;
        console.log(mensagem);
    }
}

// Criando instâncias de heróis
const mago      = new Heroi("Harry Potter", 30, "mago");
const guerreiro = new Heroi("Adapak", 25, "guerreiro");
const monge     = new Heroi("Gandalf", 40, "monge");
const ninja     = new Heroi("Jackie Chan", 28, "ninja");

// Heróis atacando
mago.atacar();      // Saída: "O mago atacou usando usou expeliarmus."
guerreiro.atacar(); // Saída: "O guerreiro atacou usando usou espada de kurgala."
monge.atacar();     // Saída: "O monge atacou usando usou artes marciais e sua psicologia."
ninja.atacar();     // Saída: "O ninja atacou usando usou ataque com o talismã do tigre."