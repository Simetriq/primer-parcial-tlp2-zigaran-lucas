export const createUserValidation = [
  // TODO: completar las validaciones para crear un usuario
  body("username")
    .notEmpty()
    .withMessage("El username es requerido")
    .isLength({ min: 3, max: 20 })
    .withMessage("El username debe tener entre 3 y 20 caracteres")
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage(
      "El username solo puede contener letras, números y guiones bajos"
    ),

  body("email")
    .notEmpty()
    .withMessage("El email es requerido")
    .isEmail()
    .withMessage("Debe ser un email válido")
    .normalizeEmail(),
];
