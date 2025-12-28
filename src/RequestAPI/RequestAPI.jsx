const RequestAPI = async (
  url = "",
  optionsObject = null,
  errorMessage = null
) => {
  try {
    const response = await fetch(url, optionsObject);
    if (!response.ok) {
      throw new Error("Por favor, recarregue a página.");
    }
  } catch (error) {
    errorMessage = error.message;
  } finally {
    return errorMessage;
  }
};

export { RequestAPI };
