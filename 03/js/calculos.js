export function impostoSalario(salario) {
  let taxa = 0;

  if (salario < 3000.0) {
    taxa = salario;
  } else if (salario > 3000.0 && salario < 5000.0) {
    taxa = salario * 0.1;
  } else {
    taxa = salario * 0.2;
  }

  return taxa;
}

export function impostoService(prestacao) {
  let taxa = 0;
  if (prestacao > 0) {
    taxa = prestacao * 0.15;
  } else {
    taxa = 0;
  }
  return taxa;
}

export function impostoCapital(capital) {
  let taxa = 0;
  if (capital > 0) {
    taxa = capital * 0.2;
  } else {
    taxa = 0;
  }
  return taxa;
}

export function abater(medico, educ, salario) {
  let taxa = 0;
  let maxDedutivel = (salario + medico + educ) * 0.30;
  let dedutivel = medico + educ;
  if (dedutivel < maxDedutivel) {
    taxa = dedutivel;
  } else {
    taxa = maxDedutivel;
  }
  return taxa;
}
