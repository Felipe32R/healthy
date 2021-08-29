export default function formatCpf(cpf) {
  const cpfAtualizado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
    (argumento1, argumento2, argumento3, argumento4) => `${argumento1}.${argumento2}.${argumento3}-${argumento4}`);

  return cpfAtualizado;
}
