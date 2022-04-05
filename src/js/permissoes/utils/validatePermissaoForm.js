/**
 * Função para validar os dados do formulário de adicionar pessoa.
 * @param formData Dados do formulário
 * @returns {{valid: boolean, invalidFields: *[]}}
 */
function validatePermissaoForm(formData) {
  // Validar parâmetros
  if (!formData.hasOwnProperty("rfid")) {
    console.error("Parâmetro incorreto em " + Function.name);
    return {
      valid: false,
      invalidFields: null,
    };
  }

  let invalidFields = [];

  Object.entries(formData).forEach((entry) => {
    if (entry[1].length === 0) {
      invalidFields.push(entry[0]);
    }
  });

  return {
    valid: invalidFields.length === 0,
    invalidFields: invalidFields,
  };
}

export default validatePermissaoForm;
