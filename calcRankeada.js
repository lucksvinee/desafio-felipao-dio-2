function MMR(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let elo = "";

  if (saldoVitorias < 10) {
    elo = "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    elo = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    elo = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    elo = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    elo = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    elo = "Lendário";
  } else {
    elo = "Imortal";
  }

  const mensagem = `O Herói tem o saldo de ${saldoVitorias} está no elo de nível ${elo} =)`;
  return mensagem;
}

var vitorias = 120;
var derrotas = 20;
const resultado = MMR(vitorias, derrotas);
console.log(resultado);
