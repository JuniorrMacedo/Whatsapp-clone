export const getTime = () => {
  return new Date()
    .toLocaleString("pt-BR", {
      hour: "numeric",
      minute: "numeric",
    })
} 