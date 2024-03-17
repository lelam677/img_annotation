export const generateRandomId = (): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 5; // Độ dài ID mong muốn
  let randomId = "";

  for (let i = 0; i < length; i++) {
    randomId += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return randomId;
};
